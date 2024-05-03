import Image from "next/image";
import VideoPreview from "../VideoPreview";

export default function Spotlight() {
  return (
    <section className="w-full bg-gray-200 rounded-md px-3 py-10 flex justify-between">
      <div>
        <div className="flex items-end gap-1">
          <Image src="/logo.png" width={90} height={20} alt="Spotlight" />
          <p className="text-sm bottom-0">Featured</p>
        </div>
        <h1 className="font-bold text-xl mt-1">RELEASED this week!</h1>
        <p className="mt-2">Discover the best new music and new artists every week on the RELEASED playlist on YouTube</p>
      </div>
      <div className="flex gap-3">
        <VideoPreview
          id="9"
          title="Ed Sheeran - Eyes Closed [Official Video]"
          thumbnail="thumb9.png"
          duration="3:35"
          channel={
            {
              id: "9",
              name: "Ed Sheeran",
            }
          }
        />
        <VideoPreview
          id="10"
          title="Lana Del Rey - Candy Necklace (feat. Jon Batiste) [Audio]"
          thumbnail="thumb10.png"
          duration="5:15"
          channel={
            {
              id: "10",
              name: "Lana Del Rey",
            }
          }
        />
      </div>
    </section>
  );
}