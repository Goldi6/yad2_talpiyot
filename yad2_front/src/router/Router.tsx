import { Navigate, Routes, useLocation } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import Home from '../pages/Home';
import PropertyForSale from '../pages/PropertyForSale';
import { Route } from "react-router-dom";
import AuthLayout from '../Layouts/AuthLayout';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import ResetPassword from '../pages/Auth/ResetPassword';
import RegSessionExpired from '../pages/Auth/RegSessionExpired';
import RegisterCode from '../pages/Auth/RegisterEmailCode';
import RegisterSuccess from '../pages/Auth/RegisterSuccess';
import RegisterStep2 from '../pages/Auth/RegisterStep2';
import PublicOnlyRoute from './publicOnlyRoute';
import PrivetRoute from './PrivetRoute';
import PrivetLayout from '../Layouts/PrivetLayout';
import Profile from '../pages/personal/Profile';
import { useEffect } from 'react';



// Define the type for your route components
type ComponentType = React.ComponentType;

// Define the type for loader functions
type LoaderType = () => Promise<{ default: ComponentType }>;

const App = () => {

  const location = useLocation();

  useEffect(() => {

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "unset";
    }

  }, [location]);




  return (
    <Routes>

      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/realestate" element={<Navigate to="/realestate/forsale" />} />


      <Route path="/realestate/forsale" index element={<Layout><PropertyForSale /></Layout>} />






      <Route element={<PrivetRoute><PrivetLayout /></PrivetRoute>}>
        <Route path="/personal" element={<Navigate to="/personal/profile" />} />
        <Route path="/personal/profile" element={<Profile />} />
      </Route>

      <Route element={<PublicOnlyRoute><AuthLayout /></PublicOnlyRoute>}>
        <Route path="/auth" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/register/email-validation-code" element={<RegisterCode />} />
        <Route path="/auth/register/step2" element={<RegisterStep2 />} />
        <Route path="/auth/register/success" element={<RegisterSuccess />} />
        <Route path="/auth/reset-password" element={<Navigate to='/auth/reset-password/step1' />} />
        <Route path="/auth/reset-password/step1" element={<ResetPassword />} />
        <Route path="/auth/session-expired/registration" element={<RegSessionExpired />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};



export default App;