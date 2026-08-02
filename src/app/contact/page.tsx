import type { Metadata } from 'next'
import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import StarField from '@/components/StarField'
import ScrollReveal from '@/components/ScrollReveal'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Farhan Ridho Illahi.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact',
    description: 'Contact Farhan Ridho Illahi.',
  },
  twitter: {
    title: 'Contact',
    description: 'Contact Farhan Ridho Illahi.',
  },
}

const contacts = [
  {
    label: 'Email',
    value: 'farhanrdho03@gmail.com',
    href: 'mailto:farhanrdho03@gmail.com',
    icon: <FaEnvelope className="text-lg" />,
  },
  {
    label: 'WhatsApp',
    value: '6281360847245',
    href: 'https://wa.me/6281360847245',
    icon: <FaWhatsapp className="text-lg" />,
  },
  {
    label: 'Instagram',
    value: 'instagram.com/farhanrii',
    href: 'https://www.instagram.com/farhanrii',
    icon: <FaInstagram className="text-lg" />,
  },
]

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-14">
      <StarField />
      <section className="relative py-24 md:py-32 px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
              Contact
            </h1>
            <p className="text-zinc-400 text-center mb-12 md:mb-16 mx-auto">
              Feel free to reach out anytime
            </p>
            <div className="grid gap-5 md:gap-6">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="group glass rounded-xl p-5 md:p-6 flex items-center gap-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                    {contact.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-zinc-500">
                      {contact.label}
                    </div>
                    <div className="text-white font-medium group-hover:text-accent-light transition-colors truncate">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
      <Footer />
    </main>
  )
}
