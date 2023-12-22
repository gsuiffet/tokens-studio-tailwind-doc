import React, { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Props {
  href: string;
  title: string;
  className?: string;
}

const ButtonLink: FC<Props> = ({ href, title, className = '' }) => {
  return (
    <Link href={href} className={className}>
      <Button variant="link">{title}</Button>
    </Link>
  );
};

export { ButtonLink };
