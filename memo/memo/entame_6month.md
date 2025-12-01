## Entame(Namida) - 6ヶ月ロードマップ (0 -> 1)

# Mission-Aligned Roadmap
- 「写真や絵のキャラクターに視点（Narrative）を与えて喋らせる
    最小MVPを公開する」
- この一点だけに向けて全工程を組んでいます

---

# Month 0（今） — OS完成フェーズ：土台の最適化
- 0-1: Minimum Root OS の確立
    - one_pane_minimum_os.md 
    - daily_output → GitHub Actionsで“自動日報化”

- 0-2: Entame 全体構造の明確化
    - Architecture を「Figma / Next.js / Vercel」の3層で再定義
    - Persona / Value / Narrative を最終確定
    - Figma Wire を MVP仕様に最適化

---

# Month 1 — Figma の完成（最小UI・最大明快）
- 1-1: Figma MVP UI
    - メイン：One Pane
    - 左：画像ドロップ
    - 右：吹き出しの「視点（Perspective）」
    - 下：生成ボタン（Talk）
- 1-2: “視点テンプレ（Perspective Preset）” を作成
    - 「あなた」「敵」「恋人」「通行人」「神視点」など
    - 10〜20個の初期プリセット
    - わたしの哲学（影・暴力性・恥・衝動性）を反映
- 1-3: Micro Animation（感情の動き）
    - 生成中：白ノイズ
    - Talk生成後：軽いバウンスアニメ
    - iPhoneサイズ最適化

---

# Month 2 — Next.js / Tailwind / shadcn を本番レベルで整備
- 2-1: Next.js MVP 実装
    - UIを完全コピー
    - Server Action（画像→テキスト生成）
    - OpenAI API（画像＋視点→text）
    - 動作する最小プロダクトを作る
- 2-2: shadcn / UI component 最適化
    - ImageDropZone
    - PerspectiveSelect
    - TalkButton
    - SpeechBubble
- 2-3: Basic Logging
    - Talk履歴
    - エラーログ
    - Daily Output 自動送信（わたしのOSと接続）

---

# Month 3 — “視点（Narrative Engine）” の強化月
- 3-1: Narrative Engine v1
画像に対して
    - 認知
    - 感情推測
    - 文体選択
    - 観点の選択
      を一気通貫で生成。
“わたし独自の哲学” を反映させる。
例：
    - 影の声
    - 罪悪感の声
    - 無意識の声
    - 敵視点
    - 神視点
    - 俯瞰視点
- 3-2: Tone Preset（10〜20）
    - 優しい
    - 皮肉
    - 哲学的
    - ニヒル
    - 感情過敏
    - 子ども視点
    - 憧れ
    - 失望
      など。

---

# Month 4 — Vercel / Beta公開版
- 4-1: Vercelデプロイ（beta）
すでに1度成功している。
これはスムーズにいく。
- 4-2: User Feedback
    - 自分で毎日使う
    - 1日1画像
    - 1行でもアウトプット（minimum_root）
    - 改善点をdaily_outputに自動集約

---

# Month 5 — “話すだけでなく、意味を与える” 拡張
- 5-1: Story Generation
1画像 → 3行の物語
または
2枚 → 心情変化

- 5-2: 連続生成
“同じキャラが複数回喋る”モード。

---

# Month 6 — 最終MVP 完成 & 公開準備
- 6-1: リリース候補（RC）
    - UI / UX安定
    - バグ修正
    - 画像ごとに「人格」を固定できる

- 6-2: 世界観の文章化

わたしの思想（影・暴力性・恥・恐怖）を
“Entame Worldview” としてまとめる。

- 6-3: 公開

Note / X / GitHub / Product Hunt など
わたしの最初の“公共的アウトプット”となる。
