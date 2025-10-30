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
* How to separate data and public assets cleanly

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
│   │   ├── pmc01/
│   │   │   ├── 01.webp   # Image of the machine
│   │   └── ct01/
│   │       ├── 01.webp   # Image of the coffee
│   ├── index.html         # Introduction page
│   └── docs.html          # Documentation page
│
├── index.js               # Main Express server
├── package.json           # Dependencies and scripts
└── README.md              # This file 😄
```

---

## ⚙️ **Getting Started**

### 1️⃣ **Install Dependencies**

```bash
git clone https://github.com/Yousef-El-Maghrabi/brewly-api.git
cd brewly-api
npm install
```

### 2️⃣ **Run the API**

```bash
npm run dev
```

The server will start on `http://localhost:5000`.

---

## 🌐 **Available Routes**

This API provides two main endpoints to get all the data at once.

### ☕ API Endpoints

| Endpoint        | Method | Description                          |
| --------------- | ------ | ------------------------------------ |
| `/api/machines` | GET    | Returns all available machines.      |
| `/api/coffee`   | GET    | Returns all available coffee types.  |

### 🤔 How to get a single item?

This API is designed for simplicity. To get a single machine or coffee, you first fetch the entire list from one of the endpoints above. Then, you can find the specific item you need on your own application (client-side) by its ID.

For example, to get the "Philips 4300 LatteGo" machine, you would:
1.  Fetch all machines from `/api/machines`.
2.  The response will be a JSON object. You can access the Philips machines under the `philips` key.
3.  The "4300 LatteGo" is under the `pmc01` key inside the `philips` object.

---

## 🧩 **Data Structure Examples**

Here’s what the JSON data looks like for each endpoint.

### 🏭 `/api/machines` Response Structure

The `/api/machines` endpoint returns an object where each key is a **brand** (e.g., `philips`). Inside each brand, there's another object where keys are the **machine code** (e.g., `pmc01`).

```json
{
  "philips": {
    "pmc01": {
      "title": "Philips 4300 LatteGo",
      "details": "Fully automatic espresso machine with LatteGo milk system...",
      "price": 400,
      "imagePath": "/public/images/pmc01/01.webp",
      "keySpecs": {
        "coffeeTypes": "Espresso, Coffee, Americano...",
        "milkSystem": "LatteGo – detachable two-part milk carafe...",
        "...": "..."
      },
      "features": {
        "oneTouchFunctionality": "One-touch button for multiple coffee...",
        "...": "..."
      }
    }
  },
  "saoco": {
    "smc01": {
        "title": "Saeco PicoBaristo",
        "...": "..."
    }
  }
}
```

### ☕ `/api/coffee` Response Structure

The `/api/coffee` endpoint returns an object where each key is a **coffee code** (e.g., `ct01`).

```json
{
  "ct01": {
    "title": "L.A. Brew Organic",
    "details": "Our go-to brewed coffee built on the bold foundation...",
    "price": 16.99,
    "imagePath": "/public/images/ct01/01.webp",
    "keySpecs": {
      "roastLevel": "Medium roast",
      "brewType": "Whole Bean",
      "...": "..."
    },
    "features": {
      "certifiedOrganic": true,
      "...": "..."
    }
  },
  "ct02": {
    "title": "L.A. Espresso Organic",
    "...": "..."
  }
}
```

---

## 🖼️ **Image URLs**

Images are served statically. You can construct the full image URL by combining the server address with the `imagePath` from the JSON response.

**Example:**
If the server is at `http://localhost:5000` and an `imagePath` is `/public/images/pmc01/01.webp`, the full URL is:
`http://localhost:5000/public/images/pmc01/01.webp`

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

* Add endpoints to get items by ID (e.g., `/api/machines/:brand/:code`).
* Add `POST`, `PUT`, and `DELETE` routes for admin management.
* Connect to a real database (like MongoDB or PostgreSQL).
* Add authentication & API keys.

---

## 👨‍💻 **Author**

**Yousef El-Maghrabi**
*Web & Mobile Developer*

---

> 💡 *This project is ideal for junior developers learning how to structure and build real-world APIs with Express.js.*
