import React, { FC } from 'react';
import { PageHeader } from '@/components/pageHeader';
import { Info } from '@/components/info';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Code } from '@/components/code';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  {
    title: 'Simple token',
    token: (
      <Code
        code={JSON.stringify(
          { global: { TOKEN_NAME: { value: 'TOKEN_VALUE', type: 'TOKEN_TYPE' } } },
          null,
          2,
        )}
        title="tokens.json"
      />
    ),
    generatedCSS: (
      <Code
        code={`@layer base {\n  :root {\n    --token-name: TOKEN_VALUE;\n  }\n}`}
        title="base-global.css"
        language="css"
      />
    ),
  },
  {
    title: 'Token with children',
    token: (
      <Code
        code={JSON.stringify(
          {
            global: {
              TOKEN_NAME_PARENT: {
                TOKEN_NAME_CHILDREN: { value: 'TOKEN_VALUE', type: 'TOKEN_TYPE' },
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
        code={`@layer base {\n  :root {\n    --token-name-parent-token-name-children: TOKEN_VALUE;\n  }\n}`}
        title="base-global.css"
        language="css"
      />
    ),
  },
  {
    title: 'Theme token',
    token: (
      <Code
        code={JSON.stringify(
          { dark: { TOKEN_NAME: { value: 'TOKEN_VALUE', type: 'TOKEN_TYPE' } } },
          null,
          2,
        )}
        title="tokens.json"
      />
    ),
    generatedCSS: (
      <Code
        code={`@layer base {\n  .dark {\n    --token-name: TOKEN_VALUE !important;\n  }\n}`}
        title="dark-global.css"
        language="css"
      />
    ),
  },
];

const GeneratedCSS: FC = () => {
  return (
    <>
      <PageHeader
        title="Generated CSS from token"
        description="Transforming Tokens into Dynamic CSS"
      />
      <div className="flex flex-col gap-8 px-4 pb-8">
        <Info>
          <p className="-ml-4 underline">
            When generating CSS from tokens, consider the following points:
          </p>
          <ul className="leading-7 list-disc">
            <li>
              <strong>Variable Token Values:</strong> A token value may be defined as a variable. In
              such cases, the package will automatically assign the corresponding value.
            </li>
            <li>
              <strong>Transformation of Token Keys:</strong> Token keys are transformed into
              kebab-case format. For tokens with multiple children, the package concatenates the
              parent key with all children keys.
            </li>
            <li>
              <strong>Theme-specific Token Handling:</strong> Tokens located within a theme other
              than the <strong>`global`</strong> theme will be utilized with the{' '}
              <strong>`!important`</strong> keyword. This approach is adopted as a precautionary
              measure, especially when a variable shares the same name between themes but contains
              different values.
            </li>
          </ul>
        </Info>
        <div className="flex flex-col lg:hidden self-center gap-2">
          {data.map(({ title, token, generatedCSS }) => (
            <Card className="block lg:hidden w-[80vw] max-w-[520px]" key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {token}
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
              {data.map(({ title, token, generatedCSS }) => (
                <TableRow className="w-full" key={title}>
                  <TableCell className="w-[100px]">{title}</TableCell>
                  <TableCell className="w-2/5 align-top max-w-[340px]">{token}</TableCell>
                  <TableCell className="w-2/5 align-top max-w-[340px]">{generatedCSS}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default GeneratedCSS;
