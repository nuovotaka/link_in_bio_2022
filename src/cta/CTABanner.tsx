type ICTABannerProps = {
  title: string;
  subtitle: string;
  url_link: string;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-5 bg-primary-100 rounded-md">
    <div className="rounded bg-white p-1 text-2xl font-semibold">
      <a href={props.url_link}>
        <div className="text-gray-900">{props.title}</div>
        <div className="text-gray-700">{props.subtitle}</div>
      </a>
    </div>
  </div>
);

export { CTABanner };
