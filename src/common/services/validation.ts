import * as Yup from 'yup';

export const FormSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    text: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export const LoginSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});
