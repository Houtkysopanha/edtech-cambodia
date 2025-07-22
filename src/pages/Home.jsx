
import HeroSection from '@/components/section/HeroSection';
import SliderSection from '@/components/section/SliderSection';
import StartSection from '@/components/section/StartSection';
import NewsSection from '@/components/section/NewsSection';
import React from 'react';
import KeyPrograms from '@/components/section/KeyPrograms';
import FeaturePrograms from '@/components/section/FeaturePrograms';
import PartnerLogos from '@/components/section/PartnerLogo';

export default function Home() {
  return (
    <>
    <HeroSection />
    <SliderSection />
    <StartSection />
    <NewsSection />
    <KeyPrograms  />
    <FeaturePrograms />
    <PartnerLogos />
    </>
  );
}