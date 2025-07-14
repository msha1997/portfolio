export const validateFields = (values: Record<string, string>) => {
    const errors: Record<string, string> = {};
    if (!values.name.trim()) errors.name = "Name is required";
    if (!values.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email))
        errors.email = "Email is invalid";
    if (!values.title.trim()) errors.title = "Subject is required";
    if (!values.message.trim()) errors.message = "Message is required";
    return errors;
};