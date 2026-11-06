import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { PostCard } from '../../components/PostCard';
import { Seo } from '../../components/Seo';
import { images } from '../../data/images';
import { posts, sectionLabels } from '../../data/posts';
import { DETIK_ARTICLE } from '../../data/site';
import { PostSection } from '../../types/content';

interface ImpactListingProps {
  section: PostSection | 'all';
}

const sections: PostSection[] = ['news', 'events', 'articles', 'csr'];
const tabLabels: Record<PostSection, string> = { news: 'News', events: 'Events', articles: 'Articles', csr: 'CSR' };

export function ImpactListing({ section }: ImpactListingProps) {
  const isAll = section === 'all';
  const list = isAll ? posts : posts.filter((p) => p.section === section);
  const title = isAll ? 'Impact' : sectionLabels[section].title;
  const intro = isAll ?
  'News, events, stories, and community initiatives from AWICOFFEE. Draft items are clearly labelled as plans.' :
  sectionLabels[section].intro;
  const path = isAll ? '/impact' : `/impact/${section}`;
  const showFeature = isAll || section === 'news';

  return (
    <>
      <Seo
        title={isAll ? 'Impact — News, Events & CSR' : `${title} — Impact`}
        description={`${intro} Learn how AWICOFFEE connects coffee, soybeans, and Indonesian communities.`}
        path={path} />
      
      <PageHeader
        breadcrumbs={isAll ? [{ label: 'Impact' }] : [{ label: 'Impact', to: '/impact' }, { label: tabLabels[section] }]}
        title={title}
        intro={intro}>
        
        <nav aria-label="Impact sections" className="mt-8 flex gap-2 overflow-x-auto">
          <Link
            to="/impact"
            aria-current={isAll ? 'page' : undefined}
            className={`h-10 shrink-0 rounded-full border px-4 text-sm font-medium leading-10 transition-colors duration-150 ${
            isAll ? 'border-primary bg-primary text-on-primary' : 'border-line bg-surface text-muted hover:text-ink'}`
            }>
            
            All
          </Link>
          {sections.map((s) =>
          <Link
            key={s}
            to={`/impact/${s}`}
            aria-current={section === s ? 'page' : undefined}
            className={`h-10 shrink-0 rounded-full border px-4 text-sm font-medium leading-10 transition-colors duration-150 ${
            section === s ? 'border-primary bg-primary text-on-primary' : 'border-line bg-surface text-muted hover:text-ink'}`
            }>
            
              {tabLabels[s]}
            </Link>
          )}
        </nav>
      </PageHeader>

      <div className="container-site py-12 md:py-16">
        {showFeature &&
        <article className="mb-16 grid items-center gap-8 rounded-[2rem] border border-line bg-surface p-5 md:grid-cols-2 md:p-8 lg:gap-14">
            <div className="aspect-[3/2] overflow-hidden rounded-2xl">
              <img src={images.store} alt="Coffee shop interior with wooden counter" loading="lazy" width={800} height={533} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm text-muted">
                {DETIK_ARTICLE.publication} · {DETIK_ARTICLE.dateLabel}
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight">{DETIK_ARTICLE.title}</h2>
              <p className="mt-2 text-sm italic text-muted">{DETIK_ARTICLE.titleEnglish}</p>
              <p className="mt-4 leading-relaxed text-muted">{DETIK_ARTICLE.summary}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={DETIK_ARTICLE.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read Full Article
                  <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens detikFinance in a new tab)</span>
                </a>
                <Link to="/impact/news/detikfinance-koh-awi-family-coffee-business" className="btn btn-secondary">
                  Our summary
                </Link>
              </div>
            </div>
          </article>
        }

        {list.length > 0 ?
        <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) =>
          <li key={p.slug}>
                <PostCard post={p} />
              </li>
          )}
          </ul> :

        <p className="text-muted">Nothing published here yet.</p>
        }
      </div>
    </>);

}