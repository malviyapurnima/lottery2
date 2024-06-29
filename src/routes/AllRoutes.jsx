// only User Pages
import UserIndex from "../pages/User/Index"

// only Admin Pages
import AdminDashboard from "../pages/Admin/Dashboard";
import Userspage from "../pages/Admin/Users";
import AdminPool from "../pages/Admin/Pool";
import AgentPage from "../pages/Admin/Agent";
import WinnersPage from "../pages/Admin/Winners";
import ImagesPage from "../pages/Admin/Images";
import MobileParticipantsPage from "../pages/Admin/MobileParticipants";
import ContactUsList from "../pages/Admin/ContactUs";


const userRoutes =[
    {
        path: "user",
        element: <UserIndex/>,
        access: ["user"],
    },
];

const adminRoutes =[
    {
        path: "admin",
        element: <AdminDashboard/>,
        access: ["admin"],
    },
    {
        path: "admin/user",
        element: <Userspage/>,
        access: ["admin"],
    },
    {
        path: "admin/pool",
        element: <AdminPool/>,
        access: ["admin"],
    },
    {
        path: "admin/agent",
        element: <AgentPage/>,
        access: ["admin"],
    },
    {
        path: "admin/Winner",
        element: <WinnersPage/>,
        access: ["admin"],
    },
    {
        path: "admin/images",
        element: <ImagesPage/>,
        access: ["admin"],
    },
    {
        path: "admin/mobileparticipants",
        element: <MobileParticipantsPage/>,
        access: ["admin"],
    },
    {
        path: "admin/contactus",
        element: <ContactUsList/>,
        access: ["admin"],
    },
];

export const allRoutes = [...userRoutes, ...adminRoutes]