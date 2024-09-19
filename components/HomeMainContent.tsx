import { ScrollArea } from "@/components/ui/scroll-area";
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
    <main className="flex-1 p-6 overflow-auto">
      <ScrollArea className=" w-3/5">
        <div className="space-y-6">
          {ads.map((ad) => (
            <AdvertisementCard key={ad.id} ad={ad} />
          ))}
        </div>
      </ScrollArea>
    </main>
  );
}
