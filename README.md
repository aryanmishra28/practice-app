# 👤 Practice App – Profile Manager

A beginner-friendly CRUD web app that allows users to create, read, update, and delete user profiles with image, name, and email.

Built with **Node.js**, **Express**, **MongoDB (Mongoose)**, **EJS**, and **Tailwind CSS**.

---

![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![Express.js](https://img.shields.io/badge/Framework-Express-black?logo=express)
![EJS](https://img.shields.io/badge/Templating-EJS-yellow?logo=ejs)
![Tailwind CSS](https://img.shields.io/badge/UI-TailwindCSS-blue?logo=tailwindcss)

---

## ✨ Features

- ➕ Create new user profiles
- 📄 Read all existing users
- ✏️ Edit user info (name, email, image)
- ❌ Delete users
- 📸 Display profile images dynamically

---

## 📸 Screenshots

### 🏠 Create user
![Home](https://github.com/aryanmishra28/practice-app/blob/main/images/Create%20users.png)

### ✏️ User
![USer](https://github.com/aryanmishra28/practice-app/blob/main/images/Users.png)

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/practice-profile-app.git
cd practice-profile-app

```

## 2. Install dependencies

```
npm install
```
 ---
 
 
## 3. Start MongoDB

```
mongodb://localhost:27017/testapp

```
 
## 3. Start the server

```
node app.js
```
---

## 4. Open in your browser
```
http://localhost:3000
``` 

## 📁 Folder Structure

```
project-root/
│
├── models/
│   └── user.js           # Mongoose schema/model
├── views/
│   ├── index.ejs         # Home view
│   ├── read.ejs          # All users view
│   ├── edit.ejs          # Edit user form
├── public/
│   └── stylesheets/
│       └── styles.css    # Optional Tailwind overrides
├── images/               # Screenshots for README
├── app.js                # Express server
├── package.json
└── README.md

```


## 📦 .gitignore

```
node_modules/
.env
files/
.DS_Store
```


---

## 👨‍💻 Author

Made with ❤️ by **Aryan Mishra**  
GitHub: [@aryanmishra28](https://github.com/aryanmishra28)

