import { Navigate, Route, Routes } from "react-router-dom";
import useScrollToTop from "./lib/useScrollToTop";
import ProtectedRoute from "./routes/ProtectedRoute";
import { allRoutes } from "./routes/AllRoutes";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import GalleryPage from "./pages/Gallery";
import WinnersPage from "./pages/Winners";
import LotteriesPage from "./pages/Lotteries";
import ContactUsPage from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Ragister";
import AdminLogin from "./pages/AdminLogin";
import PoolDetails from "./pages/PoolDetails";
import RunningLotteryDeatils from "./pages/RunningLotteryDeatils";
import FutureLotteryDetails from "./pages/FutureLotteryDetails";

function App() {

  useScrollToTop();

  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/winners" element={<WinnersPage />} />
        <Route path="/lotteries" element={<LotteriesPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/pool/:poolId" element={<PoolDetails />} />
        <Route path="/running/:poolId" element={<RunningLotteryDeatils />} />
        <Route path="/future/:poolId" element={<FutureLotteryDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {allRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<ProtectedRoute access={route.access}>{route.element}</ProtectedRoute>}
          />
        ))}

        <Route path="/*" element={ <Navigate to="/" replace /> } />
      </Routes>
    </>
  )
}

export default App;
