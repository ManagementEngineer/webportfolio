import { useState, forwardRef } from "react";
import { Typography, Link, Grid, List, ListItem, Button, TextField, Snackbar, Paper, Box } from "@mui/material";
import Header from "../Header";
import Image from 'next/image';
import IndexArt from "../IndexArt/IndexArt";
import { useForm } from 'react-hook-form';
import MuiAlert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
    const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    });

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowSuccessSnackbar(false);
        setShowErrorSnackbar(false);
    };

    const onSubmit = (data) => {

        const templateParams = {
            username: data.username,
            email: data.email,
            message: data.message
        }

        emailjs.send(`${process.env.NEXT_PUBLIC_EMAILJS_SERVICEID}`, 'template_hvys07b', templateParams, `${process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY}`)
            .then(
                function (response) {
                    if (response.status === 200) {
                        handleCloseSnack();
                        setShowSuccessSnackbar(true);
                    } else {
                        handleCloseSnack();
                        setShowErrorSnackbar(true);
                    }
                }, function (error) {
                    console.log('FAILED...', error);
                });
    }

    return (
        <>
            <section id="contact">
                <Grid container>
                    <Grid item xs={12}>
                        <Header title='Contact Me' />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant='h6' component='div' align='left' sx={{ marginBottom: 2, padding: 2 }}>
                                    Say Hi
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Grid container component={Paper} direction='column' sx={{ marginBottom: 2 }}>
                                        <Grid item xl={6}>
                                            <Grid container spacing={2} sx={{ padding: 2 }} >
                                                <Grid item xs={12} >
                                                    <TextField
                                                        {...register("username", { required: "Please enter your name." })}
                                                        error={!!errors?.username}
                                                        helperText={errors?.username ? errors.username.message : null}
                                                        id="name"
                                                        label="Name"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        {...register("email", {
                                                            required: "Please enter your email address",
                                                            pattern: {
                                                                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                                message: "Invalid email address"
                                                            }
                                                        })}
                                                        error={!!errors?.email}
                                                        helperText={errors?.email ? errors.email.message : null}
                                                        id="email"
                                                        label="Email"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField multiline rows={4} {...register("message", { required: "Please enter a message." })}
                                                        error={!!errors?.message}
                                                        helperText={errors?.message ? errors.message.message : null}
                                                        id="message"
                                                        label="Message"
                                                        fullWidth
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Box sx={{ width: '100%', paddingTop: 2 }}>
                                            <Button type='submit' variant={showSubmitButton ? 'contained' : 'disabled'}>Submit</Button>
                                        </Box>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <IndexArt />
                    </Grid>
                </Grid>
            </section>
        </>
    )
};

export default Contact;


{/* <Grid container>
                            <Grid item xs={12}>
                                <Typography variant='h6' component='div' align='left' sx={{ marginBottom: 2, padding: 2 }}>
                                    If you have any issues or suggestions, please use the contact form below:
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Grid container component={Paper} direction='column' sx={{ marginBottom: 2 }}>
                                        <Grid item xl={6}>
                                            <Grid container spacing={2} sx={{ padding: 2 }} >
                                                <Grid item xs={12} >
                                                    <TextField
                                                        {...register("username", { required: "Please enter your name." })}
                                                        error={!!errors?.username}
                                                        helperText={errors?.username ? errors.username.message : null}
                                                        id="name"
                                                        label="Name"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        {...register("email", {
                                                            required: "Please enter your email address",
                                                            pattern: {
                                                                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                                message: "Invalid email address"
                                                            }
                                                        })}
                                                        error={!!errors?.email}
                                                        helperText={errors?.email ? errors.email.message : null}
                                                        id="email"
                                                        label="Email"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField multiline rows={4} {...register("message", { required: "Please enter a message." })}
                                                        error={!!errors?.message}
                                                        helperText={errors?.message ? errors.message.message : null}
                                                        id="message"
                                                        label="Message"
                                                        fullWidth
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Box sx={{ width: '100%', paddingTop: 2 }}>
                                            <Button type='submit' variant={showSubmitButton ? 'contained' : 'disabled'}>Submit</Button>
                                        </Box>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid> */}