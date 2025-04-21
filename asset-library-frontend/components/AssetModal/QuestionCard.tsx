import type { Question } from '@/types/asset';

// TODO: Document question card interaction requirements:
// - Is this a selector, button, or just display?
// - What happens when clicked/selected?
// - What is the dark background state (hover/selected)?
// - Should it be interactive at all?

interface QuestionCardProps {
    question: Question;
}

const QuestionCard = ({ question }: QuestionCardProps) => {
    return (
        <div className="p-4 bg-white rounded-lg">
            <div className="font-medium text-gray-900">{question.text}</div>
            {question.description && (
                <div className="mt-2 text-sm text-gray-600">{question.description}</div>
            )}
        </div>
    );
};

export default QuestionCard; 