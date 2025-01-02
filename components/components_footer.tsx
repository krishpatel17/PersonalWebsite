import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-black/80 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center space-x-6">
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="mailto:krishpatel0697@gmail.com" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

