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
  const copyClassName =
    'w-sd-sizing-xl h-sd-sizing-xl flex justify-center items-center absolute right-0 cursor-pointer hover:bg-sd-slate-700/75 rounded-none rounded-tr-[2px]';

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
      <Button variant="ghost" size="icon" className={copyClassName} onClick={() => onCopy(code)}>
        {copyButton()}
        <span className="sr-only">Copy code</span>
      </Button>
    );
  };

  const renderCopyDropdown = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className={copyClassName}>{copyButton()}</DropdownMenuTrigger>
        <DropdownMenuContent>
          {packagesManager.map(({ packageName, codeCopy }) => (
            <DropdownMenuItem key={packageName} onClick={() => onCopy(codeCopy)}>
              {packageName}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <div className="pt-2 bg-sd-slate-800 shadow-sd-shadow-default self-start rounded-square-lg w-full">
      <div className="flex text-sd-slate-400">
        <h4 className="flex-none border-b border-b-sd-sky-300 spacing-default flex items-center h-sd-sizing-xl">
          {title}
        </h4>
        <div className="flex items-center flex-auto bg-sd-slate-700/50 relative">
          {canCopy && language !== 'bash' && renderCopyButton()}
          {canCopy && language === 'bash' && renderCopyDropdown()}
        </div>
      </div>

      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        PreTag="div"
        customStyle={{
          margin: 0,
          height: isOpen ? '100%' : '5rem',
          width: '100%',
          background: 'transparent',
          padding: '1.5rem 1rem',
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
          className="bg-sd-slate-700/50 hover:bg-sd-slate-700/75 h-sd-sizing-xl cursor-pointer flex items-center justify-center rounded-half-button-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name="chevrons_up_down" classNameIcon="text-white/90" />
        </div>
      )}
    </div>
  );
};

export { Code };
