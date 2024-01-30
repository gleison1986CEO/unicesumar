import { FC, Fragment, useCallback, useEffect, useState } from 'react';
import { Avatar, Box, CircularProgress, Typography } from '@mui/material';
import ModalVote from './modalVote';
import { getCandidate, getListCandidates } from '../api/requests';
import { ICandidate, ICandidateItem } from '../interfaces/inscription';
import { useHistory, useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ArrowBack } from '@mui/icons-material';

const Ranking17022022 = () => {
  const matches = useMediaQuery('(max-width:600px)');
  const [candidate, setCandidate] = useState<ICandidate>();
  const [listCandidates, setListCandidates] = useState<ICandidateItem[]>()
  const [loadingCandidate, setLoadingCandidate] = useState(false);
  const history = useHistory();
  let { candidateId } = useParams();

  const fetchCandidate = useCallback(async (propsCandidateId: string) => {
    try {
      setLoadingCandidate(true);
      await getCandidate(propsCandidateId)
        .then((candidate: ICandidate) => {
          history.push(`/${candidate.id}`);
          setCandidate(candidate);
          setLoadingCandidate(false)
        });
    } catch (e: any) {
      setLoadingCandidate(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchListCandidate = useCallback(async () => {
    try {
      await getListCandidates(1, 15)
        .then((list: any) => {
          setListCandidates(list.candidates);
        })
    } catch (e: any) {
      console.log(e.message)
    }
  }, [])

  useEffect(() => {
    if (candidateId)
      fetchCandidate(candidateId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCandidate, candidateId])

  useEffect(() => {
    fetchListCandidate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchListCandidate])

  const update = (id:string) =>{
    fetchListCandidate();
    fetchCandidate(id)
  }

  return (
    <Box
      display="flex"
      gap="15px"
      flexWrap={"wrap"}
      flexDirection={matches ? "column-reverse" : "row"}
    >
      {candidate ?
        <Box bgcolor="#ffffff" flex="3" boxShadow={1} borderRadius="10px" width="100%" >
          {loadingCandidate ?
            <CircularProgress /> :
            !candidate ?
              <h2>{!candidateId ? 'Pesquise por um candidato' : 'Não encontramos o candidato!'}</h2> :
              <Fragment>
                <Box bgcolor="#e90073" position="relative" borderRadius={"10px 10px 0 0"} p="20px 30px" color="#ffffff">
                  Candidato #{candidate?.id}
                  <Box onClick={() => {
                    history.push('/');
                    setCandidate(undefined)
                  }} sx={{ cursor: "pointer", transform: "translateY(-50%)" }} position="absolute" left="10px" top="50%">
                    <ArrowBack />
                  </Box>
                </Box>
                <Box display="flex" flexWrap={"wrap"} textAlign="center" flexDirection={"column"} gap="20px" alignItems={"center"} p="40px 20px">
                  <Box>
                    <Avatar sx={{ width: 150, height: 150 }} src={candidate?.person?.avatar_url} />
                  </Box>
                  <Box gap="15px" display="flex" flexDirection="column" flexWrap={"wrap"}>
                    <Box fontWeight="bold" fontSize="18px">{candidate?.person?.name}</Box>
                    {candidate?.votes &&
                      <Box fontWeight="bold" fontSize="18px">
                        <u>{candidate.votes} {candidate.votes > 1 ? 'Votos' : 'Voto'}</u>
                      </Box>
                    }
                    <Box display="flex" width="100%" alignItems={"center"} justifyContent="center">                      
                      <ModalVote update={update} candidate={candidate} />
                    </Box>
                  </Box>
                </Box>
              </Fragment>
          }
        </Box> :
        <Box flex="3" width="100%">
          <Box display={"flex"} gap="15px" borderRadius="10px" width="100%">
            {
              listCandidates &&
              <Box width={"100%"} display={"flex"} flexWrap={"wrap"} flexDirection={matches ? "column" : "row"} gap="20px">
                <Box className='boxTop' bgcolor="#ffffff" p="15px" flex={4} display="flex" boxShadow={1} flexDirection="column" borderRadius="10px">
                  {listCandidates?.slice(0, 3).map((user) => {
                    return <UserListItem key={user.id} user={user} fetchCandidate={fetchCandidate} />
                  })}
                </Box>
                <Box className='boxTop' bgcolor="#ffffff" p="15px" flex={4} display="flex" boxShadow={1} flexDirection="column" borderRadius="10px">
                  {listCandidates?.slice(3,6).map((user) => {
                    return <UserListItem key={user.id} user={user} fetchCandidate={fetchCandidate} />
                  })}
                </Box>
                <Box className='boxTop' bgcolor="#ffffff" p="15px" flex={4} display="flex" boxShadow={1} flexDirection="column" borderRadius="10px">
                  {listCandidates?.slice(6, 8).map((user) => {
                    return <UserListItem key={user.id} user={user} fetchCandidate={fetchCandidate} />
                  })}
                </Box>
              </Box>
            }
          </Box>
        </Box>
      }
    </Box>
  )
}

const UserListItem: FC<{ user: ICandidateItem, fetchCandidate: Function }> = ({ user, fetchCandidate }) => {
  return (
    <Box
      key={user.id}
      sx={{ cursor: 'pointer' }}
      display="flex"
      alignItems="center"
      gap="15px"
      flexWrap={"wrap"}
      padding="10px 0"
      borderBottom={"solid 1px #d2d4d6"}
      onClick={() => fetchCandidate(user.id)}
    >
      <Box flex={2} display="flex" alignItems="center" gap="10px">
        <Box flex={2} fontSize={"15px"} color="#fc16a4" fontWeight={"bold"}>
          #{user.id}
        </Box>
        <Box flex={2}>
          <Avatar sx={{ width: 56, height: 56 }} alt={user.name} src={user.avatar_url} />
        </Box>
      </Box>
      <Box flex={3} textAlign={"left"} flexWrap={"wrap"} sx={{
        wordBreak: "break-word"
      }}>
        <Typography flexWrap={"wrap"} fontSize={"15px"} fontWeight={"bold"} component={"p"}>
          @{user.instagram.charAt(0) === "@" ? user.instagram.substring(1).replace("https://www.instagram.com/", '') : user.instagram.replace("https://www.instagram.com/", '')}
        </Typography>
        <Typography flexWrap={"wrap"} component={"p"} fontSize={"12px"} sx={{
          textTransform: "capitalize"
        }}>
          {user.name.toLowerCase()}
        </Typography>
      </Box>
      <Box flex={1}>
        <Typography fontSize={"14px"} component={"p"}>
          Votos <br />
          {user.votos}
        </Typography>
      </Box>
    </Box>
  )
}


export default Ranking17022022;