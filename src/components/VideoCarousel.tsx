import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  videos: string[];
}

type Fit = "cover" | "contain";

export function VideoCarousel({ videos }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fitMap, setFitMap] = useState<Record<number, Fit>>({});
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const next = () => setCurrentIndex((i) => (i + 1) % videos.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + videos.length) % videos.length);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === currentIndex) {
        v.currentTime = 0;
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, [currentIndex]);

  const handleLoadedMetadata = (idx: number) => (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    const fit: Fit = v.videoWidth >= v.videoHeight ? "cover" : "contain";
    setFitMap((prev) => (prev[idx] === fit ? prev : { ...prev, [idx]: fit }));
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/[0.07] bg-black">
      {videos.map((src, idx) => {
        const fit = fitMap[idx] ?? "cover";
        const isActive = idx === currentIndex;
        return (
          <video
            key={src}
            ref={(el) => { videoRefs.current[idx] = el; }}
            src={src}
            autoPlay={isActive}
            muted
            playsInline
            preload={isActive ? "auto" : "metadata"}
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
            onContextMenu={(e) => e.preventDefault()}
            onLoadedMetadata={handleLoadedMetadata(idx)}
            onEnded={isActive ? next : undefined}
            className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${
              fit === "cover" ? "object-cover" : "object-contain"
            } ${isActive ? "opacity-100" : "opacity-0"}`}
          />
        );
      })}

      {/* Subtle bottom gradient for control legibility */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />

      {/* Arrow controls */}
      <button
        onClick={prev}
        aria-label="Video anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Video siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Video ${i + 1}`}
            className="transition-all duration-500 rounded-full"
            style={{
              width: i === currentIndex ? "22px" : "6px",
              height: "6px",
              backgroundColor: i === currentIndex
                ? "rgba(255, 107, 26, 0.95)"
                : "rgba(255, 255, 255, 0.45)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
