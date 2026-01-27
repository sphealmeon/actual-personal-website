import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react"

const socialLinks = [
  {
    label: "Email",
    href: "mailto:jeffhqiu@gmail.com",
    value: "jeffhqiu@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/sphealmeon",
    value: "sphealmeon",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jeff-qiu-6aaa1535b/",
    value: "in/jeffqiu",
    icon: Linkedin,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="max-w-2xl">
          <div className="space-y-4 mb-8">
            <p className="text-primary font-mono text-sm tracking-wider uppercase">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Contact
            </h2>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            {"I'm always interested in hearing about new projects and opportunities. "} 
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>

          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-4 border-b border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-muted-foreground">{link.label}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                  <span className="font-mono text-sm">{link.value}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
