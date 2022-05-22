export interface IDoenca {
  id: string;
  nome: string;
  descricao: string;
  topicos: ITopicoDoenca[];
}

export interface ITopicoDoenca {
  titulo: string;
  conteudo: string;
}

export const DOENCAS: IDoenca[] = [
  {
    id: '1',
    nome: 'BCG ID (Tuberculose)',
    descricao:
      'A vacina BCG protege contra a tuberculose – doença contagiosa, provocada pela bactéria Mycobacterium tuberculosis. Foi criada em 1.921 por Léon Calmette e Alphonse Guérin, dando origem ao nome BCG. A doença não afeta apenas os pulmões mas, também, ossos, rins e meninges (membranas que envolvem o cérebro)',
    topicos: [
      {
        titulo: 'Transmissão',
        conteudo:
          'Pessoas saudáveis e infectadas podem não apresentar sintomas e, mesmo assim, transmitirem a bactéria. O contágio se dá de uma pessoa para a outra, através de gotículas de saliva da garganta. O compartilhamento de objetos não oferece risco. Pessoas com o sistema imunológico comprometido têm mais chance de desenvolver a doença, em especial, a forma grave e generalizada. Para prevenir a tuberculose é necessário vacinar todas as crianças, a partir do nascimento até os 4 anos de idade. A vacina, em dose única, é oferecida, gratuitamente, nas Unidades Básicas de Saúde.',
      },
      {
        titulo: 'Cuidados antes e após a vacinação',
        conteudo:
          'Pessoas saudáveis e infectadas podem não apresentar sintomas e, mesmo assim, transmitirem a bactéria. O contágio se dá de uma pessoa para a outra, através de gotículas de saliva da garganta. O compartilhamento de objetos não oferece risco. Pessoas com o sistema imunológico comprometido têm mais chance de desenvolver a doença, em especial, a forma grave e generalizada. Para prevenir a tuberculose é necessário vacinar todas as crianças, a partir do nascimento até os 4 anos de idade. A vacina, em dose única, é oferecida, gratuitamente, nas Unidades Básicas de Saúde.',
      },
    ],
  },
];
