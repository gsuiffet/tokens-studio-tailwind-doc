import React, { FC, Fragment, ReactElement } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
      <div className="flex flex-col lg:hidden self-center gap-2">
        {data.map((item, index) => (
          <Card className="block lg:hidden" key={index}>
            <CardHeader>
              <CardTitle>{item[cardTitle]}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-6">
              {dataTitles.map(({ key, value }, indexDataTitle) => (
                <Fragment key={indexDataTitle}>
                  <CardDescription>{value}</CardDescription>
                  {item[key] || '-'}
                </Fragment>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="hidden lg:block">
        <CustomTable data={data} dataTitles={dataTitles} />
      </div>
    </>
  );
};

export { CardTable };
