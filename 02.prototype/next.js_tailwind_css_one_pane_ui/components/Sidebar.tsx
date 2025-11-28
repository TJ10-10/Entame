import React from "react";

interface SidebarProps {
  selected: string;
  onSelect: (page: string) => void;
}

const menu = ["ホーム", "アバウト", "コンタクト"];

export const Sidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => {
  return (
    <div className="w-60 bg-gray-800 text-white h-screen flex flex-col p-4">
    {menu.map((item) => (
      <button
      key={item}
      onClick={() => onSelect(item)}
      className={`p-3 mb-2 text-left rounded hover:bg-gray-700 transition ${
        selected === item ? "bg-gray-700" : ""
      }`}
      >
      {item}
      </button>
    ))}
    </div>
  );
};
