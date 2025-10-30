# ☕ **Brewly API**

Welcome to the **Brewly API** — a simple, beginner-friendly backend built using **Express.js**.
It provides structured **JSON data** for coffee machines and coffee products, and serves images through a clean, organized file structure.

This API is **read-only**, meaning it only supports `GET` requests — perfect for learning how to build and consume APIs!

---

## 🌟 **What You’ll Learn from This Project**

* How to organize a backend using **Express.js**
* How to return **JSON responses**
* How to serve **static images and HTML pages**
* How to structure data without a database
* How to separate routes, data, and public assets cleanly

---

## 🧭 **Project Structure Overview**

```bash
brewly-api/
├── data/
│   ├── machines.js        # Machine data (as JavaScript objects)
│   └── coffee.js          # Coffee data (as JavaScript objects)
│
├── public/
│   ├── images/
│   │   ├── machines/<brand>/<machine-name>/
│   │   │   ├── 01.webp   # Front view
│   │   │   ├── 02.webp   # Left view
│   │   │   ├── 03.webp   # Right view
│   │   │   └── 04.webp   # Details image
│   │   └── coffee/<brand>/<coffee-name>/
│   │       ├── 01.webp   # Main coffee image
│   ├── index.html         # Introduction page
│   └── docs.html          # Documentation page
│
├── routes/
│   ├── machines.js        # Routes for machines
│   └── coffee.js          # Routes for coffee
│
├── index.js               # Main Express server
├── package.json           # Dependencies and scripts
└── README.md              # This file 😄
```

---

## ⚙️ **Getting Started**

### 1️⃣ **Install Dependencies**

```bash
git clone https://github.com/<yourusername>/brewly-api.git
cd brewly-api
npm install
```

### 2️⃣ **Run the API**

```bash
npm run dev
```

### 3️⃣ **Access the Server**

```
http://localhost:5000
```

---

## 🌐 **Available Routes**

### ☕ Machines Endpoints

| Endpoint              | Method | Description                          |
| --------------------- | ------ | ------------------------------------ |
| `/api/machines`       | GET    | Returns all machines                 |
| `/api/machines/:code` | GET    | Returns a single machine by its code |

### 🌱 Coffee Endpoints

| Endpoint            | Method | Description                              |
| ------------------- | ------ | ---------------------------------------- |
| `/api/coffee`       | GET    | Returns all coffee types                 |
| `/api/coffee/:code` | GET    | Returns a single coffee type by its code |

---

## 🧩 **Data Format Examples**

### 🏭 Machine Example (`data/machines.js`)

```js
{
  code: "MCH01",
  name: "BrewMaster Pro",
  brand: "Brewly",
  details: "High-end espresso machine for professionals.",
  price: 299,
  specs: {
    "Coffee type": "Espresso",
    "Power": "1200W",
    "Pressure": "15 bar"
  },
  features: {
    "Auto shutoff": true,
    "Milk frother": true
  },
  image: {
    front: "/public/images/machines/Brewly/BrewMaster-Pro/01.webp",
    left: "/public/images/machines/Brewly/BrewMaster-Pro/02.webp",
    right: "/public/images/machines/Brewly/BrewMaster-Pro/03.webp",
    details: "/public/images/machines/Brewly/BrewMaster-Pro/04.webp"
  }
}
```

### 🍫 Coffee Example (`data/coffee.js`)

```js
{
  code: "CF01",
  name: "Espresso Roast",
  brand: "Brewly",
  details: "Rich and bold espresso blend sourced from Colombia.",
  price: 12,
  specs: {
    "Origin": "Colombia",
    "Roast Level": "Dark",
    "Caffeine": "High"
  },
  features: {
    "Flavor Notes": "Chocolate, caramel, and nutty finish"
  },
  image: {
    main: "/public/images/coffee/Brewly/Espresso-Roast/01.webp"
  }
}
```

---

## 🖼️ **Image Organization**

| Category          | File Path                                              | Description           |
| ----------------- | ------------------------------------------------------ | --------------------- |
| Machine (Front)   | `/public/images/machines/:brand/:machine-name/01.webp` | Main front image      |
| Machine (Left)    | `/public/images/machines/:brand/:machine-name/02.webp` | Left view             |
| Machine (Right)   | `/public/images/machines/:brand/:machine-name/03.webp` | Right view            |
| Machine (Details) | `/public/images/machines/:brand/:machine-name/04.webp` | Extra detail shot     |
| Coffee            | `/public/images/coffee/:brand/:coffee-name/01.webp`    | Main image for coffee |

➡️ Images are automatically served from:

```
http://localhost:5000/public/images/...
```

---

## 🧱 **Frontend Pages**

| Page     | URL     | Description                      |
| -------- | ------- | -------------------------------- |
| 🏠 Intro | `/`     | Overview page for the API        |
| 📚 Docs  | `/docs` | API documentation in HTML format |

---

## 🛠️ **Tech Stack**

* **Node.js** + **Express.js**  → Server framework
* **CORS**  → Allow frontend access
* **Static Middleware**  → Serve HTML & images
* **Local Data Files**  → No database required

---

## 🚀 **Future Improvements**

* Add `POST`, `PUT`, and `DELETE` routes for admin management
* Connect to a real database (like MongoDB or PostgreSQL)
* Add authentication & API keys
* Auto-generate docs using Swagger or Redoc
* Add request logging & caching

---

## 👨‍💻 **Author**

**Yousef El-Maghrabi**
*Web & Mobile Developer*
Expertise: **Next.js**, **React**, **Flutter**, **UI/UX Design**, **SEO**

📫 Connect: [LinkedIn](#) | [Portfolio](#)

---

> 💡 *This project is ideal for junior developers learning how to structure and build real-world APIs with Express.js.*
> 
