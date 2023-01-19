import {
  FaHome,
  FaInstagramSquare,
  FaTwitter,
  FaMastodon,
  FaYoutube,
} from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="リンク一覧" description="">
    <VerticalFeatureRow
      title="Web site"
      site_url="https://nuovotaka.com"
      icon={<FaHome color={'#222'} size={'2.3rem'} />}
      bgcolor={'bg-white'}
    />
    <VerticalFeatureRow
      title="Twitter"
      site_url="https://twitter.com/nuovotaka"
      icon={<FaTwitter color={'#1d9bf0'} size={'2.3rem'} />}
      bgcolor={'bg-white'}
    />
    <VerticalFeatureRow
      title="Mastodon"
      site_url="https://mstdn.jp/@nuovotaka"
      icon={<FaMastodon color={'#3088d4'} size={'2.3rem'} />}
      bgcolor={'bg-white'}
    />
    <VerticalFeatureRow
      title="YouTube"
      site_url="https://www.youtube.com/@nuovotakatv"
      icon={<FaYoutube color={'#ff0100'} size={'2.3rem'} />}
      bgcolor={'bg-white'}
    />
    <VerticalFeatureRow
      title="instagram"
      site_url="https://www.instagram.com/takahiro_723/"
      icon={<FaInstagramSquare color={'#d52a7e'} size={'2.3rem'} />}
      bgcolor={'bg-white'}
    />
    <VerticalFeatureRow
      title="OpenSea"
      site_url="https://opensea.io/collection/t723hmm"
      icon={<GiSailboat color={'#ffffff'} size={'2.3rem'} />}
      bgcolor={'bg-blue-500'}
    />
  </Section>
);

export { VerticalFeatures };
