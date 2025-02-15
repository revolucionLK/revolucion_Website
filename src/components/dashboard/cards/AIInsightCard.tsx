interface AIInsightCardProps {
  title: string;
  insight: string;
  recommendation: string;
}

const AIInsightCard = ({ title, insight, recommendation }: AIInsightCardProps) => {
  return (
    <div className="bg-black/90 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{insight}</p>
      <p className="text-secondary">{recommendation}</p>
    </div>
  );
};

export default AIInsightCard; 