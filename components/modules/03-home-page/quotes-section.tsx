import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Section, SectionTitleWrap
} from "@/components/common/02-page-ui/section";

import { H3Heading } from "@/components/common/01-typography/h3-heading";
import { Paragraph } from "@/components/common/01-typography/paragraph";

const dataQuotes = [
  {
    text: 'AI will be the most transformative technology of the 21st century. It will affect every industry and aspect of our lives.',
    author:'Jensen Huang',
    jobTitle: 'CEO at NVIDIA',
    class: 'border-2 border-teal-300 rounded-tr-3xl rounded-bl-3xl bg-transparent mb-36'
  },
  {
    text: 'AI will be part of every industry, enhancing our abilities in ways we cannot even imagine yet.',
    author:'Jeff Bezos',
    jobTitle: 'Executive Chairman at Amazon',
    class: 'border-2 border-teal-300 rounded-tr-3xl rounded-bl-3xl bg-transparent my-auto'
  },
  {
    text: 'AI is not a substitute for human intelligence; it is a tool to amplify human creativity and ingeniuty.',
    author:'Fei-Fei Li',
    jobTitle: 'Professor at the Computer Science Department at Stanford University',
    class: 'border-2 border-teal-300 rounded-tr-3xl rounded-bl-3xl bg-transparent mt-36'
  },
  
  /*{
    text: 'AI would be the ultimate version of Google. The ultimate search engine.',
    author:'Larry Page',
    jobTitle: 'Former CEO of Google',
    class: 'border-2 border-teal-300 rounded-tr-3xl rounded-bl-3xl bg-gradient-to-bl from-zinc-950 via-zinc-800 to-zinc-950'
  },
  {
    text: 'Artificial intelligence is the new electricity.',
    author:'Andrew Ng',
    jobTitle: 'Computer Scientist',
    class: 'border-2 border-teal-300 rounded-tr-3xl rounded-bl-3xl bg-gradient-to-bl from-zinc-950 via-zinc-800 to-zinc-950'
  },*/
]

export default function QuotesSection() {


    return (
        <Section className="py-20 bg-gradient-to-bl from-zinc-950 via-zinc-800 to-zinc-950">
          <div className="flex gap-20 flex-wrap justify-center">
            {dataQuotes.map((quote, index)=> (
              <div key={index} className={cn('w-96 p-5 ', quote.class)}>
                <H3Heading size='sm' className=" italic">"{quote.text}"</H3Heading>
                <Paragraph size='sm' className="mt-5 text-teal-100">{quote.author}</Paragraph>
                <Paragraph size='sm' className="mb-5 text-teal-200">{quote.jobTitle}</Paragraph>
              </div>
            ))}
          </div>
     

     
       
       
    </Section>
    )
}

