import React, {FC, useEffect} from "react";
import * as yup from "yup";

import Grid from "@mui/material/Grid";
import {useFormik} from "formik";


import {FormProps} from "@/types/form";
import FormField from "@/components/FormField";
import {Button, ButtonProps, styled} from "@mui/material";
import StyledButton from "@/components/StyledButton";




export type ContactFormFields = {
    name: string,
    email: string,
    phone: string
    message: string
}

type ContactFormProps = FormProps<ContactFormFields> & {
    sending: boolean
}
const ProfileForm: FC<ContactFormProps> = ({formId, submitAction, sending}) => {


    const validationSchema = yup.object().shape({
        name: yup.string().required("Campo requerido"),
        email: yup.string().email("Coreo Inválido"),
        phone: yup.string().required("Campo requerido"),
        message: yup.string().required("Campo requerido")
    });

    const {values, handleChange, handleSubmit, isValid} = useFormik<ContactFormFields>({
        initialValues: {name: "", email: "", message: "", phone: ""},
        validationSchema,
        validateOnBlur: false,
        validateOnMount: false,
        onSubmit: (fields) => {
            submitAction(fields);
        }
    });

    return (
        <form id={formId} onSubmit={handleSubmit}>
            <Grid container rowSpacing={3}>
                <Grid item xs={12}>
                    <FormField
                        fullWidth
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                        required
                        label={"Nombre"}
                        placeholder={"Nombre y apellidos"}
                        error={!values.name}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormField
                        fullWidth
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        required
                        label={"Correo"}
                        placeholder={"Correo"}
                        error={!values.email}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormField
                        fullWidth
                        name="phone"
                        onChange={handleChange}
                        value={values.phone}
                        required
                        label={"Teléfono"}
                        placeholder={"Teléfono"}
                        error={!values.phone}

                    />
                </Grid>

                <Grid item xs={12}>
                    <FormField
                        fullWidth
                        multiline
                        rows={4}
                        name="message"
                        onChange={handleChange}
                        value={values.message}
                        required
                        label={"Mensaje"}
                        placeholder={"Tu Mensage"}
                        error={!values.message}
                    />
                </Grid>

                <Grid item xs={12}>
                    <StyledButton disabled={!isValid || sending} size="large" variant="contained" type="submit">
                        {sending ? "Enviando...": "Enviar"}
                    </StyledButton>
                </Grid>
            </Grid>
        </form>
    );
};

export default ProfileForm;
