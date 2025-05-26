# 🛍️ ZeeCo – Modern E-Commerce Store (React + Vite)

**Live Demo:** [https://zico-jsfw.netlify.app](https://zico-jsfw.netlify.app)

ZeeCo is a responsive and performant e-commerce web app built using React, TypeScript, and Vite. The platform integrates with a live API to showcase products, manage a shopping cart, process checkout, and handle customer inquiries via a contact form.

---

## 🚀 Features

- 🔍 Product browsing with real-time search and category filtering
- 💸 Discount display and price formatting
- 🛒 Cart with quantity management and total calculation
- ✅ Checkout confirmation and state reset
- 📬 Contact form with TypeScript validation and toast feedback
- 📱 Mobile-first responsive design
- ⚡ Built for speed and deployed to Netlify

---

## 🧰 Tech Stack

- **React** (with Hooks and Router)
- **TypeScript**
- **Vite** for blazing fast dev/build
- **Tailwind CSS** for styling
- **Swiper.js** for product sliders
- **React Toasts** for feedback
- **Netlify** for hosting

---

## 📦 Getting Started

Install dependencies and run the app locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 🌐 API

All product data is sourced from the Noroff API:

```
https://v2.api.noroff.dev/online-shop
```

---

## 📝 Pages

| Path          | Description                        |
|---------------|------------------------------------|
| `/`           | Homepage with filters and slider   |
| `/product/:id`| Product details and Add to Cart    |
| `/cart`       | Cart summary and checkout button   |
| `/success`    | Checkout confirmation              |
| `/contact`    | Contact form with validation       |

---

## 📬 Contact Form Rules

- **Full name:** Minimum 3 characters
- **Subject:** Minimum 3 characters
- **Email:** Valid email format
- **Message:** Minimum 10 characters

---

## 📁 Folder Structure

```txt
src/
├── components/      # Reusable UI components
├── features/        # Product, cart, toast logic
├── pages/           # Route-based views
├── styles/          # Tailwind + custom styles
└── main.tsx         # Entry point
```

---

## ✅ Deployment

The app is continuously deployed via **Netlify**:  
🌍 [https://zico-jsfw.netlify.app](https://zico-jsfw.netlify.app)

---

## 🧼 Notes

- Clean and readable code with TypeScript types
- Minimal dependencies, fast performance
- Mobile-first design principles applied
