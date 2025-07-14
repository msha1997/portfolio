"use client";

import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "@/hooks/useForm";
import FormInput from "@/components/ui/FormInput";
import { validateFields } from "./validateFields";
import { contactInputs } from "./contactInputs";
import {
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    EMAIL_PUBLIC_KEY,
} from "@/lib/constants";

const ContactForm: React.FC = () => {
    const {
        values,
        errors,
        handleChange,
        handleBlur,
        resetForm,
        validateAll,
        status,
        setErrorStatus,
    } = useForm({
        initialValues: { name: "", email: "", title: "", message: "" },
        validate: validateFields,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form before sending
        const isValid = validateAll();
        if (!isValid) {
            setErrorStatus("error");
            return;
        }

        // Prepare email parameters
        const emailParams = {
            ...values,
            time: new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "full",
                timeStyle: "long",
            }).format(new Date()),
        };

        try {
            await emailjs.send(
                EMAIL_SERVICE_ID,
                EMAIL_TEMPLATE_ID,
                emailParams,
                EMAIL_PUBLIC_KEY
            );
            setErrorStatus("success");
            resetForm();
        } catch (err) {
            console.error(err);
            setErrorStatus("error");
        }
    };

    const isInvalid = (field: string) => (errors[field] ? true : false);

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className="contact__form-element"
        >
            <div className="contact__form-grid">
                {contactInputs.map(({ label, id, type, placeholder, rows }) => (
                    <div key={id} className="contact__form-group">
                        <label className="contact__label" htmlFor={id}>
                            {label}
                        </label>
                        <FormInput
                            id={id}
                            name={id}
                            type={type}
                            placeholder={placeholder}
                            value={values[id]}
                            onChange={handleChange}
                            onBlur={() => handleBlur(id)}
                            invalid={isInvalid(id)}
                            textarea={type === "textarea"}
                            rows={rows}
                        />
                        {errors[id] && (
                            <div className="error-message">{errors[id]}</div>
                        )}
                    </div>
                ))}

                {status === "success" && (
                    <div className="contact__success">
                        Your message has been sent! I&apos;ll get back to you
                        soon.
                    </div>
                )}

                <div className="contact__form-group">
                    <button className="contact__button" type="submit">
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
