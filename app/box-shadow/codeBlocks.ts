const simpleShadowToken = {
  global: {
    'my-shadow-tokens': {
      value: {
        x: '0',
        y: '25',
        blur: '50',
        spread: '-12',
        color: '#1d4ed8',
        type: 'dropShadow',
      },
      type: 'boxShadow',
    },
  },
  dark: {
    'my-shadow-tokens': {
      value: {
        x: '0',
        y: '25',
        blur: '50',
        spread: '-12',
        color: '#b91c1c',
        type: 'dropShadow',
      },
      type: 'boxShadow',
    },
  },
};

const complexShadowToken = {
  global: {
    shadows: {
      default: {
        value: '228, 10, 10',
        type: 'color',
      },
    },
    'my-complex-shadow-tokens': {
      default: {
        value: [
          {
            x: 5,
            y: 5,
            spread: 3,
            color: 'rgba({shadows.default}, 0.15)',
            blur: 5,
            type: 'dropShadow',
          },
          {
            x: 4,
            y: 4,
            spread: 6,
            color: '#00000033',
            blur: 5,
            type: 'innerShadow',
          },
        ],
        type: 'boxShadow',
      },
    },
  },
  dark: {
    shadows: {
      default: {
        value: '145, 207, 118',
        type: 'color',
      },
    },
    'my-complex-shadow-tokens': {
      default: {
        value: [
          {
            x: 5,
            y: 5,
            spread: 3,
            color: 'rgba({shadows.default}, 0.30)',
            blur: 5,
            type: 'dropShadow',
          },
          {
            x: 4,
            y: 4,
            spread: 6,
            color: '#00000033',
            blur: 5,
            type: 'innerShadow',
          },
        ],
        type: 'boxShadow',
      },
    },
  },
};

const simpleShadow = JSON.stringify(simpleShadowToken, null, 2);
const complexShadow = JSON.stringify(complexShadowToken, null, 2);

export { simpleShadow, complexShadow };
