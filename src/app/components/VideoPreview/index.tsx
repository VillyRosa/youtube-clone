'use client';

import IChannel from "@/app/interfaces/channel";
import Image from "next/image";
import Link from "next/link";

interface VideoPreviewProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  channel: IChannel;
  views?: string;
  timestamp?: string;
}

export default function VideoPreview({ id, title, thumbnail, duration, channel, views, timestamp }: VideoPreviewProps) {
  return (
    <div
      className="w-full flex flex-col"
    >
      <Link href={`/watch?v=${id}`} className={`w-full h-60 bg-no-repeat bg-cover p-1 bg-[url('/thumbs/thumb${id}.png')] rounded-md flex justify-end items-end`}>
        <span className="bg-black text-white p-1 rounded-md text-sm">{duration}</span>
      </Link>
      <div className="w-full py-3 flex gap-3">
        <Image className="w-9 h-9" src={`/avatar/avatar${channel.id}.png`} alt={title} width={36} height={36} />
        <div className="flex flex-col">
          <h3 className="font-semibold">{title}</h3>
          <Link href="#" className="flex gap-1 items-center text-zinc-500 text-sm hover:text-zinc-700" title={channel.name}>
            <p>{channel.name}</p>
            <Image className="w-4 h-4" src="/icons/verify.png" alt="verify" width={14} height={14} />
          </Link>
          {
            views && timestamp && (
              <p className="text-sm text-zinc-500">{`${views} views • ${timestamp}`}</p>
            )
          }
        </div>
      </div>
    </div>
  );
}