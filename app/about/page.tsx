'use client';
import React from 'react';
import AboutHero from '@/components/containers/about/about-hero';
import ServicesFlex from '@/components/containers/about/services';
import SkillsGrid from '@/components/containers/about/skills';
import LoadingBar from '@/animations/loading-bar';

const AboutPage: React.FC = () => {
    return (
        <div>
           <LoadingBar backgroundColorClass="bg-customBlack"></LoadingBar>
        <AboutHero></AboutHero>
        <SkillsGrid></SkillsGrid>

        <ServicesFlex></ServicesFlex>

        </div>
    );
};

export default AboutPage;