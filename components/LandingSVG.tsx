"use client";

const SvgPattern = () => {
  // Get the current theme from Redux
  const isDarkMode = true;

  // Set stroke color based on the theme
  const strokeColor = isDarkMode
    ? "rgba(255, 255, 255, 0.05)" // Light color for dark mode
    : "#cecece"; // Dark color for light mode

  const bgColor = isDarkMode
    ? "black" // Light color for dark mode
    : "#ededede8"; // Dark color for light mode

  return (
    <svg
      className="absolute inset-0 w-full h-[100%]"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: bgColor }}
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke={strokeColor} // Change stroke color based on theme
            strokeWidth="1"
          />
        </pattern>
        <pattern
          id="circles"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="40"
            cy="40"
            r="30"
            fill="none"
            stroke={strokeColor} // Change stroke color based on theme
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#circles)" />
    </svg>
  );
};

export default SvgPattern;
