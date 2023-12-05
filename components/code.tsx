'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React, { useEffect, useRef, useState } from 'react';
import { highlightElement } from 'prismjs';
import { Icon } from '@/components/icon';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { Skeleton } from '@/components/ui/skeleton';

const handleClickCopy = (code: string) => {
  copy(code);
  return toast('Copied', {
    icon: <Icon name="copy_check" />,
    position: toast.POSITION.BOTTOM_RIGHT,
    style: { background: '#fff' },
  });
};

const BashCopyDropDown = ({ code }: { code: string }) => {
  const packagesManager = [
    {
      packageName: 'npm',
      codeCopy: code,
    },
    {
      packageName: 'pnpm',
      codeCopy: code.replace('npm', 'pnpm').replace('install', 'add'),
    },
    {
      packageName: 'yarn',
      codeCopy: code.replace('npm', 'yarn').replace('install', 'add'),
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="absolute right-0 cursor-pointer font-sans">
        <Icon name="copy" classNameIcon="text-white/90" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {packagesManager.map(({ packageName, codeCopy }) => (
          <DropdownMenuItem
            key={packageName}
            className="cursor-pointer"
            onClick={() => handleClickCopy(codeCopy)}
          >
            {packageName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Code = ({
  code,
  language = 'javascript',
  title,
  canExpand = false,
  canCopy = false,
}: {
  code: string;
  language?: string;
  title: string;
  canExpand?: boolean;
  canCopy?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(!canExpand);
  const [isloading, setIsloading] = useState(true);
  const codeElement = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (codeElement.current) {
      codeElement.current.className = `language-${language} inline-block overflow-x-auto px-4 py-2 ${
        isOpen ? 'h-full' : 'h-20'
      }`;
      highlightElement(codeElement.current);
    }
    setIsloading(false);
  }, [code, isOpen, isloading, language]);

  return !isloading ? (
    <div className="pt-2 bg-slate-800 shadow-lg group self-start rounded-xl border border-primary/25 w-full">
      <div className="flex text-slate-400 text-xs leading-6">
        <p className="flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
          {title}
        </p>
        <div className="flex-auto bg-slate-700/50 relative">
          {canCopy &&
            (language === 'bash' ? (
              <BashCopyDropDown code={code} />
            ) : (
              <span
                className="absolute right-0 cursor-pointer font-sans"
                onClick={() => handleClickCopy(code)}
              >
                <Icon name="copy" classNameIcon="text-white/90" />
              </span>
            ))}
        </div>
      </div>
      <pre className="px-4 py-0">
        <code ref={codeElement}>{code}</code>
      </pre>
      {canExpand && (
        <div
          className="bg-slate-700/50 text-sky-300 hover:bg-slate-700/75 py-2 px-2 cursor-pointer flex items-center justify-center rounded-b-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name="chevrons_up_down" classNameIcon="text-white/90" />
        </div>
      )}
    </div>
  ) : (
    <div className="py-2 w-full">
      <div className="flex">
        <Skeleton className="w-24 h-4 rounded-full" />
      </div>
      <div className="pt-2 py-0">
        <Skeleton className="w-full h-20 rounded-md" />
      </div>
    </div>
  );
};

export { Code };
