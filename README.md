# 🧠 I/We — Your AI Team When You're Working Alone  
**DurHack 2025 Project**

> *You may be working alone, but you never have to feel alone.*

I/We provides an **on-demand team of AI agents** that collaborate with you on tasks such as brainstorming, coding help, planning, and problem solving. Instead of interacting with a single chatbot, I/We gives you a **panel of specialised AI assistants** that can reason together and support your workflow.

---

# 🚀 Features

- 🤖 **Multi-Agent AI System**  
  Multiple AI models work together to provide diverse perspectives and solutions.

- 🧠 **Task Assistance**  
  Get help with:
  - brainstorming
  - coding
  - planning
  - research
  - problem solving

- 👥 **Collaborative AI Experience**  
  The system simulates a **team environment**, making solo work feel more collaborative.

- ⚡ **Local AI Models via Ollama**  
  All models run locally using Ollama for privacy and fast inference.

---

# 🏗️ System Architecture

The system consists of three main components:

### 1️⃣ Frontend
- Built with **Node.js / React**
- Provides the interactive UI where users interact with the AI team.

### 2️⃣ Backend API
- Built with **Flask**
- Handles agent orchestration, request routing, and model interaction.

### 3️⃣ AI Model Layer
Models are served locally using **Ollama**, enabling multiple AI agents to participate in the conversation.

---

# 🛠️ Tech Stack

**Frontend**
- Node.js
- React
- NPM

**Backend**
- Python
- Flask

**AI Infrastructure**
- Ollama
- LLMs

**Models Used**
- Llama 2
- Llava
- Mistral
- Orca 2
- Qwen 2.5

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-repo-name.git
cd your-repo-name
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

Install frontend dependencies:

```bash
npm install
```

---

# 🧠 Install AI Models

Install the required models using Ollama:

```bash
ollama pull llama2
ollama pull llava:latest
ollama pull mistral
ollama pull orca2
ollama pull qwen2.5
```

---

# ▶️ Running the Project

### Start the backend API

Navigate to the API directory:

```bash
cd src/api
```

Run the Flask development server:

```bash
flask run --debug
```

---

### Start the frontend

Return to the root directory:

```bash
npm run dev
```

---

### Open the app

The application will be available at:

```
http://localhost:3000
```

---

# 📂 Project Structure

```
project-root
│
├── src
│   ├── api        # Flask backend
│   ├── frontend   # React frontend
│
├── requirements.txt
├── package.json
└── README.md
```

---

# 👥 Team

Built during **DurHack 2025**.

Team members:
- Member 1
- Member 2
- Member 3
- Member 4

---

# 🔮 Future Improvements

- Better agent coordination strategies  
- Persistent memory between conversations  
- Task-specific specialist agents  
- Cloud deployment support  

---

# 🏁 Acknowledgements

Thanks to **DurHack 2025** for hosting an amazing hackathon and enabling us to build innovative AI tools.
