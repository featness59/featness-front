import * as yup from "yup";

export const registerForm = yup.object().shape({
    first_name: yup.string().required('Prénom requis'),
    name: yup.string().required('Nom requis'),
    email: yup.string().email().required('Email requis'),
    hashed_password: yup.string().required('Mot de passe requis'),
    conf_pass: yup.string().required('Confirmation du mot de passe requis')
})