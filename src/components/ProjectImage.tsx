import { FolderCode } from "lucide-react";
import { useState } from "react";

interface ProjectImageProps {
  src?: string;
}

export default function ProjectImage({ src }: ProjectImageProps) {
  const [failedSrc, setFailedSrc] = useState<string>();

  if (src && src !== failedSrc) {
    return (
      <img
        src={src}
        alt=""
        className="h-6 w-6 rounded-full object-cover"
        onError={() => setFailedSrc(src)}
      />
    );
  }

  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-md border border-slate-200 bg-slate-100 text-slate-600 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200">
      <FolderCode className="h-4 w-4" aria-hidden="true" />
    </span>
  );
}
