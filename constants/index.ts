import { calculateExperience } from "@/lib/utils";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { HiPhone } from "react-icons/hi";
import { MdEmail, MdLocationPin } from "react-icons/md";

export const services = [
  {
    id: 'web-design',
    titleColor: 'text-colorfull-green',
    title: 'Web Design',
    imageUrl: '/images/service-web-design.jpg',
    captionColor: 'text-colorfull-yellow',
    caption: 'Crafting Websites that Drive Growth',
    content: `Whether you're a startup chasing big dreams or an established brand seeking a digital facelift, our web design magic is tailored to fit your unique needs and aspirations. We take the time to understand your business, so your website becomes a powerful tool for driving growth, engaging your audience, and boosting your bottom line.`
  },
  {
    id: 'graphic-design',
    titleColor: 'text-colorfull-purple',
    captionColor: 'text-colorfull-blue',
    title: 'Graphic Design',
    imageUrl: '/images/service-graphic-design.jpg',
    caption: 'Unleashing Creativity through Visual Artistry',
    content: 'Welcome to a world where creativity knows no bounds, and visuals come alive with a touch of artistry and innovation. We are the maestros of the visual realm, crafting breathtaking designs that breathe life into your brand and mesmerize your audience.'
  },
  {
    id: 'video-editing',
    titleColor: 'text-colorfull-yellow',
    captionColor: 'text-colorfull-red',
    title: 'Video Editing',
    imageUrl: '/images/service-video-editing.jpg',
    caption: 'Transforming Raw Footage into Visual Symphony',
    content: `Video editing isn't just about splicing clips together; it's an art form that weaves emotions, excitement, and a touch of magic into every frame. Our team of skilled editors possesses the Midas touch, transforming raw footage into a visual symphony that leaves a lasting impact on your audience.`
  },
  {
    id: 'social-media',
    titleColor: 'text-colorfull-red',
    captionColor: 'text-colorfull-purple',
    title: 'Social Media Management',
    imageUrl: '/images/service-social-media.jpg',
    caption: 'Driving Growth and Building Lasting Connections',
    content: `Ready to transform your social media presence and unleash its true potential? Let's embark on a journey of digital triumph together! Our team of social media virtuosos is here to take your brand to the next level, driving growth, and building lasting connections.`
  },
  {
    id: 'seo',
    titleColor: 'text-colorfull-blue',
    captionColor: 'text-colorfull-green',
    title: 'Digital Marketing & SEO',
    imageUrl: '/images/service-seo.jpg',
    caption: 'Standing Out Amidst the Digital Noise',
    content: `Digital marketing and SEO are more than just buzzwords; they're the secret weapons that ensure your brand stands out amidst the digital noise and dominates search engine results. Our team of digital sorcerers crafts custom-tailored strategies that attract, engage, and convert your target audience into loyal customers.`
  },
  {
    id: 'app-development',
    titleColor: 'text-colorfull-red',
    captionColor: 'text-colorfull-blue',
    title: 'App Development',
    imageUrl: '/images/service-app-development.jpg',
    caption: 'Tailor-Made Apps for Your Unique Brand',
    content: `We know your app is as unique as your brand, and that's why our app development solutions are tailor-made to suit your specific requirements and goals. Our collaborative process ensures your vision remains at the forefront of our development, resulting in an app that's truly a reflection of your brand.`
  },
];

export const navigation = [
  {
    id: 'home',
    href: '#home',
    title: 'Home'
  },
  {
    id: 'about',
    href: '#about',
    title: 'About Us'
  },
  {
    id: 'services',
    href: '#services',
    title: 'Services'
  },
  {
    id: 'works',
    href: '#works',
    title: 'Works'
  },
  {
    id: 'contact',
    href: '#contact',
    title: 'Contact Me'
  },
]

export const experiences = {
  years: {
    id: 'years',
    title: 'Years Of Experience',
    value: calculateExperience(2018),
    symbol: ''
  },
  projects: {
    id: 'projects',
    title: 'Projects Completed',
    value: '2',
    symbol: 'k+'
  },
  clients: {
    id: 'clients',
    title: 'Satisfied Clients',
    value: '600',
    symbol: '+'
  },
}

export const EMAIL = 'futurusticdesigners@gmail.com';

export const contacts = [
  {
    id: 'email',
    Icon: MdEmail,
    value: EMAIL
  },
  {
    id: 'phone',
    Icon: HiPhone,
    value: '068 947 3833'
  },
  {
    id: 'address',
    Icon: MdLocationPin,
    value: 'Tirana, Albania'
  },
  {
    id: 'instagram',
    Icon: BiLogoInstagramAlt,
    value: '@futurusticdesigners',
    link: 'https://www.instagram.com/futurusticdesigners'
  },
];

export const works = [
  {
    id: 'work-1',
    imageUrl: '/images/works/app-development.webp',
    type: 'App Development',
    title: 'Title'
  },
  {
    id: 'work-2',
    imageUrl: '/images/works/digital-marketing-seo.jpg',
    type: 'Digital Marketing & SEO',
    title: 'Title'
  },
  {
    id: 'work-3',
    imageUrl: '/images/works/graphic-design.jpg',
    type: 'Graphic Design',
    title: 'Title'
  },
  {
    id: 'work-4',
    imageUrl: '/images/works/social-media.jpg',
    type: 'Soc-Med Management',
    title: 'Title'
  },
  {
    id: 'work-5',
    imageUrl: '/images/works/video-editing.webp',
    type: 'Video Editing',
    title: 'Title'
  },
  {
    id: 'work-6',
    imageUrl: '/images/works/web-design.png',
    type: 'Web Design',
    title: 'Title'
  },
];