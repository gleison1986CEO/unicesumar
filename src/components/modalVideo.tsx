import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/material';
import { ICandidate } from '../interfaces/inscription';
import { Close, PlayCircle } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalVideo(candidate: ICandidate) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{ cursor: "pointer" }}
        bgcolor={"#016bd9"}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"30px"}
        width={"150px"}
        height={"100px"}
        onClick={handleClickOpen}>
        <PlayCircle sx={{ fontSize: 50 }} htmlColor="#ffffff" />
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="votacao-dialog"
      >
        <DialogTitle>
          <Box fontWeight="bold" textAlign="center" fontSize="18px" mb="20px">{candidate.person?.name}</Box>
          <Box onClick={handleClose} position={"absolute"} top="10px" right="10px" sx={{ cursor: "pointer" }}>
            <Close />
          </Box>
        </DialogTitle>
        <DialogContent sx={{ overflow: "initial" }} >
          <Box bgcolor={"#016bd9"} p="20px" borderRadius={"20px"}>
            <DialogContentText id="votacao-dialog">
              <video width={"100%"} controls>
                <source src={candidate.inscriptionPhases.filter((phase) => phase.phase_id === 1)[0]?.video_url} type="video/mp4" />
              </video>
            </DialogContentText>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}