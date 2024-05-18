export interface ComplexConcreteClassSelectField {
  key: string;
  name: string;
}

export interface ComplexConcreteClassSelectConcreteTypes extends ComplexConcreteClassSelectField {
  subtypes: ComplexConcreteClassSelectField[];
}

export const concrete_types: ComplexConcreteClassSelectConcreteTypes[] = [
  {
    key: 'heavy',
    name: 'Тяжелый',
    subtypes: []
  },
  {
    key: 'light_grain',
    name: 'Мелкозернистый',
    subtypes: [
      {
        key: 'natural',
        name: 'Естественного твердения'
      },
      {
        key: 'autoclave',
        name: 'Автоклавного твердения'
      }
    ]
  },
  {
    key: 'light_aerated_by_density',
    name: 'Легкий и поризованный',
    subtypes: [
      {
        key: 'd_800',
        name: 'Плотность D800'
      },
      {
        key: 'd_1000',
        name: 'Плотность D1000'
      },
      {
        key: 'd_1200',
        name: 'Плотность D1200'
      },
      {
        key: 'd_1400',
        name: 'Плотность D1400'
      },
      {
        key: 'd_1600',
        name: 'Плотность D1600'
      },
      {
        key: 'd_1800',
        name: 'Плотность D1800'
      },
      {
        key: 'd_2000',
        name: 'Плотность D2000'
      }
    ]
  },
  {
    key: 'cellular_autoclave_by_density',
    name: 'Ячеистый автоклавного твердения',
    subtypes: [
      {
        key: 'd_500',
        name: 'Плотность D500'
      },
      {
        key: 'd_600',
        name: 'Плотность D600'
      },
      {
        key: 'd_700',
        name: 'Плотность D700'
      },
      {
        key: 'd_800',
        name: 'Плотность D800'
      },
      {
        key: 'd_900',
        name: 'Плотность D900'
      },
      {
        key: 'd_1000',
        name: 'Плотность D1000'
      },
      {
        key: 'd_1100',
        name: 'Плотность D1100'
      },
      {
        key: 'd_1200',
        name: 'Плотность D1200'
      }
    ]
  }
];

export const keyToNameMap = new Map<string, string>([
  ['heavy', 'Тяжелый'],
  ['light_grain', 'Мелкозернистый'],
  ['natural', 'А - Естественного твердения'],
  ['autoclave', 'Б - Автоклавного твердения'],
  ['light_aerated_by_density', 'Легкий и поризованный'],
  ['d_800', 'Плотность D800'],
  ['d_1000', 'Плотность D1000'],
  ['d_1200', 'Плотность D1200'],
  ['d_1400', 'Плотность D1400'],
  ['d_1600', 'Плотность D1600'],
  ['d_1800', 'Плотность D1800'],
  ['d_2000', 'Плотность D2000'],
  ['cellular_autoclave_by_density', 'Ячеистый автоклавного твердения'],
  ['d_500', 'Плотность D500'],
  ['d_600', 'Плотность D600'],
  ['d_700', 'Плотность D700'],
  //['d_800', 'Плотность D800'], //duplicates
  ['d_900', 'Плотность D900'],
  //['d_1000', 'Плотность D1000'],
  ['d_1100', 'Плотность D1100']
  //['d_1200', 'Плотность D1200']
]);
