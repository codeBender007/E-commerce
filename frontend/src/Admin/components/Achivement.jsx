import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TringleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute",
})

const TrophyImg = styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute",
})

const Achivement = () =>{
    return (
        <Card className="" sx={{position:"relative" }}>
            <CardContent>
                <Typography variant="h6" sx={{letterSpacing:".25px"}}>
                    Shop with Adnan
                </Typography>
                <Typography variant="body2">Congratulations 🥳 </Typography>
                <Typography variant="h5" sx={{my:3.1}}> 420.8k </Typography>

                <Button size="small" variant="contained">view sales</Button>


                <TrophyImg src="https://cdn.vectorstock.com/i/1000v/05/91/realistic-golden-trophy-on-black-background-award-vector-25530591.jpg"></TrophyImg>
            </CardContent>
        </Card>
    )
}

export default Achivement;