const borderRadiusToken = {
  global: {
    'my-border-radius': {
      value: '10% 30% 50% 70%',
      type: 'borderRadius',
    },
  },
  dark: {
    'my-border-radius': {
      value: '10px 160px 6px',
      type: 'borderRadius',
    },
  },
};

const borderRadius = JSON.stringify(borderRadiusToken, null, 2);

export { borderRadius };
