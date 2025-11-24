import { Badge } from '@org/design-system/components/ui/badge'
import { Button } from '@org/design-system/components/ui/button'
import { ArrowRight, Star } from '@org/design-system/components/ui/icons'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  head: async () => ({
    meta: [
      { title: 'Monorepo Template - Modern Full-Stack Starter' },
      {
        name: 'description',
        content:
          'A production-ready monorepo template with Elysia, Tanstack Router, and modern tooling',
      },
    ],
  }),
})

function RouteComponent() {
  return (
    <div className="relative z-10">
      <section className="container py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="outline" appearance="light" size="lg">
              <Star className="size-3.5" />
              Production Ready
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
            Build faster with
            <br />
            <span className="text-primary">modern tooling</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A carefully crafted monorepo template featuring Elysia, Tanstack
            Router, and everything you need to ship production-ready
            applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" asChild>
              <a
                href="https://github.com/KaikSelhorst/monorepo-template/generate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Use Template
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/KaikSelhorst/monorepo-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
