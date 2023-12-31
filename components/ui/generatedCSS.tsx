import React, { FC, ReactElement } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Props {
  data: {
    title: string;
    token: ReactElement;
    generatedCSS: ReactElement;
  }[];
}

const GeneratedCSS: FC<Props> = ({ data }) => {
  return (
    <>
      <section className="lg:hidden self-center w-full">
        {data.map(({ title, token, generatedCSS }) => (
          <Card className="block lg:hidden w-full" key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Token</CardDescription>
              <div className="w-full max-w-md">{token}</div>
              <CardDescription className="w-full max-w-xs">Generated CSS</CardDescription>
              <div className="w-full max-w-md">{generatedCSS}</div>
            </CardContent>
          </Card>
        ))}
      </section>
      <div className="hidden lg:block w-full mx-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Generated CSS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(({ title, token, generatedCSS }) => (
              <TableRow className="w-full" key={title}>
                <TableCell className="w-[100px] align-middle">
                  <h3>{title}</h3>
                </TableCell>
                <TableCell className="md:max-w-xs">{token}</TableCell>
                <TableCell className="md:max-w-xs">{generatedCSS}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export { GeneratedCSS };
