export type CardInfoProps = {
  nome: string;
  imagem: string;
  profissao: string;
  CRP?: string;
  cidade: string;
  estado: string;
  notaAvaliacao: number;
  idiomas: string[];
  especialidades: string[];
  valor: number;
  resumo: string;
  redesSocias: {
    instagram: string;
    linkedIn: string;
    email: string;
  };
};
