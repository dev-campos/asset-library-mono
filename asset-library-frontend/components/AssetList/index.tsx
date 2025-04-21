'use client';

import { useEffect } from 'react';
import AssetCard from '@/components/AssetCard';
import { useStore } from '@/store/useStore';
import Button from '@/components/Button';

const categoryMeta = {
  Featured: {
    title: 'Featured',
    subtitle: 'Curated top picks from this week',
  },
  KPI: {
    title: 'KPI',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  Layout: {
    title: 'Layout',
    subtitle: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  Storyboards: {
    title: 'Storyboards',
    subtitle: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
} as const;

const AssetList = () => {
  const assets = useStore((s) => s.assets);
  const total = useStore((s) => s.total);
  const page = useStore((s) => s.page);
  const limit = useStore((s) => s.limit);
  const setPage = useStore((s) => s.setPage);
  const fetchAssets = useStore((s) => s.fetchAssets);
  const selectedCategory = useStore((s) => s.selectedCategory);
  const searchQuery = useStore((s) => s.searchQuery);
  const isLoadingAssets = useStore((s) => s.isLoadingAssets);
  const error = useStore((s) => s.error);

  useEffect(() => {
    fetchAssets();
  }, [fetchAssets, selectedCategory, searchQuery, page]);

  const meta = categoryMeta[selectedCategory];

  const renderContent = () => {
    if (isLoadingAssets) {
      return (
        <>
          <div className="text-center p-8">Loading assets...</div>
          <div className="flex justify-center mt-4">
            {page > 1 && (
              <Button
                label="Previous Page"
                variant="secondary"
                onClick={() => setPage(page - 1)}
              />
            )}
            {page * limit < total && (
              <Button
                label="Next Page"
                variant="secondary"
                onClick={() => setPage(page + 1)}
                className={page > 1 ? "ml-2" : ""}
              />
            )}
          </div>
        </>
      );
    }
    if (error) return <div className="text-center p-8 text-red-500">{error}</div>;
    if (!assets || assets.length === 0) return <div className="flex flex-col items-center justify-center p-8"><p className="text-gray-500">No assets found</p></div>;

    return (
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {assets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {page > 1 && (
            <Button
              label="Previous Page"
              variant="secondary"
              onClick={() => setPage(page - 1)}
            />
          )}
          {page * limit < total && (
            <Button
              label="Next Page"
              variant="secondary"
              onClick={() => setPage(page + 1)}
              className={page > 1 ? "ml-2" : ""}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="mb-4 space-y-1">
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
          {meta.title}
        </h2>
        <p className="text-sm text-gray-500">{meta.subtitle}</p>
      </div>
      {renderContent()}
    </div>
  );
};

export default AssetList;
