// FeatureCard.js
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative min-h-[300px] flex flex-col justify-between  bg-gray-200 shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="p-6 flex flex-col items-center text-center">
        <div className="bg-gray-200 p-4 rounded-full mb-4">
          <Icon className="h-8 w-8 text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
