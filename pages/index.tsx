import { allDocuments, DocumentTypes } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Balancer from 'react-wrap-balancer';

import Card from '@/components/card';
import { Meta } from '@/components/meta';
import Section from '@/layouts/section';
import { ArticleProps } from '@/types/article';

export async function getStaticProps() {
  const articles: DocumentTypes[] = allDocuments.sort((a: any, b: any) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { articles } };
}

const Home = ({ articles }: any) => {
  return (
    <>
      <Meta
        title="Home"
        description="An online portfolio by fiqry choerudin."
      />
      <Section className="relative mb-0 grid grid-cols-1 overflow-hidden rounded-b-3xl pb-6 md:px-12 md:pb-6 lg:mb-0 lg:grid-cols-2 lg:gap-4 lg:overflow-visible lg:pl-12 lg:pr-0">
        <div className="order-2 py-4 lg:order-1 lg:py-32">
          <span className="mt-4 mb-2 inline-block text-xl text-gray-500 dark:text-zinc-100 md:mb-3 md:text-2xl">
            Hello, I'm Fiqry —
          </span>
          <h1 className="text-primary text-4xl font-bold tracking-tight antialiased dark:text-zinc-100 md:text-5xl lg:leading-headers">
            <Balancer>
              I'm a front-end engineer with{' '}
              <span className="text-zinc-500">css</span> superpowers
            </Balancer>
          </h1>
        </div>
        {/* content here */}
      </Section>
      <Section>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          <span>Writing</span>
          <span className="leading-snug mb-1 ml-2">&rarr;</span>
        </h2>
      </Section>
      <Section className="mx-auto grid max-w-xl grid-cols-1 gap-5 pt-5 pb-10 lg:max-w-none lg:grid-cols-3">
        {articles?.map((items: ArticleProps, index: number) => {
          return (
            <Card
              key={index}
              title={items.title}
              description={items.description}
              url={items.url}
              tag={items.tag}
              date={items.date}
              readingTime={items.body.raw}
              banner={items.banner}
            />
          );
        })}
      </Section>
    </>
  );
};

export default Home;
