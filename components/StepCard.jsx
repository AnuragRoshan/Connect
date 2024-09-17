import GlassCard from "./GlassCard"; // Adjust the path if necessary

const StepCard = ({ number, title, description }) => (
  <GlassCard className="relative min-h-[250px] mb-4 flex flex-col justify-between">
    {" "}
    {/* Adjust height as necessary */}
    <div className="absolute mx-2 top-0 left-0 w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center -translate-y-1/2 -translate-x-1/2 border-4 border-dashed border-gray shadow-[3px_3px_0px_rgba(0,0,0,0.3)] rounded-lg">
      <span className="text-2xl font-extrabold text-white">{number}</span>
    </div>
    <div className="pt-8 pb-6 px-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-300">{description}</p>
    </div>
  </GlassCard>
);

export default StepCard;
