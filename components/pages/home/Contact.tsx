import { motion } from 'framer-motion'
import { EMAIL, contacts } from '@/constants'
import Link from 'next/link'
import { containerShow, itemShow } from '@/lib/animate'
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(3, { message: 'Name should be at least 3 characters long' }),
  email: z.string().email({ message: 'Invalid email format' }),
  subject: z.string().min(5, { message: 'Subject should be at least 5 characters long' }),
  message: z.string().refine(value => value.split(' ').length >= 5, {
    message: 'Message should be at least 5 words long',
  }),
});

function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, email, subject, message } = values;
    const mailtoString = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoString;
  }

  return (
    <section id="contact" className="w-full">
      <div className="relative overflow-x-clip">
        <div className="absolute left-[50%] top-[30%] w-[300px] aspect-square bg-colorfull-blue -z-10 blur-[250px]" />
      </div>
      <div className="px-4 container py-20">
        <div className="flex flex-col lg:flex-row items-center sm:px-10 gap-x-4 gap-y-10">
          <div className="lg:basis-[50%] font-semibold sm:px-4 lg:px-0">
            <h4 className="text-lg text-colorfull-yellow">Get In Touch</h4>
            <h2 className="text-4xl sm:text-5xl">Let&apos;s Work Together!</h2>
            <motion.div
              variants={containerShow}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 'all' }}
              className="mt-5 sm:mt-10 grid grid-cols-1 gap-4"
            >
              {contacts.map((item) => {
                if (item?.link) return (
                  <motion.div key={item.id} variants={itemShow()}>
                    <Link target="_blank" rel="noopener noreferrer" href={item.link} className="flex items-center font-thin gap-4 text-colorfull-green">
                      <item.Icon fontSize={24} />
                      <span className="text-xs sm:text-base text-white underline underline-offset-4">{item.value}</span>
                    </Link>
                  </motion.div>
                );

                return (
                  <motion.div variants={itemShow()} key={item.id} className="flex items-center font-thin gap-4 text-colorfull-green">
                    <item.Icon fontSize={24} />
                    <span className="text-white text-xs sm:text-base">{item.value}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
          <div className="lg:basis-[50%]">
            {/* @ts-ignore */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="col-span-2 sm:col-span-1">
                        <FormControl>
                          <input
                            type="text"
                            className="w-full bg-transparent rounded-md border-2 border-colorfull-blue px-4 py-2 outline-none placeholder:text-white"
                            placeholder="Your name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-colorfull-red" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="col-span-2 sm:col-span-1">
                        <FormControl>
                          <input
                            type="email"
                            className="w-full bg-transparent rounded-md border-2 border-colorfull-blue px-4 py-2 outline-none placeholder:text-white"
                            placeholder="Email Address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-colorfull-red" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormControl>
                          <input
                            type="text"
                            className="w-full bg-transparent rounded-md border-2 border-colorfull-blue px-4 py-2 outline-none placeholder:text-white"
                            placeholder="Subject"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-colorfull-red" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormControl>
                          <textarea
                            className="w-full h-[200px] sm:h-[250px] bg-transparent rounded-md border-2 border-colorfull-blue px-4 py-2 outline-none placeholder:text-white resize-none"
                            placeholder="Message"
                            {...field}
                          ></textarea>
                        </FormControl>
                        <FormMessage className="text-colorfull-red" />
                      </FormItem>
                    )}
                  />
                  <div className="col-span-2">
                    <button className="w-full px-10 py-4 rounded-full btn-gradient-3">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact