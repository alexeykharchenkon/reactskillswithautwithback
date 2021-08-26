import { USER_REGISTER } from "@actions/index";
import { Button, Container, Typography } from "@material-ui/core";
import { User } from "@models/types";
import { RegisterSchema } from "@services/validation";
import { Field, Form, Formik, ErrorMessage, FormikHelpers } from 'formik';
import { v4 as uuidv4 } from 'uuid';


interface RegisterProps {
    handleClose: () => void;
    authFunc: (action: string, user: User) => void;
    classes: any;
}

export const Register = ({ authFunc, handleClose, classes } : RegisterProps) => {
    var initialValues: User = { id: '', name: '', password: ""};

    return (
        <Container className={classes.login_container}>
            <Typography variant="h5" align="center">Register</Typography>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={RegisterSchema}
                onSubmit={(values: User, {resetForm}: FormikHelpers<User>) => {
                        authFunc(USER_REGISTER, {id: uuidv4(), name: values.name, password: "12345"});
                        resetForm();   
                        handleClose();
                    }
                }   
            >
                <Form className={classes.form_body}>
                    <Field id="id" name="id" hidden />
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field id="name" name="name" placeholder="Name" />
                        <ErrorMessage name="name" />
                    </div>
                    <Button type="submit" variant="contained" color="primary">
                        Register
                    </Button>
                </Form>
            </Formik>
        </Container>
    );
}
