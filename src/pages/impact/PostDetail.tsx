import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ContentNotice } from '../../components/ContentNotice';
import { DraftTag } from '../../components/DraftTag';
import { PostCard } from '../../components/PostCard';
import { Seo } from '../../components/Seo';
import { getPost, posts, sectionLabels } from '../../data/posts';
import { articleSchema } from '../../utils/schema';
import { NotFound } from '../NotFound';

export function PostDetail() {
  const { section = '', slug = '' } = useParams();
  const post = getPost(section, slug);
  if (!post) return <NotFound />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const sectionTitle = post.section === 'csr' ? 'CSR' : sectionLabels[post.section].title;

  return (
    <>
      <Seo
        title={post.subtitle ? `${post.subtitle}` : post.title}
        description={post.excerpt}
        path={`/impact/${post.section}/${post.slug}`}
        image={post.image}
        type="article"
        jsonLd={articleSchema(post)} />
      
      <article>
        <div className="container-site max-w-4xl py-8 md:py-12">
          <Breadcrumbs
            items={[
            { label: 'Impact', to: '/impact' },
            { label: sectionTitle, to: `/impact/${post.section}` },
            { label: post.title.length > 40 ? `${post.title.slice(0, 40)}…` : post.title }]
            } />
          
          <div className="mt-8 flex flex-wrap items-center gap-2 text-sm text-muted">
            <span>{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.dateLabel}</span>
            {post.status === 'draft' && <DraftTag />}
          </div>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">{post.title}</h1>
          {post.subtitle && <p className="mt-3 text-lg italic text-muted">{post.subtitle}</p>}
          {post.source &&
          <p className="mt-4 text-sm text-muted">
              Source: {post.source.name}
              {post.source.author ? `, by ${post.source.author}` : ''}
            </p>
          }
        </div>
        <div className="container-site max-w-5xl">
          <div className="aspect-[16/9] overflow-hidden rounded-[2rem] bg-tint">
            <img src={post.image} alt={post.imageAlt} width={1200} height={675} className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="container-site max-w-3xl py-12">
          {post.status === 'draft' &&
          <ContentNotice title="Draft content" className="mb-8">
              This page describes a plan or unpublished content. It is not a report of completed activity and will be updated
              once AWICOFFEE confirms the details.
            </ContentNotice>
          }
          <div className="space-y-5 text-[17px] leading-relaxed">
            {post.body.map((para) =>
            <p key={para}>{para}</p>
            )}
          </div>
          {post.source &&
          <a href={post.source.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-10">
              Read Full Article on {post.source.name}
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          }
        </div>
      </article>
      <section aria-labelledby="more-title" className="border-t border-line py-14">
        <div className="container-site">
          <h2 id="more-title" className="font-display text-3xl">More from Impact</h2>
          <ul className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) =>
            <li key={p.slug}>
                <PostCard post={p} />
              </li>
            )}
          </ul>
        </div>
      </section>
    </>);

}