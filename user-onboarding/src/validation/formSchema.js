import * as yup from "yup"

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name required")
    .min(4, "Name must be at least 4 characters long"),
  email: yup
    .string()
    .trim()
    .email("Must be valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Secure password required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  terms: yup.boolean(),
})

export default formSchema
