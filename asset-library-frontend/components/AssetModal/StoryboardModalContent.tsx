import type { Asset } from '@/types/asset';

interface StoryboardModalContentProps {
  asset: Asset;
}

// Required sections from wireframe:
// - Coupled kpis/filters
// - Applicable affiliates
// - Request access (shown in blue/interactive)
//
// Note: No layout/structure specified in wireframe

const StoryboardModalContent = ({ asset }: StoryboardModalContentProps) => {
  return (
    <div>
      <p className="text-gray-500">Storyboard Modal Content - Pending Design</p>
    </div>
  );
};

export default StoryboardModalContent;
