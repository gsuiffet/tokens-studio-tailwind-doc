const globalToken = {
  fontSize: {
    '0': {
      value: '16',
      type: 'fontSizes',
    },
    '1': {
      value: '20',
      type: 'fontSizes',
    },
    '2': {
      value: '24',
      type: 'fontSizes',
    },
    '3': {
      value: '30',
      type: 'fontSizes',
    },
    '4': {
      value: '48',
      type: 'fontSizes',
    },
  },
  letterSpacing: {
    '0': {
      value: '-1.2%',
      type: 'letterSpacing',
    },
    '1': {
      value: '-0.75%',
      type: 'letterSpacing',
    },
    '2': {
      value: '-0.6%',
      type: 'letterSpacing',
    },
    '3': {
      value: '-0.5%',
      type: 'letterSpacing',
    },
    '4': {
      value: '0%',
      type: 'letterSpacing',
    },
  },
  lineHeights: {
    '0': {
      value: '100%',
      type: 'lineHeights',
    },
    '1': {
      value: '36',
      type: 'lineHeights',
    },
    '2': {
      value: '32',
      type: 'lineHeights',
    },
    '3': {
      value: '28',
      type: 'lineHeights',
    },
  },
};

const darkToken = {
  fontSize: {
    '0': {
      value: '16',
      type: 'fontSizes',
    },
    '1': {
      value: '20',
      type: 'fontSizes',
    },
    '2': {
      value: '24',
      type: 'fontSizes',
    },
    '3': {
      value: '30',
      type: 'fontSizes',
    },
    '4': {
      value: '48',
      type: 'fontSizes',
    },
  },
  letterSpacing: {
    '0': {
      value: '-1.2%',
      type: 'letterSpacing',
    },
    '1': {
      value: '-0.75%',
      type: 'letterSpacing',
    },
    '2': {
      value: '-0.6%',
      type: 'letterSpacing',
    },
    '3': {
      value: '-0.5%',
      type: 'letterSpacing',
    },
    '4': {
      value: '0%',
      type: 'letterSpacing',
    },
  },
  lineHeights: {
    '0': {
      value: '100%',
      type: 'lineHeights',
    },
    '1': {
      value: '36',
      type: 'lineHeights',
    },
    '2': {
      value: '32',
      type: 'lineHeights',
    },
    '3': {
      value: '28',
      type: 'lineHeights',
    },
  },
};

const buildScript = {
  scripts: {
    dev: 'npm run build:sd && next dev',
    build: 'npm run build:sd && next build',
    'build:sd': 'tokens-studio-tailwind -j tokens/tokens.json -t global,dark',
  },
};

const global = JSON.stringify(globalToken, null, 2);
const dark = JSON.stringify(darkToken, null, 2);
const script = JSON.stringify(buildScript, null, 2);

export { global, dark, script };
