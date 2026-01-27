import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Aureon Stocks - Backend Engineer",
    description: "Solo developer focused on AI integration and database optimization.",
    tags: ["React", "Python", "PostgreSQL"],
  },
  {
    title: "EverCare",
    description: "An application that gives schizophrenia patients AI voice-based support based on just a camera.",
    tags: ["React", "Swift", "TailwindCSS", "Python", "MongoDB"],
    link: "https://github.com/ShreyShingala/EverCare",
  },
  {
    title: "Data Science Research Paper",
    description: "Uses satellite data to predict wildfires on the US",
    tags: ["Python", "Pandas", "Tensorflow"],
    link: "https://drive.google.com/file/d/17VzJ2ki5vfzq2MjZK_dueFeCMcsKuCvk/view",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-4 mb-12">
          <p className="text-primary font-mono text-sm tracking-wider uppercase">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Projects
          </h2>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
