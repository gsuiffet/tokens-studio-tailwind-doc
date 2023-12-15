import React, { FC, ReactNode } from 'react';

interface Props {
  steps: {
    title: string;
    description: ReactNode;
    element?: ReactNode;
  }[];
}

const Steps: FC<Props> = ({ steps }) => {
  return (
    <ol className="relative space-y-2 mb-8" style={{ counterReset: 'step 0' }}>
      {steps.map(({ title, description, element }) => {
        return (
          <li
            className={`${
              element ? 'grid-cols-5 gap-16 ' : ''
            }relative pl-10 xl:grid before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-sd-primary-default before:rounded-md before:shadow-sm before:ring-1 before:ring-sd-primary-default dark:before:bg-sd-primary-default dark:before:text-sd-primary-foreground dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-sd-border-default`}
            style={{ counterIncrement: 'step 1' }}
            key={title}
          >
            <div className="mb-6 col-span-2 xl:mb-0">
              <h2 className="text-sm leading-6 text-sd-primary-default font-semibold mb-2">
                {title}
              </h2>
              {description}
            </div>
            {element && <div className="relative z-10 -ml-10 w-full">{element}</div>}
          </li>
        );
      })}
    </ol>
  );
};

export { Steps };
