import { Box, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import ButtonReality from "./button";
import { CssTextField } from "./TextField";
import UploadVideo from "./UploadVideo";
import * as Yup from "yup";
import { updateVideo } from "../api/requests";
import ReactInputMask from "react-input-mask";

const UpdateVideo = () => {
  const [loading, setLoading] = useState(false);

  const SignupSchema = Yup.object().shape({
    document: Yup.string().required("*Obrigatório"),
    email: Yup.string().email("E-mail inválido").required("*Obrigatório"),
    video_url: Yup.string().required("*Obrigatório"),
  });

  const candidateFormik = useFormik({
    initialValues: {
      email: "",
      document: "",
      video_url: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      try {
        await updateVideo(values);
        toast.success("Vídeo atualizado!");
        candidateFormik.resetForm();
      } catch (e: any) {
        toast.error(e.message);
        setLoading(false);
      }
    },
  });

  return (
    <Box maxWidth="600px" m="auto">
      <Box mb="40px" color="#ffffff">
        <p
          style={{
            fontWeight: "500",
            fontSize: "1.3rem",
          }}
        >
          Ao enviar seu vídeo, aguarde um momento e confira abaixo se ele está
          funcionando corretamente.
        </p>
      </Box>
      <Box>
        <form onSubmit={candidateFormik.handleSubmit}>
          <Box display="flex" gap="15px" flexDirection="column">
            <Box width={"100%"}>
              <ReactInputMask
                mask="999.999.999-99"
                onChange={candidateFormik.handleChange}
                value={candidateFormik.values.document}
                render=
                {(inputProps) => {
                  return (
                    <CssTextField
                      {...inputProps}
                      fullWidth
                      id="document"
                      name="document"
                      type="text"
                      placeholder="CPF:" />
                  );
                }} />

              {candidateFormik.touched.document &&
                candidateFormik.errors.document ? (
                <Box textAlign="left" color="red">
                  {candidateFormik.errors.document}
                </Box>
              ) : null}
            </Box>
            <CssTextField
              fullWidth
              id="email"
              name="email"
              placeholder="E-mail:"
              type="text"
              onChange={candidateFormik.handleChange}
              value={candidateFormik.values.email}
            />
            {candidateFormik.touched.email && candidateFormik.errors.email ? (
              <Box textAlign="left" color="red">
                {candidateFormik.errors.email}
              </Box>
            ) : null}

            <Box
              display="flex"
              justifyContent="center"
              gap={"15px"}
              flexWrap={"wrap"}
            >
              <Box>
                <UploadVideo {...candidateFormik} />
                {candidateFormik.touched.video_url &&
                  candidateFormik.errors.video_url ? (
                  <Box textAlign="left" color="red">
                    {candidateFormik.errors.video_url}
                  </Box>
                ) : null}
              </Box>
            </Box>
            {candidateFormik.values.video_url !== "" && (
              <video width={"100%"} controls>
                <source
                  src={candidateFormik.values.video_url}
                  type="video/mp4"
                />
              </video>
            )}
            <Box textAlign="center" marginTop={5}>
              <ButtonReality
                id="btn-inscription"
                disabled={loading}
                type="submit"
              >
                {loading && <CircularProgress />}
                Enviar
              </ButtonReality>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default UpdateVideo;
