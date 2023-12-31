const exampleTokens = {
  global: {
    xs: {
      value: '3',
      type: 'lineHeights',
    },
  },
  dark: {
    xs: {
      value: '3',
      type: 'lineHeights',
    },
  },
  $themes: [],
  $metadata: {
    tokenSetOrder: ['global', 'dark'],
  },
};

const tokens = JSON.stringify(exampleTokens, null, 2);

export { tokens };
