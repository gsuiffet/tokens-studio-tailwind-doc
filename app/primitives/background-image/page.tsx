import React, { FC, ReactElement } from 'react';
import { CardTable } from '@/components/ui/cardTable';
import { TokenExample } from '@/components/ui/tokenExample';
import { Keys, dataTitles } from '../constant';
import { Info } from '@/components/ui/info';
import Link from 'next/link';

const data: Record<Keys, string | ReactElement | null>[] = [
  {
    token_type: 'color',
    tailwind_utility: 'backgroundImage',
    allowed_units: null,
    default_unit: null,
    default_token_value: null,
    usage: (
      <>
        <pre>{`bg-sd-{backgroundImage}`}</pre>
        <Info role="warning" className="px-2 py-1">
          <p className="w-fit">
            This handle <strong>linear-gradient</strong> see{' '}
            <Link
              className="underline"
              target="_blank"
              href="https://docs.tokens.studio/available-tokens/color-tokens#gradients"
            >
              Tokens Studio documentation
            </Link>
          </p>
        </Info>
      </>
    ),
  },
];

const BackgroundImage: FC = () => {
  return (
    <>
      <h3 className="hidden lg:block text-2xl font-semibold leading-none tracking-tight">
        Background image
      </h3>
      <CardTable data={data} dataTitles={dataTitles} cardTitle="tailwind_utility" />
      <TokenExample
        example={JSON.stringify(
          {
            global: {
              warning: {
                default: {
                  value: '#b91c1c',
                  type: 'color',
                },
              },
              info: {
                default: {
                  value: '#1d4ed8',
                  type: 'color',
                },
              },
              'my-gradient': {
                value: 'linear-gradient (45deg, {warning.default} 0%, {info.default} 100%)',
                type: 'color',
              },
            },
            dark: {
              'my-gradient': {
                value: 'linear-gradient (45deg, #1d4ed8 0%, #b91c1c 100%)',
                type: 'color',
              },
            },
          },
          null,
          2,
        )}
        usage={`<div className="bg-sd-my-gradient rounded-md w-24 h-24"></div>`}
      >
        <div className="bg-sd-my-gradient rounded-md w-24 h-24"></div>
      </TokenExample>
    </>
  );
};

export default BackgroundImage;
