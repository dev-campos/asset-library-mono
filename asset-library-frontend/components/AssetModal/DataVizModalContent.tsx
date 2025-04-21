import type { Asset } from '@/types/asset';

interface DataVizModalContentProps {
  asset: Asset;
}

// Required sections from wireframe:
// - Applicable kpi favorites
// - Asset info content
// - Interact with chart (shown in blue/interactive)
//
// Note: No layout/structure specified in wireframe

const DataVizModalContent = ({ asset }: DataVizModalContentProps) => {
  return (
    <div>
      <p className="text-gray-500">DataViz Modal Content - Pending Design</p>
    </div>
  );
};

export default DataVizModalContent;
