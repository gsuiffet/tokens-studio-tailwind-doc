import React, { FC, ReactElement } from 'react';

interface Props {
  data: string | ReactElement | (string | ReactElement)[];
  role?: 'warning' | 'info';
  className?: string;
}

const Info: FC<Props> = ({ role = 'info', data, className = '' }) => {
  const isList = Array.isArray(data);

  let paddingClassName = 'px-4 py-3';
  if (isList) {
    paddingClassName = 'py-3 px-8';
  }

  const colors = {
    info: 'bg-sd-blue-100 text-sd-blue-700',
    warning: 'bg-sd-red-100 text-sd-red-700',
  };

  return (
    <div className={`${paddingClassName} ${colors[role]} leading-normal rounded-lg w-fit`}>
      {!isList && typeof data === 'string' && <p className={colors[role]}>{data}</p>}
      {!isList && typeof data !== 'string' && <div className={colors[role]}>{data}</div>}
      {isList && (
        <ul className={className}>
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
