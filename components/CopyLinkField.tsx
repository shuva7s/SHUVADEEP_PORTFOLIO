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
    <div className="flex flex-row flex-wrap items-center gap-2 bg-card/60 backdrop-blur-2xl border border-muted-foreground/20 p-3 justify-center rounded-2xl text-sm text-foreground">
      {textToCopy}
      <Button onClick={handleCopy} className="relative">
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};

export default CopyLinkField;
