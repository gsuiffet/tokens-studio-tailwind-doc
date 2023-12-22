import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React, { FC } from 'react';

interface Props {
  nextStep: string;
}

const Next: FC<Props> = ({ nextStep }) => {
  return (
    <div className="flex justify-end">
      <Link href={`/${nextStep}`}>
        <Button className="capitalize">{nextStep}</Button>
      </Link>
    </div>
  );
};

export { Next };
