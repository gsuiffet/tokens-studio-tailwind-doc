const typographyToken = {
  global: {
    h1: {
      value: {
        fontFamily: '{fontFamilies.Inter}',
        fontWeight: 'Bold',
        lineHeight: '48',
        fontSize: '1.875rem',
        letterSpacing: '-0.025em',
        paragraphSpacing: '',
        paragraphIndent: '',
        textCase: 'none',
        textDecoration: 'none',
      },
      type: 'typography',
    },
    'h1-lg': {
      value: {
        fontFamily: '{fontFamilies.Inter}',
        fontWeight: 'Bold',
        lineHeight: '72',
        fontSize: '3rem',
        letterSpacing: '-0.025em',
        paragraphSpacing: '',
        paragraphIndent: '',
        textCase: 'none',
        textDecoration: 'none',
      },
      type: 'typography',
    },
    subtitle: {
      value: {
        fontFamily: '{fontFamilies.Inter}',
        fontSize: '1.125rem',
        lineHeight: '28',
        fontWeight: '400',
      },
      type: 'typography',
    },
    'subtitle-lg': {
      value: {
        fontFamily: '{fontFamilies.Inter}',
        fontSize: '1.25rem',
        lineHeight: '30',
        fontWeight: '400',
      },
      type: 'typography',
    },
  },
};

const fontFamilyToken = {
  global: {
    h1: {
      value: {
        fontFamily: 'Inter',
      },
      type: 'typography',
    },
  },
};

const typography = JSON.stringify(typographyToken, null, 2);
const fontFamily = JSON.stringify(fontFamilyToken, null, 2);
const generatedCSS = '@layer base {\n  h1 {\n    @apply: font-Inter\n  }\n}';
const step1 = `import { Inter } from 'next/font/google'\n\nconst fontInter = Inter({\n  subsets: ['latin'],\n  variable: '--font-Inter',\n});\n\nexport default function MyApp({ Component, pageProps }) {\n  return (\n    <main className={\`\${fontInter.variable} font-Inter\`}>\n      <Component {...pageProps} />\n    </main>\n  )\n}`;
const step2 = `import { fontFamily } from 'tailwindcss/defaultTheme';\n\nmodule.exports = {\n  ...\n  theme: {\n    extend: {\n      fontFamily: {\n        Inter: ['var(--font-Inter)', ...fontFamily.sans],\n        ...\n    },\n  },\n}`;

export { typography, fontFamily, generatedCSS, step1, step2 };
