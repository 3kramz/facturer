import MyOrders from '../Pages/Dashboard/MyOrders/MyOrder'
import AddAReview from '../Pages/Dashboard/AddAReview/AddAReview'
import Purches from '../Pages/Purches/Purches'
import MyProfile from '../Pages/Dashboard/MyProfile/MyProfile'


const PrivateRoutes = [
    { name: "my-profile",      path: "/dashboard/my-profile",              Component: MyProfile },
    { name: "my-orders",       path: "/dashboard/my-orders",               Component: MyOrders },
    { name: "add-a-review",    path: "/dashboard/add-a-review",            Component: AddAReview },
    { name: "purches",         path: "/dashboard/purches/:id",             Component: Purches},
   
]

export default PrivateRoutes