import React from "react"
import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../State/Auth/Action";
// import { useEffect  } from "react";
// import { getUser } from "../../State/Auth/Action";


const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const jwt = localStorage.getItem("jwt")
    // const { auth } = useSelector((store) => store)

    // useEffect(() => {
    //     if (jwt) {
    //         dispatch(getUser(jwt))
    //     }
    // }, [jwt, auth.jwt])

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget);

        const userData = {
            email: data.get("email"),
            password: data.get("password")
        }
        dispatch(login(userData));
        console.log("user data",userData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3} >

                    <Grid item xs={12} >
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="email" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete="password" />
                    </Grid>

                    <Grid item xs={12}>
                        <Button className="bg-[#9155FD] w-full"
                            type="submit"
                            variant="cosntained"
                            size="large"
                            sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <div className="flex justify-center flex-col items-center">
                <div className="py-3 flex items-center">
                    <p>If you don't have  account ? </p>
                    <Button className="ml-5" size="small" onClick={() => navigate("/register")}>Register</Button>
                </div>
            </div>

        </div>
    )
}

export default LoginForm;