import AddProduct from '../Pages/Dashboard/AddProduct/AddProduct'
import ManageAllOrders from '../Pages/Dashboard/ManageAllOrders/ManageAllOrders'
import UpdateProducts from '../Pages/Dashboard/UpdateProducts/UpdateProducts'
import MakeAdmin from '../Pages/Dashboard/MakeAdmin/MakeAdmin'

const AdminRoutes = [
    { name: "Add-Products",     path: "/dashboard/add-product",       Component: AddProduct },
    { name: "Manage-orders",    path: "/dashboard/manageAll-orders",  Component: ManageAllOrders },
    { name: "Update-Products",  path: "/dashboard/Update-Products",   Component: UpdateProducts },
    { name: "make-admin",       path: "/dashboard/make-admin",        Component: MakeAdmin},
]

export default AdminRoutes