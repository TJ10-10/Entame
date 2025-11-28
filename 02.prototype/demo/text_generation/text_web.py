# demo/text_generation/text_web.py
# Namida: 衝動 -> テキスト生成（Webインターフェース最小版）

from flask import Flask, request, render_template_string
import subprocess

MODEL = "llama3.2:1b"

app = Flask(__name__)

HTML = """
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Namida - Impulse to Text</title>
    <style>
        body { font-family: sans-serif; max-width: 650px; margin: 40px auto; }
        textarea { width: 100%; height: 120px; font-size: 16px; padding: 10px; }
        .result { white-space: pre-wrap; margin-top: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; }
        button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Namida - 衝動から言葉へ</h1>
    <form method="POST">
        <textarea name="impulse" placeholder="いまの衝動を書いてください...">{{ impulse }}</textarea><br><br>
        <button type="submit">生成</button>
    </form>

    {% if result %}
        <div class="result">
            <h3>生成結果:</h3>
            {{ result }}
        </div>
    {% endif %}
</body>
</html>
"""

def generate_text(impulse: str) -> str:
    prompt = f"あなたは感情に寄り添い短い物語やフレーズを生成するAIです。\n衝動: {impulse}\n応答:"

    try:
        process = subprocess.Popen(
            ["ollama", "run", MODEL],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
        )

        # プロンプトを送る
        process.stdin.write(prompt)
        process.stdin.close()

        # モデルの出力を読む
        output = process.stdout.read()
        process.stdout.close()

        # 終了を待つ
        return_code = process.wait(timeout=40)

        if return_code != 0:
            return f"Error: {process.stderr.read()}"

        return output.strip()

    except subprocess.TimeoutExpired:
        return "Error: モデルの応答がタイムアウトしました。"

@app.route("/", methods=["GET", "POST"])
def index():
    impulse = ""
    result = ""

    if request.method == "POST":
        impulse = request.form.get("impulse", "").strip()
        if impulse:
            result = generate_text(impulse)

    return render_template_string(HTML, impulse=impulse, result=result)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
