'use client'

import trifonBW from '../../../app/assets/trifonBW.webp';
import nataliyaBW from '../../../app/assets/nataliyaBW.webp';
import yankoBW from '../../../app/assets/yankoBW.webp';
import beardManBW from '../../../app/assets/beardManBW.jpg';
import Image from 'next/image';
import {
    Section, SectionTitleWrap
  } from "@/components/common/02-page-ui/section";
  import { H2Heading } from "@/components/common/01-typography/h2-heading";
  import { Paragraph } from "@/components/common/01-typography/paragraph";

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

  import { Button } from "@/components/common/03-element-ui/buttons/button";

export default function TeamSection () {

    const teamMembers = [
        {
            name: 'Emiliyan',
            lastName: 'Enev',
            title: 'Business Development',
            image: beardManBW,
            desc: 'Been there and done that, a digital entrepreneur with multiple awards, Techstars alumnus, TEDx speaker, projects for UniCredit, Dutch government, European Commission, co-founder and member of the first board of the Bulgarian startup association (BESCO).',
            className: 'justify-end'
        },
        {
            name: 'Ivan',
            lastName: 'Tsvetanov',
            title: 'AI Developer',
            image: beardManBW,
            desc: 'Lorem ipsum dolor sit',
            className: 'justify-start pt-4'
        },
        {
            name: 'Nataliya',
            lastName: 'Benova-Walsh',
            title: 'Frontend Developer ',
            image: nataliyaBW,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            className: 'justify-start'
        },
        {
            name: 'Petar',
            lastName:'Stoyanov',
            title: 'Backend Developer',
            image: beardManBW,
            desc: 'Lorem ipsum dolor sit',
             className: 'justify-start'
        },
        {
            name: 'Trifon',
            lastName: 'Trifonov',
            title: 'Co-founder & Tech Lead',
            image: trifonBW,
            desc: "Senior Java engineer, former SAP Labs and VMware, co-founder of open-source projects and initiatives. 50+ implemented projects in production with high scalability features and integrations with eBay, Amazon, Shopware, Drupal Commerce, and Rakuten Viber.",
             className: 'justify-start pt-4'
        },
        {
            name: 'Yanko',
            lastName: 'Rashkov',
            title: 'Fullstack Developer',
            image: yankoBW,
            desc: 'Full Stack developer Python/React.JS and Naval Architect/Ship Hull design engineer - (Master`s degree). Passionate about technology with an neverending thirst for knowledge. A blend of developer and engineer, offering a unique perspective from both worlds.',
            className: 'justify-end'
        },

    ]

    const [selectedMember, setSelectedMember] = useState(teamMembers[0]);
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <Section className="relative  p-16 bg-gradient-to-bl from-zinc-950 via-zinc-800 to-zinc-950">
        <div className="relative w-full before:absolute before:-bottom-16 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-red-300 before:to-transparent">
        <h2 className="text-3xl my-8 font-bold text-center">Our team</h2>
       
        <div className='flex gap-10 justify-center flex-wrap'>
            {teamMembers.map((member, index) => (
                <div key={index} 
                    className='flex  gap-4 justify-center '
                    onClick={() => { setSelectedMember(member); setDialogOpen(true); }} >

                    <Image src={member.image} alt='Lady image' className='w-48 h-60  border-2 border-teal-300'/>
                    <div className='w-60 flex flex-col gap-5 justify-center items-start border-2 border-teal-600'>
                    <h3 className='text-lg text-center font-bold'>{member.name}</h3>
                    <h4 className='text-md text-center'>{member.title}</h4>
                    </div>
                    
                </div>
            ))}
            
         
            

        </div>

   {/* Member detail dialog */}
   <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className='bg-gradient-to-bl from-zinc-950 via-teal-800 to-zinc-950'>
            <DialogHeader className='text-center flex flex-row justify-center items-center'>
                <div className='w-1/3'>
            <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              </div>
              <div className='w-1/2'>
              <DialogTitle>{selectedMember.name} {selectedMember.lastName}</DialogTitle>
              <DialogDescription>{selectedMember.title}</DialogDescription>
              </div>
            </DialogHeader>
            
                <p>{selectedMember.desc}</p>
             
            <DialogFooter>
              <Button onClick={() => setDialogOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
       
        </div>
        </Section>
    )
}
