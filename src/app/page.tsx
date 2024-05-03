'use client';

import SideBar from "./components/SideBar";
import VideoPreview from "./components/VideoPreview";
import Spotlight from "./components/Spotlight";
import db from "./json/db.json";
import { useState } from "react";
import FiltersContainer from "./components/FiltersContainer";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  return (
    <div className="flex">
      <SideBar />
      <main className="min-h-full px-3 mt-20 ml-80">
        <FiltersContainer activeFilter={activeFilter} onClick={(e: string) => setActiveFilter(e)} />
        <section className="w-full mt-16 grid grid-cols-4 gap-4">
          {
            db.map((video) => (
              <VideoPreview 
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                duration={video.duration}
                channel={video.channel}
                views={video.views}
                timestamp={video.timestamp}
              />
            ))
          }
        </section>
        <Spotlight />
      </main>
    </div>
  );
}
