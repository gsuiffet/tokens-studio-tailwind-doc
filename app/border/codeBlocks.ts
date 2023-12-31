const borderToken = {
  global: {
    red: {
      700: {
        value: '#b91c1c',
        type: 'color',
      },
    },
    'my-border': {
      value: {
        width: '4',
        style: 'dashed',
        color: '{red.700}',
      },
      type: 'border',
    },
  },
  dark: {
    'my-border': {
      value: {
        width: '2',
        color: '#1d4ed8',
      },
      type: 'border',
    },
  },
};

const border = JSON.stringify(borderToken, null, 2);

export { border };
