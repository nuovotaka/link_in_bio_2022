import React, { ReactElement } from 'react';

import className from 'classnames';

type ISNSProps = {
  faicon: ReactElement;
  bgcolor: string;
};

const SnsIcon = (props: ISNSProps) => {
  const SnsClass = className(
    'box-border rounded shadow-md shadow-black/20 inline-block',
    'h-12',
    'w-12',
    'p-1.5',
    'fill-current',
    `${props.bgcolor}`
  );

  return <div className={SnsClass}>{props.faicon}</div>;
};

export { SnsIcon };
