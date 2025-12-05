import type { useRender } from '@base-ui-components/react'
import { mergeProps } from '@base-ui-components/react'
import { isValidElement } from 'react'

export function mergeElementProps<T extends object, P extends object>(
  asChild: boolean,
  children: React.ReactNode,
  defaultProps: T,
  props: P,
) {
  if (asChild && isValidElement(props)) {
    return mergeProps(defaultProps, props)
  }

  return mergeProps(defaultProps, { ...props, children })
}

type Render = useRender.RenderProp | undefined

export function renderElement(
  asChild: boolean,
  children: React.ReactNode,
  fallbackElement: React.JSX.Element | Render,
) {
  if (asChild && isValidElement(children)) {
    return children
  }

  return fallbackElement
}
