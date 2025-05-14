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
    <div className="mt-5 flex flex-row flex-wrap items-center gap-2 backdrop-blur-sm border border-muted-foreground/20 p-2 justify-center rounded-2xl text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
      <p className="px-1.5">{textToCopy}</p>
      <Button onClick={handleCopy} disabled={copied} className="relative" size={"sm"}>
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};

export default CopyLinkField;
