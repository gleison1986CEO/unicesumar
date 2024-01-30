import { Fragment, useState } from 'react';
import axios from "axios";
import { Box, CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import { CheckCircle, Photo } from '@mui/icons-material';

const chunkSize = 1048576 * 2; //its 1MB, increase the number measure in mb

function UploadPhoto(props: any) {

  const [sending, setSending] = useState(false);
  const [image, setImage] = useState('');

  const getFileContext = (e: any) => {
    const _file = e.target.files[0];

    if (!_file) return;

    if (_file.size > chunkSize) {
      toast.error("Arquivo deve ser menor que 2mb!");
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

      props.setFieldValue("avatar_url", data);
      setImage(data);
      setSending(false);

    } catch (error: any) {
      toast.error("Erro ao subir o arquivo, tente novamente mais tarde!");
      setSending(false);

    }
  }

  return (
    <Fragment>
      <label htmlFor="photoFile" style={{ width: "100%" }}>
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
            !sending && image?
            <CheckCircle htmlColor='#fff925CC' />: <Photo />
          }
          <span>Adicione sua foto</span>
        </Box>
        <input disabled={sending} hidden id="photoFile" name="photoFile" type="file" onChange={getFileContext} accept="image/png, image/jpeg, image/jpg" />
      </label>
    </Fragment>
  );
}


export default UploadPhoto;