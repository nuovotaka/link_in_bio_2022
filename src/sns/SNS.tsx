import React from 'react';

import className from 'classnames';
import {
  FaHome,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi';

type ISNSProps = {
  faicon: string;
  facolor: string;
  fabgcolor: string;
};

const SnsFa = (props: ISNSProps) => {
  const SnsClass = className(
    'box-border rounded shadow-md shadow-black/20 inline-block',
    'h-12',
    'w-12',
    'p-1.5',
    'fill-current',
    `${props.fabgcolor}`
  );

  const snsicon = `${props.faicon}`;
  switch (snsicon) {
    case 'home':
      return (
        <div className={SnsClass}>
          <FaHome
            className={props.fabgcolor}
            color={props.facolor}
            size={'2.3rem'}
          />
        </div>
      );
    case 'twitter':
      return (
        <div className={SnsClass}>
          <FaTwitter
            className={props.fabgcolor}
            color={props.facolor}
            size={'2.3rem'}
          />
        </div>
      );
    case 'youtube':
      return (
        <div className={SnsClass}>
          <FaYoutube
            className={props.fabgcolor}
            color={props.facolor}
            size={'2.3rem'}
          />
        </div>
      );
    case 'instagram':
      return (
        <div className={SnsClass}>
          <FaInstagramSquare
            className={props.fabgcolor}
            color={props.facolor}
            size={'2.3rem'}
          />
        </div>
      );
    case 'opensea':
      return (
        <div className={SnsClass}>
          <GiSailboat
            className={props.fabgcolor}
            color={props.facolor}
            size={'2.3rem'}
          />
        </div>
      );
    default:
      return <div className={SnsClass}></div>;
  }
};

export { SnsFa };
