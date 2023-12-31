'use client';
import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import { kebabCase } from 'lodash';
import { usePathname } from 'next/navigation';

interface Props {
  title: string;
  items: string[];
  handleClick?: () => void;
}

const MenuGroup: FC<Props> = ({ title, items, handleClick }) => {
  const selectedPath = usePathname();
  const isSelected = (pathname: string) => {
    if (pathname.includes('border')) {
      return selectedPath === pathname
        ? 'text-sd-primary-default font-semibold'
        : 'hover:underline';
    }
    return selectedPath.includes(pathname)
      ? 'text-sd-primary-default font-semibold'
      : 'hover:underline';
  };

  return (
    <ul className="text-sd-muted-foreground">
      <Link href={`/${items[0]}`} onClick={handleClick}>
        <li className="spacing-default font-bold capitalize">{title}</li>
      </Link>
      <div className="flex flex-col">
        {items.map((item) => {
          const path = kebabCase(item);
          const isCurrent = `/${path}` === selectedPath ? 'page' : undefined;

          return (
            <Link href={`/${path}`} key={item} onClick={handleClick}>
              <li
                className={`menu spacing-large capitalize hover:underline ${isSelected(
                  `/${path}`,
                )}`}
                aria-current={isCurrent}
              >
                {item}
              </li>
            </Link>
          );
        })}
      </div>
    </ul>
  );
};

export { MenuGroup };
