import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Typography from '@mui/material/Typography';
import Image from './logo.jpeg'
import {useFormik} from "formik";
import {Slider} from "@mui/material";
import dayjs from 'dayjs';
import DateInput from "./date-input";


export default function SignInSide() {
    const formik = useFormik({
        initialValues: {
            name: '',
            happy: 50,
            stressed: 50,
            date: dayjs()
        },
        onSubmit: (values) => submit(values)
    })
    async function submit(values) {
        console.log('Hit')
        console.log(values)
    }

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${Image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <PsychologyIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Daily Report
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id={"name"}
                            label={"Name"}
                            {...formik.getFieldProps("name")}
                            autoFocus
                        />
                            <DateInput
                                label={'Date'}
                                inputName={'date'}
                                handleBlur={formik.handleBlur}
                                setFieldValue={formik.setFieldValue}
                                value={formik.values.date}
                            ></DateInput>

                        <Typography>Happiness</Typography>
                        <Slider
                            margin={"normal"}
                            fullWidth
                            required
                            id={"happy"}
                            {...formik.getFieldProps("happy")}
                        >
                        </Slider>

                        <Typography>Stress</Typography>
                        <Slider
                            margin={"normal"}
                            fullWidth
                            required
                            id={"stressed"}
                            {...formik.getFieldProps("stressed")}
                            color={'secondary'}
                        >
                        </Slider>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}