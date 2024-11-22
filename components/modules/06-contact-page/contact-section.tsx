'use client'

import { H2Heading } from "@/components/common/01-typography/h2-heading";
import { Section, SectionTitleWrap } from "@/components/common/02-page-ui/section";
import React from 'react';
import emailjs from '@emailjs/browser';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactForm from "./contact-from";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  message: z.string().min(2, "Message must be at least 2 characters."),
  email: z.string().email("Invalid email address")
})

export default function ContactSection() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_default_service_id';
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_default_template_id';
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_default_user_id';

    try {
      const emailParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message
      };
console.log(emailParams);
      const res = await emailjs.send(serviceID, templateID, emailParams, userID);

      if (res.status === 200) {
        console.log('SUCCESS!');
      } else {
        console.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error while sending email:", error);
    }
  }

  return (
    <Section className="bg-gradient-to-bl from-zinc-950 via-zinc-800 to-zinc-950">
      <SectionTitleWrap>
        <H2Heading className="my-10">Contact us</H2Heading>
      </SectionTitleWrap>


      <ContactForm />
    </Section>
  )
}

