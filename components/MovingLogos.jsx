// MovingLogos.js
const MovingLogos = ({ direction = "left", speed = 20 }) => {
  const logos = [
    "/placeholder.svg?height=80&width=120&text=Brand1",
    "/placeholder.svg?height=80&width=120&text=Brand2",
    "/placeholder.svg?height=80&width=120&text=Brand3",
    "/placeholder.svg?height=80&width=120&text=Brand4",
    "/placeholder.svg?height=80&width=120&text=Brand5",
    "/placeholder.svg?height=80&width=120&text=Brand6",
    "/placeholder.svg?height=80&width=120&text=Brand7",
    "/placeholder.svg?height=80&width=120&text=Brand8",
  ];

  const animationClass =
    direction === "left" ? "animate-marquee" : "animate-reverseMarquee";

  return (
    <div className="relative overflow-hidden py-4 bg-white/7 backdrop-blur-sm">
      <div
        className={`flex space-x-8 ${animationClass}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Brand ${index + 1}`}
            className="h-20 w-auto"
            height={80}
            width={120}
          />
        ))}
      </div>
    </div>
  );
};

export default MovingLogos;
