import React, { FC, Fragment, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { CssTextField } from './TextField';
import { Box, MenuItem } from '@mui/material';
import ButtonReality, { ButtonVote } from './button';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { ICandidate, IVote, IVoterRegister } from '../interfaces/inscription';
import * as Yup from 'yup';
import { createVote, createVoter } from '../api/requests';
import { ThanksVote } from './ThanksVote';
import { CssSelect } from './Select';
import { estados } from '../utils/states_cities.json'
import ReactInputMask from 'react-input-mask';
import { Close } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalVote: FC<{ candidate: ICandidate, update: Function }> = ({candidate, update}) => {

  const [open, setOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [voted, setVoted] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setVoted(false);
    setOpen(false);
    update(candidate.id);
  };

  const SignupSchemaSingle = Yup.object().shape({
    name: Yup.string()
      .required('*Obrigatório'),
    email: Yup.string().email('E-mail inválido').required('*Obrigatório'),
    phone: Yup.string()
      .required('*Obrigatório'),
    city: Yup.string()
      .required('*Obrigatório'),
    state: Yup.string()
      .required('*Obrigatório'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      city: '',
      state: ''
    },
    validationSchema: SignupSchemaSingle,
    onSubmit: async (values: IVoterRegister) => {
      try {
        setLoading(true)
        await createVoter({
          ...values, vote: {
            phone: formik.values.phone,
            email: formik.values.email,
            inscription: candidate.id,
            phase: 4
          }
        });
        setLoading(false)
        toast.success("Voto computado!");
        formik.resetForm();
        setVoted(true);
      } catch (e: any) {
        toast.error(e.message);
        setLoading(false)
      }
    },
  });

  const formikRegistered = useFormik({
    initialValues: {
      email: '',
      phone: '',
      inscription: candidate.id,
      phase: 4
    },
    onSubmit: async (values: IVote) => {
      try {
        setLoading(true)
        await createVote(values);
        setLoading(false)
        toast.success("Voto computado!");
        formikRegistered.resetForm();
        setVoted(true);
      } catch (e: any) {
        toast.error(e.message);
        setLoading(false)
        formikRegistered.resetForm();
        handleClose()
      }
    },
  });

  return (
    <div>
      <ButtonVote onClick={handleClickOpen}>
        Votar
      </ButtonVote>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="votacao-dialog"
      >
        {voted ?
          <Box bgcolor={"#016bd9"}>
            <ThanksVote {...candidate} />
          </Box>
          :
          <div>
            <DialogTitle>
              <Box color="#e90073" textAlign={"center"} mb="25px">
                <p id="antesVotar">Antes de votar, nos diga quem é você :)</p>
              </Box>
              <Box onClick={handleClose} position={"absolute"} top="10px" right="10px" sx={{ cursor: "pointer" }}>
                <Close />
              </Box>
            </DialogTitle>
            <DialogContent sx={{ overflow: "initial" }} >
              <Box bgcolor={"#e90073"} p="20px" borderRadius={"20px"}>
                <Box display="flex" justifyContent="center" position="relative" top="-50px">
                  <Box sx={{
                    cursor: "pointer",
                    padding: "20px 30px",
                    backgroundColor: isRegistered ? "#009db8" : "#2b2080",
                    color: "#ffffff",
                    borderTopLeftRadius: "30px",
                    borderBottomLeftRadius: "30px"
                  }} onClick={() => { setIsRegistered(false) }}>Cadastrar</Box>
                  <Box sx={{
                    cursor: "pointer",
                    padding: "20px 30px",
                    backgroundColor: !isRegistered ? "#009db8" : "#2b2080",
                    color: "#ffffff",
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px"
                  }} onClick={() => { setIsRegistered(true) }}>Já tenho um cadastro</Box>
                </Box>
                <DialogContentText id="votacao-dialog">
                  {!isRegistered ?
                    <form onSubmit={formik.handleSubmit}>
                      <Box display="flex" gap="15px" flexDirection="column">
                        <CssTextField
                          fullWidth
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Nome completo:"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                        />
                        <CssTextField
                          fullWidth
                          id="email"
                          name="email"
                          placeholder="E-mail:"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                        />
                        <ReactInputMask
                          mask="(99) 9 9999-9999"
                          onChange={formik.handleChange}
                          value={formik.values.phone}
                        >
                          {/* {(inputProps: any) => <CssTextField
                            {...inputProps}
                            fullWidth
                            id="phone"
                            name="phone"
                            type="text"
                            placeholder="Telefone:"
                          />} */}
                        </ReactInputMask>
                        <Box display="flex" gap="15px" width="100%" flexWrap={"wrap"}>
                          <Box flex="1">
                            <CssSelect
                              fullWidth
                              id="state"
                              name="state"
                              type="text"
                              displayEmpty
                              onChange={formik.handleChange}
                              value={formik.values.state}
                            >
                              <MenuItem value="" disabled>
                                <em>Selecione o estado</em>
                              </MenuItem>
                              {estados.map((state) => (
                                <MenuItem value={state.sigla}>
                                  {state.nome}
                                </MenuItem>
                              ))}
                            </CssSelect>
                            {formik.touched.state && formik.errors.state ? (
                              <Box textAlign="left" color="red">{formik.errors.state}</Box>
                            ) : null}
                          </Box>
                          <Box flex="1">
                            <CssSelect
                              fullWidth
                              id="city"
                              name="city"
                              type="text"
                              displayEmpty
                              onChange={formik.handleChange}
                              value={formik.values.city}
                            >
                              <MenuItem value="" disabled>
                                <em>Selecione a cidade</em>
                              </MenuItem>
                              {estados.filter(state => state.sigla === formik.values.state)[0]?.cidades?.map((city) => (
                                <MenuItem value={city}>
                                  {city}
                                </MenuItem>
                              ))}
                            </CssSelect>
                            {formik.touched.city && formik.errors.city ? (
                              <Box textAlign="left" color="red">{formik.errors.city}</Box>
                            ) : null}
                          </Box>
                        </Box>
                        <Box textAlign="center">
                          <ButtonReality className="btn-votation" id="buttonVotar"disabled={loading} type='submit'>
                            Votar
                          </ButtonReality>
                        </Box>
                      </Box>
                    </form> :
                    <form onSubmit={formikRegistered.handleSubmit}>
                      <Box display="flex" gap="15px" flexDirection="column">
                        <CssTextField
                          fullWidth
                          id="email"
                          name="email"
                          placeholder="E-mail:"
                          type="text"
                          onChange={formikRegistered.handleChange}
                          value={formikRegistered.values.email}
                        />
                        <ReactInputMask
                          mask="(99) 9 9999-9999"
                          onChange={formikRegistered.handleChange}
                          value={formikRegistered.values.phone}
                        >
                          {/* {(inputProps: any) => <CssTextField
                            {...inputProps}
                            id="phone"
                            name="phone"
                            type="text"
                            placeholder="Telefone:"
                          />} */}
                        </ReactInputMask>

                        <Box textAlign="center">
                          <ButtonReality className="btn-votation" id="buttonVotar"disabled={loading} type='submit'>
                            Votar
                          </ButtonReality>
                        </Box>
                      </Box>
                    </form>
                  }
                </DialogContentText>
              </Box>
            </DialogContent>
          </div>
        }
      </Dialog>
    </div>
  );
}

export default ModalVote;