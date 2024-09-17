import Image from "next/image";
import Marquee from "./ui/Marquee";

const logos = [
  {
    src: "https://1000logos.net/wp-content/uploads/2019/11/Hyatt-Logo-768x432.png",
    alt: "Microsoft",
    width: 190,
    height: 50,
  },
  {
    src: "https://1000logos.net/wp-content/uploads/2023/04/Starbucks-logo-768x432.png",
    alt: "Google",
    width: 190,
    height: 50,
  },
  {
    src: "https://seeklogo.com/images/V/Volkswagen-logo-80097D61AA-seeklogo.com.png",
    alt: "Solana",
    width: 130,
    height: 30,
  },
  {
    src: "https://1000logos.net/wp-content/uploads/2020/03/Emirates-Logo-768x480.png",
    alt: "Emirates",
    width: 190,
    height: 50,
  },
  // Add more logos here
];

export function LogoMarquee() {
  return (
    <div className="relative flex items-center justify-center ">
      <div className="mt-14 rounded-xl sm:mt-24 mb-10 relative flex mx-auto w-[80vw] sm:w-[75vw]  items-center justify-center overflow-hidden  ">
        <Marquee className="[--duration:20s]">
          {logos.map((logo) => (
            <div key={logo.alt} className="px-4 flex items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </Marquee>
        <div className=" rounded-lg pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r  from-black"></div>
        <div className="rounded-lg pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l  from-black"></div>
      </div>
    </div>
  );
}
