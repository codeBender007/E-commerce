import React from "react"
import { Step, Stepper , StepLabel} from "@mui/material";

const OrderTracker = ({activeStep}) =>{

    const step = [
        "Placed",
        "Order Confirmed",
        "shipped",
        "Out For Delivery",
        "Delivered",
    ] 

    return (
        <div className="w-full">
            <Stepper activeStep={activeStep} alternativeLabel>

                {step.map( (label)=> <Step>
                    <StepLabel sx={{color:"#9155FD",fontSize:"44px"}} >{label}</StepLabel>
                </Step> )}

            </Stepper>
        </div>
    )
}

export default OrderTracker;