"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code2, Database, FileCode2, Cpu, Binary, LayoutGrid, Palette, Settings2, Share2, BookOpen, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ContactForm } from '@/components/contact-form'

const skills = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'ServiceNow', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg' },
  { name: 'GoAnywhere', icon: '/goaLogo.png' },
  { name: 'SharePoint', icon: '/sharepointLogo.png' },
]

export default function Page() {
  const handleClick = (url: string) => {
    console.log('Clicked:', url)
    if (url.startsWith('mailto:')) {
      window.location.href = url
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="space-y-20">
      <section id="about" className="text-center scroll-mt-20">
        <h1 className="text-4xl font-bold mb-4 gradient-text">About Me</h1>
        <p className="max-w-2xl mx-auto text-xl leading-relaxed">
          Hello! I'm Krish Patel, a second year at the University of Virginia studying B.S. Computer Science. I enjoy playing pickleball, spending time with friends, playing video games, and reading.
        </p>
      </section>

      <section id="experience" className="scroll-mt-20">
        <h2 className="text-4xl font-bold mb-6 text-center gradient-text">Experience</h2>
        <div className="space-y-6">
          <Card className="group hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-2">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                <Image
                  src="/ccaLogo.png"
                  alt="CCA Logo"
                  width={128}
                  height={128}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div>
                <CardTitle>IT Intern at Commonwealth Care Alliance</CardTitle>
                <CardDescription>June 2024 – August 2024 • Boston, MA</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-2">
                <li>Filtered and organized thousands of logs from GoAnywhere, ensuring accurate integration into the CMDB on ServiceNow</li>
                <li>Shadowed and documented key insights from hundreds of meetings, including CAB, executive, and one-on-one discussions, to gain organizational and operational knowledge</li>
                <li>Collaborated with team members to troubleshoot issues, retrieve and update information in GoAnywhere, and maintain encryption key accuracy</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-2">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                <Image
                  src="/vgLogo.png"
                  alt="VG CPA Logo"
                  width={128}
                  height={128}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div>
                <CardTitle>IT Intern at VG CPA</CardTitle>
                <CardDescription>May 2023 – June 2023 • Fairfax, VA</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-2">
                <li>Designed and developed a custom support ticket application using Microsoft SharePoint, enhancing the company's issue-tracking capabilities</li>
                <li>Collaborated closely with the client to gather and deliver requirements, completing the project within a two-week timeframe</li>
                <li>Successfully implemented the support ticket program, meeting 100% of the client's specifications and expectations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="skills" className="scroll-mt-20">
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card 
              key={skill.name} 
              className="flex flex-col items-center p-4 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 h-[200px]"
            >
              <div className={`relative mb-2 ${skill.name === 'ServiceNow' ? 'w-52 h-52' : 'w-24 h-24'}`}>
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold">{skill.name}</h3>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-20">
        <h2 className="text-4xl font-bold mb-6 text-center gradient-text">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="group hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
            <CardHeader>
              <CardTitle className="group-hover:gradient-text transition-all duration-300 pb-1">Eggs by the Dozen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-2">
                <li>Developed and deployed an automated fecal egg counting system for parasite eggs in fecal matter</li>
                <li>By implementing a YOLOv8 image classification model, integrating it with a Flask-based web application, and conducting thorough testing and analysis on over 500 images</li>
                <li>Leading to a cost-effective solution that reduced costs by 50%, achieved an accuracy rate of 92%, and provided a user-friendly interface for agricultural workers to efficiently count and identify parasite eggs in fecal samples within 5 seconds per image</li>
                <li>Collaborated with a team of 5 to develop and deploy the automated fecal egg counting system by analyzing and processing raw data, contributing to discussions, brainstorming solutions, and dividing tasks</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
            <CardHeader>
              <CardTitle className="group-hover:gradient-text transition-all duration-300 pb-1">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              Project details will be added soon.
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="text-center scroll-mt-20">
        <h2 className="text-4xl font-bold mb-6 gradient-text">Contact Me</h2>
        <p className="mb-8">Interested in connecting or discussing opportunities? Send me a message!</p>
        <ContactForm />
      </section>

      <div className="bg-white/80 dark:bg-black/80 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center space-x-6">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleClick('https://github.com/krishpatel17')}
              className="w-12 h-12 rounded-full text-gray-400 hover:text-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              aria-label="GitHub"
              type="button"
            >
              <Github className="h-6 w-6 cursor-pointer" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleClick('https://www.linkedin.com/in/krish-patel-1728572b9/')}
              className="w-12 h-12 rounded-full text-gray-400 hover:text-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              aria-label="LinkedIn"
              type="button"
            >
              <Linkedin className="h-6 w-6 cursor-pointer" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleClick('mailto:krishpatel0697@gmail.com')}
              className="w-12 h-12 rounded-full text-gray-400 hover:text-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              aria-label="Email"
              type="button"
            >
              <Mail className="h-6 w-6 cursor-pointer" />
            </Button>
          </div>
          <p className="mt-4 text-center text-base text-gray-400">
            © 2024 Krish Patel. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}