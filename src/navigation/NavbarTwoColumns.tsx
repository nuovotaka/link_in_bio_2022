import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  children?: ReactNode;
  logo: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="items-center">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>
  </div>
);

export { NavbarTwoColumns };
