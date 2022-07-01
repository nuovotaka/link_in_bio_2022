import { ReactElement } from 'react';

import className from 'classnames';

import { SnsIcon } from '../sns/SNS';

type IVerticalFeatureRowProps = {
  title: string;
  site_url: string;
  icon: ReactElement;
  bgcolor: string;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'h-16',
    'mx-8',
    'mb-3',
    'box-border',
    'rounded-lg',
    'bg-white',
    'py-2',
    'px-4',
    'font-bold',
    'text-gray-800',
    'drop-shadow-lg',
    'hover:scale-105',
    'hover:bg-gray-300'
  );

  return (
    <div className="mx-auto my-0 sm:w-4/5 md:w-3/5 xl:w-2/5 flex flex-col text-center text-xl hover:no-underline">
      <div className={verticalFeatureClass}>
        <a
          className="grid grid-cols-4 gap-1 items-center"
          href={`${props.site_url}`}
        >
          <SnsIcon faicon={props.icon} bgcolor={props.bgcolor} />
          <span className="col-span-2">{props.title}</span>
        </a>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
