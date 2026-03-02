import React from "react";
import { getVideoEmbedUrl, isGoogleDriveVideoUrl } from "@/lib/video";

interface ArticleVideoProps {
  url: string;
  title?: string;
}

export const ArticleVideo: React.FC<ArticleVideoProps> = ({ url, title }) => {
  const embedUrl = getVideoEmbedUrl(url);
  if (!embedUrl) return null;
  const isDrive = isGoogleDriveVideoUrl(url);

  return (
    <figure className="my-8 md:my-10">
      <div className="relative w-full overflow-hidden rounded-xl bg-black shadow-lg" style={{ aspectRatio: "16/9" }}>
        <iframe
          src={embedUrl}
          title={title ?? "Video"}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* Cover Google Drive's top-right "open in new tab" icon so users stay on the page */}
        {isDrive && (
          <div
            className="absolute top-0 right-0 w-14 h-14 bg-black/90 pointer-events-auto z-10 rounded-tr-xl"
            aria-hidden
          />
        )}
      </div>
      {title && (
        <figcaption className="mt-2 text-center text-sm text-[#738a94]">
          {title}
        </figcaption>
      )}
    </figure>
  );
};
