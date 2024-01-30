import { Fragment, useState } from 'react';
import axios from "axios";
import { Box, CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import { CheckCircle, VideoFile } from '@mui/icons-material';

const chunkSize = 1048576 * 1000; //its 1GB, increase the number measure in mb

function UploadVideo(props: any) {

  const [sending, setSending] = useState(false);
  const [video, setVideo] = useState('');

  const getFileContext = (e: any) => {
    const _file = e.target.files[0];

    if (!_file) return;

    if (_file.size > chunkSize) {
      toast.error("Arquivo deve ser menor que 1 gb!");
      return;
    }

    upload(_file);
  }

  const upload = async (file: any) => {
    setSending(true);
    var formData = new FormData();
    formData.append('archive', file);

    try {
      const response = await axios.post("/api/files/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      const data = response.data;

      props.setFieldValue("video_url", data);
      setVideo(data);

      setSending(false);

    } catch (error: any) {
      toast.error("Erro ao subir o arquivo, tente novamente mais tarde!");
      setSending(false);

    }
  }

  return (
    <Fragment>
      <label htmlFor="videoFile" style={{ width: "100%" }}>
        <Box sx={{
          cursor: "pointer",
          backgroundColor: "#dffd4f",
          color: "#000000",
          padding: "20px 30px",
          borderRadius: "30px",
          alignItems:'center'
        }} display="flex" gap="15px">
          {sending &&
            <Box>
              <CircularProgress size="15px" />
            </Box>
          }
          {
            !sending && video ?
              <CheckCircle htmlColor='#fff925CC' /> : <VideoFile />
          }
          <span>Adicionar video</span>
        </Box>
        <input disabled={sending} hidden id="videoFile" name="videoFile" type="file" onChange={getFileContext} accept="video/mp4" />

      </label>
    </Fragment>
  );
}


export default UploadVideo;