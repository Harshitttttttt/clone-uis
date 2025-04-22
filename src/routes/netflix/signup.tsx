import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/netflix/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/netflix/signup"!</div>
}
