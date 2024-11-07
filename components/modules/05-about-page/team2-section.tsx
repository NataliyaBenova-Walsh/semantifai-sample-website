'use client'
import trifonBW from '../../../app/assets/trifonBW.webp';
import nataliyaBW from '../../../app/assets/nataliyaBW.webp';
import yankoBW from '../../../app/assets/yankoBW.webp';
import beardManBW from '../../../app/assets/beardManBW.jpg';
import Image, {StaticImageData} from 'next/image';
import { useState } from 'react';

interface TeamMember {
    name: string;
    lastName?: string;
    title: string;
    image: StaticImageData;
    desc: string;
  }

export default function Team2Section() {
  const teamMembers = [
    {
      name: 'Nataliya',
      lastName: 'Benova-Walsh',
      title: 'Frontend Developer ',
      image: nataliyaBW,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: 'Trifon',
      lastName: 'Trifonov',
      title: 'Project Lead',
      image: trifonBW,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: 'Emiliyan',
      title: 'Project Lead',
      image: beardManBW,
      desc: 'Lorem ipsum dolor sit',
    },
    {
      name: 'Ivan',
      title: 'AI Developer',
      image: beardManBW,
      desc: 'Lorem ipsum dolor sit',
    },
    {
      name: 'Yanko',
      title: 'Fullstack Developer',
      image: beardManBW,
      desc: 'Lorem ipsum dolor sit',
    },
    {
      name: 'Petar',
      title: 'Backend Developer',
      image: beardManBW,
      desc: 'Lorem ipsum dolor sit',
    },
  ];

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null); 

  const handleMemberClick = (member: TeamMember) => {
    console.log(`Selected member: ${member.name}`); 
    setSelectedMember(member);
    
  };
  
  return (
    <section className="relative p-16 bg-gradient-to-bl from-gray-950 via-gray-800 to-gray-950">
      <div className="relative w-full before:absolute before:-bottom-16 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-red-300 before:to-transparent">
        <h2 className="text-3xl my-8 font-bold text-center">Our team</h2>

        <div className='flex gap-2 justify-center flex-wrap'>
          {teamMembers.map((member, index) => (
            <div key={index}
              className='flex justify-center gap-2 bg-gray-800 p-4 rounded-lg transition-all duration-300 cursor-pointer '
              onClick={() => handleMemberClick(member)}
            >
              <div className='w-48 flex flex-col gap-4 '>
                <Image
                  src={member.image}
                  alt={`${member.name} image`}
                  className={`w-48 h-60 border-2 rounded-lg opacity-50 origin-top-left rotate-12 hover:rotate-0
                    ${selectedMember?.name === member.name ? 'rotate-0' : 'rotate-12'}`}
                />
                <div className='border-2 border-red-300 rounded'>
                  <h3 className='text-lg text-center font-bold'>{member.name}</h3>
                  <h4 className='text-md text-center'>{member.title}</h4>
                </div>
              </div>
              
             
               <div className={`p-8 bg-gray-900 text-white rounded-lg w-72
                transform transition-all delay-150 duration-300 ease-in-out
                ${selectedMember?.name === member.name ? 'translate-x-0 opacity-100 block' : '-translate-x-full opacity-0 hidden'}`}>
           
            <p className="mt-4">{member.desc}</p>
          </div>
        
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
