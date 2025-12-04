import type { useRender } from '@base-ui-components/react'
import React from 'react'

type Render = useRender.RenderProp | undefined

export function renderElement(
  asChild: boolean,
  children: React.ReactNode,
  fallbackElement: React.JSX.Element | Render,
) {
  if (asChild && React.isValidElement(children)) {
    return children
  }

  return fallbackElement
}
