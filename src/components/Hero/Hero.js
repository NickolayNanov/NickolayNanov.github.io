import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Senior .NET Developer with 6+ years of experience, progressing from Junior to Senior within the same company.
          Strong background in building and maintaining enterprise-scale applications — from a monolithic .NET Web API to modern
          .NET microservices on Google Cloud Platform (GCP) using the latest .NET tech stack.
        </SectionText>
        <Button onClick={() => window.location = `${window.location.origin}/#projects`}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);
export default Hero;