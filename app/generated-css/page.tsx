import React, { FC } from 'react';
import { Info } from '@/components/ui/info';
import { Code } from '@/components/ui/code';
import { EmphasisAndLink } from '@/lib/emphasisAndLink';
import { GeneratedCSS } from '@/components/ui/generatedCSS';
import { simple, withChildren, theme } from './codeBlocks';
import { Next } from '@/components/ui/next';

const data = [
  {
    title: 'Simple token',
    token: <Code code={simple} title="tokens.json" />,
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
    token: <Code code={withChildren} title="tokens.json" />,
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
    token: <Code code={theme} title="tokens.json" />,
    generatedCSS: (
      <Code
        code={`@layer base {\n  .dark {\n    --token-name: TOKEN_VALUE !important;\n  }\n}`}
        title="dark-global.css"
        language="css"
      />
    ),
  },
];

const GeneratedCSSPage: FC = () => {
  return (
    <>
      <section>
        <Info
          data={[
            EmphasisAndLink({
              text: `Transformation of Token Keys: Token keys are transformed into
              kebab-case format. For tokens with multiple children, the package concatenates the
              parent key with all children keys.`,
              emphasis: ['Transformation of Token Keys:'],
            }),
            EmphasisAndLink({
              text: `Theme-specific Token Handling: Tokens located within a theme other
              than the \`global\` theme will be utilized with the
              \`!important\` keyword. This approach is adopted as a precautionary
              measure, especially when a variable shares the same name between themes but contains
              different values.`,
              emphasis: ['Theme-specific Token Handling:', `global`, `!important`],
            }),
            EmphasisAndLink({
              text: `Usage with Media Queries: Some design tokens, such as typography
              tokens, are not designed to work directly with media queries. For example, when
              defining typography with varying font sizes based on screen size, it is crucial to
              maintain distinct tokens. It is recommended to initially create tokens for smaller
              screens before addressing larger screen configurations. See the Typography page.`,
              emphasis: ['Usage with Media Queries:'],
              link: {
                match: 'Typography page',
                href: '/typography',
              },
            }),
          ]}
        />
        <GeneratedCSS data={data} />
      </section>
      <Next nextStep="generated-css/variable-token" />
    </>
  );
};

export default GeneratedCSSPage;
