import { Button, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomTextField from "../common/CustomTextField";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <br />
        <Container>
          <h3>Register</h3>

          <Grid container>
            <Grid item md={8}>
              <CustomTextField
                label="Username"
                variant="outlined"
                value={username}
                handleChange={setUsername}
              />
            </Grid>
          </Grid>
          <br />

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
          <Link to={"/"}>
            <Button variant="contained">Back to Login</Button>
          </Link>
          <Link to={"/register"}>
            <Button variant="contained">Register</Button>
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Register;
