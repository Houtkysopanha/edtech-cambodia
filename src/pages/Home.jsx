
import HeroSection from '@/components/section/HeroSection';
import IntroSection from '@/components/section/IntroSection';
import SliderSection from '@/components/section/SliderSection';
import StartSection from '@/components/section/StartSection';
import NewsSection from '@/components/section/NewsSection';
import React from 'react';
import KeyPrograms from '@/components/section/KeyPrograms';
import FeaturePrograms from '@/components/section/FeaturePrograms';
import HostedBySection from '@/components/section/HostedBySection';
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