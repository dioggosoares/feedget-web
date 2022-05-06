import { useState } from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';

// IMPORT COMPONENTS
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenShotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenShotTook
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');

    onScreenShotTook(base64Image);
    setIsTakingScreenshot(false)
  }

  if(screenshot) {
    return (
      <button
        type="button"
        className="flex p-1 w-10 h-10 justify-end items-end rounded-smd border-transparent 
        text-zinc-400 hover:text-zinc-100 transition-colors duration-200 ease-linear"
        onClick={() => onScreenShotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-smd border-transparent hover:bg-zinc-700
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors duration-200 ease-linear"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  )
}