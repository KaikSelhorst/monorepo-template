import { Button } from '@org/design-system/components/ui/button'
import { Star } from '@org/design-system/components/ui/icons'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="container">
      <div className="w-full h-[50vh] bg-primary rounded-md flex justify-center items-center">
        <h1 className="text-primary-foreground text-6xl font-medium">
          Elysia + Tanstack Router
        </h1>
      </div>
      <nav className="mt-4 flex justify-center gap-4">
        <Button>Use Template</Button>
        <Button mode="icon">
          <Star />
        </Button>
      </nav>
    </section>
  )
}
