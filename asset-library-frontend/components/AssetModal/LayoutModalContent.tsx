import type { Asset } from '@/types/asset';
import QuestionCard from './QuestionCard';

interface LayoutModalContentProps {
  asset: Asset;
}

// TODO: Add proper icon library integration

const LayoutModalContent = ({ asset }: LayoutModalContentProps) => {
  if (!asset.layout_data) return null;

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center gap-2 w-32">
          <div className="text-xl font-medium">{asset.layout_data.used}</div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            Used{" "}
            <button
              type="button"
              aria-label="Information about usage"
              className="text-gray-500 text-sm cursor-pointer"
            >
              ℹ️
            </button>
          </div>
        </div>
        <div className="w-px h-16 bg-gray-200" />
        <div className="flex flex-col items-center gap-2 w-32">
          <div className="text-xl font-medium">{asset.layout_data.type}</div>
          <div className="text-sm text-gray-600">Type</div>
        </div>
        <div className="w-px h-16 bg-gray-200" />
        <div className="flex flex-col items-center gap-2 w-32">
          <div className="text-xl font-medium">{asset.layout_data.pages}</div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            Pages No.{" "}
            <button
              type="button"
              aria-label="Information about pages"
              className="text-gray-500 text-sm cursor-pointer"
            >
              ℹ️
            </button>
          </div>
        </div>
        <div className="w-px h-16 bg-gray-200" />
        <div className="flex flex-col items-center gap-2 w-32">
          <div className="text-xl font-medium">{new Date(asset.updated_at).toLocaleDateString()}</div>
          <div className="text-sm text-gray-600">Last Updated</div>
        </div>
      </div>
      <div className="mt-6 bg-gray-100 w-full h-96 rounded-lg" />
      <div className="mt-6">
        <h3 className="text-lg font-medium">
          Business Questions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {asset.layout_data.questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutModalContent;