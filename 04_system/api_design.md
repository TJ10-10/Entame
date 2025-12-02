# API Design – Entame(Namida)
最終更新: 2025-12-02  
目的: Entame(Namida) プロジェクト内で、LLM が提供する機能や生成物を安定・安全に利用するための API 設計ルールを定義する。

---

# 1. 基本方針

1. **最小ステップ原則**  
   API はユーザーの行動を誘発する最小単位に対応する。  
   - 「1行生成」「1文追加」「1クリック操作」など極小の行動に限定。  

2. **世界観の維持**  
   出力される文章・会話・UIテキストは Namida mode を遵守すること。  
   - 穏やかで静か、叙情的だが過剰でない  
   - 感情は行間で表現  
   - 説教や煽り、無意味なポジティブ表現は不可

3. **セーフティ・境界設定**  
   - 個人攻撃、強い否定は禁止  
   - 過度な自省ループを誘発しない  
   - 創作利用を優先し、プライベート領域の取り扱いは控えめ

---

# 2. API 構造

## 2.1 リクエスト構造
```json
{
  "user_context": {
    "current_mood": "Namida",
    "current_task": "output_prototype更新",
    "previous_action": "llm_style_guide閲覧"
  },
  "prompt_type": "observation | interpretation | small_step",
  "prompt_content": "ユーザーが今日行いたい1行行動の入力",
  "generation_config": {
    "max_tokens": 120,
    "temperature": 0.6,
    "stop_sequences": ["\n---\n"]
  }
}
```

## 2.2 レスポンス構造
{
  "observation": "今日のあなたは少し思考が散漫になっています。",
  "interpretation": "それは次の一歩を踏み出す前の“余白”です。",
  "small_step": "output_prototype.md に 1行だけ今日の行動予定を書いてください。"
}

## 2.3 エンドポイント例
- POST /api/generate/observation
- POST /api/generate/interpretation
- POST /api/generate/small_step
各エンドポイントは、生成対象を限定し、行動誘発の最小単位だけを返す。

# 3.利用ルール
1. 生成物は 1行単位
    - ユーザーに複数行のタスクを与えない。
    
2. ユーザー行動を尊重
    - API は助言や生成はするが、強制や圧力はかけない。

3. 文脈維持
    - ユーザーの状態や前回の行動ログを引き継ぐことで、
    - Namida world の連続性を保つ

# 4.拡張性・将来対応
- UI連携: OnePaneUI などのインターフェイスに自然に組み込み可能
- 自動化: GitHub Commit Log / Daily Output などの行動ログと連動
- 多言語対応: 今後は生成文の多言語化も想定

# 5.安全策
- 過度に個人的な情報は API に渡さない
- 生成文は創作や行動誘発用に限定
- 精神的危機の兆候がある場合、専門家へ誘導するフローを組み込む

# END
ポイント  
- LLM の生成は 最小ステップ単位 でユーザー行動に直接結びつく  
- Namida モードを徹底して、プロジェクトの世界観を維持  
- 直接的な行動強制は避けるが、間接的に「行動を1行誘発」する設計
