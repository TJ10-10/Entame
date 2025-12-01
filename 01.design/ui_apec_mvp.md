# UI Spec (MVP) — Entame / Namida  
最小プロダクトを1画面で実現するための最終UI仕様書

---

## 1. MVPのゴール
画像を一枚置き、  
視点（Perspective）を選び、  
「ひとこと（Speech Bubble）」を生成して保存する。

**この一連の体験を “One Pane UI 1画面” で完結させること。**

---

## 2. 画面構成（One Pane Layout）
Figma 構成 / Next.js 実装を統合した最終仕様。

┌─────────────────────────────┐
│ Header（アプリ名・最小ナビ）│
├─────────────────────────────┤
│ Image Drop Zone（画像アップ)│
├─────────────────────────────┤
│ Perspective Select（3視点） │
├─────────────────────────────┤
│ Talk Button（生成ボタン）   │
├─────────────────────────────┤
│ Speech Bubble（生成テキスト │
└─────────────────────────────┘


この1画面だけで完結する。

---

## 3. コンポーネント仕様

### 3.1 Header
- アプリ名：**Entame / Namida**
- 要素  
  - 左：ロゴ（テキストで OK）  
  - 右：設定アイコン（未実装、ダミーで可）
- 高さ：56px  
- 固定配置

---

### 3.2 Image Drop Zone
**目的：感情の素材＝画像のインプット**

- UI要素  
  - ドラッグ＆ドロップ可能領域  
  - アイコン（＋）  
  - 説明文「画像をここにドラッグ、またはクリック」  
- 対応フォーマット：jpg / png  
- 状態  
  - Idle：灰色枠  
  - Hover：枠が強調  
  - Filled：画像を中央表示、上部に再選択ボタン

---

### 3.3 Perspective Select（視点選択）
**目的：キャラ・自分・第三者など“視点”を切り替える**

- 選択肢（MVPは3つ）
  1. **わたしの視点（自分）**
  2. **その画像のキャラ視点（キャラ）**
  3. **観察者視点（第三者）**

- UI  
  - 横並びのボタン（3個）  
  - 選択時、ボタンが強調（色 or 枠）  
- デフォルト：未選択  
- 選択後：Talk Button が活性化

---

### 3.4 Talk Button（テキスト生成ボタン）
**目的：LLMに「ひとこと」を生成させる**

- 状態  
  - Disabled（画像未登録 or 視点未選択）  
  - Enabled（両方揃ったら青色）  
- テキスト：**「話す」 / 「ひとこと生成」**  
- ローディング：スピナー表示

---

### 3.5 Speech Bubble（出力テキスト）
**目的：感情の輪郭＝Namidaを言語化**

- UI  
  - 吹き出し、またはシンプルなボックス  
  - 中央にテキスト  
  - Copyボタン（任意）  
- 状態  
  - Empty（生成前は非表示）  
  - Filled（生成後にフェードイン）

---

## 4. 状態遷移（State Machine）

[Start]
↓
Image = null → DropZone Idle
↓（画像追加）
Image = Ready
↓
Perspective = null → Perspective Select Idle
↓（視点選択）
Perspective = Ready
↓
Talk Button Enabled
↓（クリック）
Generating...
↓
SpeechBubble = Render(text)


---

## 5. 操作フロー（User Flow）

1. **画像を選ぶ**  
   - ドラッグ or クリック  
   - Filled 状態に切替

2. **視点を選ぶ**  
   - 自分 / キャラ / 第三者  
   - Talk Button が Enabled へ

3. **ひとこと生成**  
   - LLM API へ → フォーマット  
     ```
     {perspective} の視点で、画像に対して 1 文の心情を生成
     トーン：静か、やわらかい、感情の輪郭だけ
     ```
   - SpeechBubble に結果を表示

4. **保存/コピー（MVP Optional）**  
   - ローカル保存 or ログ表示  
   - MVPではコピーだけでOK

---

## 6. Figma の最終仕様（要件）
Figma 側で以下を揃えておく：

- Frame：**1440 × Auto**  
- Components  
  - Header  
  - DropZone  
  - Perspective Buttons  
  - Talk Button  
  - SpeechBubble  
- AutoLayout（縦方向 Stack）  
- 24px padding  
- 8px spacing  
- 全体は “One Pane = 1 Column”

---

## 7. Next.js / Tailwind での実装要件

### 必須のPage構造  

/app/page.tsx
/components/ui/ImageDropZone.tsx
/components/ui/PerspectiveSelect.tsx
/components/ui/TalkButton.tsx
/components/ui/SpeechBubble.tsx
/components/layout/OnePaneLayout.tsx


### 状態管理
- React useState のみ（MVP）  
- 以下のstateを保持  

```ts
const [image, setImage] = useState<File | null>(null);
const [perspective, setPerspective] = useState<string>('');
const [generatedText, setGeneratedText] = useState<string>('');
const [loading, setLoading] = useState<boolean>(false);
```
- API
    - OpenAI API / or 直接 local tool
    - Minimal Prompt を維持

## 8.非機能要件（MVP時点）
- 読み込み 2秒以内
- 画面遷移なし
- モバイルは縦1カラムで自然に崩れる
- 画像は 6MB 以下
- テキストは最大 60 文字

## 9.この仕様のスコープ
この mvp_spec は：
- ❶ One Pane
- ❷ 最小インプット
- ❸ ひとこと出力
だけに絞り込んでいる。

- SNS 連携
- 吹き出しカスタム
- プロジェクト保存
- マイページ
などは 一切入れない。

## 10.完成判定基準（Done）
- 画像を置ける
- 視点を選べる
- ひとことが生成される
- 1画面で完結
- Figma と Next の UI が一致している
以上で MVP UI の仕様は完成。
