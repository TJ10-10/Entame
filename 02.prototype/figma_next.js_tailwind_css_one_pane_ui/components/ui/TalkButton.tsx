import React from "react";

interface Props {
  onClick: () => void;
}

export const TalkButton: React.FC<Props> = ({ onClick }) => (
  <button
  onClick={onClick}
  className="px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition"
  >
  Talk
  </button>
);
