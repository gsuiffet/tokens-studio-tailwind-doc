import { Steps } from '@/components/steps';
import React from 'react';
import { Code } from '@/components/code';
import { Info } from '@/components/info';

const step_1 = {
  title: 'Install Tokens Studio Tailwind',
  description: <p>Start by installing the Tokens Studio Tailwind package</p>,
  element: (
    <div className="w-[80vw] max-w-[600px]">
      <Code
        code="npm install --save-dev @gsuiffet/tokens-studio-tailwind"
        language="bash"
        title="Terminal"
        canCopy
      />
    </div>
  ),
};

const step_2 = {
  title: 'Add the script',
  description: (
    <div className="flex flex-col gap-2">
      <p>
        Add the following script to your <strong>`package.json`</strong>
      </p>
      <Info>
        <ul className="leading-7 list-disc">
          <li>
            <strong>`-j`</strong> option specifies the absolute path to your JSON design tokens file
          </li>
          <li>
            <strong>`-t`</strong> option (optional) is a comma-separated list of your themes
          </li>
        </ul>
      </Info>
    </div>
  ),
  element: (
    <div className="w-[80vw] max-w-[600px]">
      <Code
        code={JSON.stringify(
          {
            scripts: {
              dev: 'npm run build:sd && next dev',
              build: 'npm run build:sd && next build',
              'build:sd': 'tokens-studio-tailwind -j tokens/tokens.json -t global,dark',
            },
          },
          null,
          2,
        )}
        language="json"
        title="package.json"
        canCopy
      />
    </div>
  ),
};

const step_3 = {
  title: 'Run the script',
  description: (
    <div className="flex flex-col gap-2">
      <p>
        Init <strong>Tokens Studio Tailwind</strong> by running the script for the first time
      </p>
      <Info>
        <p>
          This will create a <strong>`sd-output`</strong> folder at the top-level of your project
          and generate several files according to your tokens.
        </p>
      </Info>
    </div>
  ),
  element: (
    <div className="w-[80vw] max-w-[600px]">
      <Code code="npm run build:sd" language="bash" title="Terminal" canCopy />
    </div>
  ),
};

const step_4 = {
  title: 'Import the generated CSS',
  description: (
    <div className="flex flex-col gap-2">
      <p className="mb-4">
        Follow this step to import all generated CSS into your <strong>`global.css`</strong> file.
      </p>
      <Info>
        <ul className="leading-7 list-disc">
          <li>
            Install <strong>`postcss-import`</strong>
          </li>
          <li>
            Create a file <strong>`postcss.config.js`</strong>
          </li>
          <li>
            Import the <strong>`./sd-output`</strong> folder into your <strong>`global.css`</strong>
          </li>
        </ul>
      </Info>
    </div>
  ),
  element: (
    <div className="w-[80vw] max-w-[600px] flex flex-col gap-2">
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
    </div>
  ),
};

const step_5 = {
  title: 'Set Tailwind CSS class Utilities',
  description: (
    <p>
      Override or extend your Tailwind theme using the <strong>./sd-output/tw-tokens.json</strong>{' '}
      file.
    </p>
  ),
  element: (
    <div className="w-[80vw] max-w-[600px]">
      <Code
        code={`const tokens = require('./tokens/tokens.json');\nconst {\n  spacing,\n  opacity,\n  borderWidth,\n  backgroundImage,\n  color,\n  boxShadow,\n  lineHeight,\n  fontSize,\n  letterSpacing,\n} = tokens\n\nmodule.exports = {\n  theme: {\n    boxShadow,\n    extend: {\n      fontSize,\n      colors: {\n        ...color,\n        ...\n      }\n    },\n    ...\n  },\n  ...\n}`}
        language="javascript"
        title="tailwind.config.ts"
        canCopy
      />
    </div>
  ),
};

export default function InstallationTokensStudioTailwind() {
  return <Steps steps={[step_1, step_2, step_3, step_4, step_5]} />;
}
