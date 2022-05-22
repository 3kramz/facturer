import Home from '../Pages/Home/Home'
import Review from '../Pages/Review/Review'
import Blogs from '../Pages/Blogs/Blogs'
import MyPortfolio from '../Pages/MyPortfolio/MyPortFfolio'
import Parts from '../Pages/Parts/Parts'
import Login from '../Pages/Login/Login'


const PublicRoutes = [
    { name: "home",       path: "/",          Component: Home },
    { name: "home",       path: "/home",          Component: Home },
    { name: "review",     path: "/review",        Component: Review },
    { name: "blogs",      path: "/blogs",         Component: Blogs },
    { name: "portfolio",  path: "/my-portfolio",  Component: MyPortfolio },
    { name: "parts",      path: "/parts",         Component: Parts },
    { name: "login",      path: "/login",         Component: Login },
]

export default PublicRoutes