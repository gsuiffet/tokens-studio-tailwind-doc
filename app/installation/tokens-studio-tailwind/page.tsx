import { Steps } from '@/components/ui/steps';
import React from 'react';
import { Code } from '@/components/ui/code';
import { Info } from '@/components/ui/info';
import { EmphasisAndLink } from '@/lib/emphasisAndLink';
import { script } from '../codeBlocks';
import { Next } from '@/components/ui/next';

const step_1 = {
  title: 'Install Tokens Studio Tailwind',
  description: <p>Start by installing the Tokens Studio Tailwind package.</p>,
  element: (
    <Code
      code="npm install --save-dev @gsuiffet/tokens-studio-tailwind"
      language="bash"
      title="Terminal"
      canCopy
    />
  ),
};

const step_2 = {
  title: 'Add the script',
  description: (
    <>
      <p>
        {EmphasisAndLink({
          text: `Add the following script to your \`package.json\`.`,
          emphasis: [`package.json`],
        })}
      </p>
      <Info
        data={[
          EmphasisAndLink({
            text: `-j option specifies the absolute path to your JSON design tokens file`,
            emphasis: [`-j`],
          }),
          EmphasisAndLink({
            text: `-t option (optional) is a comma-separated list of your themes`,
            emphasis: [`-t`],
          }),
        ]}
      />
    </>
  ),
  element: <Code code={script} language="json" title="package.json" canCopy />,
};

const step_3 = {
  title: 'Run the script',
  description: (
    <>
      <p>
        {EmphasisAndLink({
          text: `Init Tokens Studio Tailwind by running the script for the first time.`,
          emphasis: [`Tokens Studio Tailwind`],
        })}
      </p>
      <Info
        data={EmphasisAndLink({
          text: `This will create a \`sd-output\` folder at the top-level of your project
          and generate several files according to your tokens.`,
          emphasis: [`sd-output`],
        })}
      />
    </>
  ),
  element: <Code code="npm run build:sd" language="bash" title="Terminal" canCopy />,
};

const step_4 = {
  title: 'Import the generated CSS',
  description: (
    <>
      <p>
        {EmphasisAndLink({
          text: `Follow this step to import all generated CSS into your \`global.css\` file.`,
          emphasis: [`global.css`],
        })}
      </p>
      <Info
        data={[
          EmphasisAndLink({
            text: `Install \`postcss-import\``,
            emphasis: [`postcss-import`],
          }),
          EmphasisAndLink({
            text: `Create a file \`postcss.config.js\``,
            emphasis: [`postcss.config.js`],
          }),
          EmphasisAndLink({
            text: `Import the \`./sd-output\` folder into your \`global.css\``,
            emphasis: [`./sd-output`, `global.css`],
          }),
        ]}
        listStyle="list-decimal"
      />
    </>
  ),
  element: (
    <>
      <Code code="npm install --save-dev postcss-import" language="bash" title="Terminal" canCopy />
      <Code
        code={`module.exports = {\n  plugins: {\n    'postcss-import': {},\n    tailwindcss: {},\n    autoprefixer: {},\n  }\n}`}
        language="javascript"
        title="postcss.config.js"
        canCopy
      />
      <Code
        code={`@import './sd-output';\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n@layer base {\n  // ...\n}`}
        language="css"
        title="global.css"
        canCopy
      />
    </>
  ),
};

const step_5 = {
  title: 'Set Tailwind CSS class Utilities',
  description: (
    <p>
      {EmphasisAndLink({
        text: `Override or extend your Tailwind theme using the \`./sd-output/tw-tokens.json\` file.`,
        emphasis: [`./sd-output/tw-tokens.json`],
      })}
    </p>
  ),
  element: (
    <Code
      code={`const tokens = require('./sd-output/tw-tokens.json');\nconst {\n  spacing,\n  opacity,\n  borderWidth,\n  backgroundImage,\n  color,\n  boxShadow,\n  lineHeight,\n  fontSize,\n  letterSpacing,\n} = tokens\n\nmodule.exports = {\n  ...\n  theme: {\n    boxShadow,\n    extend: {\n      fontSize,\n      colors: {\n        ...color,\n        ...\n      }\n    },\n  },\n}`}
      language="javascript"
      title="tailwind.config.ts"
      canCopy
    />
  ),
};

export default function InstallationTokensStudioTailwind() {
  return (
    <>
      <Steps steps={[step_1, step_2, step_3, step_4, step_5]} />
      <Next nextStep="generated-css" />
    </>
  );
}
