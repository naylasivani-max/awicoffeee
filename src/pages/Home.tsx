import React from 'react';
import { Seo } from '../components/Seo';
import { HeroSection } from '../components/home/HeroSection';
import { CredibilitySection } from '../components/home/CredibilitySection';
import { ProblemSection } from '../components/home/ProblemSection';
import { SolutionSection } from '../components/home/SolutionSection';
import { ProductFormatsSection } from '../components/home/ProductFormatsSection';
import { CatalogPreview } from '../components/home/CatalogPreview';
import { ImpactSection } from '../components/home/ImpactSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FaqSection } from '../components/home/FaqSection';
import { FinalCta } from '../components/home/FinalCta';
import { SITE } from '../data/site';
import { organizationSchema, websiteSchema } from '../utils/schema';

export function Home() {
  return (
    <>
      <Seo
        title="AWICOFFEE — Soybean Coffee from an Indonesian Family Roastery"
        description={SITE.description}
        path="/"
        jsonLd={[organizationSchema(), websiteSchema()]} />
      
      <HeroSection />
      <CredibilitySection />
      <ProblemSection />
      <SolutionSection />
      <ProductFormatsSection />
      <CatalogPreview />
      <ImpactSection />
      <HowItWorks />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </>);

}