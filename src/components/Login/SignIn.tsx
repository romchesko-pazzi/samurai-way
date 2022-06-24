import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {SubmitHandler, useForm} from "react-hook-form";
import {Redirect} from "react-router-dom";
import s from "./SignIn.module.css";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type SignInPropsType = {
    isAuth: boolean
    error: string
    signIn: (email: string, password: string, rememberMe: boolean) => void
}

const theme = createTheme();

export const SignIn: React.FC<SignInPropsType> = (props) => {
    const {isAuth, signIn, error} = props
    const {register, handleSubmit, reset} = useForm<FormDataType>({
        mode: "onBlur"
    });
    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        const {email, password, rememberMe} = data;
        signIn(email, password, rememberMe);
        reset();
    };
    if (isAuth) {
        return <Redirect to={"/profile/"}/>
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            autoComplete="email"
                            autoFocus
                            error={!!error}
                            {...register("email", {})}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={!!error}
                            {...register("password")}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                            {...register("rememberMe")}
                        />
                        <Button
                            type={"submit"}
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <div className={s.errorBlock}>
                            <span>{error}</span>
                        </div>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}