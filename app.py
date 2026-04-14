from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

# ollama api url in my local machine
OLLAMA_URL = "http://127.0.0.1:11434/api/chat"
OLLAMA_MODEL = "deepseek-r1:8b"


@app.route("/")
def home():
    # showing main page
    return render_template("index.html")



@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()

        # checking user send message or not
        if not data or "message" not in data:
            return jsonify({"error": "Message is required"}), 400

        user_message = data["message"].strip()

        if not user_message:
            return jsonify({"error": "Message cannot be empty"}), 400

        payload = {
            "model": OLLAMA_MODEL,
            "messages": [
                {"role": "user", "content": user_message}
            ],
            "stream": False
        }

        # sending request to ollama model
        response = requests.post(OLLAMA_URL, json=payload, timeout=300)
        response.raise_for_status()

        result = response.json()
        bot_reply = result.get("message", {}).get("content", "")

        # if no reply comes, show error
        if not bot_reply:
            return jsonify({"error": "No reply from model"}), 500

        return jsonify({"reply": bot_reply})

    except requests.exceptions.ConnectionError:
        return jsonify({"error": "Cannot connect to Ollama"}), 500

    except requests.exceptions.Timeout:
        return jsonify({"error": "Ollama response timed out"}), 504

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    # for local testing only
    app.run(host="127.0.0.1", port=5000, debug=True)