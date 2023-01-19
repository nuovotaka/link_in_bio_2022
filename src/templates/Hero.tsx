import { Logo } from './Logo';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => (
  <Background color="">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
    </Section>
  </Background>
);

export { Hero };
