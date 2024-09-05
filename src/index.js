import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/Home"
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Page1 from './components/SliderPages/Page1';
import Page2 from './components/SliderPages/Page2';
import Page3 from './components/SliderPages/Page3';
import Page4 from './components/SliderPages/Page4';
import Page5 from './components/SliderPages/Page5';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "pricing",
        element: <Pricing />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "page1",
        element: <Page1 />
      },
      {
        path: "page2",
        element: <Page2 />
      },
      {
        path: "page3",
        element: <Page3 />
      },
      {
        path: "page4",
        element: <Page4 />
      },
      {
        path: "page5",
        element: <Page5 />
      },

    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();
