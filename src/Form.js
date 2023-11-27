import {Formik} from "formik";
import {Slider, TextField, Typography} from "@mui/material";

function Form(){
    async function submit(values) {
        console.log(values)
    }

    const initialValues = {
        name: '',
        happy: 0,
        stressed: 0,
    }


    return <Formik
        initialValues={initialValues}
        onSubmit={submit}
    >
        {formik => {
            const {getFieldProps} = formik
            return(
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <TextField
                            id={'name'}
                            label={'Name'}
                            variant={'standard'}
                            {...getFieldProps('name')}
                        >
                        </TextField>
                    </div>
                    <div className={}>
                        <Typography>Happiness</Typography>
                        <Slider
                            id={"happy"}
                            {...getFieldProps("happy")}
                            color={'secondary'}
                        >
                        </Slider>
                    </div>
                    <div>
                        <Typography>Stress level</Typography>
                        <Slider
                            id={"stressed"}
                            {...getFieldProps("stressed")}
                            color={'secondary'}
                        >
                        </Slider>
                    </div>
                    <button type={"submit"}>Submit</button>

                </form>
            )
        }}
    </Formik>



}

export default Form