import React, { useState } from "react";
import { Header } from "../ui/Header" ;
import { ImageDropZone } from  "../ui/ImageDropZone";
import { PerspectiveSelect } from "../ui/PerspectiveSelect" ;
import { TalkButton } from "../ui/TalkButton" ;
import { SpeechBubble } from "../ui/SpeechBubble" ;

export const OnePaneLayout: React.FC = () => {
  const [image, setImage] = useState<File | null>(null); 
  const [preview, setPreview] = useState<string | undefined>();
  const [perspective, setPerspective] = useState("Shadow");
  const [output, setOutput] = useState("");

  const handleFileSelect = (file: File) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleTalk = () => {
    // 仮: ここで text_web.py の生成処理を呼び出す (API経由など)
    setOutput(`君が隠してきた衝動は、${perspective}の語りとして現れる。`);
  };

  return (
    <div className="bg-[#F5F4F2] min-h-screen p-12 flex flex-col items-center">
    <Header />
    <ImageDropZone onFileSelect={handleFileSelect} previewUrl={preview} />
    <div className="flex mt-6 items-center">
    <PerspectiveSelect value={perspective} onChange={setPerspective} />
    <TalkButton onClick={handleTalk} />
    </div>
    {output && (
      <div className="w-full max-2xl mt-6">
      <label className="font-bold text-gray-800">■ Generated Voice</label>
      <SpeechBubble text={output} />
      </div>
    )}
    <footer className="mt-12 text-gray-500">Entame(Namida) - Internal Prototype v0.1</footer>
    </div>
  );
};
