export interface ITop10 {
  inscription_id: string;
  votos: string;
  inscription: {
    person: {
      avatar_url: string;
      name: string;
      instagram: string;
    };
  };
}

export interface ICandidate {
  id: number;
  person: {
    name: string;
    description: string;
    avatar_url: string;
  };
  inscriptionPhases: [
    {
      phase_id: number;
      video_url: string;
      is_aproved: boolean | null;
    }
  ];
  votes: number;
}

export interface ICandidateItem {
  id: number;
  votos: number;
  name: string;
  avatar_url: string;
  instagram: string;
}

export interface ICandidateRegister {
  name: string;
  email: string;
  avatar_url: string;
  video_url: string;
  document: string;
  city: string;
  state: string;
  phone: string;
  whatsApp: string;
  facebook: string;
  instagram: string;
  description: string;
  why: string;
  resilience: string;
  repertoire: string;
  music_fav: string;
  accept: boolean;
}

export interface ICandidateCRM {
  nome: string;
  cpf: string;
  email: string;
  celular: string;
  telefone: string;
  polo: string;
  cp_campanha: string;
  cp_origem: string;
  como_conheceu: string;
  fl_aceite_info: string;
  tipo: string;
  modalidade: string;
}

export interface IVoterRegister {
  name: string;
  email: string;
  city: string;
  state: string;
  phone: string;
  vote?: IVote;
}

export interface IVote {
  email: string;
  phone: string;
  phase: number;
  inscription: number;
}
