import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  classname: string;
}

export function Logo({ classname }: Props) {
  return (
    <Link href="/" className={`space-x-2 items-center h-full ${classname}`}>
      <div className="pt-1 h-12 w-12 relative">
        <Image src="/logo.svg" alt="logo" fill className="scale-100 dark:scale-0" />
        <Image src="/logo-negative.svg" alt="logo" fill className="scale-0 dark:scale-100" />
      </div>
      <p className="text-accent-foreground font-bold inline-block text-sm uppercase">
        tokens studio tailwind
      </p>
    </Link>
  );
}
