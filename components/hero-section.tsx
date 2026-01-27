import Image from "next/image"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-[1fr_300px] gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm tracking-wider uppercase">
                  Software Engineering student @ University of Waterloo
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
                Jeff Qiu
              </h1>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              19 year-old with an interest in Artificial Intelligence and Performant Systems.
            </p>
            
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Experience in React, Typescript, SQL, Python, Java, and C++
            </p>

            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://github.com/sphealmeon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jeff-qiu-6aaa1535b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:jeffhqiu@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative order-first md:order-last">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <Image
                src="/headshot.jpg"
                alt="Jeff Qiu"
                fill
                className="object-cover rounded-full border-2 border-border relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
