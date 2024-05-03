'use client';

import SignInButton from "../SignInButton";
import SideLink from "./SideLink";

export default function SideBar() {
  return (
    <aside className="w-1/6 mt-20 bg-white fixed">
      <section className="w-full p-3">
        <SideLink href="/" icon="home">
          Home
        </SideLink>
        <SideLink href="#" icon="shorts">
          Shorts
        </SideLink>
        <SideLink href="#" icon="subscriptions">
          Subscriptions
        </SideLink>
      </section>
      <hr />
      <section className="w-full p-3">
        <SideLink href="#" icon="library">
          Library
        </SideLink>
        <SideLink href="#" icon="history">
          History
        </SideLink>
      </section>
      <hr />
      <section className="w-full p-5 flex flex-col gap-2 items-start">
        <p className="text-sm">Sign in to like videos, comment, and subscribe.</p>
        <SignInButton />
      </section>
      <hr />
      <section className="w-full p-3">
        <h5>Explore</h5>
        <SideLink href="#" icon="trending">
          Trending
        </SideLink>
        <SideLink href="#" icon="shopping">
          Shopping
        </SideLink>
        <SideLink href="#" icon="music">
          Music
        </SideLink>
        <SideLink href="#" icon="movies-and-tv">
          Movies & TV
        </SideLink>
        <SideLink href="#" icon="live">
          Live
        </SideLink>
        <SideLink href="#" icon="gaming">
          Gaming
        </SideLink>
        <SideLink href="#" icon="news">
          News
        </SideLink>
        <SideLink href="#" icon="sports">
          Sports
        </SideLink>
        <SideLink href="#" icon="learning">
          Learning
        </SideLink>
        <SideLink href="#" icon="fashion-and-beauty">
          Fashion & Beauty
        </SideLink>
        <SideLink href="#" icon="podcasts">
          Podcasts
        </SideLink>
      </section>
    </aside>
  );
}