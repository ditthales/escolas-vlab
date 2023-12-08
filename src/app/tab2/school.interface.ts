export interface School {
    nuAnoCenso: number; //ano das informações
    coEntidade: number; //código da escola
    noEntidade: string; //nome da escola
    tpDependencia: number; //tipo de dependência administrativa
    rede: string; //rede de ensino
    localizacao: string; //localização
    noRegiao: string; //nome da região
    coUf: number; //código da unidade da federação
    sgUf: string; //sigla da unidade da federação
    coMunicipio: number; //código do município
    noMunicipio: string; //nome do município
    coCep: number; //código do CEP
    dsEndereco: string; //descrição do endereço
    nuEndereco: number | null; //número do endereço
    dsComplemento: string | null; //descrição do complemento
    noBairro: string; //nome do bairro
    nuDdd: number; //número do DDD
    nuTelefone: number; //número do telefone
    nuTelefonePublico: number | null; //número do telefone público
    nuFax: number | null; //número do fax
    latitude: number | null; //latitude
    longitude: number | null; //longitude
  }

  