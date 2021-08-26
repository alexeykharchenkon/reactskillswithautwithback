import { Container, Typography, Popover, Button } from '@material-ui/core';
import { Field, Form, Formik, ErrorMessage, FormikHelpers } from 'formik';
import { Item } from '@models/types';
import { ADD_ITEM, SET_ACTIVE_ITEM_UNDEFINED, UPDATE_ITEM } from '@actions/index';
import { v4 as uuidv4 } from 'uuid';
import { FormSchema } from '@services/validation';

interface FormProps {
    open: boolean;
    handleClose: () => void;
    anchorEl: HTMLButtonElement | null;
    operationFunc: any;
    activeItem: Item | undefined;
    classes: any;
}

export const FormComponent = ({ open, handleClose, anchorEl, 
    operationFunc, activeItem, classes }: FormProps) => {

    var initialValues: Item = Boolean(!activeItem) ? 
        { id: '', title: '', text: '', isChecked: false } : activeItem as Item;

    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={() => {
                handleClose();
                operationFunc(SET_ACTIVE_ITEM_UNDEFINED, undefined);
            }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >      
        <Container className={classes.form}>
            <Typography variant="h5" align="center">Form</Typography>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={FormSchema}
                onSubmit={(values: Item, {resetForm}: FormikHelpers<Item>) => {
                        Boolean(!activeItem) ? 
                        operationFunc(ADD_ITEM, {...values, id: uuidv4()}) :
                        operationFunc(UPDATE_ITEM, {...values});

                        resetForm();
                        handleClose();
                    }
                }   
            >
                <Form className={classes.form_body}>
                    <Field id="id" name="id" hidden />
                    <Field id="isChecked" name="isChecked" hidden />
                    <div>
                        <label htmlFor="title">Title</label>
                        <Field id="title" name="title" placeholder="Title" />
                        <ErrorMessage name="title" />
                    </div>
                    <div>
                        <label htmlFor="text">Text</label>
                        <Field id="text" name="text" placeholder="Text" />
                        <ErrorMessage name="text" />
                    </div>
                    <Button type="submit" color="secondary">
                        {activeItem && (<span>Save</span>)}
                        {!activeItem && (<span>Add</span>)}
                    </Button>
                </Form>
            </Formik>
        </Container>
      </Popover>    
    );
}