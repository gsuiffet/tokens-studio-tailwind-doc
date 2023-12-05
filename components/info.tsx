import React, { FC, ReactNode } from 'react';

interface Props {
  role?: 'warning' | 'info';
  children?: ReactNode;
}

const Info: FC<Props> = ({ role = 'info', children }: Props) => {
  const additionalClassName = {
    info: 'text-blue-700 bg-blue-100',
    warning: 'text-red-700 bg-red-100',
  };

  return (
    <div className={`py-3 px-8 leading-normal rounded-lg w-fit ${additionalClassName[role]}`}>
      {children}
    </div>
  );
};

export { Info };
