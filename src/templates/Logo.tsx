import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`text-gray-900 grid place-content-center place-items-center ${fontStyle}`}
    >
      <img
        className="h-28 rounded-full"
        src="./assets/images/instagram_prof.png"
        alt="prof_img"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
