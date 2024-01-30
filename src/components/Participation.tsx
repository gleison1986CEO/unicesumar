import {
  Box,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import { createCandidate, createVoter } from "../api/requests";
import {
  ICandidate,
  ICandidateCRM,
  ICandidateRegister,
  IVoterRegister,
} from "../interfaces/inscription";
import ButtonReality from "./button";
import { CssTextField } from "./TextField";
import UploadPhoto from "./UploadPhoto";
import UploadVideo from "./UploadVideo";
import * as Yup from "yup";
import { ThanksParticipate } from "./ThanksParticipate";
import ReactInputMask from "react-input-mask";
import { estados } from "../utils/states_cities.json";
import { musics } from "../utils/musics.json";
import { repertoires } from "../utils/repertoires.json";
import { CssSelect } from "./Select";
import axios from "axios";

const Participation = () => {
  const [isCandidate, setIsCandidate] = useState(true);
  const [candidate, setCandidate] = useState < ICandidate > ();
  const [thanks, setThanks] = useState(false);
  const [loading, setLoading] = useState(false);

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("*Obrigatório"),
    email: Yup.string().email("E-mail inválido").required("*Obrigatório"),
    document: Yup.string().required("*Obrigatório"),
    phone: Yup.string().required("*Obrigatório"),
    city: Yup.string().required("*Obrigatório"),
    state: Yup.string().required("*Obrigatório"),
    whatsApp: Yup.string().required("*Obrigatório"),
    instagram: Yup.string().required("*Obrigatório"),
    facebook: Yup.string().required("*Obrigatório"),
    description: Yup.string().required("*Obrigatório"),
    avatar_url: Yup.string().required("*Obrigatório"),
    video_url: Yup.string().required("*Obrigatório"),
    why: Yup.string().required("*Obrigatório"),
    resilience: Yup.string().required("*Obrigatório"),
    repertoire: Yup.string().required("*Obrigatório"),
    music_fav: Yup.string().required("*Obrigatório"),
    accept: Yup.boolean()
      .required("Os termos e condições devem ser aceitos.")
      .oneOf([true], "Os termos e condições devem ser aceitos."),
  });

  const SignupSchemaSingle = Yup.object().shape({
    name: Yup.string().required("*Obrigatório"),
    email: Yup.string().email("E-mail inválido").required("*Obrigatório"),
    phone: Yup.string().required("*Obrigatório"),
    city: Yup.string().required("*Obrigatório"),
    state: Yup.string().required("*Obrigatório"),
  });

  const candidateFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      document: "",
      phone: "",
      city: "",
      state: "",
      whatsApp: "",
      instagram: "",
      facebook: "",
      description: "",
      why: "",
      resilience: "",
      avatar_url: "",
      video_url: "",
      repertoire: "",
      music_fav: "",
      accept: false,
    },
    validationSchema: SignupSchema,
    onSubmit: async (values: ICandidateRegister) => {
      try {
        setLoading(true);
        let ret: ICandidate = await createCandidate(values);
        setCandidate(ret);
        setLoading(false);
        let crmInfo: ICandidateCRM = {
          nome: values.name,
          cpf: values.document,
          email: values.email,
          celular: values.whatsApp,
          telefone: values.phone,
          polo: "304",
          cp_campanha: "DOM Reality 2023",
          cp_origem: "CANDIDATO",
          como_conheceu: "DOM Reality 2023",
          fl_aceite_info: "1",
          tipo: "L",
          modalidade: "GRAD",
        };

        axios.get("https://api.unicesumar.edu.br/v1/ead/lead/contato/salvar", {
          params: crmInfo,
        });

        toast.success("Candidatura realizada!");
        setThanks(true);
        candidateFormik.resetForm();
      } catch (e: any) {
        toast.error(e.message);
        setLoading(false);
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      state: "",
    },
    validationSchema: SignupSchemaSingle,
    onSubmit: async (values: IVoterRegister) => {
      try {
        setLoading(true);
        await createVoter(values);
        setLoading(false);
        toast.success("Agora você você pode votar");
        formik.resetForm();
      } catch (e: any) {
        toast.error(e.message);
        setLoading(false);
      }
    },
  });

  return (
    <Box maxWidth="600px" m="auto">
      {thanks && candidate ? (
        <ThanksParticipate {...candidate} />
      ) : (
        <Fragment>
          {/* <Box display="flex" justifyContent="center" mb="40px">
            <Box sx={{
              cursor: "pointer",
              padding: "20px 30px",
              backgroundColor: !isCandidate ? "#009db8" : "#003872",
              color: "#ffffff",
              borderTopLeftRadius: "30px",
              borderBottomLeftRadius: "30px"
            }} onClick={() => { setIsCandidate(true) }}>quero me inscrever</Box>
            <Box sx={{
              cursor: "pointer",
              padding: "20px 30px",
              backgroundColor: isCandidate ? "#009db8" : "#003872",
              color: "#ffffff",
              borderTopRightRadius: "30px",
              borderBottomRightRadius: "30px"
            }} onClick={() => document.getElementById('section-robo-desclassifica')?.scrollIntoView({ behavior: 'smooth' })}>quero votar</Box>
          </Box> */}

          <Box mb="40px" color="#ffffff">
            <p
              style={{
                fontWeight: "500",
                fontSize: "1.3rem",
              }}
            >
              Se inscreva agora mesmo e participe do primeiro reality show de
              música gospel do Brasil
            </p>
          </Box>
          <Box>
            <form onSubmit={candidateFormik.handleSubmit}>
              <Box display="flex" gap="15px" flexDirection="column">
                <CssTextField
                  fullWidth
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nome completo:"
                  onChange={candidateFormik.handleChange}
                  value={candidateFormik.values.name}
                />
                {candidateFormik.touched.name && candidateFormik.errors.name ? (
                  <Box textAlign="left" color="red">
                    {candidateFormik.errors.name}
                  </Box>
                ) : null}
                <CssTextField
                  fullWidth
                  id="email"
                  name="email"
                  placeholder="E-mail:"
                  type="text"
                  onChange={candidateFormik.handleChange}
                  value={candidateFormik.values.email}
                />
                {candidateFormik.touched.email &&
                  candidateFormik.errors.email ? (
                  <Box textAlign="left" color="red">
                    {candidateFormik.errors.email}
                  </Box>
                ) : null}
                <Box display="flex" gap="15px" width="100%">
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

                  <Box width="100%">
                    <ReactInputMask
                      mask="(99) 9 9999-9999"
                      onChange={candidateFormik.handleChange}
                      value={candidateFormik.values.phone}
                    >
                      {(inputProps: any) => (
                        <CssTextField
                          {...inputProps}
                          fullWidth
                          id="phone"
                          name="phone"
                          type="text"
                          placeholder="Telefone:"
                        />
                      )}
                    </ReactInputMask>
                    {candidateFormik.touched.phone &&
                      candidateFormik.errors.phone ? (
                      <Box textAlign="left" color="red">
                        {candidateFormik.errors.phone}
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <Box display="flex" gap="15px" width="100%" flexWrap={"wrap"}>
                  <Box flex="1">
                    <CssSelect
                      fullWidth
                      id="state"
                      name="state"
                      type="text"
                      displayEmpty
                      onChange={candidateFormik.handleChange}
                      value={candidateFormik.values.state}
                    >
                      <MenuItem value="" disabled>
                        <em>Selecione o estado</em>
                      </MenuItem>
                      {estados.map((state) => (
                        <MenuItem key={state.sigla} value={state.sigla}>
                          {state.nome}
                        </MenuItem>
                      ))}
                    </CssSelect>
                    {candidateFormik.touched.state &&
                      candidateFormik.errors.state ? (
                      <Box textAlign="left" color="red">
                        {candidateFormik.errors.state}
                      </Box>
                    ) : null}
                  </Box>
                  <Box flex="1">
                    <CssSelect
                      fullWidth
                      id="city"
                      name="city"
                      type="text"
                      displayEmpty
                      onChange={candidateFormik.handleChange}
                      value={candidateFormik.values.city}
                    >
                      <MenuItem value="" disabled>
                        <em>Selecione a cidade</em>
                      </MenuItem>
                      {estados
                        .filter(
                          (state) =>
                            state.sigla === candidateFormik.values.state
                        )[0]
                        ?.cidades?.map((city) => (
                          <MenuItem key={city} value={city}>
                            {city}
                          </MenuItem>
                        ))}
                    </CssSelect>
                    {candidateFormik.touched.city &&
                      candidateFormik.errors.city ? (
                      <Box textAlign="left" color="red">
                        {candidateFormik.errors.city}
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <Box display="flex" gap="15px" width="100%">
                  <Box flex="1">
                    <ReactInputMask
                      mask="(99) 9 9999-9999"
                      onChange={candidateFormik.handleChange}
                      value={candidateFormik.values.whatsApp}
                    >
                      {(inputProps: any) => (
                        <CssTextField
                          {...inputProps}
                          fullWidth
                          id="whatsApp"
                          name="whatsApp"
                          type="text"
                          placeholder="WhatsApp:"
                        />
                      )}
                    </ReactInputMask>

                    {candidateFormik.touched.whatsApp &&
                      candidateFormik.errors.whatsApp ? (
                      <Box textAlign="left" color="red">
                        {candidateFormik.errors.whatsApp}
                      </Box>
                    ) : null}
                  </Box>
                  <Box flex="1">
                    <CssTextField
                      fullWidth
                      id="instagram"
                      name="instagram"
                      type="text"
                      placeholder="Instagram:"
                      onChange={candidateFormik.handleChange}
                      value={candidateFormik.values.instagram}
                    />
                    {candidateFormik.touched.instagram &&
                      candidateFormik.errors.instagram ? (
                      <Box textAlign="left" color="red">
                        {candidateFormik.errors.instagram}
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <CssTextField
                  fullWidth
                  id="facebook"
                  name="facebook"
                  type="text"
                  placeholder="Facebook:"
                  onChange={candidateFormik.handleChange}
                  value={candidateFormik.values.facebook}
                />
                {candidateFormik.touched.facebook &&
                  candidateFormik.errors.facebook ? (
                  <Box textAlign="left" color="red">
                    {candidateFormik.errors.facebook}
                  </Box>
                ) : null}

                <CssTextField
                  fullWidth
                  id="why"
                  name="why"
                  type="text"
                  multiline
                  minRows={3}
                  maxRows={8}
                  placeholder="Porque se inscreveu no Dom Reality?"
                  onChange={candidateFormik.handleChange}
                  value={candidateFormik.values.why}
                />
                {candidateFormik.touched.why && candidateFormik.errors.why ? (
                  <Box textAlign="left" color="red">
                    {candidateFormik.errors.why}
                  </Box>
                ) : null}
                <CssTextField
                  fullWidth
                  id="resilience"
                  name="resilience"
                  type="text"
                  multiline
                  minRows={3}
                  maxRows={8}
                  placeholder="Qual seu maior momento de superação?"
                  onChange={candidateFormik.handleChange}
                  value={candidateFormik.values.resilience}
                />
                {candidateFormik.touched.resilience &&
                  candidateFormik.errors.resilience ? (
                  <Box textAlign="left" color="red">
                    {candidateFormik.errors.resilience}
                  </Box>
                ) : null}
                <CssTextField
                  fullWidth
                  id="description"
                  name="description"
                  type="text"
                  multiline
                  minRows={3}
                  maxRows={8}
                  placeholder="Sobre você:"
                  onChange={candidateFormik.handleChange}
                  value={candidateFormik.values.description}
                />
                {candidateFormik.touched.description &&
                  candidateFormik.errors.description ? (
                  <Box textAlign="left" color="red">
                    {candidateFormik.errors.description}
                  </Box>
                ) : null}
                <Box display="flex" gap="15px" width="100%" flexWrap={"wrap"}>
                  <Box flex="1">
                    <CssSelect
                      fullWidth
                      id="music_fav"
                      name="music_fav"
                      type="text"
                      displayEmpty
                      onChange={candidateFormik.handleChange}
                      value={candidateFormik.values.music_fav}
                    >
                      <MenuItem value="" disabled>
                        <em>Selecione uma música favorita</em>
                      </MenuItem>
                      {musics.map((music) => (
                        <MenuItem key={music} value={music}>
                          {music}
                        </MenuItem>
                      ))}
                    </CssSelect>
                    {candidateFormik.touched.music_fav &&
                      candidateFormik.errors.music_fav ? (
                      <Box textAlign="left" color="red">
                        {candidateFormik.errors.music_fav}
                      </Box>
                    ) : null}
                  </Box>
                  <Box flex="1">
                    <CssSelect
                      fullWidth
                      id="repertoire"
                      name="repertoire"
                      type="text"
                      displayEmpty
                      onChange={candidateFormik.handleChange}
                      value={candidateFormik.values.repertoire}
                    >
                      <MenuItem value="" disabled>
                        <em>Selecione o tom</em>
                      </MenuItem>
                      {repertoires.map((repertoire) => (
                        <MenuItem key={repertoire} value={repertoire}>
                          {repertoire}
                        </MenuItem>
                      ))}
                    </CssSelect>
                    {candidateFormik.touched.repertoire &&
                      candidateFormik.errors.repertoire ? (
                      <Box textAlign="left" color="red">
                        {candidateFormik.errors.repertoire}
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  gap={"15px"}
                  flexWrap={"wrap"}
                >
                  <Box flex="1">
                    <UploadPhoto {...candidateFormik} />
                    {candidateFormik.touched.avatar_url &&
                      candidateFormik.errors.avatar_url ? (
                      <Box textAlign="left" color="red">
                        {candidateFormik.errors.avatar_url}
                      </Box>
                    ) : null}
                  </Box>
                  <Box flex="1">
                    <UploadVideo {...candidateFormik} />
                    {candidateFormik.touched.video_url &&
                      candidateFormik.errors.video_url ? (
                      <Box textAlign="left" color="red">
                        {candidateFormik.errors.video_url}
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) =>
                        candidateFormik.setFieldValue(
                          "accept",
                          e.target.checked
                        )
                      }
                      sx={{
                        color: "#fff925",
                        "&.Mui-checked": {
                          color: "#fff925CC",
                        },
                      }}
                    />
                  }
                  label={
                    <Box
                      color="#ffffff"
                      textAlign={"left"}
                      fontSize={"12px"}
                      fontWeight={500}
                    >
                      AO CLICAR AQUI, EU CONCORDO COM O{" "}
                      <a href="/regulamento.pdf" target={"_blank noopener"}>
                        <u>REGULAMENTO DO REALITY GOSPEL - DOM</u>{" "}
                      </a>{" "}
                      E AUTORIZO O USO DE MINHA IMAGEM E VOZ.
                    </Box>
                  }
                />
                {candidateFormik.touched.accept &&
                  candidateFormik.errors.accept ? (
                  <Box textAlign="left" color="red">
                    {candidateFormik.errors.accept}
                  </Box>
                ) : null}
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
        </Fragment>
      )}
    </Box>
  );
};

export default Participation;
