import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import diagram from './lotties/diagram.json';
import { Icon } from '@/components/ui/icon';
import { Next } from '@/components/ui/next';
import { PageHeader } from '@/components/ui/pageHeader';
import { Lottie } from '@/components/lottie';
import { EmphasisAndLink } from '@/lib/emphasisAndLink';

export default function Home() {
  return (
    <>
      <PageHeader
        title="Supercharge Tailwind with design tokens"
        description={EmphasisAndLink({
          text: `Open source project that converts design tokens from Tokens Studio into readily accessible Tailwind CSS variables and components.`,
          emphasis: ['Open source project'],
          link: {
            match: 'Tokens Studio',
            href: 'https://tokens.studio',
          },
        })}
      />
      <section>
        <div className="flex gap-sd-sizing-sm">
          <Link href="/introduction">
            <Button>Get Started</Button>
          </Link>
          <Link href="https://github.com/gsuiffet/tokens-studio-tailwind" target="_blank">
            <Button variant="outline">
              <Icon name="github" size="large" />
              <p>GitHub</p>
            </Button>
          </Link>
        </div>
        <Lottie
          animationData={diagram}
          className="w-full max-w-lg flex self-center bg-white rounded-default"
        />
        <Next nextStep="introduction" />
      </section>
    </>
  );
}
