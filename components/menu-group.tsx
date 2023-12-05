'use client';
import React, { FC } from 'react';
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
    return pathname === selectedPath
      ? 'bg-accent text-accent-foreground'
      : 'hover:bg-accent hover:text-accent-foreground';
  };

  return (
    <ul className="text-accent-foreground text-sm">
      <Link href={`/${items[0]}`} onClick={handleClick}>
        <li className="py-2 px-2 font-bold capitalize">{title}</li>
      </Link>
      <div className="flex flex-col space-y-1">
        {items.map((item) => {
          const path = kebabCase(item);
          const isCurrent = `/${path}` === selectedPath ? 'page' : undefined;

          return (
            <Link href={`/${path}`} key={item} onClick={handleClick}>
              <li
                className={`font-medium rounded-sm px-3 py-1.5 capitalize ${isSelected(
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
