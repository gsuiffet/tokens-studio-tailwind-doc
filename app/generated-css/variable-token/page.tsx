import React, { FC } from 'react';
import { Info } from '@/components/ui/info';
import { EmphasisAndLink } from '@/lib/emphasisAndLink';
import { TokenExample } from '@/components/ui/tokenExample';
import { variable } from '@/app/generated-css/variable-token/codeBlocks';

const variableToken: FC = () => {
  return (
    <>
      <section>
        <Info
          data={EmphasisAndLink({
            text: `Token values can be defined as variables, providing usefulness in maintaining consistency across multiple elements that require identical values. In such cases, the package will automatically assign the corresponding value.`,
            emphasis: ['Variable Token Values:'],
          })}
        />
      </section>
      <TokenExample
        example={variable}
        usage={`<div className="rounded-square-lg border h-36 relative w-full">\n  <div className="rounded-half-button-lg bg-sd-slate-700/50 h-12 absolute bottom-0 inset-x-0"/>\n</div>`}
      >
        <div className="rounded-square-lg border h-36 relative w-full">
          <div className="rounded-half-button-lg bg-sd-slate-700/50 h-12 absolute bottom-0 inset-x-0" />
        </div>
      </TokenExample>
    </>
  );
};

export default variableToken;
