import * as yup from "yup";

const registrationValidator = yup.object({
  fname: yup.string().required("First Name field is mandatory"),
  lname: yup.string().required("Last Name field is mandatory"),
  email: yup.string().email().required("Email field is mandatory"),
  phone: yup
    .number("Only numbers are accepted")
    .required("Phone field is mandatory"),
  pwd: yup
    .string()
    .min(4, "Password must be at least 4 characters.")
    .matches(/^(\S+$)/g, "This field can't contain blankspaces")
    .required("Password must be provided"),

  confirmPwd: yup
    .string()
    .min(4, "Password must be at least 4 characters.")
    .matches(/^(\S+$)/g, "This field can't contain blankspaces")
    .required("Confirm password must be provided")
    .oneOf([yup.ref("pwd"), null], "Passwords must match"),
});

const loginValidator = yup.object({
  email: yup.string().email().required("Email field is mandatory"),
  pwd: yup
    .string()
    .min(4, "Password should be atleast 4 characters")
    .required("Password field is mandatory"),
});

const searchValidator = yup.object({
  country: yup.string(),
  region: yup.string(),
  city: yup.string(),
  bank: yup.string(), service: yup.string(),
})

const customSearchValidator = yup.object({
  country: yup.string(),
  region: yup.string(),
  service: yup.string(),
})

const contactValidator = yup.object({
  fname: yup.string().required("First Name field is mandatory"),
  lname: yup.string().required("Last Name field is mandatory"),
  email: yup.string().email().required("Email field is mandatory"),
  phone: yup
    .number("Only numbers are accepted")
    .required("Phone field is mandatory"),
  message: yup.string().required('Message is required'),  
 
});


export { loginValidator, registrationValidator,contactValidator, searchValidator, customSearchValidator };
