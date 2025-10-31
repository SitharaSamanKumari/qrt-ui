import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/propel/projects')({
  component: ProjectsComponent,
})

export default function ProjectsComponent() {

  return (
      <div>
        <h1>Propel Projects</h1>
        <p>List of Propel projects will go here.</p>
      </div>
  )
}
