export interface School {
    nuAnoCenso: number;
    coEntidade: number;
    noEntidade: string;
    tpDependencia: number;
    rede: string;
    localizacao: string;
    noRegiao: string;
    coUf: number;
    sgUf: string;
    coMunicipio: number;
    noMunicipio: string;
    coCep: number;
    dsEndereco: string;
    nuEndereco: number | null;
    dsComplemento: string | null;
    noBairro: string;
    nuDdd: number;
    nuTelefone: number;
    nuTelefonePublico: number | null;
    nuFax: number | null;
    latitude: number | null;
    longitude: number | null;
  }

  