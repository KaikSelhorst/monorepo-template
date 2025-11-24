import { Button } from '@org/design-system/components/ui/button'
import { ArrowRight } from '@org/design-system/components/ui/icons'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  head: async () => ({
    meta: [
      { title: 'Elysia + Tanstack Router' },
      { name: 'description', content: 'Elysia + Tanstack Router' },
    ],
  }),
})

function RouteComponent() {
  return (
    <section className="container">
      <div className="w-full h-[50vh] bg-primary rounded-md flex justify-center items-center">
        <h1 className="text-primary-foreground text-4xl font-medium text-center md:text-6xl">
          Elysia + Tanstack Router
        </h1>
      </div>
      <nav className="mt-4 flex justify-center gap-4">
        <Button asChild>
          <a
            href="https://github.com/KaikSelhorst/monorepo-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            Use Template
          </a>
          <ArrowRight />
        </Button>
      </nav>
    </section>
  )
}
