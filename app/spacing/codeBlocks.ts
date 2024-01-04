const spacingToken = {
  global: {
    'my-spacing': {
      value: '1rem 0 8 14',
      type: 'spacing',
    },
  },
  dark: {
    'my-spacing': {
      value: '10 50 20',
      type: 'spacing',
    },
  },
};

const spacing = JSON.stringify(spacingToken, null, 2);

export { spacing };
