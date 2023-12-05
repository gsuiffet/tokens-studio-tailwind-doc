import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import diagram from './lotties/diagram.json';
import { Icon } from '@/components/icon';
import { Next } from '@/components/next';
import { PageHeader } from '@/components/pageHeader';
import { Lottie } from '@/components/lottie';

export default function Home() {
  const description = (
    <>
      <strong>Open source project</strong> that converts design tokens from{' '}
      <Link href="https://tokens.studio" target="_blank" className="underline">
        Tokens Studio
      </Link>{' '}
      into readily accessible Tailwind CSS variables and components.
    </>
  );

  return (
    <>
      <PageHeader title="Supercharge Tailwind with design tokens" description={description} />
      <div className="flex w-full items-center px-4 space-x-4 pb-8 pt-4 md:pb-10">
        <Link href="/introduction">
          <Button>Get Started</Button>
        </Link>
        <Link href="https://github.com/gsuiffet/tokens-studio-tailwind" target="_blank">
          <Button variant="outline" className="flex space-x-3 items-center">
            <Icon name="github" size="large" />
            <span>GitHub</span>
          </Button>
        </Link>
      </div>
      <div className="flex justify-center">
        <Lottie
          animationData={diagram}
          className="w-[80vw] md:w-full max-w-[600px] bg-white rounded-md"
        />
      </div>
      <Next nextStep="introduction" />
    </>
  );
}
