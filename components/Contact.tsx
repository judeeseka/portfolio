"use client"

import React, { useRef, useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { cn } from '@/lib/utils';
import { Send } from 'lucide-react';
import { TextArea } from './ui/textarea';
import emailjs from "@emailjs/browser";
import { toast } from 'sonner';

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)

    if (!form.current) {
      setIsLoading(false);
      return;
    };

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setIsLoading(false);
            form.current!.reset()
            toast.success("Email sent successfully")
          }
        },
        (error) => {
          console.log(error)
          setIsLoading(false);
          toast.error("An error occured")
        }
      );

    ;
  };
  return (
    <section id='contact' className="py-20">
        <p className="mb-2 text-lg text-center">Contact</p>
      <h2 className="text-5xl text-center">Get in touch</h2>

      <div
        className="h-screen w-full dark:bg-slate-900 from-slate-900 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-900
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input mt-8 border">
      <form ref={form} onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name='name' placeholder="John Doe" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name='email' placeholder="your@email.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <TextArea id='message' name='message' placeholder='your message' rows={5} cols={30} />
        </LabelInputContainer>

        <button 
        disabled={isLoading}
        className={cn("inline-flex w-full gap-3 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50", {
          "cursor-not-allowed" : isLoading
        })}
        >
          {
            isLoading ? (
              "Sending..."
            ) : ( <>
              <p>Send Message</p>
          <span>
            <Send />
          </span>
            </>
              
            )
          }
          
        </button>
      </form>

    </div>
    </section>
  )
}

export default Contact