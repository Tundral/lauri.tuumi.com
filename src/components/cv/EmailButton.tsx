"use client";
import React, { useState } from "react";
import { EmailIcon } from "../icons/EmailIcon";
import { EmailModal } from "./EmailModal";

export const EmailButton = ({ email }: { email: string }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 1200);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          background: "#f59e0b",
          color: "#0f172a",
          border: "none",
          borderRadius: 6,
          padding: "0.45rem 1rem",
          fontSize: "0.82rem",
          fontWeight: 700,
          cursor: "pointer",
          letterSpacing: "0.01em",
        }}
      >
        <EmailIcon /> Email me
      </button>
      <EmailModal
        open={open}
        onClose={() => setOpen(false)}
        email={email}
        copied={copied}
        onCopy={handleCopy}
      />
    </>
  );
};
