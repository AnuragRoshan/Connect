import AdvertisementCard from "./AdvertisementCard";

// Define the type for the ad object
interface Ad {
  id: number;
  company: string;
  avatar: string;
  description: string;
  budget: string;
  category: string;
  followers: string;
  imageUrl: string;
}

// Define the props type
interface MainContentProps {
  ads: Ad[];
}

export default function MainContent({ ads }: MainContentProps) {
  return (
    <main className="flex pr-4  w-[100%]">
      <div className="space-y-6 h-max">
        {ads.map((ad) => (
          <AdvertisementCard key={ad.id} ad={ad} />
        ))}
      </div>
    </main>
  );
}
