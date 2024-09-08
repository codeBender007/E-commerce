

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
        <CardHeader title="Recent ORDER'S" />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                {/* <TableCell align="left">ID</TableCell> */}
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
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
                  {/* <TableCell align="left">{item._id}</TableCell> */}
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
