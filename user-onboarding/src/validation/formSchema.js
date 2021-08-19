import * as yup from "yup"

cost formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Name required")
        .min(4, "Name must be at least 4 characters long"),
    email:
    password:
    terms:
    submit:
})