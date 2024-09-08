import React from "react"
import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () =>{

    const navigate = useNavigate();

    return(
        <div onClick={()=>navigate(`account/order/${5}`)} className="p-5 shadow-md shadow-black hover:shadow-2xl border">
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

                <Grid xs={6} item>

                    <div className="flex cursor-pointer">

                        <img className="h-[5rem] w-[5rem] object-cover object-top" src="https://assets.ajio.com/medias/sys_master/root/20230621/BkeZ/64926e2542f9e729d7652df1/-473Wx593H-463983528-black-MODEL.jpg" alt="" />
                        <div className="ml-5 space-y-2">

                            <p>Men Slim Mid Rise black jeans</p>
                            <p className="opacity-50 text-xs font-semibold">Size : M</p>
                            <p className="opacity-50 text-xs font-semibold">Color : Black</p>

                        </div>

                    </div>

                </Grid>

                <Grid item xs={2}>
                    <p>$1099</p>
                </Grid>

                <Grid item xs={4}>
                   {true && <div>
                        <p>
                            <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-green-600 mr-2 text-sm" />
                            <span>Delivered On March 03</span>
                        </p>
                        <p className="text-xs">Your Item has Been Delivered</p>
                    </div>}
                  {false && <p>
                        <span>Expected Delivery On March 03</span>
                    </p>}
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard;