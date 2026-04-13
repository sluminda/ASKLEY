const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message");
const chatBox = document.getElementById("chat-box");
const sendButton = document.getElementById("send-btn");

// this function make one full message row with avatar and message
function createMessageRow(text, sender, isTyping = false) {
    const row = document.createElement("div");
    row.classList.add("message-row");

    const avatar = document.createElement("div");
    avatar.classList.add("avatar");

    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.textContent = text;

    // this is for showing thinking text little differnt
    if (isTyping) {
        message.classList.add("typing");
    }

    if (sender === "bot") {
        row.classList.add("bot-row");
        avatar.classList.add("bot-avatar");
        row.appendChild(avatar);
        row.appendChild(message);
    } else {
        row.classList.add("user-row");
        avatar.classList.add("user-avatar");
        row.appendChild(message);
        row.appendChild(avatar);
    }

    chatBox.appendChild(row);
    chatBox.scrollTop = chatBox.scrollHeight;

    return row;
}

// simple function for adding messages
function addMessage(text, sender) {
    createMessageRow(text, sender);
}

// this will clear old chat and start again
function startNewChat() {
    chatBox.innerHTML = "";
    addMessage("Hello! I am Askley. New chat started.", "bot");
}

chatForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const message = messageInput.value.trim();

    if (!message) return;

    addMessage(message, "user");
    messageInput.value = "";
    sendButton.disabled = true;
    messageInput.disabled = true;

    // showing loading msg while bot is thinking
    const loadingRow = createMessageRow("Askley is thinking...", "bot", true);

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: message })
        });

        const data = await response.json();
        loadingRow.remove();

        if (data.reply) {
            addMessage(data.reply, "bot");
        } else {
            addMessage(data.error || "Something went wrong.", "bot");
        }
    } catch (error) {
        loadingRow.remove();
        addMessage("Network error. Please try again.", "bot");
    } finally {
        sendButton.disabled = false;
        messageInput.disabled = false;
        messageInput.focus();
    }
});