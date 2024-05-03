import IChannel from "./channel";

export default interface IVideo {
  id: string;
  title: string;
  thumbnail: string;
  duration: number;
  channel: IChannel;
  views: number;
  timestamp: string;
};