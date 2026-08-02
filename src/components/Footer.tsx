import Link from 'next/link'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10 px-4">
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="inline-flex items-center gap-5 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-full px-6 py-3">
          <Link
            href="/contact"
            className="text-sm text-zinc-300 pr-5 border-r border-zinc-700 transition-colors hover:text-accent"
          >
            Contact Me
          </Link>
          <a
            href="https://wa.me/6281360847245"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-accent transition-all duration-200 hover:scale-125"
            title="WhatsApp"
          >
            <FaWhatsapp className="text-lg" />
          </a>
          <a
            href="https://www.instagram.com/farhanrii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-accent transition-all duration-200 hover:scale-125"
            title="Instagram"
          >
            <FaInstagram className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  )
}
