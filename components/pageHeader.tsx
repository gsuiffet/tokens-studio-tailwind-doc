import React, { FC, ReactElement } from 'react';

interface Props {
  title: string;
  description: string | ReactElement;
}

const PageHeader: FC<Props> = ({ title, description }) => {
  return (
    <section className="flex flex-col gap-2 px-4 pt-8 md:pt-12 pb-8">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground sm:text-xl">{description}</p>
    </section>
  );
};

export { PageHeader };
