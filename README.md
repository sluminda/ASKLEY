<div align="center">

# 🌌 Askley
### AI Chatbot Web Application

<p>
  <b>A modern AI chatbot powered by local AI (Ollama) with a full-stack production deployment.</b>
</p>

<p>
  <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Python-Flask-blue?style=for-the-badge&logo=python" />
  <img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JS-orange?style=for-the-badge&logo=javascript" />
  <img src="https://img.shields.io/badge/AI-Ollama-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Markdown-marked.js-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Hosted%20on-DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean" />
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

Askley demonstrates how a local AI model can be integrated into a real-world web application and deployed online for public access.

---

## 🌐 Live Website

🔗 **Live URL:** https://askley.site

The application is fully deployed and publicly accessible online.

---

## 🎯 Background

With the rapid growth of Artificial Intelligence, many chatbot applications now depend on external cloud APIs. While those services are powerful, they often introduce several limitations such as:

- recurring API usage costs
- privacy concerns
- reduced deployment control
- dependency on third-party platforms

Askley was created to solve these issues by providing a **locally powered AI chatbot** that runs with Ollama and serves responses through a browser-based interface.

The project focuses on:
- building a practical AI web application
- learning backend and frontend integration
- understanding production deployment
- delivering a usable, real online system

---

## 🎯 Purpose

The main purpose of this application is to:

- provide an AI-powered chatbot interface for users
- allow real-time interaction through the web
- integrate a locally hosted large language model using Ollama
- create a system that is lightweight, practical, and extensible

In short, Askley functions as a browser-based AI assistant powered by a local model.

---

## ✨ Key Features

- 💬 Interactive chatbot interface
- 🤖 AI-generated responses using Ollama
- 🧾 Markdown rendering for clean and structured output
- 🎨 Modern responsive user interface
- 🔄 New chat reset functionality
- ⚠️ Error handling for network and timeout issues
- 🔒 Secure HTTPS deployment
- ☁️ Cloudflare-integrated domain management
- 🌐 Public online hosting on DigitalOcean

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
```

---

## ⚙️ Technologies Used

### 🔹 Backend
- **Python**
- **Flask**
- **Requests**

### 🔹 Frontend
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **marked.js**
    - used to convert AI-generated markdown-like text into structured HTML
    - improves readability of lists, paragraphs, and long responses
    - helps present chatbot output in a cleaner professional format

### 🔹 AI Engine
- **Ollama**
- **Model:** `deepseek-r1:8b`

### 🔹 Deployment & Infrastructure
- **DigitalOcean VPS**
- **Ubuntu 24.04 LTS (x64)**
- **Nginx** — reverse proxy server
- **Gunicorn** — Python application server
- **Cloudflare** — DNS and security layer
- **Let's Encrypt / Certbot** — SSL certificate for HTTPS

---

## 🖥️ Hosting Environment

The project is deployed on a production VPS with the following specifications:

- **Hosting Provider:** DigitalOcean
- **Operating System:** Ubuntu 24.04 (LTS) x64
- **Region:** SGP1
- **Memory:** 16 GB
- **CPU:** 8 AMD vCPUs
- **Disk:** 320 GB SSD

This environment provides the required resources for running the web application and the local AI model efficiently.

---

## 🧾 Markdown Rendering System

Askley uses **marked.js** through CDN integration to improve the visual presentation of chatbot responses.

### Why it is used
AI-generated responses may include:
- long paragraphs
- bullet points
- numbered instructions
- structured explanations

### What it does
- converts text into formatted HTML
- supports:
    - bullet lists
    - numbered lists
    - paragraphs
    - spacing and readability
- improves user experience for complex AI responses

### Benefit
This makes chatbot replies easier to read, more organized, and more professional in appearance.

---

## 📂 Project Structure

```text
ASKLEY/
├── app.py
├── requirements.txt
├── templates/
│   └── index.html
├── static/
│   ├── style.css
│   └── script.js
├── README.md
└── DOCUMENTATION.txt
```

---

## 🚀 Installation & Setup Guide

The full installation, deployment, and server configuration guide is provided separately.

📄 **Setup Documentation:** `DOCUMENTATION.txt`

This documentation can include:
- VPS update and upgrade steps
- Python environment setup
- Ollama installation
- Nginx and Gunicorn configuration
- domain connection with Cloudflare
- SSL certificate setup
- application update process after new GitHub commits

You can keep the detailed setup instructions in that separate file and link it directly from the repository.

---

## 📋 How to Use the Application

1. Open the live website: **https://askley.site**
2. Enter your question into the chat input field
3. Click the send button
4. Wait for the AI model to generate a response
5. Read the formatted output in the chat window
6. Use **New Chat** to clear the current conversation and start again

---

## 👥 Team Members

| Name     |          Role               |
|----------|-----------------------------|
| Alpona   | Development & Documentation |
| Jarin    | Development & Documentation |
| Radowan  | Development & Documentation |
| Luminda  | Development & Documentation |

### Contribution Summary

All team members participated collaboratively in both **development** and **documentation**.

Their collective responsibilities included:

- frontend and backend development
- testing and debugging
- documentation preparation and refinement

The project was completed through a shared team effort, with each member contributing equally.

---

## 🔍 Functional Summary

### Input
- user message entered through the chat interface

### Processing
- frontend sends request to Flask backend
- backend validates input
- backend sends the prompt to Ollama API
- AI model generates the response

### Output
- response is returned to the frontend
- marked.js formats the response
- final output is displayed in the chat interface

---

## 🔐 Security & Deployment Notes

- hosted behind **Nginx**
- served over **HTTPS**
- domain managed through **Cloudflare**
- application executed with **Gunicorn**
- deployed on **Ubuntu 24.04 LTS**
- suitable for production-style academic demonstration

---

## 📌 Academic Purpose

This project was developed for academic and educational purposes to demonstrate:

- integration of AI into practical systems
- real-world deployment on a VPS server
- collaborative software documentation practices

---

## 🙌 Acknowledgments

- **Ollama** for local AI model hosting
- **Flask** for lightweight backend development
- **DigitalOcean** for VPS infrastructure
- **Cloudflare** for domain and DNS management
- **marked.js** for improved text formatting and response rendering

---

<div align="center">

### ⭐ If you like this project, consider giving it a star.

</div>
