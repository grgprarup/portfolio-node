import React from "react";
import {
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ProjectsSection sectionId="projects" heading="Projects" />
      </Page>
    </>
  );
}
