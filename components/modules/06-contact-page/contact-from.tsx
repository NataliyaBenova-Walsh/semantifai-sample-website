'use client'


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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  message: z.string().min(2, "Message must be at least 2 characters."),
  email: z.string().email("Invalid email address")
})

export default function ContactForm() {

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
   
   <div className="relative lg:w-1/2 mx-auto rounded-3xl">
      <Form {...form}>
      <div className="bg-network4-bg p-20 rounded-3xl">
      <div className="absolute inset-0 bg-black opacity-80 rounded-3xl"></div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="relative z-10 space-y-8 ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormDescription>This is your name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
        </div>
      </Form>
      </div>
  )
}


