import * as yup from 'yup';

export const loginValidator = yup.object().shape({
    username: yup
    .string()   
    .required("Please enter a valid username."),
    password: yup
    .string()
    .required("Please enter a valid password."),
});

export const registerValidator = yup.object().shape({
    email: yup
        .string()
        .email()
        .required("Please enter a valid email."),
    username: yup
        .string()
        .required("Please enter a username."),
    password: yup
        .string()
        .required("Please enter a valid password."),
    confirmPassword: yup
        .string()
        .required("Please confirm password.")
});