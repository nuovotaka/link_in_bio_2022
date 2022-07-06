type ICTABlogBannerProps = {
  title: string;
  subtitle: string;
  url_link: string;
  img_link: string;
};

const CTABlogBanner = (props: ICTABlogBannerProps) => (
  <div className="text-center p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-5 bg-primary-100 rounded-md">
    <div className="rounded bg-white p-2 text-2xl font-semibold">
      <a className="grid grid-rows-3 grid-flow-col gap-4" href={props.url_link}>
        <img
          className="row-span-3 object-scale-down w-96"
          src={props.img_link}
          alt="image"
        />
        <div className="col-span-2 text-gray-900">{props.title}</div>
        <div className="row-span-2 col-span-2 text-gray-700">
          {props.subtitle}
        </div>
      </a>
    </div>
  </div>
);

export { CTABlogBanner };
