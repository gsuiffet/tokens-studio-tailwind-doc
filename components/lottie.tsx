'use client';
import React, { FC } from 'react';
import LottieReact from 'lottie-react';

interface Props {
  animationData: object;
  className: string;
}

const Lottie: FC<Props> = ({ animationData, className }) => {
  return <LottieReact animationData={animationData} className={className} />;
};

export { Lottie };
