import {
    createBrowserRouter,  
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Regster from "../Pages/RegsterAndLogin/Regster/Regster";
import Login from "../Pages/RegsterAndLogin/Login/Login";
import Colleges from "../Pages/Colleges/Colleges";
import ViewDetels from "../Pages/Colleges/ViewDetels/ViewDetels";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/Admission/AdmissionForm/AdmissionForm";
import MyCollege from "../Pages/Admission/MyCollege/MyCollege";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/regster',
          element: <Regster></Regster>
        },
        {
            path: '/login',
            element: <Login></Login>
        },{
          path: '/Colleges',
          element: <Colleges></Colleges>
        },
        {
          path: '/viewdetels/:Id',
          element: <ViewDetels></ViewDetels>,
          loader:async({params})=> {
            const res =await fetch(`http://localhost:5000/collegeCampus/`)
            const data =await res.json()
            const useforloader =data.find(singeldata=> singeldata?._id==params.Id)
            return useforloader
          }
        },
        {
          path:'/admission',
          element: <Admission></Admission>
        },
        {
          path: '/admissionform',
          element: <AdmissionForm></AdmissionForm>
        },
        {
          path:'/mycolleg',
          element: <MyCollege></MyCollege>
        }
      ]
    },
  ]);