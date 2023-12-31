import React, { FC, ReactElement } from 'react';

interface Props {
  data: string | ReactElement | (string | ReactElement)[];
  role?: 'warning' | 'info';
  listStyle?: string;
}

const Info: FC<Props> = ({ role = 'info', data, listStyle = 'list-disc' }) => {
  const isList = Array.isArray(data);

  let paddingClassName = 'spacing-default';
  if (isList) {
    paddingClassName = 'spacing-large';
  }

  const colors = {
    info: 'bg-sd-blue-100 text-sd-blue-700',
    warning: 'bg-sd-red-100 text-sd-red-700',
  };

  return (
    <div className={`${paddingClassName} ${colors[role]} rounded-default w-fit`}>
      {!isList && typeof data === 'string' && <p className={colors[role]}>{data}</p>}
      {!isList && typeof data !== 'string' && <div className={colors[role]}>{data}</div>}
      {isList && (
        <ul className={listStyle}>
          {data.map((text, index) => (
            <li key={index} className={colors[role]}>
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Info };
