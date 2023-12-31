import React, { FC, ReactElement } from 'react';
import { Code } from '@/components/ui/code';
import { ModeToggle } from '@/components/mode-toggle';

interface Props {
  example: string;
  usage: string;
  children?: ReactElement;
}

const TokenExample: FC<Props> = ({ example, usage, children }) => {
  return (
    <div className="block lg:grid lg:grid-cols-2 justify-center space-y-sd-sizing-sm lg:space-y-0 gap-sd-sizing-sm">
      <div className="space-y-sd-sizing-sm w-full md:max-w-lg">
        <p>Example</p>
        <Code code={example} title="tokens.json" language="json" />
      </div>
      <div className="space-y-sd-sizing-sm w-full md:max-w-lg">
        <p>Usage</p>
        <Code code={usage} language="html" title="page.tsx" />
        <div className="flex space-x-sd-sizing-xs items-center">
          <p>Render</p>
          <ModeToggle />
        </div>
        {children}
      </div>
    </div>
  );
};

export { TokenExample };
