import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames';

type ISNSProps = {
  faicon: any;
  facolor: string;
};

const SnsFa = (props: ISNSProps) => {
  const SnsClass = className(
    'box-border rounded shadow-md shadow-black/20 inline-block',
    'h-12',
    'w-12',
    'p-1.5',
    'fill-current'
  );

  return (
    <FontAwesomeIcon
      className={SnsClass}
      icon={props.faicon}
      color={props.facolor}
    />
  );
};

export { SnsFa };
