export type Keys =
  | 'token_type'
  | 'tailwind_utility'
  | 'allowed_units'
  | 'default_unit'
  | 'default_token_value'
  | 'usage';

export const dataTitles: { key: Keys; value: string }[] = [
  {
    key: 'token_type',
    value: 'Token type',
  },
  {
    key: 'tailwind_utility',
    value: 'Tailwind utility',
  },
  {
    key: 'allowed_units',
    value: 'Allowed units',
  },
  {
    key: 'default_unit',
    value: 'Default unit',
  },
  {
    key: 'default_token_value',
    value: 'Default token value',
  },
  {
    key: 'usage',
    value: 'Usage',
  },
];
