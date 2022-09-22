import { CTABanner } from '../cta/CTABanner';
import { CTABlogBanner } from '../cta/CTABlogBanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <div className="flex flex-col md:flex-row sm:flex-col md:justify-center">
      <CTABanner
        title="YouTube"
        subtitle="EGPA 闘病記 リスト"
        url_link="https://www.youtube.com/watch?v=7BLApqmZt4Q&list=PL_t-VZZUU5brrIerwTUdS8kZurVWyh6YK"
      />
      <CTABanner
        title="YouTube"
        subtitle="レザークラフト リスト"
        url_link="https://www.youtube.com/watch?v=oOc0jAHJPuQ&list=PL_t-VZZUU5bod-EA__U9zD5QPEq8DiJ9Z"
      />
    </div>
    <div className="flex md:flex-row sm: flex-col md:justify-center">
      <CTABlogBanner
        title="Nuovotaka Blog"
        subtitle="最近の投稿リスト"
        url_link="https://blog.nuovotaka.com/#Recommended"
        img_link="../assets/images/coffee.jpg"
      />
    </div>
  </Section>
);

export { Banner };
