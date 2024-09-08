

import {
  Menu,
  MenuItem,
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from '../../State/Admin/Orders/Action';

function OrdersTable() {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch, adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered , adminOrder.deletedOrder]);

  const [anchorEl, setAnchorEl] = React.useState([]);

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };

  const handleShipedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <div className="p-10">
      <Card className="mt-2">
        <CardHeader title="ORDER'S" />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item, index) => (
                <TableRow
                  key={item._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="">
                    <AvatarGroup max={3} sx={{ justifyContent: 'start' }}>
                      {item.orderItems.map((orderItem, orderIndex) => (
                        <Avatar key={orderIndex} src={orderItem.product.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {item.orderItems.map((orderItem, orderIndex) => (
                      <p key={orderIndex}>{orderItem.product.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">{item._id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-full ${item.orderStatus === 'CONFIRMED'
                        ? 'bg-[green]'
                        : item.orderStatus === 'SHIPPED'
                          ? 'bg-[blue]'
                          : item.orderStatus === 'PLACED'
                            ? 'bg-[gray]'
                            : item.orderStatus === 'PENDING'
                              ? 'bg-[orange]'
                              : 'bg-[red]'
                        }`}
                    >
                      {item?.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      id="basic-button"
                      aria-haspopup="true"
                      onClick={(event) => handleClick(event, index)}
                      aria-controls={`basic-menu-${item?._id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item?._id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item._id)}>
                        Confirmed Order
                      </MenuItem>
                      <MenuItem onClick={() => handleShipedOrder(item._id)}>
                        Shipped Order
                      </MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(item._id)}>
                        Delivered Order
                      </MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button onClick={() => handleDeleteOrder(item._id)} variant="outlined">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
}

export default OrdersTable;







// import { Menu , MenuItem, Avatar, AvatarGroup, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from "react-redux"
// import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Orders/Action'

// function OrdersTable() {

//   const dispatch = useDispatch()

//   const {adminOrder} = useSelector(store=>store)

//   useEffect(()=>{
//     dispatch(getOrders())
//   },[adminOrder.confirmed,adminOrder.shipped,adminOrder.delivered ])


//   const [anchorEl, setAnchorEl] = React.useState([]);
//   const open = Boolean(anchorEl);

//   const handleClick = (event,index) => {
//     const newAnchorElArray = [...anchorEl];
//     newAnchorElArray[index] = event.currentTarget;
//     // setAnchorEl(null);
//     setAnchorEl(newAnchorElArray);
//   };

//   const handleClose = (index) => {
//     const newAnchorElArray = [...anchorEl];
//     newAnchorElArray[index]=null;
//     setAnchorEl(null);
//   };

//   console.log("admin ordes : ", adminOrder)

//   const handleShipedOrder = (orderId) =>{
//     dispatch(shipOrder(orderId));
//     handleClose();
//   }

//   const handleConfirmedOrder = (orderId) => {
//     dispatch(confirmOrder(orderId));
//     handleClose();
//   }

//   const handleDeliveredOrder = (orderId) => {
//     dispatch(deliveredOrder(orderId));
//     handleClose();
//   }

//   const handleDeleteOrder = (orderId) => {
//     dispatch(deleteOrder(orderId));
//   }
//   console.log("data : ", adminOrder.orders?.index)
//   console.log("data 2 : ", adminOrder.orders)

//   return (
//     <div className='p-10'>
      
//       <Card className='mt-2'>
//         <CardHeader title="ORDER'S" />

//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Image</TableCell>
//                 <TableCell align="left">Title</TableCell>
//                 <TableCell align="left">ID</TableCell>
//                 <TableCell align="left">Price</TableCell>
//                 <TableCell align="left">Status</TableCell>
//                 <TableCell align="left">Update</TableCell>
//                 <TableCell align="left">Delete</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {adminOrder.orders?.map((item,index) => (
//                 <TableRow
//                   key={item.name}
//                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                 >
//                   <TableCell align=""  >
//                     <AvatarGroup max={3} sx={{justifyContent:"start"}} >
//                       {item.orderItems.map((orderItem) => <Avatar src={orderItem.product.imageUrl} ></Avatar>)}
//                     </AvatarGroup>
//                   </TableCell>
//                   <TableCell align="left" scope="row">
//                     {item.orderItems.map((orderItem) => <p>{orderItem.product.title}</p>)}
//                   </TableCell>
//                   <TableCell align="left">{item._id}</TableCell>
//                   <TableCell align="left">{item.totalPrice}</TableCell>
//                   <TableCell align="left"><span className={`text-white px-5 py-2 rounded-full ${item.orderStatus==="CONFIRMED"?"bg-[green]":item.orderStatus==="SHIPPED"?"bg-[blue]":
//                     item.orderStatus==="PLACED"?"bg-[gray]":
//                     item.orderStatus==="PENDING"?"bg-[orange]":
//                     "bg-[red]"}`}>{item?.orderStatus}</span></TableCell>
//                   {console.log("status code : ",item?.orderStatus)}
//                   <TableCell align="left">
//                     <Button
//                       id="basic-button"
//                       aria-haspopup="true"
//                       onClick={(event) => handleClick(event,index)}
//                       aria-controls={`basic-menu-${item?._id}`}
//                       aria-expanded={Boolean(anchorEl[index])}
//                     >
//                       Status
//                     </Button>
//                     <Menu
//                       id={`basic-menu-${item?._id}`}
//                       anchorEl={anchorEl[index]}
//                       open={Boolean(anchorEl[index])}
//                       onClose={() => handleClose(index)}
//                       MenuListProps={{
//                         'aria-labelledby': 'basic-button',
//                       }}
//                     >
//                       <MenuItem onClick={()=>handleConfirmedOrder(item._id)}>Confirmed Order</MenuItem>
//                       <MenuItem onClick={() => handleShipedOrder(item._id)}>Shipped Order</MenuItem>
//                       <MenuItem onClick={() => handleDeliveredOrder(item._id)}>Delivered Order</MenuItem>
//                     </Menu>
//                   </TableCell>
//                   <TableCell align="left">
//                     <Button onClick={()=>handleDeleteOrder(item._id)} variant="outlined"

//                       >Delete</Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//       </Card>

//     </div>
//   )
// }

// export default OrdersTable

// Cannot read properties of null(reading '0')
// TypeError: Cannot read properties of null(reading '0')
//     at http://localhost:3000/static/js/bundle.js:1751:52
//     at Array.map(<anonymous>)
//   at OrdersTable (http://localhost:3000/static/js/bundle.js:1673:139)
//   at renderWithHooks (http://localhost:3000/static/js/bundle.js:71438:22)
//   at updateFunctionComponent (http://localhost:3000/static/js/bundle.js:75005:24)
//   at beginWork (http://localhost:3000/static/js/bundle.js:76724:20)
//   at HTMLUnknownElement.callCallback (http://localhost:3000/static/js/bundle.js:61694:18)
//   at Object.invokeGuardedCallbackDev (http://localhost:3000/static/js/bundle.js:61738:20)
//   at invokeGuardedCallback (http://localhost:3000/static/js/bundle.js:61795:35)
//   at beginWork$1 (http://localhost:3000/static/js/bundle.js:81693:11)

