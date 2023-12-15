'use client';
import React, { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/ui/icon';

interface CodeProps {
  code: string;
  title: string;
  language?: string;
  canExpand?: boolean;
  canCopy?: boolean;
}

const Code: FC<CodeProps> = ({
  code,
  title,
  language = 'typescript',
  canExpand = false,
  canCopy = false,
}) => {
  const [isOpen, setIsOpen] = useState(!canExpand);
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });

  const onCopy = (codeCopy: string) => {
    if (isCopied) return;
    copyToClipboard(codeCopy);
  };

  const copyButton = () =>
    isCopied ? (
      <Icon name="check" classNameIcon="text-white/90" />
    ) : (
      <Icon name="copy" classNameIcon="text-white/90" />
    );

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

  const renderCopyButton = () => {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-px cursor-pointer hover:bg-slate-800"
        onClick={() => onCopy(code)}
      >
        {copyButton()}
        <span className="sr-only">Copy code</span>
      </Button>
    );
  };

  const renderCopyDropdown = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="absolute right-px cursor-pointer shadow-none hover:bg-slate-800 rounded-md">
          {copyButton()}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {packagesManager.map(({ packageName, codeCopy }) => (
            <DropdownMenuItem
              key={packageName}
              className="cursor-pointer"
              onClick={() => onCopy(codeCopy)}
            >
              {packageName}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <div className="pt-2 bg-slate-800 shadow-lg group self-start rounded-xl border border-sd-primary-default/25 w-full">
      <div className="flex text-slate-400 text-xs leading-6">
        <span className="flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
          {title}
        </span>
        <div className="flex items-center flex-auto bg-slate-700/50 relative">
          {canCopy && language !== 'bash' && renderCopyButton()}
          {canCopy && language === 'bash' && renderCopyDropdown()}
        </div>
      </div>

      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        PreTag="div"
        showLineNumbers
        customStyle={{
          margin: 0,
          height: isOpen ? '100%' : '5rem',
          width: '100%',
          background: 'transparent',
          padding: '1.5rem 1rem',
        }}
        lineNumberStyle={{
          userSelect: 'none',
        }}
        codeTagProps={{
          style: {
            fontSize: '0.9rem',
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
      {canExpand && (
        <div
          className="bg-slate-700/50 text-sky-300 hover:bg-slate-700/75 p-px cursor-pointer flex items-center justify-center rounded-b-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name="chevrons_up_down" classNameIcon="text-white/90" />
        </div>
      )}
    </div>
  );
};

export { Code };
