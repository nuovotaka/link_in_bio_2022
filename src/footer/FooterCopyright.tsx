import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="text-gray-700">
    © Copyright {new Date().getFullYear()} {AppConfig.title}.
    {/*
     * PLEASE READ THIS SECTION
     * We'll really appreciate if you could have a link to our website
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * Thank you for your support it'll mean a lot for us.
     */}
  </div>
);

export { FooterCopyright };
