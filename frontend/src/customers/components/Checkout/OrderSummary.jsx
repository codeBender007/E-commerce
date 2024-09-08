import React, { useEffect } from "react"
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem"
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";


const OrderSummary = () =>{
    const dispatch = useDispatch();
    const location = useLocation();
    const { order } = useSelector(store => store)
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id")

    useEffect( ()=>{
        dispatch(getOrderById(orderId))
    },[orderId])
    console.log("shipping : ", order.order)
    console.log("order : ",order)
    return (
        <div>

            <div className="p-5 shadow-lg rounded-s-md border">
                <AddressCard address={order.order?.shippingAddress} />
            </div>

            <div>

                <div className="mt-10 lg:grid grid-cols-3 relative">

                    <div className="col-span-2">
                        {order.order?.orderItems.map((item) => <CartItem item={item} />)}
                    </div>

                    <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">

                        <div className="border rounded-sm">

                            <p className="uppercase font-bold opacity-60 pb-2">Price Details</p>
                            <hr />
                            <div className="space-y-3 font-semibold mb-10">

                                <div className="flex justify-between pt-3 text-black">
                                    <span>Price</span>
                                    <span>₹{order.order?.totalPrice}</span>
                                </div>

                                <div className="flex justify-between pt-3 text-black">
                                    <span>Disccount</span>
                                    <span className="text-green-600">-₹{order.order?.discounte}</span>
                                </div>

                                <div className="flex justify-between pt-3 text-black">
                                    <span>Delivery Charge</span>
                                     <span className="text-green-600">Free</span>
                                </div>

                                <div className="flex justify-between pt-3 font-bold text-black">
                                    <span>Total Amount</span>
                                    <span className="text-green-600">₹{order.order?.totalDiscountedPrice}</span>
                                </div>

                            </div>
                            <Button variant={"container"} className='mt-5 w-full bg-[#9155fd] px-4 py-2 mt-2 rounded-lg hover:bg-indigo-900'>
                                Checkout
                            </Button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default OrderSummary;