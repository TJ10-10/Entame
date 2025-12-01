# Entame – One-Pane Imagination Engine  
**衝動・恥・影を、A4 1枚の UI に封じ込めて “語らせる”。**

Entame（Namida）は、  
**写真・絵・文字・衝動を One-Pane UI に翻訳し、  
キャラクターや登場人物が語り始めるプロダクト** です。

Skeb、ボカロ、ミーム、匿名文化、  
そして「写真の人物が話す」という古典的な遊びの延長にあります。

これは、  
**“わたしの世界観” を外の世界に安全に出す装置** です。

---

# 1. Vision — なぜ Entame を作るのか

Entame の原点は、  
**恥・恐怖・影（Shadow）をクリエイションへ転換する** というテーマです。

人は、自分の中の混沌を  
「作品」や「語り」に変えたとき、もっとも自由になる。

その思想を **OS（思想OS） → 設計 → UI → プロトタイプ → Output** と  
実際のプロダクト構造に落とし込んだものが Entame です。

---

# 2. Philosophy（思想OS）

### ■ Value（価値観）
- すべてを **One-Pane（1画面）** に集約する  
- 恥・衝動・影を “素材” として扱う  
- 個人の内的世界をそのまま作品にする  
- プロトタイプは即公開し、悩まない  
- 思想 → 設計 → 実装 → 出力 の連鎖で生きる  

### ■ Mission
**世界観を「A4 1枚の UI」で語れるようにする。**  
誰もが、言葉になる前の衝動を安全に外へ出せるようにする。

### ■ Narrative（物語）
わたしの影（Shadow）が、語り出す。  
その声は弱く、淡く、しかし確かに “わたし自身” の深部に触れている。

Entame は、  
**影を物語へ変換するための “一人用の物語生成装置”** である。

---

# 3. The One-Pane Experience — UIの本質

Entame の体験はシンプルである。

1. 画像（写真/絵）をアップロードする  
2. “視点（Persona）” を選ぶ  
3. 登場人物が語り始める  
4. すべてが **A4 メモのような 1 画面（One-Pane）** に収まる  

**複雑なUIや遷移は一切ない。**  
感情・衝動・世界観が “一瞬で形になること” を目的としている。

---

# 4. Product Overview — Entameとは何か

### 🔸 概要
- 写真の人物が「語り出す」  
- ミームや創作の種を自動生成  
- ワンペインの UI に全要素が収まる  
- 世界観をそのままアップロードするだけでよい

### 🔸 Entame が得意なこと
- 内面の衝動の言語化
- キャラ設定の掘り下げ
- ミーム生成
- 写真 × 物語の創作
- 感情の整理と表現

---

# 5. Architecture — 思想がそのまま構造になる

```
Entame/
├── 00_thought/       # 思想OS（value, manifesto, narrative）
├── 01_design/        # 設計（persona, journey, architecture）
├── 02_prototype/     # UI・Next.js・デモ
├── 03_output_log/    # わたし自身の Output の履歴
└── README.md         # このファイル
```

**プロジェクト階層そのものが「思想の地図」になっている。**  
思想 → UI → プロトタイプ の接続が明確になるよう設計されている。

---

# 6. One-Pane UI（MVP仕様）

Entame の UI は、次の 3 要素のみで構成される：

### ① ImageDropZone  
- 画像を落とすだけ  
- 背景は淡いグレー  
- 枠線は薄く  
- “静かな体験” を妨げない  

### ② PerspectiveSelect  
- 「誰の視点で話すか？」を選ぶ  
- 作者視点 / キャラ視点 / 第三者視点  
- 世界観の切り替え  

### ③ SpeechBubble  
- 登場人物が語る  
- 過度なアニメーションを避ける  
- 白地・淡線・静かな余白  

**Namida Mode**（静か・低刺激・低彩度）が全体を統一している。

---

# 7. Tech Stack

- Next.js 14  
- TypeScript  
- Tailwind CSS  
- shadcn/ui  
- Vercel（デプロイ）  
- Python（text generation demo）  

---

# 8. Setup

```
pnpm install
pnpm dev
```

デプロイは Vercel に接続するだけで完了。

```
Root: 02_prototype/next.js_tailwind_css_one_pane_ui
```

---

# 9. Roadmap（次の6ヶ月）

- 画像→表情推定→語り生成  
- キャラの人格テンプレ（CV粒度）の追加  
- Speech Bubble の呼吸する

