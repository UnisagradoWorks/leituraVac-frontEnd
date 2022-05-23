export interface ITimelineItem {
  id: number;
  nome: string;
  vacinas: {
    doencaId: string;
    nome: string;
  }[];
}

export const TIMELINE_DATA: ITimelineItem[] = [
  {
    id: 1,
    nome: 'ao nascer',
    vacinas: [
      {
        doencaId: 'bcgid',
        nome: 'BCG ID(Tuberculose)',
      },
      {
        doencaId: 'hepatiteb',
        nome: 'Hepatite B - 1ºDose',
      },
    ],
  },
  {
    id: 2,
    nome: 'com 2 meses',
    vacinas: [
      {
        doencaId: 'hepatiteb',
        nome: 'Hepatite B - 2ºDose',
      },
      {
        doencaId: 'tripliceBacteriana',
        nome: 'Tríplice bacteriana - 1ºDose',
      },
      {
        doencaId: 'bcgid',
        nome: 'BCG ID(Tuberculose)',
      },
      {
        doencaId: 'influenzaeB',
        nome: 'Haemophilus Influenzae b - 1ºDose',
      },
      {
        doencaId: 'poliomielite',
        nome: 'Poliomielite - 1ºDose',
      },
      {
        doencaId: 'rotavirus',
        nome: 'Rotavírus - 1ºDose',
      },
      {
        doencaId: 'pneumococicas',
        nome: 'Pneumocócicas - 1ºDose',
      },
    ],
  },
  {
    id: 3,
    nome: 'Com 3 meses',
    vacinas: [
      {
        doencaId: 'rotavirus',
        nome: 'Rotavírus - 2ºDose',
      },
      {
        doencaId: 'pneumococicas',
        nome: 'Pneumocócicas - 2ºDose',
      },
      {
        doencaId: 'meningococicasConjugadas',
        nome: 'Meningocócicas conjugadas ACWY/C - 1ºDose',
      },
      {
        doencaId: 'meningococicaB',
        nome: 'Meningocócica B - 1ºDose',
      },
    ],
  },
  {
    id: 4,
    nome: 'Com 4 meses',
    vacinas: [
      {
        doencaId: 'tripliceBacteriana',
        nome: 'Tríplice bacteriana - 2ºDose',
      },
      {
        doencaId: 'influenzaeB',
        nome: 'Haemophilus influenzae b - 2ºDose',
      },
      {
        doencaId: 'poliomielite',
        nome: 'Poliomielite - 2ºDose',
      },
      {
        doencaId: 'rotavirus',
        nome: 'Rotavírus - 3ºDose',
      },
      {
        doencaId: 'pneumococicas',
        nome: 'Pneumocócicas - 3ºDose',
      },
    ],
  },
  {
    id: 5,
    nome: 'Com 5 meses',
    vacinas: [
      {
        doencaId: 'meningococicasConjugadas',
        nome: 'Meningocócicas conjugadas ACWY/C - 2ºDose',
      },
      {
        doencaId: 'meningococicaB',
        nome: 'Meningocócica B - 2ºDose',
      },
    ],
  },
  {
    id: 6,
    nome: 'Com 6 meses',
    vacinas: [
      {
        doencaId: 'hepatiteb',
        nome: 'Hepatite B - 3ºDose',
      },
      {
        doencaId: 'tripliceBacteriana',
        nome: 'Tríplice bacteriana - 3ºDose',
      },
      {
        doencaId: 'influenzaeB',
        nome: 'Haemophilus influenzae b - 3ºDose',
      },
      {
        doencaId: 'poliomielite',
        nome: 'Poliomielite - 3ºDose',
      },
      {
        doencaId: 'influenza',
        nome: 'Influenza(Anual)',
      },
    ],
  },
  {
    id: 7,
    nome: 'Com 7 meses',
    vacinas: [
      {
        doencaId: 'influenza',
        nome: 'Influenza(Anual)',
      },
    ],
  },
  {
    id: 8,
    nome: 'Com 8 meses',
    vacinas: [
      {
        doencaId: 'influenza',
        nome: 'Influenza(Anual)',
      },
    ],
  },
  {
    id: 9,
    nome: 'Com 9 meses',
    vacinas: [
      {
        doencaId: 'influenza',
        nome: 'Influenza(Anual)',
      },
      {
        doencaId: 'febreAmarela',
        nome: 'Febre Amarela - 1ºDose',
      },
    ],
  },
  {
    id: 12,
    nome: 'Com 12 meses',
    vacinas: [
      {
        doencaId: 'pneumococicas',
        nome: 'Pneumocócicas - Reforço',
      },
      {
        doencaId: 'meningococicasConjugadas',
        nome: 'Meningocócicas Conjugadas ACWY/C - Reforço',
      },
      {
        doencaId: 'meningococicaB',
        nome: 'Meningocócica B - Reforço',
      },
      {
        doencaId: 'influenza',
        nome: 'Influenza(Anual)',
      },
      {
        doencaId: 'hepatiteA',
        nome: 'Hepatite A - 1ºDose',
      },
      {
        doencaId: 'tripliceViral',
        nome: 'Tríplice Viral - 1ºDose',
      },
      {
        doencaId: 'varicela',
        nome: 'Varicela - 1ºDose',
      },
    ],
  },
  {
    id: 15,
    nome: 'Com 15 meses',
    vacinas: [
      {
        doencaId: 'tripliceBacteriana',
        nome: 'Tríplice bacteriana - Reforço',
      },
      {
        doencaId: 'influenzaeB',
        nome: 'Haemophilus Influenzae b - Reforço',
      },
      {
        doencaId: 'poliomielite',
        nome: 'Poliomielite - Reforço',
      },
      {
        doencaId: 'pneumococicas',
        nome: 'Pneumocócicas - Reforço',
      },
      {
        doencaId: 'meningococicasConjugadas',
        nome: 'Meningocócicas Conjugadas ACWY/C - Reforço',
      },
      {
        doencaId: 'meningococicaB',
        nome: 'Meningocócica B - Reforço',
      },
      {
        doencaId: 'influenza',
        nome: 'Influenza(Anual)',
      },
      {
        doencaId: 'tripliceViral',
        nome: 'Tríplice Viral - 2ºDose',
      },
      {
        doencaId: 'varicela',
        nome: 'Varicela - 2ºDose',
      },
    ],
  },
  {
    id: 18,
    nome: 'Com 18 meses',
    vacinas: [
      {
        doencaId: 'tripliceBacteriana',
        nome: 'Tríplice bacteriana - Reforço',
      },
      {
        doencaId: 'influenzaeB',
        nome: 'Haemophilus Influenzae b - Reforço',
      },
      {
        doencaId: 'poliomielite',
        nome: 'Poliomielite - Reforço',
      },
      {
        doencaId: 'influenza',
        nome: 'Influenza(Anual)',
      },
      {
        doencaId: 'hepatiteA',
        nome: 'Hepatite A - 2ºDose',
      },
      {
        doencaId: 'tripliceViral',
        nome: 'Tríplice Viral - 2ºDose',
      },
      {
        doencaId: 'varicela',
        nome: 'Varicela - 2ºDose',
      },
    ],
  },
  {
    id: 24,
    nome: 'Com 24 meses',
    vacinas: [
      {
        doencaId: 'influenza',
        nome: 'Influenza(Anual)',
      },
    ],
  },
  {
    id: 48,
    nome: 'Com 4 anos',
    vacinas: [
      {
        doencaId: 'tripliceBacteriana',
        nome: 'Tríplice bacteriana - Reforço',
      },
      {
        doencaId: 'poliomielite',
        nome: 'Poliomielite - Reforço',
      },
      {
        doencaId: 'influenza',
        nome: 'Influenza(Anual)',
      },
      {
        doencaId: 'hepatiteA',
        nome: 'Hepatite A - 2ºDose',
      },
      {
        doencaId: 'poliomielite',
        nome: 'Poliomielite Oral - 2ºDose',
      },
      {
        doencaId: 'febreAmarela',
        nome: 'Febre Amarela - 2ºDose',
      },
    ],
  },
  {
    id: 60,
    nome: 'Com 5 anos',
    vacinas: [
      {
        doencaId: 'tripliceBacteriana',
        nome: 'Tríplice bacteriana - Reforço',
      },
      {
        doencaId: 'poliomielite',
        nome: 'Poliomielite - Reforço',
      },
      {
        doencaId: 'meningococicasConjugadas',
        nome: 'Meningocócicas Conjugadas ACWY/C - Reforço',
      },
      {
        doencaId: 'influenza',
        nome: 'Influenza(Anual)',
      },
    ],
  },
  {
    id: 72,
    nome: 'Com 6 anos',
    vacinas: [
      {
        doencaId: 'meningococicasConjugadas',
        nome: 'Meningocócicas Conjugadas ACWY/C - Reforço',
      },
      {
        doencaId: 'influenza',
        nome: 'Influenza(Anual)',
      },
    ],
  },
  {
    id: 108,
    nome: 'Com 9 anos',
    vacinas: [
      {
        doencaId: 'influenza',
        nome: 'Influenza(Anual)',
      },
      {
        doencaId: 'hpv',
        nome: 'HPV (2 doses)',
      },
      {
        doencaId: 'tripliceBacteriana',
        nome: 'Vacina Tríplice Bacteriana Acelular do Tipo Adulto - Reforço',
      },
      {
        doencaId: 'dengue',
        nome: 'Dengue (Três doses para soropositivos)',
      },
    ],
  },
];
