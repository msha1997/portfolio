import { useState } from "react";

interface UseFormOptions {
    initialValues: Record<string, string>;
    validate?: (values: Record<string, string>) => Record<string, string>;
}

export const useForm = ({ initialValues, validate }: UseFormOptions) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
        if (validate) {
            const validationErrors = validate({ ...values, [name]: value });
            setErrors(validationErrors);
        }
    };

    const handleBlur = (name: string) => {
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    const validateAll = () => {
        if (validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);
            return Object.keys(validationErrors).length === 0;
        }
        return true;
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setTimeout(() => setStatus("idle"), 5000);
    };

    const setErrorStatus = (status: 'idle' | 'success' | 'error') => {
        setStatus(status);
    };

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        validateAll,
        resetForm,
        status,
        setErrorStatus,
    };
};
