import { USER_LOGIN } from "@actions/index";
import { Button, Container, Typography } from "@material-ui/core";
import { User } from "@models/types";
import { LoginSchema } from "@services/validation";
import { Field, Form, Formik, ErrorMessage, FormikHelpers } from 'formik';

interface LoginProps {
    handleClose: () => void;
    authFunc: (action: string, user: User) => void;
    classes: any;
}

export const Login = ({ authFunc, handleClose, classes } : LoginProps) => {
    var initialValues: User = { id: '', name: '', password: ''};

    return (
        <Container className={classes.login_container}>
            <Typography variant="h5" align="center">Login</Typography>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={(values: User, {resetForm}: FormikHelpers<User>) => {
                        authFunc(USER_LOGIN, {id: values.id, name: values.name, password: "12345"})
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
                    <Button type="submit" variant="contained" color="secondary">
                        Login
                    </Button>
                </Form>
            </Formik>
        </Container>
    );
}
