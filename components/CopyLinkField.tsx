"use client";
import { useState } from "react";
import { Button } from "./ui/button";

const CopyLinkField = ({ textToCopy }: { textToCopy: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className={`mt-5 flex flex-row flex-wrap items-center gap-2 backdrop-blur-sm border border-muted-foreground/20 bg-foreground/5 p-2 justify-center rounded-2xl text-sm text-muted-foreground ${copied && "pointer-events-none"}`}
    >
      <p className="px-1.5">{textToCopy}</p>
      <Button disabled={copied} className="block overflow-hidden" size={"sm"}>
        <div
          className={`h-[200%] transition-transform ${
            copied && "-translate-y-1/2"
          }`}
        >
          <span className="w-full h-1/2 fl_center">Copy</span>
          <span className="w-full h-1/2 fl_center">Copied</span>
        </div>
      </Button>
    </div>
  );
};

export default CopyLinkField;
