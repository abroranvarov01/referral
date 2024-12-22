import React from "react";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import theme from "../../config/theme";
import { useLogin } from "./service/mutation/useLogin";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  backgroundColor: "#1E1E1E",
  color: "#EAB308",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: "100vh",
  minHeight: "100%",
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage:
    "linear-gradient(to bottom, #252525, #3A3A3A 25%, #EAB308 15%, #3A3A3A 25%, #252525)",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
}));

const CustomTextField = styled(TextField)({
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: "400",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E0E0",
    },
    "&:hover fieldset": {
      borderColor: "#FFC107",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EAB308",
    },
  },
  "& .MuiFormHelperText-root": {
    color: "#FF5252",
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#EAB308",
  color: "#1E1E1E",
  padding: theme.spacing(1.5),
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: "bold",
  fontSize: "1rem",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "#FFC107",
  },
}));

export default function Login() {
  const { mutate } = useLogin();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "data");
    console.log(mutate(data));
  };

  return (
    <Box>
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Box textAlign={"center"}>
            <img
              width={"60px"}
              height={"60px"}
              src="./favicon.png"
              alt="App Logo"
              style={{ borderRadius: "50%" }}
            />
          </Box>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: "100%",
              fontSize: "clamp(2rem, 10vw, 2.15rem)",
              fontWeight: "bold",
              color: "#EAB308",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 3,
              }}
            >
              <FormControl>
                <FormLabel htmlFor="login">Login</FormLabel>
                <Controller
                  name="login"
                  control={control}
                  rules={{
                    required: "Login is required",
                  }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      error={!!errors.login}
                      helperText={errors.login ? errors.login.message : ""}
                      id="login"
                      autoComplete="username"
                      required
                      fullWidth
                    />
                  )}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      error={!!errors.password}
                      helperText={
                        errors.password ? errors.password.message : ""
                      }
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      required
                      fullWidth
                    />
                  )}
                />
              </FormControl>

              <StyledButton type="submit" fullWidth>
                Sign in
              </StyledButton>
            </Box>
          </form>

          <Divider sx={{ color: "#EAB308", my: 3 }} />
          <Box textAlign="center">
            <Typography sx={{ color: "#F5F5F5" }}>
              Don&apos;t have an account?{" "}
              <Link
                sx={{ color: "#EAB308", textDecoration: "none" }}
                href="/registration"
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </Box>
  );
}
