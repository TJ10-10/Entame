# Entame - One-Pane Imagination Engine
**写真・絵・言葉・衝動を “一枚のUI” に閉じ込めて、物語を生成する。**

Entame は、わたしの感情・衝動・物語を  
**ワンペイン UI（One-Pane UI）** に翻訳するための  
ミニマルなエンタメ / メディアプラットフォームです。

Skeb、ボーカロイド、ミーム、VTuber、匿名文化、  
そして「写真に登場人物が話す」という古典的エンタメ文化の延長線上にあります。  
個人が “自分の世界観” をそのまま外に出せるためのプロダクトです。

URL: https://entame.vercel.app/

---

# 1. Vision — なぜ作るのか

Entame の原点には、  
**「恥・恐怖・衝動・影（Shadow）をクリエイションへ転換する」**  
という個人的かつ普遍的なテーマがあります。

人は、自分の中にある混沌を作品に変えるとき、  
もっとも自由になれる。

Entame は、そのための  
**“思想OS × 行動OS × プロダクト”** を統合した装置です。

# 2. Core Philosophy（思想OS）

### ■ value_os — 根本価値  
- 1枚のUIにすべてをまとめる（One-Pane）  
- 衝動・恥・影を “素材” として扱う  
- 個人の世界観をそのまま作品化する  
- プロトタイプを恐れず、即公開する  
- 思想 → デザイン → プロトタイプ → 出力（Output）の連鎖で生きる  

### ■ manifesto — 宣言  
世界は複雑化しすぎた。  
だからこそ私は、**最小構造（minimum）** と **原子的構造（atomic）** を組み合わせ、  
心の深部にある「衝動」を作品へと昇華させる。

そのための最小の形が **One-Pane UI** である。


### ■ narrative — 物語  
わたしの恥と恐怖と影が、創造の源になる。  
それを語り、共有し、衝撃と驚きへと転換する。  
Entame は、そのための “物語生成装置” である。

---

# 3. Product Overview

### ■ What is Entame?
- 写真や画像をアップロードすると
- 登場人物やキャラが “話し始める”
- すべてが **A4 1枚** のような One-Pane Layout に収まる

わたしはただ  
**世界観をアップロードするだけ**。  
あとは Entame が “語ってくれる”。

---

# 4. One-Pane Architecture

Entame/
├── 00_thought/ # 思想OS（value_os / manifesto / narrative）
├── 01_design/ # 設計（persona, user journey, architecture）
├── 02_prototype/ # プロトタイプ / UI / Demo
├── 03_output_log/ # わたしの Output の「実践ログ」
└── README.md # このファイル

Entame は “思想そのものをフォルダ構造で可視化したプロジェクト” です。

---

# 5. Tech Stack

- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- shadcn/ui
- Vercel（デプロイ）
- Python（text_generation demo）

---

# 6. Folder Details

### ```02_prototype/next.js_tailwind_css_one_pane_ui/```

ここが本番アプリです。

- `app/page.tsx` — ワンペイン UI（中心）
- `components/Sidebar.tsx` — 画像アップロード、視点選択など
- `components/Content.tsx` — Speech Bubble / 話す部分
- `global.css` — ミニマルで静かなUI

---

# 7. Development

pnpm install
pnpm dev

---

# 8. Deployment

Vercel に接続するだけで自動デプロイされます。  
Root Directory は以下：

02_prototype/next.js_tailwind_css_one_pane_ui

---

# 9. 今後の実装予定

- 画像からキャラの「表情」「視線」検出 → テキスト生成
- CV粒度の “人格プロンプト” 生成
- Speech Bubble のアニメーション
- One-Pane UI のテーマ切り替え
- 「Entame Script Language」構想

---

# 10. 作者のメッセージ（from 思想OS）

世界を変えるものは、巨大な思想ではなく、  
**たった一つの衝動からはじまる小さな作品** だ。

Entame はその “最小の作品生成装置” であり、  
あなた自身の影（Shadow）と衝動を、  
**芸術へと変換するための媒体** である。

Create from your Shadow.
Turn your shame into your art.
Make the world react.

---

# 11. License

MIT

