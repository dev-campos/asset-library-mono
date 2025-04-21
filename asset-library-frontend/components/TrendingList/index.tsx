'use client';

import { useEffect } from 'react';
import AssetCard from '@/components/AssetCard';
import { useStore } from '@/store/useStore';

const TrendingList = () => {
  const trendingAssets = useStore((s) => s.trendingAssets);
  const fetchTrendingAssets = useStore((s) => s.fetchTrendingAssets);
  const isLoadingTrending = useStore((s) => s.isLoadingTrending);
  const error = useStore((s) => s.error);

  useEffect(() => {
    fetchTrendingAssets();
  }, [fetchTrendingAssets]);

  const renderContent = () => {
    if (isLoadingTrending) return <div className="text-center p-8">Loading trending assets...</div>;
    if (error) return <div className="text-center p-8 text-red-500">{error}</div>;
    if (!trendingAssets || trendingAssets.length === 0) return <div className="text-center p-8 text-gray-500">No trending assets available</div>;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trendingAssets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="space-y-1 mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Trending
        </h2>
        <p className="text-sm text-gray-500">Most popular by community</p>
      </div>
      {renderContent()}
    </div>
  );
};

export default TrendingList; 