import { Button, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomTextField from "../common/CustomTextField";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "gowtham@gmail.com" && password === "gkish1993") {
      navigate("/home");
    }
  };

  return (
    <div>
      <div>
        <br />
        <Container>
          <h3>Login</h3>

          <Grid container>
            <Grid item md={8}>
              <CustomTextField
                label="Email"
                variant="outlined"
                value={email}
                handleChange={setEmail}
              />
            </Grid>
          </Grid>

          <br />
          <Grid container>
            <Grid item md={8}>
              <CustomTextField
                label="Password"
                variant="outlined"
                value={password}
                handleChange={setPassword}
              />
            </Grid>
          </Grid>
          <br />
          <Button onClick={handleLogin} variant="contained">
            Login
          </Button>
          <Link to={"/register"}>
            <Button variant="contained">Register</Button>
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Login;
