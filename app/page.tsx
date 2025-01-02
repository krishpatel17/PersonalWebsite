import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code2, Database, FileCode2, Cpu, Binary, LayoutGrid, Palette, Settings2, Share2, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const skills = [
  { name: 'Java', icon: '/placeholder.svg?height=64&width=64' },
  { name: 'Python', icon: '/placeholder.svg?height=64&width=64' },
  { name: 'JavaScript', icon: '/placeholder.svg?height=64&width=64' },
  { name: 'C', icon: '/placeholder.svg?height=64&width=64' },
  { name: 'SQL', icon: '/placeholder.svg?height=64&width=64' },
  { name: 'HTML', icon: '/placeholder.svg?height=64&width=64' },
  { name: 'React', icon: '/placeholder.svg?height=64&width=64' },
  { name: 'Next.js', icon: '/placeholder.svg?height=64&width=64' },
  { name: 'Tailwind CSS', icon: '/placeholder.svg?height=64&width=64' },
  { name: 'ServiceNow', icon: '/placeholder.svg?height=64&width=64' },
  { name: 'GoAnywhere', icon: '/placeholder.svg?height=64&width=64' },
  { name: 'SharePoint', icon: '/placeholder.svg?height=64&width=64' },
]

export default function Page() {
  return (
    <div className="space-y-20">
      <section id="about" className="text-center scroll-mt-20">
        <h1 className="text-5xl font-bold mb-4 gradient-text">About Me</h1>
        <p className="max-w-2xl mx-auto">
          Hello! I'm Krish Patel, a second year at the University of Virginia studying B.S. Computer Science. I enjoy playing pickleball, spending time with friends, playing video games, and reading.
        </p>
      </section>

      <section id="experience" className="scroll-mt-20">
        <h2 className="text-4xl font-bold mb-6 text-center gradient-text">Experience</h2>
        <div className="space-y-6">
          <Card className="group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="CCA Logo"
                  fill
                  className="object-cover"
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
          <Card className="group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="VJ CPA Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <CardTitle>IT Intern at VJ CPA</CardTitle>
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
            <Card key={skill.name} className="flex flex-col items-center p-4 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-16 h-16 mb-2">
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
              <CardTitle className="group-hover:gradient-text transition-all duration-300 pb-1">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              Project details will be added soon.
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
        <p className="mb-4">Interested in connecting or discussing opportunities? Let's get in touch!</p>
        <Button 
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          asChild
        >
          <Link href="mailto:krishpatel0697@gmail.com">Get in Touch</Link>
        </Button>
      </section>
    </div>
  )
}