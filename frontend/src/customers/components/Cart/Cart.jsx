import React, { useEffect } from "react"
import CartItem from "./CartItem";
import { Button } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
    const navigate = useNavigate();
    const { cart } = useSelector(store => store)
    const dispatch = useDispatch();
    const handleCheckout = () => {
        navigate("/checkout?step=2")
    }

    useEffect(() => {
        dispatch(getCart())
    },[cart.updateCartItem,cart.deleteCartItem])

    return (
        <div>

            <div className="mt-10 lg:grid grid-cols-3 lg:px-16 relative">

                <div className="col-span-2">
                    {cart.cart?.cartItems.map((item) => <CartItem item={item} />)}
                </div>

                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">

                    <div className="border rounded-sm">

                        <p className="uppercase font-bold opacity-60 pb-2">Price Details</p>
                        <hr />
                        <div className="space-y-3 font-semibold mb-10">

                            <div className="flex justify-between pt-3 text-black">
                                <span>Price</span>
                                <span>${cart.cart?.totalPrice}</span>
                            </div>

                            <div className="flex justify-between pt-3 text-black">
                                <span>Disccount</span>
                                <span className="text-green-600">-₹{cart.cart?.discounte}</span>
                            </div>

                            <div className="flex justify-between pt-3 text-black">
                                <span>Delivery Charge</span>
                                <span className="text-green-600">Free</span>
                            </div>

                            <div className="flex justify-between pt-3 font-bold text-black">
                                <span>Total Amount</span>
                                <span className="text-green-600">₹{cart.cart?.totalDiscountedPrice}</span>
                            </div>

                        </div>
                        <Button onClick={handleCheckout} variant={"container"} className='mt-5 w-full bg-[#9155fd] px-4 py-2 mt-2 rounded-lg hover:bg-indigo-900'>
                            Checkout
                        </Button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Cart;