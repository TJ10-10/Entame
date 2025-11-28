import React from "react";

interface ContentProps {
  page: string;
}

export const Content: React.FC<ContentProps> = ({ page }) => {
  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
    {page === "ホーム" && (
      <div>
      <h1 className="text-3xl font-bold mb-4">ホーム</h1>
      <p>これはワンペインUIのホーム画面です。</p>
      </div>
    )}
    {page === "アバウト" && (
      <div>
      <h1 className="text-3xl font-bold mb-4">アバウト</h1>
      <p>このUIは Next.js + Tailwind CSS で作られています。</p>
      </div>
    )}
    {page === "コンタクト" && (
      <div>
      <h1 className="text-3xl font-bold mb-4">コンタクト</h1>
      <p>お問い合わせはこちら。</p>
      </div>
    )}
    </div>
  );
};
