'use client';

import { useSearchParams } from "next/navigation";
import db from "../json/db.json";
import { Suspense } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get('v');

  const video = db.find(((video) => video.id == id));

  if (!video) {
    return <h1>Vídeo não encontrado</h1>;
  }

  return (
    <Suspense fallback={<h1>Loading . . .</h1>}>
      <main className="min-h-screen py-2 px-24 flex gap-6">
        <section className="w-full">
          <iframe
            className="w-full h-[720px]"
            src={`${video.videoUrl}?autoplay=1`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
          <h2 className="text-2xl font-bold">{video.title}</h2>
        </section>
        <aside className="w-1/4">
          {video.title}
        </aside>
      </main>
    </Suspense>
  );
}