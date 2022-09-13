import * as yup from "yup";

export const registerForm = yup.object().shape({
    prénom: yup.string().required('Prénom requis'),
    nom: yup.string().required('Nom requis'),
    email: yup.string().email().required('Email requis'),
    password: yup.string().required('Mot de passe requis'),
    conf_pass: yup.string().required('Confirmation du mot de passe requis')
})