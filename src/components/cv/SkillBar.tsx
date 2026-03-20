import React from "react";

export const SkillBar = ({
  name,
  level,
  nameColor,
  trackColor,
}: {
  name: string;
  level: number;
  nameColor: string;
  trackColor: string;
}) => {
  return (
    <div style={{ marginBottom: "0.65rem" }}>
      <div style={{ fontSize: "0.8rem", color: nameColor, marginBottom: "0.25rem" }}>
        {name}
      </div>
      <div
        style={{
          height: 5,
          background: trackColor,
          borderRadius: 9999,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${(level / 5) * 100}%`,
            background: "linear-gradient(to right, #1e40af, #3b82f6)",
            borderRadius: 9999,
          }}
        />
      </div>
    </div>
  );
};
