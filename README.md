# ecommerce

## 🧾 Features Overview

### 📦 Product Listing

- Product list (`Catalogue`) page with server-side rendering using `getServerSideProps`
- Product data fetched from `/products` mock endpoint
- Cart data fetched from `/items` (mocked) and stored in Zustand store

---

### 🛒 Cart Functionality

- **Add to Cart**
  - Items can be added via `POST /items`
  - If item already exists in cart, the button displays **“Already in Cart”**
- **Remove from Cart**
  - Each item can be removed individually using `DELETE /items/:id`
- **⚠️ Limitation**:
  - Some cart items from the `/items` endpoint **do not include an `id` field**
  - As a result, those items **cannot be deleted**

---

### 💡 Product Card Component

- Reusable `ProductCard` component
- Floating modal on **image hover** displays product description

---

### 🎨 UI & Layout

- Sticky `Header` with:
  - 🛍️ Logo
  - 🛒 Cart icon showing dynamic item count
- Dropdown on cart icon click:
  - Displays current cart items
  - Includes a button to remove each item

---

### 🧱 Project Structure Enhancements

- Modular folder structure with **path alias support**:
  - `@api`, `@store`

---

🌐 Offline Support
Previously-fetched product list is cached in localStorage
