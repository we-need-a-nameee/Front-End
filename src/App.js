import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LayOut from "./components/LayOut";
import HomePage from "./pages/homepage/HomePage";
import AboutUs from "./pages/aboutus/AboutUs";
import UserProfile from "./pages/userprofile/UserProfile";
import Signup from "./pages/signup/Signup";
import PatientReviews from "./pages/patientreviews/PatientReviews";
import Login from "./pages/login/Login";
import Support from "./pages/support/Support";
import HospitalLocator from "./pages/hospitallocator/HospitalLocator";
import HospitalDetails from "./pages/hospitaldetails/HospitalDetails";
import AppointmentBooking from "./pages/appointmentbooking/AppointmentBooking";
import Telemedicine from "./pages/telemedicine/Telemedicine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "userprofile", element: <UserProfile /> },
      { path: "patientreviews", element: <PatientReviews /> },
      { path: "hospitallocator", element: <HospitalLocator /> },
      { path: "hospitaldetails", element: <HospitalDetails /> },
      { path: "appointmentbooking", element: <AppointmentBooking /> },
      { path: "telemedicine", element: <Telemedicine/> },
      { path: "support", element: <Support /> },
      { path: "about", element: <AboutUs /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
