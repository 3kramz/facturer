import MyOrders from '../Pages/Dashboard/MyOrders/MyOrder'
import AddAReview from '../Pages/Dashboard/AddAReview/AddAReview'


const PrivateRoutes = [
    { name: "my-orders",       path: "/dashboard/my-orders",               Component: MyOrders },
    { name: "add-a-review",    path: "/dashboard/add-a-review",            Component: AddAReview },
  
   
]

export default PrivateRoutes