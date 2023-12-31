import React, { FC } from 'react';
import { Info } from '@/components/ui/info';
import { CardTable } from '@/components/ui/cardTable';
import { Code } from '@/components/ui/code';
import { Steps } from '@/components/ui/steps';
import { TokenExample } from '@/components/ui/tokenExample';
import { typography, fontFamily, generatedCSS, step1, step2 } from './codeBlocks';
import { GeneratedCSS } from '@/components/ui/generatedCSS';
import { EmphasisAndLink } from '@/lib/emphasisAndLink';
import { ButtonLink } from '@/components/ui/buttonLink';

type Keys =
  | 'parameter'
  | 'allowed_units'
  | 'default_unit'
  | 'allowed_values'
  | 'default_value'
  | 'others';

const cardTableTitles: { key: Keys; value: string }[] = [
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

const cardTableData = [
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
    others: <Info role="warning" data="% will be transform to em" />,
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
      <ButtonLink
        className="lg:flex justify-center"
        href="/typography/font-weight"
        title="Font Weight"
      />
    ),
    default_value: <pre>font-medium</pre>,
    others: null,
  },
  {
    parameter: 'textCase',
    allowed_units: null,
    default_unit: null,
    allowed_values: (
      <ButtonLink
        className="lg:flex justify-center"
        href="/typography/text-case"
        title="Text Case"
      />
    ),
    default_value: <pre>normal-case</pre>,
    others: null,
  },
  {
    parameter: 'textDecoration',
    allowed_units: null,
    default_unit: null,
    allowed_values: (
      <ButtonLink
        className="lg:flex justify-center"
        href="/typography/text-decoration"
        title="Text Decoration"
      />
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
    others: <Info role="warning" data="Ignored" />,
  },
  {
    parameter: 'fontFamily',
    allowed_units: null,
    default_unit: null,
    allowed_values: null,
    default_value: <pre>sans</pre>,
    others: <Info role="warning" data="Require a manual intervention" />,
  },
];

const generatedCSSData = [
  {
    title: 'fontFamily Example',
    token: <Code code={fontFamily} title="tokens.json" />,
    generatedCSS: <Code code={generatedCSS} title="base-global.css" language="css" />,
  },
];

const step_1 = {
  title: 'Set the font variable (for example using Next.js)',
  description: <p>Start by adding the CSS variable to your HTML document.</p>,
  element: <Code code={step1} language="tsx" title="app/layout.tsx" />,
};

const step_2 = {
  title: 'Add the CSS variable',
  description: (
    <p>
      {EmphasisAndLink({
        text: 'Define the CSS variable in your `tailwind.config.ts` file.',
        emphasis: [`tailwind.config.ts`],
      })}
    </p>
  ),
  element: <Code code={step2} language="javascript" title="tailwind.config.ts" />,
};

const Typography: FC = () => {
  return (
    <>
      <section>
        <h2> Font family parameter</h2>
        <p>Have a look at the token and the generated CSS below.</p>
        <GeneratedCSS data={generatedCSSData} />
        <p>To resolve this, the fontFamily needs to be set and defined.</p>
        <Steps steps={[step_1, step_2]} />
      </section>

      <section>
        <h2>All parameters</h2>
        <CardTable data={cardTableData} dataTitles={cardTableTitles} cardTitle="parameter" />
      </section>

      <Info
        data={[
          EmphasisAndLink({
            text: `Token name: The token's name determines whether it is categorized
            as a base or a layer component. Tokens defined with names such as
            h1 | h2 | h3 | h4 | p | li | a | blockquote | button | th | td | code | small
            belong to the Tailwind base layer and can be directly applied using the corresponding
            HTML tag in your template.`,
            emphasis: [
              'Token name:',
              'h1 | h2 | h3 | h4 | p | li | a | blockquote | button | th | td | code | small',
            ],
          }),
          EmphasisAndLink({
            text: `Usage with Media Queries: Some design tokens, such as typography
            tokens, are not designed to work directly with media queries. For example, when defining
            typography with varying font sizes based on screen size, it is crucial to maintain
            distinct tokens. It is recommended to initially create tokens for smaller screens before
            addressing larger screen configurations.`,
            emphasis: ['Usage with Media Queries:'],
          }),
        ]}
      />

      <TokenExample
        example={typography}
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
