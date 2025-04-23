import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import AOS from "aos";
import "aos/dist/aos.css";





//todo 
// Do the main layout
//create components for Home, Portfolio and Contact me 
//add components to App.jsx
//implement in the sidebar


const router  = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout/>,
    children:[
        {
          index:true,
          element:<Home/>

        },
        {
          path: "portfolio",
          element:<Portfolio/>
        },
        {
          path:"contact",
          element:<ContactMe/>
        }

    ]
  }
])


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
