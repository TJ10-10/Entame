## Figmaレイアウト案 (1画面完全版)
    - Frame名：Speak from the Shadow – One Pane
    - サイズ：1440 × 1024（Web/App兼用・作業しやすい）
    - レイアウト：左右 2 カラム or 上下 1 カラム

---

## Figma構造 (レイヤー構成)

Frame: Speak from the Shadow – One Pane
│
├── Header
│     ├── Logo (text: "Namida / Shadow Engine")
│     └── Subtitle ("Image → Voice from the Shadow")
│
├── MainArea
│     ├── ImageDropZone
│     │      ├── Rectangle (400×400, radius 16, dashed border)
│     │      └── Text("Drop Image or Click to Upload")
│     │
│     ├── ControllerRow
│     │      ├── Dropdown(Perspective Select)
│     │      │        options: Shadow / Eros / Revolt / Father / Child / Void
│     │      └── Button("Talk")
│     │
│     └── OutputArea
│            ├── Label("■ Generated Voice")
│            └── SpeechBubble (TextBox)
│
└── Footer
       └── small text ("Entame(Namida) – Internal Prototype v0.1")

---

## 視覚デザイン

# 配色
    - 背景：#F5F4F2（淡いベージュ、影の語りと相性が良い）
    - アップロード枠：#C8C8C8（破線・象徴的な境界）
    - 視点ドロップダウン：#1A1A1A（深い黒、Shadow記号）
    - Talkボタン：#E23E57（エロース＝赤系、生命/衝動）
    - Speech bubble：#FFFFFF（“語り”を際立たせる）

# フォント
    - メイン：Inter / Noto Sans JP
    （知性・現代感・哲学性のバランス）

# 余白
    - 上下 48px
    - コンポーネント間 24px
    - Speech bubble 内側 16px

---

## Figma 「完成ワイヤーフレーム」テキスト

Frame: Speak from the Shadow – One Pane (1440x1024)

[Header]
- Title: "Namida – Shadow Engine"
- Subtitle: "Image → Voice from the Shadow"

[Main Area]

1. Image Drop Zone
   - 400x400 rectangle / dashed border / rounded 16
   - Inside text: "Drop image or click to upload"

2. Controller Row
   - Dropdown: "Perspective"
     Options: Shadow / Eros / Revolt / Father / Child / Void
   - Button: "Talk"

3. Output Area
   - Label: "■ Generated Voice"
   - Speech Bubble (TextBox):
       「君が隠してきた衝動は、恐怖ではなく創造の核だ。」

[Footer]
- Text: "Entame(Namida) Internal Prototype v0.1"

