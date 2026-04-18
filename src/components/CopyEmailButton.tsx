"use client";

import { Button } from "@once-ui-system/core";
import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button
      variant="secondary"
      size="s"
      prefixIcon="document"
      onClick={handleCopy}
      label={copied ? "Copied" : "Copy"}
    />
  );
}
