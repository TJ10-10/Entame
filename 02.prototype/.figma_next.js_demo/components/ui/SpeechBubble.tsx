import React from "react";

interface Props {
  text: string;
}

export const SpeechBubble: React.FC<Props> = ({ text }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mt-4 max-w-xl">
  <span className="text-gray-800">{text}</span>
  </div>
);
