import AddProducts from '../Pages/Dashboard/AddProducts/AddProduct'
import ManageAllOrders from '../Pages/Dashboard/ManageAllOrders/ManageAllOrders'
import UpdateProducts from '../Pages/Dashboard/UpdateProducts/UpdateProducts'
import MakeAdmin from '../Pages/Dashboard/MakeAdmin/MakeAdmin'

const AdminRoutes = [
    { name: "Add-Products",       path: "/add-products",              Component: AddProducts },
    { name: "Manage-orders",       path: "/manageAll-orders",         Component: ManageAllOrders },
    { name: "Update-Products",       path: "/Update-Products",              Component: UpdateProducts },
    { name: "make-admin",       path: "/make-admin",              Component: MakeAdmin},
]

export default AdminRoutes