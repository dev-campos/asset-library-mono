export type Category = 'KPI' | 'Layout' | 'Storyboards';
export interface AssetQueryParams {
  category?: Category;
  search?: string;
  featured?: boolean;
  trending?: boolean;
  tags?: string[];
  page?: number;
  limit?: number;
} 