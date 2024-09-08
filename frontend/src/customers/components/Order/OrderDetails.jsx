import React from "react"
import AddressCard from "../AddressCard/AddressCard"
import OrderTracker from "./OrderTracker"
import { Grid , Box } from "@mui/material"
import { deepPurple } from "@mui/material/colors"
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () =>{
    return (
        <div className="px:5 lg:px-20">

            <div>
                <h1 className="font-bold text-xl py-7">Delivery Address</h1>
                <AddressCard />
            </div>

            <div className="py-20">
                <OrderTracker activeStep={3} />
            </div>

            <Grid className="space-y-5" container > 

{[1,1,1,1,1].map( (item)=> 


    <Grid container item className="shadow-xl rounded-md border p-5"
        sx={{ alignItems: "center", justifyContent: "space-between" }}>

        <Grid item xs={6}>

            <div className="flex items-center space-x-4">

                <img className="h-[8rem] w-[8rem] object-cover object-top" src="https://rukminim2.flixcart.com/image/850/1000/xif0q/trouser/y/d/o/34-black-pant-2-amazing-star-fashion-original-imagnjj2bzz9vreb.jpeg?q=90&crop=false" alt="" />

                <div className="space-y-2 ml-5">
                    <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                    <p className="space-x-5 opacity-50 text-xs font-semibold "> <span>Color : Pink</span> <span>Size : M</span> </p>
                    <p>Seller : Linaria</p>
                    <p>$1099</p>
                </div>

            </div>

        </Grid>

        <Grid item>
            <Box sx={{ color: deepPurple[500] }}>

                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & And Review Product</span>

            </Box>
        </Grid>

    </Grid>

    )} 

            </Grid>

        </div>
    )
}

export default OrderDetails;