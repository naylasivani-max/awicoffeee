import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { images } from '../../data/images';

const credentials = [
{ value: '1945', label: 'Family roasting heritage, Binjai' },
{ value: '3 cities', label: 'Surabaya · Jakarta · Medan' },
{ value: 'detikFinance', label: 'Featured founder story' }];


export function HeroSection() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden">
      <div className="container-site grid items-center gap-10 pb-16 pt-8 md:pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>
          
          <h1 className="font-display text-[2.6rem] font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            Great coffee, made with Indonesian <em className="font-normal text-sage-ink">soybeans</em>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            AWICOFFEE pairs a North Sumatran family roasting tradition with soybean innovation — a distinctive cup, made with
            care for the farmers and communities behind it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/products" className="btn btn-primary h-[52px] px-7 text-[15px]">
              Shop Our Coffee
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/#impact" className="btn btn-secondary h-[52px] px-7 text-[15px]">
              Discover Our Impact
            </Link>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6">
            {credentials.map((c) =>
            <div key={c.value}>
                <dt className="sr-only">{c.label}</dt>
                <dd className="font-display text-xl leading-tight sm:text-2xl">{c.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{c.label}</dd>
              </div>
            )}
          </dl>
        </motion.div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-tint">
            <img
              src={images.hero}
              alt="A cup of AWICOFFEE latte on linen surrounded by soybeans and roasted coffee beans"
              width={928}
              height={1160}
              loading="eager"
              className="h-full w-full object-cover" />
            
          </div>
          <div className="absolute -bottom-5 left-5 hidden max-w-[260px] rounded-2xl bg-brand-blush p-4 text-espresso shadow-[0_12px_32px_-12px_rgba(43,31,25,0.35)] sm:block">
            <p className="font-display text-lg leading-snug">Kopi kedelai</p>
            <p className="mt-1 text-sm leading-snug text-espresso/80">Soybean coffee — roasted, ground, and brewed the AWI way.</p>
          </div>
        </div>
      </div>
    </section>);

}