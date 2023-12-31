const variableInToken = {
  global: {
    rounded: {
      'square-lg': {
        value: '{xs}',
        type: 'borderRadius',
      },
      'half-button-lg': {
        value: '0 0 {xs} {xs}',
        type: 'borderRadius',
      },
    },
    xs: {
      value: '0.5rem',
      type: 'dimension',
    },
  },
};

const variable = JSON.stringify(variableInToken, null, 2);

export { variable };
