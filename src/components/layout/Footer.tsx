import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="border-t mt-16"
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-2">ACM.Industry</h3>
          <p>
            Connecting UCSB students with real-world industry experience through
            software, AI, hardware, and research projects.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/join">Join</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/ucsbacm" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
            <a href="mailto:ucsbacm@ucsb.edu">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 dark:text-gray-600 py-4">
        © {new Date().getFullYear()} ACM.Industry @ UCSB. All rights reserved.
      </div>
    </footer>
  )
}