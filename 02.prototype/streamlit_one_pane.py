import streamlit as st

st.set_page_config(layout="wide", page_title="ワンペインUI Streamlit版")

# --- サイドバー/ メニュー ---
menu = ["ホーム", "アバウト", "コンタクト"]
choice = st.sidebar.radio("メニュー", menu)

# --- コンテンツ ---
if choice == "ホーム":
    st.header("ホーム")
    st.write("これはワンペインUIのホーム画面です。")

    # --- text_web.py と統合部分 ---
    user_input = st.text_area("テキスト入力", "")
    if st.button("生成"):
        # text_web.py の関数を呼ぶ (例: generate_text)
        from demo.text_generation.text_web import generate_text
        output = generate_text(user_input)
        st.write("生成結果:")
        st.write(output)

elif choice == "アバウト":
    st.header("アバウト")
    st.write("このUIは Streamlit で HTML/CSS/JS を使わずに作られています。")

elif choice == "コンタクト":
    st.header("コンタクト")
    st.writer("お問い合わせはこちら。")
