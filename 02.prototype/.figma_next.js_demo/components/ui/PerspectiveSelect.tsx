import React from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export const PerspectiveSelect: React.FC<Props> = ({ value, onChange }) => {
  const options = ["Shadow", "Eros", "Revolt", "Father", "Child", "Void"];
  return (
    <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="px-4 py-2 border border-black rounded bg-black text-white mr-4"
    >
    {options.map((o) => (
      <option key={o} value={o}>
      {o}
      </option>
    ))}
    </select>
  );
};
