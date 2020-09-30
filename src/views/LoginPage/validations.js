import * as yup from 'yup';

export const loginValidator = yup.object().shape({
    email: yup
    .string()
    .email()
    .required("Please enter a valid email."),
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
        .required("Please enter your password")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),        
    confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .when("password", {
          is: password => (password && password.length > 0 ? true : false),
          then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
        })
});

export default {
    loginForm: loginValidator,
    registerForm: registerValidator
}