import * as yup from 'yup';


export const loginForm = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    hashed_password: yup.string().required('Password required')
});