import { FC, Fragment, useCallback, useEffect, useState } from 'react';
import { Avatar, Box, CircularProgress, TextField, Typography } from '@mui/material';
import ModalVote from './modalVote';
import ModalVideo from './modalVideo';
import { toast } from 'react-toastify';
import { getCandidate, getListCandidates, searchCandidate, top10 } from '../api/requests';
import { ICandidate, ICandidateItem, ITop10 } from '../interfaces/inscription';
import { CssAutocomplete } from './AutoComplete';
import { useHistory, useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ArrowBack } from '@mui/icons-material';

const Ranking = () => {
  const matches = useMediaQuery('(max-width:600px)');
  const [query, setQuery] = useState('');
  const [top10Users, setTop10Users] = useState < ITop10[] > ([]);
  const [candidate, setCandidate] = useState < ICandidate > ();
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState < {
    inscriptions: number,
    votes: number,
    pages: number
  } > ();
  const [listCandidates, setListCandidates] = useState < ICandidateItem[] > ()
  const [suggest, setSuggest] = useState([]);
  const [loadingCandidate, setLoadingCandidate] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const history = useHistory();
  let { candidateId } = useParams();

  const fetchTop10 = useCallback(async () => {
    try {
      await top10()
        .then((users: ITop10[]) => setTop10Users(users));
    } catch (e: any) {
      toast.error(e.message)
    }
  }, [])

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

  const fetchListCandidate = useCallback(async (nPage: number) => {
    try {
      let count = (window.screen.width < 600) ? 5 : 20;

      await getListCandidates(nPage, count)
        .then((list: any) => {
          setListCandidates(list.candidates);
          setPagination({
            inscriptions: list.inscriptions,
            pages: Math.round(list.inscriptions / count),
            votes: list.votes
          })
          setPage(nPage + 1);
        })
    } catch (e: any) {
      console.log(e.message)
    }
  }, [])

  const fetchSearch = useCallback(async (qry: string) => {
    setLoadingSearch(true);

    try {
      if (qry !== "") {
        let list = await searchCandidate(qry);
        setSuggest(list);
      }
      setLoadingSearch(false);

    } catch (e: any) {
      setLoadingSearch(false);
    }
  }, [])

  useEffect(() => {
    const timeOutId = setTimeout(() => fetchSearch(query), 1500);
    return () => clearTimeout(timeOutId);
  }, [query, fetchSearch]);


  useEffect(() => {
    fetchTop10()
    if (candidateId)
      fetchCandidate(candidateId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchTop10, fetchCandidate, candidateId])

  useEffect(() => {
    fetchListCandidate(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchListCandidate])

  const onChange = (e: any) => {
    setQuery(e.target.value);
  }

  return (
    <Box>
      <Box width="80%" maxWidth="600px" m="auto auto 40px">
        <CssAutocomplete
          id="country-select-demo"
          loading={loadingSearch}
          options={suggest}
          freeSolo={query !== "" ? false : true}
          noOptionsText="Não encontramos nenhum resultado"
          forcePopupIcon={false}
          onChange={(e, value: any) => {
            if (value?.id)
              fetchCandidate(value?.id);
          }}
          getOptionLabel={(option: any) => option.person.name}
          renderOption={(props: any, option: any) => (
            <Box component="li" {...props} key={option.id}>
              {option.person.name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Pesquisar candidato"
              variant="outlined"
              fullWidth
              onChange={onChange}
            />
          )}
        />
      </Box>
  

        {candidate ?
          <Box bgcolor="#ffffff" flex="5" boxShadow={1} borderRadius="10px" width="100%" maxWidth={700} id="candidates" >
            {loadingCandidate ?
              <CircularProgress /> :
              !candidate ?
                <h2>{!candidateId ? 'Pesquise por um candidato' : 'Não encontramos o candidato!'}</h2> :
                <>
                  <Box bgcolor="#e90073" position="relative" borderRadius={"10px 10px 0 0"} p="20px 30px" color="#ffffff">
                    Candidato #{candidate?.id}
                    <Box onClick={() => setCandidate(undefined)} sx={{ cursor: "pointer", transform: "translateY(-50%)" }} position="absolute" left="10px" top="50%">
                      <ArrowBack />
                    </Box>
                  </Box>
                  <Box display="flex" flexWrap={"wrap"} textAlign="left" p="40px 20px" gap="15px">
                    <Box flex="1">
                      <Avatar sx={{ width: 150, height: 150 }} src={candidate?.person?.avatar_url} />
                    </Box>
                    <Box flex="3" gap="15px" display="flex" flexDirection="column" flexWrap={"wrap"}>
                      <Box fontWeight="bold" fontSize="18px">{candidate?.person?.name}</Box>
                      {candidate?.votes &&
                        <Box fontWeight="bold" fontSize="18px">
                          <u>{candidate.votes} {candidate.votes > 1 ? 'Votos' : 'Voto'}</u>
                        </Box>
                      }
                      <Box lineHeight="25px" sx={{ wordBreak: 'break-word' }}>{candidate?.person?.description}</Box>
                      <Box display="flex" width="100%" alignItems={"center"} justifyContent="space-between">
                        {/* <ModalVideo {...candidate} /> */}
                        <ModalVote candidate={candidate} update={() => candidate} />
                      </Box>
                    </Box>
                  </Box>
                </>
            }
          </Box> :
          <Box flex="5" width="100%">
            <Box display={"flex"} gap="15px" borderRadius="10px" width="100%"  maxWidth={900} id="candidatesList">
              {
                listCandidates &&
                  listCandidates.length > 5 ?
                  <Box display="flex" flexDirection={"column"} width="100%">
                    <Box minHeight={59} display="grid" alignItems={"center"}>
                      <Box m="auto" color="#e90073" borderRadius={"10px"} width={"fit-content"} fontSize={"20px"} fontWeight={"bold"}>
                        Votos {pagination?.votes}
                      </Box>
                    </Box>
                    <Box display="flex" gap="15px" flexWrap={"wrap"} flexDirection={matches ? "column" : "row"}>
                      <Box bgcolor="#ffffff" p="15px" flex={1} display="flex" boxShadow={1} flexDirection="column" gap="15px" borderRadius="10px">
                        {listCandidates?.slice(0, 10).map((user) => {
                          return <UserListItem key={user.id} user={user} fetchCandidate={fetchCandidate} />
                        })}
                      </Box>
                      <Box bgcolor="#ffffff" p="15px" flex={1} display="flex" boxShadow={1} flexDirection="column" gap="15px" borderRadius="10px">
                        {listCandidates.slice(10, 20).map((user) => {
                          return <UserListItem key={user.id} user={user} fetchCandidate={fetchCandidate} />
                        })}
                      </Box>
                    </Box>
                    {
                      (pagination && (page < pagination.pages)) &&
                      <Box width={"100%"} mt="20px" mb="20px">
                        <Box sx={{ cursor: "pointer" }} onClick={() => fetchListCandidate(page)}>
                          Ver mais
                        </Box>
                      </Box>
                    }
                  </Box> :
                  <Box display="flex" width={'100%'} flexDirection={"column"} gap="15px">
                    <Box>
                      <Box m="auto" bgcolor={"#e90073"} color="#ffffff" borderRadius={"1px"} width={"fit-content"} p="20px 30px" id="votos">
                        Votos {pagination?.votes}
                      </Box>
                    </Box>
                    <Box display="flex" gap="15px" flexDirection={matches ? "column" : "row"}>
                      <Box flex={1} p="15px" display="flex" boxShadow={1} flexDirection="column" gap="15px" borderRadius="10px">
                        {listCandidates?.map((user) => {
                          return <UserListItem key={user.id} user={user} fetchCandidate={fetchCandidate} />
                        })}
                      </Box>
                      <Box flex={1}></Box>
                    </Box>
                    {
                      pagination &&
                      (page < pagination.pages) &&
                      <Box width={"100%"}>
                        <Box sx={{ cursor: "pointer" }} onClick={() => fetchListCandidate(page)}>
                          Ver mais
                        </Box>
                      </Box>
                    }
                  </Box>
              }
            </Box>
          </Box>
        }
      </Box>
   
  )
}

const User: FC<{ user: ITop10, fetchCandidate: Function }> = ({ user, fetchCandidate }) => {
  return (
    <Box
      key={user.inscription_id}
      sx={{ cursor: 'pointer' }}
      display="flex"
      alignItems="center"
      gap="40px"
      flexWrap={"wrap"}
      onClick={() => fetchCandidate(user.inscription_id)}
    >
      <Box flex={2} display="flex" alignItems="center" gap="10px">
        <Box flex={1}>
          #{user.inscription_id}
        </Box>
        <Box flex={1}>
          <Avatar sx={{ width: 76, height: 76 }} alt={user.inscription?.person?.name} src={user.inscription?.person?.avatar_url} />
        </Box>
      </Box>
      <Box flex={4} textAlign={"left"} sx={{
        wordBreak: "break-word"
      }}>
        <Typography fontSize={"15px"} fontWeight={"bold"} component={"p"}>
          @{user.inscription?.person?.instagram.charAt(0) === "@" ? user.inscription?.person?.instagram.substring(1).replace("https://www.instagram.com/", '') : user.inscription?.person?.instagram.replace("https://www.instagram.com/", '')}

        </Typography>
        <Typography component={"p"} fontSize={"13px"} sx={{
          textTransform: "capitalize"
        }}>
          {user.inscription?.person?.name.toLowerCase()}
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

const UserListItem: FC<{ user: ICandidateItem, fetchCandidate: Function }> = ({ user, fetchCandidate }) => {
  return (
    <Box
      key={user.id}
      sx={{ cursor: 'pointer' }}
      display="flex"
      alignItems="center"
      gap="15px"

      flexWrap={"wrap"}
      onClick={() => fetchCandidate(user.id)}
    >
      <Box flex={2} display="flex" alignItems="center" gap="10px">
        <Box flex={2} fontSize={"10px"}>
          #{user.id}
        </Box>
        <Box flex={2}>
          <Avatar sx={{ width: 56, height: 56 }} alt={user.name} src={user.avatar_url} />
        </Box>
      </Box>
      <Box flex={3} textAlign={"left"} flexWrap={"wrap"} sx={{
        wordBreak: "break-word"
      }}>
        <Typography flexWrap={"wrap"} fontSize={"10px"} fontWeight={"bold"} component={"p"}>
          @{user.instagram.charAt(0) === "@" ? user.instagram.substring(1).replace("https://www.instagram.com/", '') : user.instagram.replace("https://www.instagram.com/", '')}
        </Typography>
        <Typography flexWrap={"wrap"} component={"p"} fontSize={"8px"} sx={{
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


export default Ranking;