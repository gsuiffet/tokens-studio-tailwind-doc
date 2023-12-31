const fontSizeToken = {
  global: {
    'my-font-size-token': {
      value: '32',
      type: 'fontSizes',
    },
  },
  dark: {
    'my-font-size-token': {
      value: '20',
      type: 'fontSizes',
    },
  },
};

const colorToken = {
  global: {
    'my-color': {
      value: '#b91c1c',
      type: 'color',
    },
  },
  dark: {
    'my-color': {
      value: '#1d4ed8',
      type: 'color',
    },
  },
};

const backgroundImageToken = {
  global: {
    red: {
      100: {
        value: '#fee2e2',
        type: 'color',
      },
      700: {
        value: '#b91c1c',
        type: 'color',
      },
    },
    blue: {
      100: {
        value: '#dbeafe',
        type: 'color',
      },
      700: {
        value: '#1d4ed8',
        type: 'color',
      },
    },
    'my-gradient': {
      value: 'linear-gradient (45deg, {red.700} 0%, {blue.700} 100%)',
      type: 'color',
    },
  },
  dark: {
    'my-gradient': {
      value: 'linear-gradient (45deg, #1d4ed8 0%, #b91c1c 100%)',
      type: 'color',
    },
  },
};

const fontSize = JSON.stringify(fontSizeToken, null, 2);
const color = JSON.stringify(colorToken, null, 2);
const backgroundImage = JSON.stringify(backgroundImageToken, null, 2);

export { fontSize, color, backgroundImage };
