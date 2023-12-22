import React, { FC, ReactElement } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Keys = string;

interface Props<T extends Record<Keys, string | ReactElement | null>> {
  data: T[];
  dataTitles: { key: keyof T; value: string }[];
}

const CustomTable = <T extends Record<Keys, string | ReactElement | null>>({
  dataTitles,
  data,
}: Props<T>) => {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          {dataTitles.map(({ value }, index) => (
            <TableHead key={index} className="">
              {value}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow className="" key={index}>
            {dataTitles.map(({ key }, indexCell) => (
              <TableCell key={indexCell} className="space-y-2 align-top">
                {item[key] || '-'}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { CustomTable };
