## MVP Components Plan
- 最小プロダクトを構成する 3つの実装コンポーネント を確定する
- Figma の One Pane UI、Next.js（App Router）構成、Tailwind CSS を前提

---

## 1.MVPで実装する3コンポーネント（結論）

# 1.ImageDropZone （画像インプット）
    - 画像を受け取る
    - components/ui/ImageDropZone.tsx
# 2.PerspectiveSelect（視点の選択）
    - 視点（Perspective）を選択
    - components/ui/PerspectiveSelect.tsx
# 3.TalkArea（TalkButton + SpeechBubble をまとめた最終出力領域）
    - テキスト生成を実行
    - components/ui/TalkButton.tsx

## 2.コンポーネントの目的（Why it exists）

# 1.ImageDropZone — “Emotion Input”
役割：ユーザーの感情素材（画像）を受け取る唯一の入口
- 画像ファイル（jpg/png）をドロップ or クリックで選択
- 選択後はプレビュー表示
- 再選択ボタンも含む
- 視点選択や生成ボタンの “前提条件” を満たす
# 2.PerspectiveSelect — “Interpretation Switch”
役割：感情の解釈=視点を切り替える最重要スイッチ
3つの視点を提供：
- わたしの視点
- その画像のキャラ視点
- 観察者視点
TalkButton の “Enabled/Disabled” をこの選択状態と連動させる。
# 3.TalkButton — “Generate Action”
役割：画像 × 視点 を元に LLM に「ひとこと」を生成させる唯一の実行ボタン
- Disabled：画像なし or 視点未選択
- Enabled：両条件OK
- Loading：スピナー表示
結果は SpeechBubble に渡す

## 3.State 管理（全体）
Next.js + Client Component で以下の state を保持する：

const [image, setImage] = useState<File | null>(null);
const [perspective, setPerspective] = useState<string>('');
const [generatedText, setGeneratedText] = useState<string>('');
const [loading, setLoading] = useState<boolean>(false);

## 4.コンポーネントの依存関係（Diagram）
[ImageDropZone] ──── setImage ───▶ (image)

[PerspectiveSelect] ── setPerspective ─▶ (perspective)

(image && perspective) ─▶ [TalkButton Enabled]

[TalkButton] ─(生成API)→ setGeneratedText ─▶ [SpeechBubble]

## 5.API仕様（MVP）
TalkButton が呼ぶ生成 API：
入力:
{
  "image": "<BASE64 or URL>",
  "perspective": "self | character | observer"
}

出力:
60文字以内の1文
静か・やわらかい・内面の輪郭だけ

Minimal Prompt：
{perspective} の視点で、画像から感じる感情の輪郭を 1 文だけ生成してください。
静かで、やわらかい、言いすぎない表現で。

##6. Figma と Next.js の対応表

| Figma             | Next.js Component     |
| ----------------- | --------------------- |
| DropZone          | ImageDropZone.tsx     |
| 3つの視点ボタン   | PerspectiveSelect.tsx |
| ひとこと生成ボタン| TalkButton.tsx        |
| Output box        | SpeechBubble.tsx      |
| One Pane Layout   | OnePaneLayout.tsx     |
| ----------------- | --------------------- |

## 7. これで MVP が成立する理由
- 入力は 画像だけ
- 選択は 視点だけ
- 出力は ひとことだけ
- UI は 1画面だけ
- 機能は 3コンポーネントだけ
この3つが揃えば、Entame / Namida の “泣きの最小体験” は100%成立する。

## 8. 完成定義（Definition of Done）

- [ ] ImageDropZone が正常に画像を受け取れる
- [ ] PerspectiveSelect で視点を切り替えられる
- [ ] TalkButton が Enabled/Disabled を正しく判定
- [ ] LLM API を叩いて 1文が生成される
- [ ] SpeechBubble に自然に表示される
- [ ] すべて One Pane の1画面で完結
