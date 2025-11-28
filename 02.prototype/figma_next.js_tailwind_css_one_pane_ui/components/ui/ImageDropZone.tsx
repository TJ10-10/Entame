import React, { useRef } from "react";

interface Props {
  onFileSelect: (file: File) => void;
  previewUrl?: string;
}

export const ImageDropZone: React.FC<Props> = ({ onFileSelect, previewUrl }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
    className="w-96 h-96 border-4 border-dashed border-gray-400 rounded-xl flex items-center justify-center cursor-pointer bg-gray-100"
    onClick={() => fileInputRef.current?.click()}
    >
    {previewUrl ? (
      <img src={previewUrl} className="w-full h-full object-contain rounded-xl" />
    ) : (
    <span className="text-gray-600">Drop image or click to upload</span>
    )}
    <input
    type="file"
    accept="image/*"
    className="hidden"
    ref={fileInputRef}
    onChange={(e) => e.target.files && onFileSelect(e.target.files[0])}
    />
    </div>
  );
};
