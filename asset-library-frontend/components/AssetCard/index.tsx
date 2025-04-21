'use client';

import React from 'react';
import type { Asset } from '@/types/asset';
import { useStore } from '@/store/useStore';

interface AssetCardProps {
  asset: Asset;
}

// Note: Current implementation assumes clicking card opens modal
// This interaction pattern needs to be confirmed as:
// - Could be separate detail page instead
// - Could use different trigger mechanism
// - Could have different interaction pattern entirely

const AssetCard = ({ asset }: AssetCardProps) => {
  const setSelectedAsset = useStore((s) => s.setSelectedAsset);

  return (
    <button
      className="flex items-center gap-4 border rounded p-3 bg-white cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => setSelectedAsset(asset)}
    >
      <img
        src={asset.thumbnail_url}
        alt={asset.title}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-sm font-medium text-gray-900">{asset.title}</h3>
        <p className="text-xs text-gray-600 line-clamp-2">{asset.summary}</p>
      </div>
    </button>
  );
};

export default AssetCard;
