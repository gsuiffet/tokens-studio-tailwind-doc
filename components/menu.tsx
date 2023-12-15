import { ScrollArea } from '@/components/ui/scroll-area';
import React, { FC } from 'react';
import { MenuGroup } from '@/components/menu-group';

interface Props {
  handleClick?: () => void;
}

const documentationPaths = [
  'introduction',
  'installation',
  'generated CSS',
  'figma',
  'changelog',
  'about',
];

const examplePaths = ['primitives', 'boxShadow', 'border', 'borderRadius', 'spacing', 'typography'];

const Menu: FC<Props> = ({ handleClick }) => {
  return (
    <nav role="navigation" aria-label="Secondary Navigation" className="block md:fixed">
      <ScrollArea className="w-full p-2 md:p-6 h-[calc(100vh-112px)]">
        <MenuGroup title="get started" items={documentationPaths} handleClick={handleClick} />
        <MenuGroup title="examples" items={examplePaths} handleClick={handleClick}></MenuGroup>
      </ScrollArea>
    </nav>
  );
};

export { Menu };
