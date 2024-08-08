import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Home from "./home/Home";
import Product from "./product/Product";

const Register = lazy(() => import('./register/Register'));
const Login = lazy(() => import('./login/Login'));
const Profile = lazy(() => import('./profile/Profile'));

const RouteController = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Suspense fallback={<p>Loading...</p>}><Home/></Suspense>} />
        <Route path="register" element={<Suspense fallback={<p>Loading...</p>}><Register/></Suspense>} />
        <Route path="login" element={<Suspense fallback={<p>Loading...</p>}><Login/></Suspense>} />
        <Route path="profile" element={<Suspense fallback={<p>Loading...</p>}><Profile/></Suspense>} />
        <Route path="product" element={<Suspense fallback={<p>Loading...</p>}><Product/></Suspense>}/>
      </Routes>
    </>
  )
}

export default RouteController