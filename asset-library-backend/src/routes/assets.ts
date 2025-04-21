import { Router } from 'express';
import { AssetQueryParams } from '../types/asset';
import client from '../db/client';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const { category, search, featured, tags, page = 1, limit = 20 } = req.query as AssetQueryParams;
        let params: any[] = [];
        let conditions: string[] = ['1=1'];
        let paramIndex = 1;

        if (category) {
            conditions.push(`a.category = $${paramIndex}`);
            params.push(category);
            paramIndex++;
        }

        if (search) {
            conditions.push(`(
                a.title ILIKE $${paramIndex} OR 
                a.description ILIKE $${paramIndex} OR 
                a.summary ILIKE $${paramIndex}
            )`);
            params.push(`%${search}%`);
            paramIndex++;
        }

        if (featured) {
            conditions.push('a.featured = true');
            conditions.push(`a.updated_at >= NOW() - INTERVAL '7 days'`);
        }

        if (tags && tags.length > 0) {
            conditions.push(`EXISTS (
                SELECT 1 FROM asset_tags at
                WHERE at.asset_id = a.id
                AND at.tag_id = ANY($${paramIndex}::int[])
            )`);
            params.push(tags);
            paramIndex++;
        }

        const countQuery = `
            SELECT COUNT(*) as total
            FROM assets a
            WHERE ${conditions.join(' AND ')}
        `;
        const countResult = await client.query(countQuery, params);
        const total = parseInt(countResult.rows[0].total);

        const query = `
            SELECT a.*, array_agg(t.name) as tags
            FROM assets a
            LEFT JOIN asset_tags at ON a.id = at.asset_id
            LEFT JOIN tags t ON at.tag_id = t.id
            WHERE ${conditions.join(' AND ')}
            GROUP BY a.id
            ORDER BY a.updated_at DESC
            LIMIT $${paramIndex}
            OFFSET $${paramIndex + 1}
        `;

        params.push(limit, (Number(page) - 1) * Number(limit));
        const result = await client.query(query, params);

        res.json({
            data: result.rows,
            page: Number(page),
            limit: Number(limit),
            total
        });
    } catch (err) {
        console.error('Error fetching assets:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/trending', async (req, res) => {
    try {
        // TODO: Update to use views count instead of updated_at
        const query = `
            SELECT a.*, array_agg(t.name) as tags
            FROM assets a
            LEFT JOIN asset_tags at ON a.id = at.asset_id
            LEFT JOIN tags t ON at.tag_id = t.id
            WHERE a.trending = true
            GROUP BY a.id
            ORDER BY a.updated_at DESC
            LIMIT 4
        `;

        const result = await client.query(query);
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching trending assets:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;