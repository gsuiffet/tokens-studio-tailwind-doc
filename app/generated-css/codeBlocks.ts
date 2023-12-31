const simpleToken = { global: { TOKEN_NAME: { value: 'TOKEN_VALUE', type: 'TOKEN_TYPE' } } };
const withChildrenToken = {
  global: {
    TOKEN_NAME_PARENT: {
      TOKEN_NAME_CHILDREN: { value: 'TOKEN_VALUE', type: 'TOKEN_TYPE' },
    },
  },
};
const themeToken = { dark: { TOKEN_NAME: { value: 'TOKEN_VALUE', type: 'TOKEN_TYPE' } } };

const simple = JSON.stringify(simpleToken, null, 2);
const withChildren = JSON.stringify(withChildrenToken, null, 2);
const theme = JSON.stringify(themeToken, null, 2);

export { simple, withChildren, theme };
