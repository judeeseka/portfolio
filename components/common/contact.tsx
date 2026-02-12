"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import DOMPurify from "dompurify";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { TextArea } from "../ui/textarea";

type FormFieldType = {
  name: string;
  email: string;
  message: string;
};

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
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormFieldType>();

  const onSubmit = async (data: FormFieldType) => {
    setIsLoading(true);

    const formElement = formRef.current;
    if (!formElement) {
      setIsLoading(false);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        formElement,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setIsLoading(false);
            reset();
            formElement.reset();
            toast.success("Email sent successfully");
          }
        },
        (error) => {
          console.log(error);
          setIsLoading(false);
          toast.error("An error occured");
        },
      );
  };
  return (
    <section id="contact" className="py-20 z-10 relative">
      <p className="text-center text-slate-400 text-sm font-medium tracking-wider uppercase mb-2">
        Contact
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold text-center text-white mb-4">
        Get in touch
      </h2>
      <p className="text-center text-slate-400 text-sm max-w-md mx-auto mb-8">
        Have a product idea, role, or collaboration in mind? Let’s talk.
      </p>

      <div className="max-w-md w-full mx-auto rounded-2xl p-5 md:p-8 border border-slate-800/80 bg-slate-900/50 shadow-xl shadow-black/20">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              type="text"
              {...register("name", {
                required: "Please enter your name",
              })}
              onBlur={(e) =>
                setValue("name", DOMPurify.sanitize(e.target.value).trim(), {
                  shouldValidate: true,
                })
              }
            />

            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="your@email.com"
              type="email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              onBlur={(e) =>
                setValue("email", DOMPurify.sanitize(e.target.value).trim(), {
                  shouldValidate: true,
                })
              }
            />

            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              placeholder="your message"
              rows={5}
              cols={30}
              {...register("message", {
                required: "Please provide a message",
              })}
              onBlur={(e) =>
                setValue("message", DOMPurify.sanitize(e.target.value).trim(), {
                  shouldValidate: true,
                })
              }
            />

            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </LabelInputContainer>

          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "inline-flex w-full cursor-pointer gap-2 h-12 items-center justify-center rounded-xl font-medium text-white bg-emerald-600/90 hover:bg-emerald-500/90 border border-emerald-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400/50 disabled:opacity-50 disabled:cursor-not-allowed",
            )}
          >
            {isLoading ? (
              "Sending…"
            ) : (
              <>
                Send message <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
