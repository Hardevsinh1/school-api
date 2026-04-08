# School Management API

## 🚀 Live API
https://your-vercel-url.vercel.app

## 📂 GitHub Repository
https://github.com/your-username/school-api

## 📌 Features
- Add new school
- List schools sorted by distance

## ⚙️ Tech Stack
- Node.js
- Express.js
- MySQL

## 📬 API Endpoints

### 1. Add School
POST /addSchool

Body:
{
  "name": "ABC School",
  "address": "Rajkot",
  "latitude": 22.3039,
  "longitude": 70.8022
}

### 2. List Schools
GET /listSchools?latitude=22.3&longitude=70.8

## 📏 Distance Calculation
Uses Haversine formula to calculate distance between coordinates.
