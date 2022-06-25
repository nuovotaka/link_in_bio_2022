import Link from 'next/link';
import {
  FaHome,
  FaTwitter,
  FaYoutube,
  FaInstagramSquare,
} from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

function Footer() {
  return (
    <Background color="">
      <Section>
        <CenteredFooter
          logo={<Logo />}
          iconList={
            <>
              <Link href="https://nuovotaka.com">
                <a>
                  <FaHome
                    className="inline-block h-10 w-10 fill-current"
                    color={'#222'}
                  />
                </a>
              </Link>

              <Link href="https://twitter.com/nuovotaka">
                <a>
                  <FaTwitter
                    className="inline-block h-10 w-10 fill-current"
                    color={'#222'}
                  />
                </a>
              </Link>

              <Link href="https://www.youtube.com/channel/UCIGPyA3GEOTn1F9-kb8qfAg/featured">
                <a>
                  <FaYoutube
                    className="inline-block h-10 w-10 fill-current"
                    color={'#222'}
                  />
                </a>
              </Link>

              <Link href="https://www.instagram.com/takahiro_723/">
                <a>
                  <FaInstagramSquare
                    className="inline-block h-10 w-10 fill-current"
                    color={'#222'}
                  />
                </a>
              </Link>

              <Link href="https://opensea.io/collection/t723hmm">
                <a>
                  <GiSailboat
                    className="inline-block h-10 w-10 fill-current"
                    color={'#222'}
                  />
                </a>
              </Link>
            </>
          }
          // eslint-disable-next-line react/no-children-prop
          children={undefined}
        ></CenteredFooter>
      </Section>
    </Background>
  );
}

export { Footer };
