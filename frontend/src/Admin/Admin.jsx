import { useTheme } from '@mui/material/styles';
import { CssBaseline, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Route, Routes, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import CreateIcon from '@mui/icons-material/Create';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Drawer from '@mui/material/Drawer';
import CreateProductForm from './components/CreateProductForm';
import ProductTable from './components/ProductTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';
import AdminDashboard from './components/AdminDashboard';

const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon />},
    { name: "Products", path: "/admin/products", icon: <ProductionQuantityLimitsIcon/>},
    { name: "Customers", path: "/admin/customers", icon: <DashboardCustomizeIcon/>},
    { name: "Orders", path: "/admin/orders", icon: <BookmarkBorderRoundedIcon/>},
    { name: "AddProduct", path: "/admin/product/create", icon: <CreateIcon/>},
    // {name:"" , path:""},
]

function Admin() {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible , setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box
            sx={{
                overflow:"auto",
                display:'flex',
                flexDirection:"column",
                justifyContent:"space-between",
                height:"100%"
            }}
        >
            {/* {isLargeScreen && <Toolbar/>} */}
            <List>
                {
                    menu.map((item , index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)} >
                        <ListItemButton>
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />} */}
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>{item.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>)
                }
            </List>

            <List>
                
                 <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
                
            </List>

        </Box>
    )

  return (
    // <div className='relative'>
      
        <div className='relative flex h-[100vh] '>
            <CssBaseline/>

          <div className='shadow shadow-gray-600 w-[15%] h-full fixed top-0'>
                  {drawer}
              </div>

              <div className='  w-[85%] h-full ml-[15%]'>
                <Routes>
                      <Route path='/' element={<AdminDashboard />} ></Route>
                      <Route path='/product/create' element={<CreateProductForm/>} ></Route>
                      <Route path='/products' element={<ProductTable/>} ></Route>
                      <Route path='/orders' element={<OrdersTable/>} ></Route>
                      <Route path='/customers' element={<CustomersTable/>} ></Route>

                </Routes>
              </div>

        </div>

    // </div>
  )
}

export default Admin
