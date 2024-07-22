import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react";
import { DefaultVideoLayout, defaultLayoutIcons } from "@vidstack/react/player/layouts/default";

export default function Detail() {
  return (
    <div className="relative flex min-h-[100svh] justify-center items-end bg-black">
        <div className="absolute text-white top-0 left-0 ">Makan</div>
      <MediaPlayer
        src="youtube/SqcY0GlETPk"
        viewType="video"
        streamType="on-demand"
        logLevel="warn"
        crossOrigin
        playsInline
        title="Sprite Fight"
        poster="https://files.vidstack.io/sprite-fight/poster.webp"
        aspectRatio="22/10"
        
      >
        <MediaProvider />
        <DefaultVideoLayout
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
    </div>
  );
}
