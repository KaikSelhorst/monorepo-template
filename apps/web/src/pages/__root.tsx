import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router'
import * as React from 'react'
import { SiteHeader } from '@/components/site-header'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <HeadContent />
      <div>
        <SiteHeader />
        <Outlet />
      </div>
    </React.Fragment>
  )
}
