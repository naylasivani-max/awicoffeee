import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types/content';
import { DraftTag } from './DraftTag';

export function PostCard({ post }: {post: Post;}) {
  const href = `/impact/${post.section}/${post.slug}`;
  return (
    <article className="group flex h-full flex-col">
      <Link to={href} tabIndex={-1} aria-hidden="true" className="block aspect-[3/2] overflow-hidden rounded-2xl bg-tint">
        <img
          src={post.image}
          alt=""
          loading="lazy"
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 ease-out-strong group-hover:scale-[1.03]" />
        
      </Link>
      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span>{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.dateLabel}</span>
          {post.status === 'draft' && <DraftTag />}
        </div>
        <h3 className="mt-2 font-display text-xl leading-snug">
          <Link to={href} className="hover:underline hover:decoration-line hover:underline-offset-4">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-auto pt-4">
          <Link to={href} className="link-arrow" aria-label={`Read more: ${post.title}`}>
            Read more
          </Link>
        </div>
      </div>
    </article>);

}