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
        doencaId: '1',
        nome: 'BCG ID(Tuberculose)',
      },
      {
        doencaId: '2',
        nome: 'Hepatite B - 1ºDose',
      },
    ],
  },
  {
    id: 2,
    nome: 'com 2 meses',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Hepatite B - 2ºDose',
      },
      {
        doencaId: '2',
        nome: 'Tríplice bacteriana - 1ºDose',
      },
      {
        doencaId: '3',
        nome: 'BCG ID(Tuberculose)',
      },
      {
        doencaId: '4',
        nome: 'Haemophilus Influenzae b - 1ºDose',
      },
      {
        doencaId: '5',
        nome: 'Poliomielite - 1ºDose',
      },
      {
        doencaId: '6',
        nome: 'Rotavírus - 1ºDose',
      },
      {
        doencaId: '7',
        nome: 'Pneumocócicas - 1ºDose',
      },
    ],
  },
  {
    id: 3,
    nome: 'Com 3 meses',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Rotavírus - 2ºDose',
      },
      {
        doencaId: '2',
        nome: 'Pneumocócicas conjugadas - 2ºDose',
      },
      {
        doencaId: '3',
        nome: 'Meningocócicas conjugadas ACWY/C - 1ºDose',
      },
      {
        doencaId: '4',
        nome: 'Meningocócica B - 1ºDose',
      },
    ],
  },
  {
    id: 4,
    nome: 'Com 4 meses',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Tríplice bacteriana - 2ºDose',
      },
      {
        doencaId: '2',
        nome: 'Haemophilus influenzae b - 2ºDose',
      },
      {
        doencaId: '3',
        nome: 'Poliomielite - 2ºDose',
      },
      {
        doencaId: '4',
        nome: 'Rotavírus - 3ºDose',
      },
      {
        doencaId: '5',
        nome: 'Pneumocócicas conjugadas - 3ºDose',
      },
    ],
  },
  {
    id: 5,
    nome: 'Com 5 meses',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Meningocócicas conjugadas ACWY/C - 2ºDose',
      },
      {
        doencaId: '2',
        nome: 'Meningocócica B - 2ºDose',
      },
    ],
  },
  {
    id: 6,
    nome: 'Com 6 meses',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Hepatite B - 3ºDose',
      },
      {
        doencaId: '2',
        nome: 'Tríplice bacteriana - 3ºDose',
      },
      {
        doencaId: '3',
        nome: 'Haemophilus influenzae b - 3ºDose',
      },
      {
        doencaId: '4',
        nome: 'Poliomielite - 3ºDose',
      },
      {
        doencaId: '5',
        nome: 'Influenza(Anual)',
      },
    ],
  },
  {
    id: 7,
    nome: 'Com 7 meses',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Influenza(Anual)',
      },
    ],
  },
  {
    id: 8,
    nome: 'Com 8 meses',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Influenza(Anual)',
      },
    ],
  },
  {
    id: 9,
    nome: 'Com 9 meses',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Influenza(Anual)',
      },
      {
        doencaId: '2',
        nome: 'Febre Amarela - 1ºDose',
      },
    ],
  },
  {
    id: 12,
    nome: 'Com 12 meses',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Pneumocócicas Conjugadas - Reforço',
      },
      {
        doencaId: '2',
        nome: 'Meningocócicas Conjugadas ACWY/C - Reforço',
      },
      {
        doencaId: '3',
        nome: 'Meningocócica B - Reforço',
      },
      {
        doencaId: '4',
        nome: 'Influenza(Anual)',
      },
      {
        doencaId: '5',
        nome: 'Hepatite A - 1ºDose',
      },
      {
        doencaId: '6',
        nome: 'Tríplice Viral - 1ºDose',
      },
      {
        doencaId: '7',
        nome: 'Varicela - 1ºDose',
      },
    ],
  },
  {
    id: 15,
    nome: 'Com 15 meses',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Tríplice bacteriana - Reforço',
      },
      {
        doencaId: '2',
        nome: 'Haemophilus Influenzae b - Reforço',
      },
      {
        doencaId: '3',
        nome: 'Poliomielite - Reforço',
      },
      {
        doencaId: '4',
        nome: 'Pneumocócicas Conjugadas - Reforço',
      },
      {
        doencaId: '5',
        nome: 'Meningocócicas Conjugadas ACWY/C - Reforço',
      },
      {
        doencaId: '6',
        nome: 'Meningocócica B - Reforço',
      },
      {
        doencaId: '7',
        nome: 'Influenza(Anual)',
      },
      {
        doencaId: '8',
        nome: 'Tríplice Viral - 2ºDose',
      },
      {
        doencaId: '9',
        nome: 'Varicela - 2ºDose',
      },
    ],
  },
  {
    id: 18,
    nome: 'Com 18 meses',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Tríplice bacteriana - Reforço',
      },
      {
        doencaId: '2',
        nome: 'Haemophilus Influenzae b - Reforço',
      },
      {
        doencaId: '3',
        nome: 'Poliomielite - Reforço',
      },
      {
        doencaId: '4',
        nome: 'Influenza(Anual)',
      },
      {
        doencaId: '5',
        nome: 'Hepatite A - 2ºDose',
      },
      {
        doencaId: '6',
        nome: 'Tríplice Viral - 2ºDose',
      },
      {
        doencaId: '7',
        nome: 'Varicela - 2ºDose',
      },
    ],
  },
  {
    id: 24,
    nome: 'Com 24 meses',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Influenza(Anual)',
      },
    ],
  },
  {
    id: 48,
    nome: 'Com 4 anos',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Tríplice bacteriana - Reforço',
      },
      {
        doencaId: '2',
        nome: 'Poliomielite - Reforço',
      },
      {
        doencaId: '3',
        nome: 'Influenza(Anual)',
      },
      {
        doencaId: '4',
        nome: 'Hepatite A - 2ºDose',
      },
      {
        doencaId: '5',
        nome: 'Poliomielite Oral - 2ºDose',
      },
    ],
  },
  {
    id: 60,
    nome: 'Com 5 anos',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Tríplice bacteriana - Reforço',
      },
      {
        doencaId: '2',
        nome: 'Poliomielite - Reforço',
      },
      {
        doencaId: '3',
        nome: 'Meningocócicas Conjugadas ACWY/C - Reforço',
      },
      {
        doencaId: '4',
        nome: 'Influenza(Anual)',
      },
    ],
  },
  {
    id: 72,
    nome: 'Com 6 anos',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Meningocócicas Conjugadas ACWY/C - Reforço',
      },
      {
        doencaId: '2',
        nome: 'Influenza(Anual)',
      },
    ],
  },
  {
    id: 108,
    nome: 'Com 9 anos',
    vacinas: [
      {
        doencaId: '1',
        nome: 'Influenza(Anual)',
      },
      {
        doencaId: '2',
        nome: 'HPV (2 doses)',
      },
      {
        doencaId: '3',
        nome: 'Vacina Tríplice Bacteriana Acelular do Tipo Adulto - Reforço',
      },
      {
        doencaId: '4',
        nome: 'Dengue (Três doses para soropositivos)',
      },
    ],
  },
];

{
  id: 1;
  nome: ''
}