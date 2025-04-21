import type { Asset } from '@/types/asset';

interface KPIModalContentProps {
  asset: Asset;
}

// Required sections from wireframe:
// - Business Questions
// - Metric IDs
// - Description
// - Calculation
// - Visuals available
// - Affiliate Applicability
//
// Note: No layout/structure specified in wireframe

const KPIModalContent = ({ asset }: KPIModalContentProps) => {
  return (
    <div>
      <p className="text-gray-500">KPI Modal Content - Pending Design</p>
    </div>
  );
};

export default KPIModalContent;
