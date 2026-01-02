import { BrowserRouter, Routes, Route } from "react-router-dom";
// User Pages
import UserDashboard from "./pages/user/UserDashboard";
import MyTickets from "./pages/user/MyTickets";
import NewTicket from "./pages/user/NewTicket";
import TicketHistory from "./pages/user/TicketHistory";
import Profile from "./pages/user/Profile";
import Notifications from "./pages/user/Notifications";
import HelpFAQ from "./pages/user/HelpFAQ";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// technician page 
 import TechnicianDashboard from "./pages/technician/TechnicianDashboard";
 import AssignedTickets from "./pages/technician/AssignedTickets";
 import TicketDetails from "./pages/technician/TicketDetails";
 import TechnicianProfile from "./pages/technician/TechnicianProfile";
 import TechnicianNotifications from "./pages/technician/TechnicianNotifications";
 import WorkHistory from "./pages/technician/WorkHistory";
 import UpdateTicket from "./pages/technician/UpdateTicket";

// Home (if you have)
import Home from "./pages/user/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* User Routes */}
  <Route path="/user/dashboard" element={<UserDashboard />} />
  <Route path="/user/tickets" element={<MyTickets />} />
  <Route path="/user/new-ticket" element={<NewTicket />} />
  <Route path="/user/history" element={<TicketHistory />} />
  <Route path="/user/profile" element={<Profile />} />
  <Route path="/user/notifications" element={<Notifications />} />
  <Route path="/user/help" element={<HelpFAQ />} />

  {/* {technician Routes} */}
   <Route path="/technician/dashboard" element={<TechnicianDashboard />} />
   <Route path="/technician/tickets" element={<AssignedTickets />} />
   <Route path="/technician/ticket/:ticketId" element={<TicketDetails />} />
   <Route path="/technician/profile" element={<TechnicianProfile />} />
   <Route path="/technician/notifications" element={<TechnicianNotifications />} />
   <Route path="/technician/history" element={<WorkHistory />} />
   <Route path="/technician/update-ticket" element={<UpdateTicket />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;