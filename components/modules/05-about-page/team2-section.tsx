'use client'

import trifonBW from '../../../app/assets/trifonBW.webp';
import nataliyaBW from '../../../app/assets/nataliyaBW.webp';
import yankoBW from '../../../app/assets/yankoBW.webp';
import beardManBW from '../../../app/assets/beardManBW.jpg';
import bobiBW from '../../../app/assets/bobiBW.webp';
import EmoBW from '../../../app/assets/EmoBW.webp';
import Image from 'next/image';
import { Section, SectionTitleWrap} from "@/components/common/02-page-ui/section";
  import { H3Heading } from "@/components/common/01-typography/h3-heading";
  import { Paragraph } from "@/components/common/01-typography/paragraph";
import Link from 'next/link';
  import { useState } from 'react';

import { Linkedin } from 'lucide-react';
  import { Button } from "@/components/common/03-element-ui/buttons/button";
import { H2Heading } from '@/components/common/01-typography/h2-heading';


export default function TeamSection2 () {

    const teamMembers = [
        {
            name: 'Emiliyan',
            lastName: 'Enev',
            title: 'Business Development',
            image: EmoBW,
            desc: 'Been there and done that, a digital entrepreneur with multiple awards, Techstars alumnus, TEDx speaker, projects for UniCredit, Dutch government, European Commission, co-founder and member of the first board of the Bulgarian startup association (BESCO).',
           link: 'https://www.linkedin.com/in/eenev/'
        },
        {
            name: 'Ivan',
            lastName: 'Tsvetanov',
            title: 'Co-founder & AI Product Engineer',
            image: beardManBW,
            desc: 'Specializing in AI solutions. With a solid background in Python, JavaScript, and other technologies, he focuses on designing and building innovative AI products that meet the needs of our clients. Passionate about creating practical, cutting-edge solutions that help businesses and government institutions thrive in the digital age.',
             link: 'https://www.linkedin.com/in/ivan-tsvetanov-30ba792a9/'
        },
        {
            name: 'Nataliya',
            lastName: 'Benova-Walsh',
            title: 'Frontend Developer ',
            image: nataliyaBW,
            desc: "Frontend Developer skilled in JavaScript, React, and Next.js, with a focus on creating responsive, high-performance applications that enhance user engagement. Nataliya’s diverse experience includes collaborating on scalable web solutions and optimizing user experiences across desktop and mobile environments.",
           link: 'https://www.linkedin.com/in/nataliyawalsh/'
        },
        {
            name: 'Petar',
            lastName:'Stoyanov',
            title: 'Backend Developer',
            image: beardManBW,
            desc: 'Lorem ipsum dolor sit',
             link: 'https://www.linkedin.com/in/pstoyanov/'
        },
        {
            name: 'Trifon',
            lastName: 'Trifonov',
            title: 'Co-founder & Tech Lead',
            image: trifonBW,
            desc: "Senior Java engineer, former SAP Labs and VMware, co-founder of open-source projects and initiatives. 50+ implemented projects in production with high scalability features and integrations with eBay, Amazon, Shopware, Drupal Commerce, and Rakuten Viber.",
              link: 'https://www.linkedin.com/in/trifon/'
        },
        {
            name: 'Yanko',
            lastName: 'Rashkov',
            title: 'Fullstack Developer',
            image: yankoBW,
            desc: 'Full Stack developer Python/React.JS and Naval Architect/Ship Hull design engineer - (Master`s degree). Passionate about technology with an neverending thirst for knowledge. A blend of developer and engineer, offering a unique perspective from both worlds.',
           link: 'https://www.linkedin.com/in/yanko-rashkov/'
        },
        {
          name: 'Boris',
          lastName: 'Trifonov',
          title: 'Developer',
          image: bobiBW,
          desc: 'Lorem ipsum dolor sit',
         link: 'https://www.linkedin.com/'
      },

    ]

    const [selectedMember, setSelectedMember] = useState(teamMembers[0]);
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
      <Section className="relative p-20 ">
        
      <div className="relative w-full ">
      <SectionTitleWrap>
        <H2Heading className='text-center my-10'>Our team</H2Heading>
        </SectionTitleWrap>
        <div className='flex gap-10 justify-start flex-wrap'>
          {teamMembers.map((member, index) => (
            <div key={index}
              className='flex flex-col justify-center  relative overflow-hidden cursor-pointer rounded-xl'
              onClick={() => { setSelectedMember(member); setDialogOpen(true); }}>
              <div className='relative h-72 w-60 group'>
                <Image src={member.image} 
                 alt='Team member image' 
                 layout='fill' // Use next/image intrinsic layout
                 objectFit='cover' // Ensures the image covers the container
                className=' transition-transform duration-500 transform group-hover:scale-105 ' />
              

              <div className="absolute inset-0 bg-black bg-opacity-90 text-white h-fit flex items-center justify-center p-4 transition-transform transform -translate-x-full group-hover:translate-x-0 duration-500 pointer-events-none">
                <Paragraph>{member.desc}</Paragraph>
              </div>
              </div>
              <div className='flex gap-1'>
                <Link href={member.link} target='blank'><Linkedin className='text-teal-300'/></Link>
                <div className='flex-1 flex flex-col bg-zinc-900 p-2'>
                  <H3Heading size='sm'>{member.name} </H3Heading>
                  <H3Heading size='sm'>{member.lastName} </H3Heading>
                  <Paragraph className='flex-1'>{member.title}</Paragraph>
                </div>
              </div>

              
            </div>
          ))}
        </div>

      
      </div>
    </Section>
    )
}

