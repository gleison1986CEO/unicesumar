import axios from "axios";
import {
  ICandidateRegister,
  IVote,
  IVoterRegister,
} from "../interfaces/inscription";

const baseUrl = 'http://domreality.com.br/api';

export const top10 = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/inscription/top10`);
    return data;
  } catch (e: any) {
    if (e.response) {
      throw Error(e.response?.data?.error);
    } else {
      throw Error(e.message);
    }
  }
};

export const top30 = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/inscription/top30`);
    return data.candidates;
  } catch (e: any) {
    if (e.response) {
      throw Error(e.response?.data?.error);
    } else {
      throw Error(e.message);
    }
  }
};

export const getCandidate = async (candidateId: string | number) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/inscription/get?candidate=${candidateId}`
    );
    return data;
  } catch (e: any) {
    throw new Error("Não encontamos o candidato, tente novamente!");
  }
};

export const getListCandidates = async (page: number, count: number) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/inscription/get-candidates?page=${page}&limit=${count}`
    );
    return data;
  } catch (e: any) {
    throw new Error("Erro ao listar candidatos!");
  }
};

export const searchCandidate = async (query: string) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/inscription/get-inscriptions?string=${query}`
    );
    return data;
  } catch (e: any) {
    throw Error(e.message);
  }
};

export const createCandidate = async (candidate: ICandidateRegister) => {
  try {
    const { data } = await axios.post(`${baseUrl}/person/create-candidate`, {
      ...candidate,
    });
    return data;
  } catch (e: any) {
    if (e.response) {
      throw Error(e.response?.data?.error);
    } else {
      throw Error(e.message);
    }
  }
};

export const createVoter = async (voter: IVoterRegister) => {
  try {
    const { data } = await axios.post(`${baseUrl}/person/create`, { ...voter });
    return data;
  } catch (e: any) {
    if (e.response) {
      throw Error(e.response?.data?.error);
    } else {
      throw Error(e.message);
    }
  }
};

export const createVote = async (vote: IVote) => {
  try {
    const { data } = await axios.post(`${baseUrl}/inscription/create-vote`, {
      ...vote,
    });
    return data;
  } catch (e: any) {
    if (e.response) {
      throw Error(e.response?.data?.error);
    } else {
      throw Error(e.message);
    }
  }
};

export const updateVideo = async (props: any) => {
  try {
    const { data } = await axios.put(`${baseUrl}/inscription/update-video`, {
      ...props,
    });
    return data;
  } catch (e: any) {
    if (e.response) {
      throw Error(e.response?.data?.error);
    } else {
      throw Error(e.message);
    }
  }
};
