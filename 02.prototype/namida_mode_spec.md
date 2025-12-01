# Namida Mode – UI 統一仕様（MVP反映版）

## 1. 定義
Namida Mode は  
**「恥・影・衝動を静かに受け止めるための低刺激 UI」** を指す。  

- 低彩度（Gray Minimal）
- 無装飾
- アニメーション最小
- 情報量を増やさない
- 呼吸するような“2%のゆらぎ”

---

## 2. カラーパレット（色の思想）
| 用途 | 色 | 説明 |
|-----|-----|------|
| 背景 | `#F6F6F6` | わずかに温度のある灰色 |
| 枠線 | `#E4E4E4` | 最小の存在感 |
| 文字メイン | `#333333` | 黒より柔らかい |
| 補助文字 | `#666666` | サブ情報 |
| アクセント禁止 | – | 彩度 0% ルール |

---

## 3. タイポグラフィ
- フォント：**Inter / Noto Sans JP**
- フォントサイズ：基本 15px（大きすぎない）
- 文字色：`#333`
- 行間：1.6（呼吸のため）

---

## 4. コンポーネント別ルール

### 4-1. ImageDropZone
- 背景：`#F5F5F5`
- 枠線：`#E4E4E4`
- ドロップ時の色変化なし
- 動きなし  
→ **感情を刺激しないことが目的**

---

### 4-2. PerspectiveSelect
- Radio Button の装飾をなくす（shadcn/ui ベース）
- 色は黒禁止（#333）
- Selected 状態でも色を変えない（太字 or 外枠のみ）
- Hover エフェクトなし

---

### 4-3. SpeechBubble
- 背景：白 `#FFFFFF`
- 枠線：`#E6E6E6`
- 角丸：14px（柔らかい）
- **呼吸アニメーション（2%ゆらぎ）**
```css
@keyframes breathe {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}
```
- 3.5秒〜4.5秒でランダム

→ **唯一、生命が宿るコンポーネント**

---

## 5. レイアウト原則
- 余白は通常の **1.5〜2倍**
- 見た目を軽くするために余白の方を厚くする
- 区切り線は薄く、主張しない

```
Image(45%) | Text(55%)
常に A4 ワンペインに収まる
```

---

## 6. MVP 適用範囲
Namida Mode は以下すべてに適用する：

- next.js_tailwind_css_one_pane_ui/
  - page.tsx
  - ImageDropZone.tsx
  - PerspectiveSelect.tsx
  - SpeechBubble.tsx
  - global.css
  - tailwind.config.js

---

## 7. 完了条件（Definition of Done）
- 彩度のある色が 1 色も使われていない
- hover / active のアニメーションが UI に存在しない
- 情報密度が低く、A4 に収まる
- speech bubble の呼吸が静かに動く
- 全体が「正しいノイズの少なさ」を持つ

以上で Namida Mode を MVP プロトタイプ全体に統一できる。

