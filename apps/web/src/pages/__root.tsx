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
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sunset-start/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sunset-end/10 rounded-full blur-[120px]" />
        </div>
        <SiteHeader />
        <Outlet />
      </div>
    </React.Fragment>
  )
}
