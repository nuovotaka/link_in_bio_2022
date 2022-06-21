import {
  faTwitter,
  faYoutube,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="リンク一覧" description="">
    <VerticalFeatureRow
      title="Web site"
      site_url="https://nuovotaka.com"
      fa={faHome}
      color={'#222'}
    />
    <VerticalFeatureRow
      title="Twitter"
      site_url="https://twitter.com/nuovotaka"
      fa={faTwitter}
      color={'#1d9bf0'}
    />
    <VerticalFeatureRow
      title="YouTube"
      site_url="https://www.youtube.com/channel/UCIGPyA3GEOTn1F9-kb8qfAg/featured"
      fa={faYoutube}
      color={'#ff0100'}
    />
    <VerticalFeatureRow
      title="instagram"
      site_url="https://www.instagram.com/takahiro_723/"
      fa={faInstagramSquare}
      color={'#d52a7e'}
    />
  </Section>
);

export { VerticalFeatures };
