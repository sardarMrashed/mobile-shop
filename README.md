# Mobile Shop 🛍️

A mobile shopping application built with **React Native, Expo, JavaScript, Node.js, and Express.js**.

This is a hands-on learning project where I practice full-stack development, API integration, React Native components, state management, and mobile UI design.

## Features

- Browse products retrieved from a backend API
- Search products by name
- View individual product details and images
- Add products to a shopping cart
- Remove individual items from the cart
- Clear the cart with a confirmation dialog
- Automatically calculate the total price
- Navigate between Shop and Product Details screens

## Tech Stack

**Frontend**
- React Native
- Expo
- JavaScript
- React Navigation

**Backend**
- Node.js
- Express.js
- REST API

**Development Tools**
- VS Code
- Git and GitHub
- Expo Go for testing on iPhone

## How It Works

The Express backend provides product data through a `GET /products` endpoint.

The React Native app fetches this data, stores it in component state, and displays the products using React components.

Users can search products, view details, and manage a shopping cart.

## Running Locally

### Prerequisites
- Node.js and npm
- Expo Go on a mobile device
- A computer and mobile device connected to the same Wi-Fi network

### 1. Install dependencies

```bash
npm install
```

Ensure the Express backend dependencies are installed as well.

### 2. Start the backend

```bash
node backend/index.js
```

The backend runs on port `3000`.

### 3. Configure the API address

Update the API URL in `App.js` to use your computer's local IP address:

```javascript
const API_URL = 'http://YOUR_LOCAL_IP:3000/products';
```

### 4. Start Expo

Open a second terminal:

```bash
npx expo start
```

Scan the QR code using Expo Go.

## What I'm Learning

Through this project, I'm improving my understanding of:

- React Native components and styling
- Props and state with React hooks
- Fetching and displaying REST API data
- Conditional rendering and array methods
- Navigation between screens
- Shopping cart state management
- Debugging and testing on a real device
- Git version control

## Future Improvements

- Refactor repeated components into reusable components
- Add product descriptions
- Persist shopping cart data
- Improve error handling and loading states
- Add authentication and a checkout flow

## Project Status

**Working learning project / portfolio demo.**

The application has been tested on an iPhone using Expo Go. It is under active development and is not yet a production-ready e-commerce application.

## Developer

**Sardar Mohammed Rashid**

Full-Stack JavaScript Developer

[GitHub](https://github.com/sardarMrashed) | [LinkedIn](https://www.linkedin.com/in/sardar-mohammed-rashid/)
