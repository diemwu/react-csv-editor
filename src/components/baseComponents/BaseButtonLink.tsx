import { ParsedUrlQueryInput } from 'querystring';
import Link from 'next/link';
import React from 'react';

import BaseButton from './BaseButton';

interface BaseButtonLinkProps {
  pathname: string;
  children: React.ReactNode;
  query?: string | null | ParsedUrlQueryInput | undefined;
}

export const BaseButtonLink: React.FC<BaseButtonLinkProps> = ({ pathname, children, query }) => {
  return (
    <Link
      href={{
        pathname,
        query,
      }}
    >
      <BaseButton>{children}</BaseButton>
    </Link>
  );
};
