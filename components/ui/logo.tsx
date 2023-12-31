import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  classname: string;
}

export function Logo({ classname }: Props) {
  return (
    <Link href="/" className={`spacing-gap-xs items-center h-full ${classname}`}>
      <div className="h-sd-sizing-xl w-sd-sizing-xl relative">
        <Image src="/logo.svg" alt="logo" fill className="scale-100 dark:scale-0" priority />
        <Image
          src="/logo-negative.svg"
          alt="logo"
          fill
          className="scale-0 dark:scale-100"
          priority
        />
      </div>
      <p className="menu-main">tokens studio tailwind</p>
    </Link>
  );
}
