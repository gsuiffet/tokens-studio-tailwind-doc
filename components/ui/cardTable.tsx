import React, { FC, Fragment, ReactElement } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomTable } from '@/components/ui/customTable';

type Keys = string;

interface Props<T extends Record<Keys, string | ReactElement | null>> {
  data: T[];
  dataTitles: { key: keyof T; value: string }[];
  cardTitle: string;
}

const CardTable = <T extends Record<Keys, string | ReactElement | null>>({
  data,
  dataTitles,
  cardTitle,
}: Props<T>) => {
  return (
    <>
      <section className="lg:hidden self-center w-full">
        {data.map((item, index) => (
          <Card className="block lg:hidden" key={index}>
            <CardHeader>
              <CardTitle>{item[cardTitle]}</CardTitle>
            </CardHeader>
            <CardContent>
              {dataTitles.map(({ key, value }, indexDataTitle) => (
                <Fragment key={indexDataTitle}>
                  <CardDescription>{value}</CardDescription>
                  {item[key] || '-'}
                </Fragment>
              ))}
            </CardContent>
          </Card>
        ))}
      </section>
      <div className="hidden lg:block">
        <CustomTable data={data} dataTitles={dataTitles} />
      </div>
    </>
  );
};

export { CardTable };
