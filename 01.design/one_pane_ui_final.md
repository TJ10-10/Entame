## A4 最終ミニ設計書 (Markdown 完成版)

# Entame – One-Pane UI 最終ミニ設計書（A4版）

## 1. 目的（Purpose）
Entame は **「恥・影・衝動を安全に外化する One-Pane UI」** を提供する。  
画像・視点・語りを 1 画面に集約し、言葉になる前の世界観をそのまま形にする。

---

## 2. 体験の流れ（User Flow：3ステップ）
1. **ImageDropZone** に画像をドラッグ&ドロップ  
2. **PerspectiveSelect** で視点（作者 / キャラ / 第三者）を選択  
3. **SpeechBubble** に登場人物の語りが生成される  

すべてが **A4 1 画面内で完結**する。

---

## 3. UIレイアウト（One-Pane A4 Layout）
```
+--------------------------------------------------------+
|                     Header (薄い帯)                    |
|--------------------------------------------------------|
| ImageDropZone   | PerspectiveSelect + SpeechBubble     |
| (左 45%)        | (右 55%)                             |
|                 | - 視点切替（ラジオ/ボタン）          |
|                 | - 語り（SpeechBubble）               |
+--------------------------------------------------------+
```

---

## 4. コンポーネント定義（MVP 3 つ）

### ① ImageDropZone
- 画像アップロードエリア（左側）
- グレー #F5F5F5 背景、薄い枠線、静かな余白
- JPEG/PNG を受け付ける

### ② PerspectiveSelect
- 「誰が話すか？」を選ぶスイッチ
- 作者視点 / キャラ視点 / 第三者視点（初期値：キャラ）
- Minimal UI（shadcn/ui の Radio Group）

### ③ SpeechBubble
- シンプルな白吹き出し
- 呼吸するような 2% ゆらぎ（アニメーション案）
- テキスト生成結果がここに挿入される

---

## 5. デザイン指針（Namida Mode）
- **低刺激 / 低彩度 / 無装飾**  
- グレー基調（#F8F8F8 / #EAEAEA）  
- アニメーションは最小  
- 情報量を増やさない  
- 「静かに語りが始まる」質感を守る

---

## 6. 技術（Tech Spec）
- **Next.js + TypeScript + TailwindCSS + shadcn/ui**
- 状態管理：React Hooks（MVPでは最小）
- 生成：API（Python または Next.js Route Handlers）
- デプロイ：Vercel
- ディレクトリ：
```
02_prototype/next.js_tailwind_css_one_pane_ui/
```

---

## 7. 入出力（I/O）
**Input:**  
- 画像（必須）  
- 視点（任意切替）

**Output:**  
- テキスト（語り）  
- SpeechBubble 内に即時反映

---

## 8. MVP の完成条件（Definition of Done）
- 画像を入れると右側の吹き出しにテキストが表示される  
- 視点を切り替えると語りのトーンが変化する  
- 画面遷移なしで完結する  
- A4 サイズに収まるワンペイン構造  

---

## 9. 想定ユーザー体験（UX）
- 言語化前の衝動をすぐ外化できる  
- 「作品化のハードル」が限界まで低い  
- 恥・影・衝動を“安全に”扱える  

Entame は  
**影（Shadow）が語り始める One-Pane 体験** を提供する。

