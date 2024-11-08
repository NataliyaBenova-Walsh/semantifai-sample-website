'use client'

import trifonBW from '../../../app/assets/trifonBW.webp';
import nataliyaBW from '../../../app/assets/nataliyaBW.webp';
import yankoBW from '../../../app/assets/yankoBW.webp';
import beardManBW from '../../../app/assets/beardManBW.jpg';
import Image from 'next/image';
import { Section, SectionTitleWrap} from "@/components/common/02-page-ui/section";
  import { H3Heading } from "@/components/common/01-typography/h3-heading";
  import { Paragraph } from "@/components/common/01-typography/paragraph";
import Link from 'next/link';
  import { useState } from 'react';
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Linkedin } from 'lucide-react';
  import { Button } from "@/components/common/03-element-ui/buttons/button";
import { H2Heading } from '@/components/common/01-typography/h2-heading';


export default function TeamSection2 () {

    const teamMembers = [
        {
            name: 'Emiliyan',
            lastName: 'Enev',
            title: 'Business Development',
            image: beardManBW,
            desc: 'Been there and done that, a digital entrepreneur with multiple awards, Techstars alumnus, TEDx speaker, projects for UniCredit, Dutch government, European Commission, co-founder and member of the first board of the Bulgarian startup association (BESCO).',
          
        },
        {
            name: 'Ivan',
            lastName: 'Tsvetanov',
            title: 'AI Developer',
            image: beardManBW,
            desc: 'Lorem ipsum dolor sit',
            
        },
        {
            name: 'Nataliya',
            lastName: 'Benova-Walsh',
            title: 'Frontend Developer ',
            image: nataliyaBW,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
           
        },
        {
            name: 'Petar',
            lastName:'Stoyanov',
            title: 'Backend Developer',
            image: beardManBW,
            desc: 'Lorem ipsum dolor sit',
            
        },
        {
            name: 'Trifon',
            lastName: 'Trifonov',
            title: 'Co-founder & Tech Lead',
            image: trifonBW,
            desc: "Senior Java engineer, former SAP Labs and VMware, co-founder of open-source projects and initiatives. 50+ implemented projects in production with high scalability features and integrations with eBay, Amazon, Shopware, Drupal Commerce, and Rakuten Viber.",
             
        },
        {
            name: 'Yanko',
            lastName: 'Rashkov',
            title: 'Fullstack Developer',
            image: yankoBW,
            desc: 'Full Stack developer Python/React.JS and Naval Architect/Ship Hull design engineer - (Master`s degree). Passionate about technology with an neverending thirst for knowledge. A blend of developer and engineer, offering a unique perspective from both worlds.',
          
        },

    ]

    const [selectedMember, setSelectedMember] = useState(teamMembers[0]);
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
      <Section className="relative p-16 ">
      <div className="relative w-full ">
        <H2Heading className='text-center my-10'>Our team</H2Heading>

        <div className='flex gap-10 justify-center flex-wrap'>
          {teamMembers.map((member, index) => (
            <div key={index}
              className='flex flex-col justify-center group relative overflow-hidden cursor-pointer rounded-xl'
              onClick={() => { setSelectedMember(member); setDialogOpen(true); }}>
              <Image src={member.image} alt='Lady image' className='w-60 h-72 transition-transform duration-500 transform group-hover:scale-105 ' />

              <div className='flex gap-1'>
                <Link href='sth'><Linkedin /></Link>
                <div className='flex-1 bg-teal-950 p-2'>
                  <H3Heading size='sm'>{member.name} </H3Heading>
                  <H3Heading size='sm'>{member.lastName} </H3Heading>
                  <Paragraph >{member.title}</Paragraph>
                </div>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-90 text-white flex items-center justify-center p-4 transition-transform transform -translate-x-full group-hover:translate-x-0 duration-500">
                <Paragraph>{member.desc}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
    )
}