import regexifyString from 'regexify-string';
import React, { ReactElement } from 'react';
import Link from 'next/link';

interface LinkProps {
  match: string;
  href: string;
}

interface Props {
  text: string;
  emphasis?: string[];
  link?: LinkProps;
}

const InlineLink = ({ match, href }: LinkProps) => (
  <Link
    className="underline-offset-4 underline"
    href={href}
    target={href.includes('https') ? '_blank' : undefined}
  >
    {match}
  </Link>
);

export const EmphasisAndLink = ({ text, emphasis, link }: Props) => {
  let result: string | ReactElement | (string | Element | ReactElement)[] = text;

  if (emphasis) {
    const regexPattern = emphasis
      .map((word: string) => `(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`)
      .join('|');
    const regex = new RegExp(regexPattern, 'gi');

    result = regexifyString({
      pattern: regex,
      decorator: (match, index) => (
        <em key={`${match}${index}`}>
          <strong>{match}</strong>
        </em>
      ),
      input: text,
    }) as (string | Element)[];
  }

  if (link && typeof result === 'string') {
    const { match, href } = link;
    const [pre, suf] = result.split(match);
    result = (
      <>
        {pre}
        <InlineLink match={match} href={href} />
        {suf}
      </>
    ) as ReactElement;
  } else if (link && Array.isArray(result)) {
    const { match, href } = link;
    const matchingIndexLink = result.findIndex(
      (element) => typeof element === 'string' && element.includes(match),
    );

    if (matchingIndexLink !== -1) {
      const [pre, suf] = (result[matchingIndexLink] as string).split(match);
      result.splice(matchingIndexLink, 1, pre, match, suf);

      const cleanMatchingIndexLink = result.findIndex(
        (element) => typeof element === 'string' && element.includes(match),
      );

      result.splice(
        cleanMatchingIndexLink,
        1,
        <InlineLink match={match} href={href} key={match} />,
      );
    }
  }

  return <>{result}</>;
};
