/**
 * Converts YouTube, Vimeo, or Google Drive watch/share URLs to embed URLs for iframe.
 * Returns null if URL is not supported.
 */
export function getVideoEmbedUrl(url: string): string | null {
  if (!url?.trim()) return null;
  const u = url.trim();

  const youtubeMatch = u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}?rel=0`;
  }
  if (u.includes("youtube.com/embed/")) return u;

  const vimeoMatch = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }
  if (u.includes("player.vimeo.com")) return u;

  // Google Drive: .../file/d/FILE_ID/view... -> .../file/d/FILE_ID/preview (embeddable)
  const driveMatch = u.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }

  return null;
}

/**
 * Returns the canonical watch URL for opening the video in a new tab (YouTube or Vimeo only).
 * Returns null for Google Drive so the user stays on the page (no external link shown).
 */
export function getVideoWatchUrl(url: string): string | null {
  if (!url?.trim()) return null;
  const u = url.trim();
  if (u.includes("drive.google.com")) return null;
  const youtubeMatch = u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/);
  if (youtubeMatch) return `https://www.youtube.com/watch?v=${youtubeMatch[1]}`;
  const vimeoMatch = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) return `https://vimeo.com/${vimeoMatch[1]}`;
  if (u.includes("player.vimeo.com/video/")) {
    const id = u.match(/video\/(\d+)/)?.[1];
    if (id) return `https://vimeo.com/${id}`;
  }
  return null;
}

/** True if the URL is a Google Drive video (embed shows a redirect icon we may want to cover). */
export function isGoogleDriveVideoUrl(url: string): boolean {
  return Boolean(url?.trim() && url.trim().includes("drive.google.com"));
}
