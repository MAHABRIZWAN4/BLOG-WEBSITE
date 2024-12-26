---
slug: next.js-15
title: NextJs15 Blog
description: This is NEXT-JS 15 Blog, designed to help you learn Next.js 15 in an easy and engaging way.
date: 26-12-2024
author: Mahab Rizwan
image: /next-js.webp
---

# Introduction

Next.js is a powerful React framework that simplifies building web applications by combining the best features of React with server-side rendering (SSR), static site generation (SSG), and API routes. Next.js 15 brings even more exciting features, performance improvements, and developer tools to streamline your workflow.

This tutorial will cover the basics of Next.js 15 and explore advanced topics with practical examples and everyday analogies to make learning intuitive and fun.

---

## 1. Setting Up Next.js 15

Before diving into the features, let’s set up a Next.js 15 project.

### Installation:
Open your terminal and run:

```bash
npx create-next-app@15 my-next-app
cd my-next-app
npm run dev
```

This will create a Next.js 15 application and start the development server on `http://localhost:3000`.

### Daily Life Analogy:
Setting up Next.js is like opening a new notebook for a project. You’re creating a clean space to start writing your ideas (code).

---

## 2. Components

In React and Next.js, components are reusable pieces of UI that make up your application. You can think of them as building blocks.

### Example:

```c showLineNumbers 
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default function Home() {
  return <Greeting name="Mahab" />;
}
```

### Daily Life Analogy:
Components are like LEGO blocks. You combine them in different ways to build various structures.

---

## 3. Routing

Next.js uses a file-based routing system. Every file you add to the `pages/` directory automatically becomes a route.

### Example:
Create a file `about.js` inside the `pages/` folder:
 
```c showLineNumbers 
export default function About() {
  return <h1>About Us</h1>;
}
```

Now, visit `http://localhost:3000/about`, and you’ll see the "About Us" page.

### Daily Life Analogy:
Think of file-based routing as organizing documents in folders. If you want to find a document about "About Us," you go to the "About" folder.

---

## 4. Dynamic Routing

Dynamic routing allows you to create routes that depend on dynamic data, like user IDs or blog post slugs.

### Example:
Create a file `[id].js` inside the `pages/posts/` folder:

```c showLineNumbers 
export default function Post({ params }) {
  return <h1>Post ID: {params.id}</h1>;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { params },
  };
}
```

### Daily Life Analogy:
Dynamic routing is like having a customizable folder where the name changes based on the content inside.

---

## 5. Map Function

The `map` function is often used in React and Next.js to render lists dynamically.

### Example:

```c showLineNumbers 
const fruits = ['Apple', 'Banana', 'Cherry'];

export default function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

### Daily Life Analogy:
Using `map` is like having a loop that goes through a shopping list and writes each item on a board.

---

## 6. API

Next.js allows you to create backend APIs directly within your application.

### Example:
Create a file `hello.js` inside the `pages/api/` folder:

```c showLineNumbers 
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, World!' });
}
```

Access the API at `http://localhost:3000/api/hello`.

### Daily Life Analogy:
Imagine setting up a vending machine. Each button (API route) dispenses a specific item (data).

---

## 7. Props

Props (short for properties) are a way to pass data from parent to child components.

### Example:

```c showLineNumbers 
function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

export default function App() {
  return <Welcome name="Mahab" />;
}
```

### Daily Life Analogy:
Props are like passing notes with specific instructions to someone.

---

## 8. Figma - UI/UX Design

Using Figma helps design better user interfaces and user experiences before coding.

### Example Workflow:
1. Open Figma and create a new project.
2. Design your UI screens (home, about, etc.).
3. Export the designs and use them as references in your Next.js project.

### Daily Life Analogy:
Designing in Figma is like sketching a blueprint before building a house.

---

## 9. useEffect Hook

`useEffect` allows you to run side effects in your functional components, like fetching data or updating the DOM.

### Example:

```c showLineNumbers 
import { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return <h1>Check the console!</h1>;
}
```

### Daily Life Analogy:
Using `useEffect` is like setting up an alarm that triggers at specific times.

---

## 10. useState Hook

`useState` is used to manage state in a functional component.

### Example:

```c showLineNumbers 
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Daily Life Analogy:
`useState` is like keeping a notebook where you jot down changing values.

---

## 11. Tailwind CSS Grid

Tailwind CSS makes designing grids simple and efficient.

### Example:

```c showLineNumbers 
<div class="grid grid-cols-3 gap-4">
  <div class="bg-red-500">1</div>
  <div class="bg-blue-500">2</div>
  <div class="bg-green-500">3</div>
</div>
```

### Daily Life Analogy:
Using Tailwind Grid is like arranging items neatly in a shelf with equal spacing.

---

## 12. Rendering Methods

Next.js supports multiple rendering methods:
1. **SSR**: Server-Side Rendering.
2. **SSG**: Static Site Generation.
3. **CSR**: Client-Side Rendering.

### Example:
SSG Example:

```c showLineNumbers 
export async function getStaticProps() {
  return {
    props: { data: 'Hello, World!' },
  };
}

export default function Home({ data }) {
  return <h1>{data}</h1>;
}
```

### Daily Life Analogy:
Rendering is like cooking. Some meals are made fresh (SSR), others are pre-made (SSG), and some are prepared on request (CSR).

---

## 13. Middleware

Middleware in Next.js 15 allows you to execute code before a request is completed. It’s helpful for authentication, redirects, and custom logic.

### Example:

```c showLineNumbers 
export function middleware(request) {
  const url = new URL(request.url);
  if (!url.searchParams.get('auth')) {
    return Response.redirect('/login');
  }
}
```

### Daily Life Analogy:
Middleware is like a security checkpoint at an airport, ensuring only authorized people proceed.

---

## 14. Static Assets

Next.js lets you serve static files, like images, directly from the `public` folder.

### Example:

Place an image `logo.png` in the `public` folder, then use it in your component:

```c showLineNumbers 
export default function Header() {
  return <img src="/logo.png" alt="Logo" />;
}
```

### Daily Life Analogy:
Static assets are like files in a locker—easily accessible when needed.

---

## 15. Internationalization (i18n)

Next.js provides built-in support for multiple languages.

### Example:

```c showLineNumbers 
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
  },
};
```

### Daily Life Analogy:
Internationalization is like using a universal remote that works with multiple devices.

---


## Conclusion

Next.js 15 is a robust framework with features that simplify modern web development. Whether you’re building a blog, e-commerce site, or dashboard, Next.js has the tools to make it fast, scalable, and developer-friendly.

Start exploring Next.js 15 today and unlock new possibilities for your web projects!

