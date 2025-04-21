'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/useStore';
import LayoutModalContent from './LayoutModalContent';
import KPIModalContent from './KPIModalContent';
import StoryboardModalContent from './StoryboardModalContent';
import DataVizModalContent from './DataVizModalContent';
import Button from '../Button';

// TODO: Implement favorite functionality shown in wireframe
// TODO: Implement copy link functionality shown in wireframe
// TODO: Add proper icon system for action buttons
// TODO: Implement feedback states for user actions
// TODO: Implement modal content layouts from wireframe

interface ModalProps {
  isDataViz?: boolean;
}

const Modal = ({ isDataViz = false }: ModalProps) => {
  const selectedAsset = useStore((s) => s.selectedAsset);
  const setSelectedAsset = useStore((s) => s.setSelectedAsset);
  console.log("Selected asset:", selectedAsset);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAsset(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setSelectedAsset]);

  if (!selectedAsset) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <button
        type="button"
        className="fixed inset-0 bg-black/50"
        onClick={() => setSelectedAsset(null)}
        aria-label="Close modal"
      />
      <div className="flex items-center justify-center min-h-full p-4">
        <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden p-6">
          <div>
            <div className="flex justify-between items-start">
              <div className="flex-1" />
              <div className="text-center flex-1">
                <div className="w-12 h-12 mx-auto rounded-lg overflow-hidden">
                  <img
                    src={selectedAsset.thumbnail_url}
                    alt={selectedAsset.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative mt-1">
                  <div className="text-2xl font-semibold inline-block">{selectedAsset.title}</div>
                  <span className="absolute top-1/2 -translate-y-1/2 ml-2 px-1.5 py-0.5 text-[10px] bg-gray-100 text-gray-600 rounded">
                    {selectedAsset.category}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {selectedAsset.name}
                </div>
              </div>
              <div className="flex items-center gap-2 flex-1 justify-end">
                <button
                  onClick={() => console.log('copy link')}
                  title="Copy link"
                >
                  🔗
                </button>
                <button
                  onClick={() => setSelectedAsset(null)}
                  className="text-gray-600 text-2xl hover:scale-110 hover:drop-shadow-sm transition-transform"
                  title="Close"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 mt-2">
            {selectedAsset.description}
          </div>

          {selectedAsset.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-4 w-full">
              {selectedAsset.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div>
            {isDataViz ? (
              <DataVizModalContent asset={selectedAsset} />
            ) : (
              <>
                {selectedAsset.category === 'Layout' && (
                  <LayoutModalContent asset={selectedAsset} />
                )}
                {selectedAsset.category === 'KPI' && (
                  <KPIModalContent asset={selectedAsset} />
                )}
                {selectedAsset.category === 'Storyboards' && (
                  <StoryboardModalContent asset={selectedAsset} />
                )}
              </>
            )}
          </div>

          <div className="mt-4">
            <Button
              onClick={() => console.log('favorite')}
              icon={<span className="text-2xl">★</span>}
              label='Favorite item'
              className='w-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
