import Services from '../Pages/Services/Services'
import Dashboard from '../Pages/Dashboard/Dashboard'



const PrivateRoutes = [
    { name: "services",   path: "/services",   Component: Services },
    { name: "dashboard", path: "/dashboard", Component: Dashboard },
]
export default PrivateRoutes