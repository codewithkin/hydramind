HydraMind - AI-Powered Smart Hydration Assistant

Overview

HydraMind is an AI-powered hydration assistant that helps users track their water intake and optimize hydration levels based on real-time factors such as weather, activity, and personal habits. The app will feature AI-driven hydration recommendations, smart reminders, and seamless integration with wearables.

Tech Stack

Frontend (React + TypeScript)

React 18

Zustand (State Management)

Tailwind CSS (Styling)

Shadcn/UI (UI Components)

Workbox + React PWA (Progressive Web App Support)

Backend (Express.js + TypeScript)

Express.js (API Framework)

MongoDB + Mongoose (Database)

BullMQ + Redis (Job Queue for Notifications)

WebSockets (Real-time Updates)

APIs & AI Services

Authentication: BetterAuth

AI for Hydration Recommendations: Nebius AI

Weather Data: OpenWeather API

Wearable Sync: Google Fit / Apple Health API

Push Notifications: Firebase Cloud Messaging (FCM) / OneSignal

Task Breakdown & Responsibilities

📌 Deadline: Saturday, 7 PM (GMT +2)

1️⃣ Authentication (Handled by [Teammate's Name])



2️⃣ Backend Data Endpoints (Handled by Kin Leon)



Project Setup Guide

1️⃣ Clone the Repository

git clone https://github.com/yourusername/hydramind.git
cd hydramind

2️⃣ Install Dependencies

Backend:

cd backend
npm install

Frontend:

cd frontend
npm install

3️⃣ Environment Variables

Create a .env file in the backend directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NEBIUS_API_KEY=your_nebius_ai_key
WEATHER_API_KEY=your_weather_api_key

4️⃣ Start Development Servers

Backend:

npm run dev

Frontend:

npm start

Next Steps (Post-Saturday)

🚀 By Saturday 7 PM (GMT +2)

Authentication & authorization should be fully implemented.

All backend data endpoints should be functional.

🚀 Sunday & Monday (Hackathon Finalization)

Frontend Integration (Connect API endpoints to UI)

AI Fine-Tuning (Ensure hydration recommendations are accurate)

Final Testing & Debugging

Deployment (Vercel + Railway/Render for Backend)

Collaboration Notes

🔹 Branch Naming Convention:

auth-feature-branch (for authentication tasks)

api-endpoints-branch (for data endpoint tasks)

🔹 Commit Messages Format:

feat(auth): Implement Google login

fix(api): Bug fix in hydration logging

🔹 Communication Channel:

[Slack/Discord Link Here]

💪 Let’s crush this hackathon! 🚀