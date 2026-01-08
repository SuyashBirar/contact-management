📇 Contact Management System (MERN Stack)

A full-stack Contact Management Web Application built using the MERN stack.
Users can sign up, log in, and manage their personal contacts securely.
Each user has private access to their own contact list.

-----------------------------------------------------------------------------------------

🚀 Features

🔐 Authentication

User Signup & Login
JWT-based authentication
Protected routes
Secure password hashing using bcrypt

📒 Contact Management

Add new contacts
View personal contact list
Delete Contacts
Contacts are user-specific

🎨 UI / UX

Responsive UI using Tailwind CSS
Works on mobile, tablet, and desktop
Clean and minimal design
Instant UI updates without page reload

🛠️ Technical Highlights

RESTful API design
Modular backend architecture
Reusable frontend components
Production-level folder structure
Error handling & validation


-----------------------------------------------------------------------------------------


🧑‍💻 Tech Stack

Frontend

React.js (Vite)
Tailwind CSS
Axios
React Router DOM

Backend

Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
bcrypt


-----------------------------------------------------------------------------------------


📁 Project Structure
contact-management/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── db/
│   │   ├── app.js
│   │   └── index.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── README.md


-----------------------------------------------------------------------------------------

🔐 Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:5173


-----------------------------------------------------------------------------------------


⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/contact-management.git
cd contact-management

2️⃣ Backend Setup
cd backend
npm install
npm run dev


Server will start at:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run at:

http://localhost:5173


-----------------------------------------------------------------------------------------

👨‍💻 Author

Suyash Birar
Full Stack Web Developer (MERN)

-----------------------------------------------------------------------------------------
