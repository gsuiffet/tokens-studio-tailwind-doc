import React, { FC, ReactElement } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';
import { Info } from '@/components/ui/info';
import { CardTable } from '@/components/ui/cardTable';
import Link from 'next/link';
import { Code } from '@/components/ui/code';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Steps } from '@/components/ui/steps';
import { TokenExample } from '@/components/ui/tokenExample';

type Keys =
  | 'parameter'
  | 'allowed_units'
  | 'default_unit'
  | 'allowed_values'
  | 'default_value'
  | 'others';

const dataTitles: { key: Keys; value: string }[] = [
  {
    key: 'parameter',
    value: 'Parameter',
  },
  {
    key: 'allowed_units',
    value: 'Allowed units',
  },
  {
    key: 'default_unit',
    value: 'Default unit',
  },
  {
    key: 'allowed_values',
    value: 'Allowed values',
  },
  {
    key: 'default_value',
    value: 'Default value',
  },
  {
    key: 'others',
    value: 'Information',
  },
];

const data: Record<Keys, string | ReactElement | null>[] = [
  {
    parameter: 'fontSize',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    allowed_values: null,
    default_value: <pre>0px</pre>,
    others: null,
  },
  {
    parameter: 'letterSpacing',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    allowed_values: null,
    default_value: <pre>0px</pre>,
    others: (
      <Info role="warning" className="px-2 py-1">
        <p className="w-fit">% will be transform to em</p>
      </Info>
    ),
  },
  {
    parameter: 'lineHeight',
    allowed_units: <pre>px | %</pre>,
    default_unit: <pre>px</pre>,
    allowed_values: null,
    default_value: <pre>0px</pre>,
    others: null,
  },
  {
    parameter: 'paragraphIndent',
    allowed_units: <pre>px | %</pre>,
    default_unit: <pre>px</pre>,
    allowed_values: null,
    default_value: <pre>0px</pre>,
    others: null,
  },
  {
    parameter: 'fontWeight',
    allowed_units: null,
    default_unit: null,
    allowed_values: (
      <Link href="/typography/font-weight" className="underline whitespace-nowrap">
        Font weight
      </Link>
    ),
    default_value: <pre>font-medium</pre>,
    others: null,
  },
  {
    parameter: 'textCase',
    allowed_units: null,
    default_unit: null,
    allowed_values: (
      <Link href="/typography/text-case" className="underline whitespace-nowrap">
        Text case
      </Link>
    ),
    default_value: <pre>normal-case</pre>,
    others: null,
  },
  {
    parameter: 'textDecoration',
    allowed_units: null,
    default_unit: null,
    allowed_values: (
      <Link href="/typography/text-decoration" className="underline whitespace-nowrap">
        Text decoration
      </Link>
    ),
    default_value: <pre>no-underline</pre>,
    others: null,
  },
  {
    parameter: 'paragraphSpacing',
    allowed_units: null,
    default_unit: null,
    allowed_values: null,
    default_value: null,
    others: (
      <Info role="warning" className="px-2 py-1">
        <p className="w-fit">Ignored</p>
      </Info>
    ),
  },
  {
    parameter: 'fontFamily',
    allowed_units: null,
    default_unit: null,
    allowed_values: null,
    default_value: <pre>sans</pre>,
    others: (
      <Info role="warning" className="px-2 py-1">
        <p className="w-fit">Require a manual intervention</p>
      </Info>
    ),
  },
];

const fontFamilyExample = [
  {
    title: 'fontFamily Example',
    token: (
      <Code
        code={JSON.stringify(
          {
            global: {
              h1: {
                value: {
                  fontFamily: 'Inter',
                },
                type: 'typography',
              },
            },
          },
          null,
          2,
        )}
        title="tokens.json"
      />
    ),
    generatedCSS: (
      <Code
        code={`@layer base {\n  h1 {\n    @apply: font-Inter\n  }\n}`}
        title="base-global.css"
        language="css"
      />
    ),
  },
];

const step_1 = {
  title: 'Set the font variable (for example using Next.js)',
  description: <p>Start by adding the CSS variable to your HTML document.</p>,
  element: (
    <div className="w-[80vw] max-w-[600px]">
      <Code
        code={`import { Inter } from 'next/font/google'\n\nconst fontInter = Inter({\n  subsets: ['latin'],\n  variable: '--font-Inter',\n});\n\nexport default function MyApp({ Component, pageProps }) {\n  return (\n    <main className={\`\${fontInter.variable} font-Inter\`}>\n      <Component {...pageProps} />\n    </main>\n  )\n}`}
        language="tsx"
        title="app/layout.tsx"
      />
    </div>
  ),
};

const step_2 = {
  title: 'Add the CSS variable',
  description: (
    <p>
      Define the CSS variable in your <strong>`tailwind.config.ts`</strong> file.
    </p>
  ),
  element: (
    <div className="w-[80vw] max-w-[600px]">
      <Code
        code={`import { fontFamily } from 'tailwindcss/defaultTheme';\n\nmodule.exports = {\n  ...\n  theme: {\n    extend: {\n      fontFamily: {\n        Inter: ['var(--font-Inter)', ...fontFamily.sans],\n        ...\n    },\n  },\n}`}
        language="javascript"
        title="tailwind.config.ts"
      />
    </div>
  ),
};

const Typography: FC = () => {
  // TODO check font-family on package!
  return (
    <>
      <h3 className="text-2xl font-semibold leading-none tracking-tight scroll-mt-[300px] my-4">
        Font family parameter
      </h3>
      <p className="my-4">Have a look at the token and the generated CSS below.</p>
      <div className="flex flex-col lg:hidden self-center gap-2">
        {/*todo duplicate*/}
        {fontFamilyExample.map(({ title, token, generatedCSS }) => (
          <Card className="block lg:hidden w-[80vw] max-w-[520px]" key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-6">
              <CardDescription>Token</CardDescription>
              {token}
              <CardDescription>Generated CSS</CardDescription>
              {generatedCSS}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="hidden lg:block w-full mx-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Generated CSS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fontFamilyExample.map(({ title, token, generatedCSS }) => (
              <TableRow className="w-full" key={title}>
                <TableCell className="w-[100px]">{title}</TableCell>
                <TableCell className="w-2/5 align-top max-w-[340px]">{token}</TableCell>
                <TableCell className="w-2/5 align-top max-w-[340px]">{generatedCSS}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="my-8">To resolve this, the fontFamily needs to be set and defined.</p>

      <div className="!my-8 relative">
        <Steps steps={[step_1, step_2]} />
      </div>

      <h3 className="text-2xl font-semibold leading-none tracking-tight scroll-mt-[300px] my-4">
        All parameters
      </h3>

      <CardTable data={data} dataTitles={dataTitles} cardTitle="parameter" />

      <div className="!mb-8 relative">
        <Info>
          <ul className="leading-7 list-disc">
            <li>
              <strong>Token name:</strong> The token&apos;s name determines whether it is
              categorized as a base or a layer component. Tokens defined with names such as{' '}
              <strong>
                `h1 | h2 | h3 | h4 | p | li | a | blockquote | button | th | td | code | small`
              </strong>{' '}
              belong to the Tailwind base layer and can be directly applied using the corresponding
              HTML tag in your template.
            </li>
            <li>
              <strong>Usage with Media Queries:</strong> Some design tokens, such as typography
              tokens, are not designed to work directly with media queries. For example, when
              defining typography with varying font sizes based on screen size, it is crucial to
              maintain distinct tokens. It is recommended to initially create tokens for smaller
              screens before addressing larger screen configurations.
            </li>
          </ul>
        </Info>
      </div>

      <TokenExample
        example={JSON.stringify(
          {
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
          },
          null,
          2,
        )}
        usage={`<>\n  <h1 className="lg:h1-lg">\n    Title\n  </h1>\n  <p className="subtitle lg:subtitle-lg">\n    Description\n  </p>\n</>`}
      >
        <>
          <h1 className="lg:h1-lg">Title</h1>
          <p className="subtitle lg:subtitle-lg">Description</p>
        </>
      </TokenExample>
    </>
  );
};

export default Typography;
