<div align="center">

# 🌌 Askley
### AI Chatbot Web Application

<p>
  <b>A modern AI chatbot powered by local AI (Ollama) with a full-stack production deployment.</b>
</p>

<p>
  <a href="https://askley.site">
    <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge" />
  </a>
  <a href="https://flask.palletsprojects.com/">
    <img src="https://img.shields.io/badge/Python-Flask-blue?style=for-the-badge&logo=python" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JS-orange?style=for-the-badge&logo=javascript" />
  </a>
  <a href="https://ollama.com/">
    <img src="https://img.shields.io/badge/AI-Ollama-black?style=for-the-badge" />
  </a>
  <a href="https://marked.js.org/">
    <img src="https://img.shields.io/badge/Markdown-marked.js-brightgreen?style=for-the-badge" />
  </a>
  <a href="https://www.digitalocean.com/">
    <img src="https://img.shields.io/badge/Hosted%20on-DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean" />
  </a>
</p>

<p>
  <a href="https://askley.site">
    <img src="https://img.shields.io/badge/Visit-Live%20Site-6f42c1?style=for-the-badge" />
  </a>
</p>

</div>

---

## 📖 Overview

**Askley** is a web-based AI chatbot that allows users to interact with a locally hosted AI model through a clean, modern, and responsive browser interface.

This project was developed as a **self-hosted AI solution** to reduce dependency on paid external APIs while improving privacy, flexibility, deployment control, and practical learning in full-stack development.

---

## 🌐 Live Website

🔗 **https://askley.site**

---

## 🚀 Installation & Full Setup Guide

📄 **Complete Deployment Guide (VPS + Domain + SSL):**  
👉 https://raw.githubusercontent.com/sluminda/ASKLEY/refs/heads/main/DOCUMENTATION.txt

---

## 🎯 Background

With the rapid growth of AI, most chatbot systems rely on external APIs which introduce:

- recurring costs
- privacy risks
- dependency on third-party services

Askley solves this by using a **locally hosted AI model via Ollama**, giving full control and cost efficiency.

---

## 🎯 Purpose

- Provide an AI chatbot interface
- Enable real-time user interaction
- Use local AI (Ollama) instead of cloud APIs
- Demonstrate full-stack + deployment knowledge

---

## ✨ Key Features

- 💬 Interactive chatbot interface
- 🤖 AI-generated responses
- 🧾 Markdown rendering (clean output)
- 🎨 Modern UI
- 🔄 New chat reset
- ⚠️ Error handling
- 🔒 HTTPS secured
- ☁️ Cloudflare domain
- 🌐 Live hosted system

---

## 🧠 System Architecture

```text
User (Browser)
      ↓
Frontend (HTML, CSS, JavaScript)
      ↓
Flask Backend (app.py)
      ↓
Ollama API (localhost:11434)
      ↓
AI Model (deepseek-r1:8b)
      ↓
Formatted Response → User

## ⚙️ Technologies Used

### 🔹 Backend
- Python  
- Flask  
- Requests  

### 🔹 Frontend
- HTML5  
- CSS3  
- JavaScript  
- marked.js  
  - Converts AI text → formatted HTML  
  - Improves readability  

### 🔹 AI Engine
- Ollama  
- Model: `deepseek-r1:8b`  

### 🔹 Deployment
- DigitalOcean VPS  
- Ubuntu 24.04 LTS  
- Nginx  
- Gunicorn  
- Cloudflare  
- SSL (Let's Encrypt)  

---

## 🖥️ Hosting Environment

- **Provider:** DigitalOcean  
- **Region:** SGP1  
- **RAM:** 16 GB  
- **CPU:** 8 AMD vCPUs  
- **Disk:** 320 GB SSD  

---

## 🧾 Markdown Rendering System

Uses **marked.js** to:

- convert AI responses into HTML  
- support lists and paragraphs  
- improve readability  

---

## 📂 Project Structure

```text
ASKLEY/
├── app.py
├── templates/
├── static/
├── README.md
└── DOCUMENTATION.txt

## 📋 How to Use

1. Open https://askley.site  
2. Type a question  
3. Click **Send**  
4. Wait for the response  
5. Read the formatted output  
6. Use **"New Chat"** to reset  

---

## 👥 Team Members

| Name     | Role                        |
|----------|-----------------------------|
| Alpona   | Development & Documentation |
| Jarin    | Development & Documentation |
| Radowan  | Development & Documentation |
| Luminda  | Development & Documentation |

### Contribution

All members contributed to:

- development  
- testing  
- documentation  

---

## 🔐 Deployment Notes

- Nginx reverse proxy  
- Gunicorn backend  
- HTTPS enabled  
- Cloudflare DNS  

---

## 📌 Academic Purpose

This project demonstrates:

- AI integration  
- full-stack development  
- real-world deployment  

---

## 🙌 Acknowledgments

- Ollama  
- Flask  
- DigitalOcean  
- Cloudflare  
- marked.js  

---

<div align="center">

### ⭐ Star this repo if you like it!

</div>