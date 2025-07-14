import React from "react";

interface FormInputProps {
    id: string;
    name: string;
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlur?: () => void;
    placeholder?: string;
    invalid?: boolean;
    type?: string;
    textarea?: boolean;
    rows?: number;
}

const FormInput: React.FC<FormInputProps> = ({
    id,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    invalid = false,
    textarea = false,
    rows,
}) => {
    const className = `form__input ${invalid ? "form__input--invalid" : ""}`;

    if (textarea) {
        return (
            <textarea
                id={id}
                name={name}
                rows={rows}
                placeholder={placeholder}
                className={`${className} form__textarea`}
                value={value}
                onChange={onChange}
                aria-required="true"
            />
        );
    }

    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onChange}
            aria-required="true"
        />
    );
};

export default FormInput;
