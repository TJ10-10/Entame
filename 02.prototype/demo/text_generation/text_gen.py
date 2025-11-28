# demo/text_generation/text_gen.py
# Minimum text-generation prototype for Entame (Namida)

import subprocess
import json

MODEL = "llama3.2:1b"

def generate_text(impulse: str) -> str:
    prompt = f"あなたは感情に寄り添い短い物語やフレーズを生成するAIです。 \n衝動: {impulse}\n応答:"

    # Ollama にリクエストを送る
    result = subprocess.run(
            ["ollama", "run", "--no-stream", MODEL, prompt],
            capture_output=True,
            text=True
            timeout=40
            )

    if result.returncode != 0:
        return f"Error: {result.stderr}"

    return result.stdout.strip()

def main():
    print("=== Namida: local text generation prototype (Ollama) ===\n")
    while True:
        impulse = input("\n衝動を入力してください(qで終了) > ")
        if impulse.lower() == "q":
            break

        text = generate_text(impulse)
        print("\n--- 生成結果 ---")
        print(text)
        print("----------------------")

if __name__ == "__main__":
    main()
