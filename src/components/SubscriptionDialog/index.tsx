import React from "react";
import {
  DialogProps,
  styled,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import FormField from "@/components/FormField";
import CloseIcon from "@mui/icons-material/Close";
import ValidIcon from "@mui/icons-material/CheckCircle";
import InvalidIcon from "@mui/icons-material/Cancel";
import Stack from "@mui/material/Stack";
import * as yup from "yup";
import { useFormik } from "formik";
import useHelpiaApi from "@/hooks/use-helpia-api";
import { toast } from "react-toastify";
import { ApiNewsletterUp } from "@/types/api";
import useLocalStorage from "@/hooks/use-local-storage";
import useMail from "@/hooks/use-mail";

const StyledDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
  "&.MuiDialog-root": {
    ".MuiDialog-paper": {
      background: "#0a0b1d",
      color: theme.palette.text.disabled,
      maxWidth: "368px",
      minWidth: "250px",
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  "&.Mui-disabled": {
    background: theme.palette.text.disabled,
  },
}));

type SubscriptionStore = {
  opened: boolean;
  subscribed: boolean;
};

type SubscriptionDialogFormFields = {
  email: string;
};

const SubscriptionDialog: React.FC = () => {
  const key = "newsletter";
  const { getData, putData } = useLocalStorage();
  const { apiPost } = useHelpiaApi();
  const { sendSubscriptionMail } = useMail();
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const formId = "subscription-dialog-form";

  const validationSchema = yup.object().shape({
    email: yup.string().email("Coreo Inválido").required(),
  });

  const { values, handleChange, handleSubmit, isValid } =
    useFormik<SubscriptionDialogFormFields>({
      initialValues: { email: "" },
      validationSchema,
      validateOnBlur: false,
      validateOnMount: false,
      onSubmit: (fields) => {
        processSubmit(fields.email);
      },
    });

  const processSubmit = (email: string) => {
    setLoading(true);
    apiPost<ApiNewsletterUp>("/newsletter/subscriber", { email })
      .then(() => {
        toast.success("Se ha subscrito a nuestro canal de información");
        sendSubscriptionMail(email);
        handleClose();
        putData<SubscriptionStore>(key, { opened: true, subscribed: true });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Lo sentimos, no pudimos subscribirlo");
      });
  };
  const handleClose = () => {
    setOpen(false);
    setLoading(false);
  };

  React.useEffect(() => {
    const data = getData<SubscriptionStore>(key);
    if (!data || (data && !data.opened && !data.subscribed)) {
      setTimeout(() => {
        setOpen(true);
        // orlando sugirio que quede siempre abierto
        // putData<SubscriptionStore>(key, {opened: true, subscribed: false})
      }, 15000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*React.useEffect(() => {
        window.addEventListener("beforeunload", function (e) {
            //(e || window.event).returnValue = null;
            e.preventDefault()
            e.returnValue = null
            setOpen(true)
            return null;
        }, true);
    },)*/

  if (!open) {
    return null;
  }
  return (
    <StyledDialog open={open}>
      <DialogTitle sx={{ px: 2 }}>
        <Stack>
          <Stack direction="row" justifyContent="flex-end">
            <CloseIcon
              fontSize="small"
              sx={{ cursor: "pointer" }}
              onClick={handleClose}
            />
          </Stack>
          <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
            ¿Mucha información? ¡No hay problema!
          </Typography>
        </Stack>
      </DialogTitle>

      <DialogContent sx={{ px: 2 }}>
        <Stack gap={1}>
          <Typography variant="caption" sx={{ mb: 2 }}>
            Subscríbete y recibe recomendaciones de nuestro equipo para{" "}
            <strong>potenciar tu negocio.</strong>
          </Typography>
          <form id={formId} onSubmit={handleSubmit}>
            <Stack gap={2}>
              <FormField
                fullWidth
                size="small"
                placeholder="mail@example.com"
                name="email"
                onChange={handleChange}
                value={values.email}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {isValid && (
                        <ValidIcon
                          sx={{ fontSize: 22, color: "primary.dark" }}
                        />
                      )}
                      {!isValid && (
                        <InvalidIcon
                          sx={{ fontSize: 22, color: "error.main" }}
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
              <StyledButton
                disabled={!isValid}
                size="small"
                variant="contained"
                type="submit"
                sx={{ fontWeight: "bold" }}
              >
                {loading ? "Subscríbase..." : "Subscríbase"}
              </StyledButton>
            </Stack>
          </form>
        </Stack>
      </DialogContent>
    </StyledDialog>
  );
};

export default SubscriptionDialog;
