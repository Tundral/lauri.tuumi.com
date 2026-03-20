import React from "react";

export const EmailModal = ({
  open,
  onClose,
  isDark,
  email,
  copied,
  onCopy,
}: {
  open: boolean;
  onClose: () => void;
  isDark: boolean;
  email: string;
  copied: boolean;
  onCopy: () => void;
}) => {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.55)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: isDark ? "#1e293b" : "#ffffff",
          border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`,
          borderTop: "3px solid #f59e0b",
          borderRadius: 8,
          padding: "1.5rem",
          minWidth: 300,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.85rem", color: isDark ? "#94a3b8" : "#475569" }}>
          <strong style={{ color: isDark ? "#f1f5f9" : "#0f172a" }}>{email}</strong>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <button
            onClick={onCopy}
            style={{
              background: "#f59e0b",
              color: "#0f172a",
              border: "none",
              borderRadius: 6,
              padding: "0.55rem 1rem",
              fontSize: "0.82rem",
              fontWeight: 700,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            {copied ? "Copied!" : "Copy address"}
          </button>
          <a
            href={`mailto:${email}`}
            style={{
              display: "block",
              background: isDark ? "#334155" : "#f1f5f9",
              color: isDark ? "#cbd5e1" : "#475569",
              border: "none",
              borderRadius: 6,
              padding: "0.55rem 1rem",
              fontSize: "0.82rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Open in mail app
          </a>
        </div>
      </div>
    </div>
  );
};
