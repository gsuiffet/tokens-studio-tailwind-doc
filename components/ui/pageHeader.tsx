import React, { FC, ReactElement } from 'react';

interface Props {
  title: string;
  description: string | ReactElement;
  className?: string;
}

const PageHeader: FC<Props> = ({ title, description, className = 'pt-8 md:pt-12' }) => {
  return (
    <section className={`flex flex-col gap-2 px-4 ${className} pb-8`}>
      <h1 className="lg:h1-lg">{title}</h1>
      <p className="subtitle lg:subtitle-lg text-sd-muted-foreground">{description}</p>
    </section>
  );
};

export { PageHeader };
