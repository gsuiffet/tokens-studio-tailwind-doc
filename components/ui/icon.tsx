import React, { FC, ReactElement } from 'react';
import {
  Menu,
  Moon,
  Sun,
  Monitor,
  Github,
  X,
  Plus,
  ChevronsUpDown,
  Copy,
  Check,
} from 'lucide-react';

export type IconName =
  | 'menu'
  | 'moon'
  | 'sun'
  | 'monitor'
  | 'github'
  | 'x'
  | 'plus'
  | 'chevrons_up_down'
  | 'copy'
  | 'check';
type Size = 'default' | 'large';

interface Props {
  name: IconName;
  size?: Size;
  color?: string;
  classNameContainer?: string;
  classNameIcon?: string;
  handleClick?: () => void;
}

const icons: { [key in IconName]: ({ className }: { className: string }) => ReactElement } = {
  menu: (props) => <Menu {...props} />,
  moon: (props) => <Moon {...props} />,
  sun: (props) => <Sun {...props} />,
  monitor: (props) => <Monitor {...props} />,
  github: (props) => <Github {...props} />,
  x: (props) => <X {...props} />,
  plus: (props) => <Plus {...props} />,
  chevrons_up_down: (props) => <ChevronsUpDown {...props} />,
  copy: (props) => <Copy {...props} />,
  check: (props) => <Check {...props} />,
};

const Icon: FC<Props> = ({
  name,
  size = 'default',
  color = 'text-sd-secondary-foreground',
  classNameContainer = '',
  classNameIcon = '',
  handleClick,
}) => {
  const iconSize = {
    default: 'w-4 h-4',
    large: 'w-6 h-6',
  };
  const IconComponent = icons[name];

  return (
    <div className={`p-2 ${classNameContainer}`} onClick={handleClick}>
      <IconComponent className={`${color} ${classNameIcon} ${iconSize[size]}`} />
    </div>
  );
};

export { Icon };
