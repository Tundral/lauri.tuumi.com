import React from "react";

export const SectionHeading = ({
  children,
  labelColor,
  lineColor,
}: {
  children: React.ReactNode;
  labelColor: string;
  lineColor: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "1.25rem",
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          background: "#f59e0b",
          transform: "rotate(45deg)",
          flexShrink: 0,
        }}
      />
      <h2
        style={{
          fontSize: "0.68rem",
          fontWeight: 800,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: labelColor,
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </h2>
      <div style={{ flex: 1, height: 1, background: lineColor }} />
    </div>
  );
};
