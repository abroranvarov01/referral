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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import theme from "../../config/theme";
import { useRegister } from "./service/mutation/useRegister";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  backgroundColor: "#1E1E1E",
  color: "#F5F5F5",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "500px",
  },
  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2), 0px 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflowY: "auto", // Добавлено для скролла
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
}));

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "400",
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

const CustomRadio = styled(Radio)(({ theme }) => ({
  color: "#EAB308",
  "&.Mui-checked": {
    color: "#EAB308",
  },
  "&:hover": {
    backgroundColor: "transparent", // Убирает изменение цвета фона при наведении
  },
}));

const CustomFormLabel = styled(FormLabel)({
  color: "#F5F5F5", // Устанавливаем цвет текста явно
  "&.Mui-focused": {
    color: "#F5F5F5", // Убираем изменение цвета при фокусе
  },
});

export default function Register() {
  const { mutate } = useRegister();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "data");
    mutate(data);
  };

  return (
    <SignUpContainer>
      <Card>
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
            fontSize: "clamp(1.8rem, 6vw, 2.4rem)",
            fontWeight: "bold",
            color: "#F5F5F5",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Create Your Account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 3,
            }}
          >
            <FormControl>
              <CustomFormLabel htmlFor="fullName">Full Name</CustomFormLabel>
              <Controller
                name="fullName"
                control={control}
                rules={{ required: "Full Name is required" }}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    error={!!errors.fullName}
                    helperText={errors.fullName ? errors.fullName.message : ""}
                    id="fullName"
                    placeholder="John Doe"
                    required
                    fullWidth
                  />
                )}
              />
            </FormControl>

            <FormControl>
              <CustomFormLabel htmlFor="dob">Date of Birth</CustomFormLabel>
              <Controller
                name="dob"
                control={control}
                rules={{ required: "Date of Birth is required" }}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    error={!!errors.dob}
                    helperText={errors.dob ? errors.dob.message : ""}
                    id="dob"
                    type="date"
                    required
                    fullWidth
                  />
                )}
              />
            </FormControl>

            <FormControl>
              <CustomFormLabel htmlFor="phone">Phone Number</CustomFormLabel>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "Phone Number is required",
                  pattern: {
                    value: /^\+?[1-9]\d{1,14}$/,
                    message: "Enter a valid phone number",
                  },
                }}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    error={!!errors.phone}
                    helperText={errors.phone ? errors.phone.message : ""}
                    id="phone"
                    placeholder="+1234567890"
                    required
                    fullWidth
                  />
                )}
              />
            </FormControl>

            <FormControl>
              <CustomFormLabel>Gender</CustomFormLabel>
              <Controller
                name="gender"
                control={control}
                rules={{ required: "Gender is required" }}
                render={({ field }) => (
                  <RadioGroup {...field} row>
                    <FormControlLabel
                      value="Male"
                      control={<CustomRadio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Female"
                      control={<CustomRadio />}
                      label="Female"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>

            <FormControl>
              <CustomFormLabel htmlFor="city">City</CustomFormLabel>
              <Controller
                name="city"
                control={control}
                rules={{ required: "City is required" }}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    error={!!errors.city}
                    helperText={errors.city ? errors.city.message : ""}
                    id="city"
                    placeholder="Your City"
                    required
                    fullWidth
                  />
                )}
              />
            </FormControl>

            <FormControl>
              <CustomFormLabel htmlFor="login">Login</CustomFormLabel>
              <Controller
                name="login"
                control={control}
                rules={{ required: "Login is required" }}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    error={!!errors.login}
                    helperText={errors.login ? errors.login.message : ""}
                    id="login"
                    placeholder="Username"
                    required
                    fullWidth
                  />
                )}
              />
            </FormControl>

            <FormControl>
              <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
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
                    helperText={errors.password ? errors.password.message : ""}
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    fullWidth
                  />
                )}
              />
            </FormControl>

            <FormControl>
              <CustomFormLabel htmlFor="confirmPassword">
                Confirm Password
              </CustomFormLabel>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === control._formValues.password ||
                    "Passwords do not match",
                }}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    error={!!errors.confirmPassword}
                    helperText={
                      errors.confirmPassword
                        ? errors.confirmPassword.message
                        : ""
                    }
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    fullWidth
                  />
                )}
              />
            </FormControl>
          </Box>

          <StyledButton type="submit" fullWidth sx={{ mt: 2 }}>
            Create Account
          </StyledButton>
        </form>

        <Divider sx={{ color: "#BDBDBD", marginY: "1.5rem" }} />
        <Box textAlign={"center"}>
          <Typography color="#BDBDBD">
            Already have an account?{" "}
            <Link
              sx={{ color: "#EAB308", textDecoration: "none" }}
              href="/login"
            >
              Sign in
            </Link>
          </Typography>
        </Box>
      </Card>
    </SignUpContainer>
  );
}
