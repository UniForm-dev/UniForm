import * as React from 'react'

export function DefaultSectionWrapper({
  children,
  title,
}: React.PropsWithChildren & { title: string }) {
  return (
    <fieldset>
      <legend>{title}</legend>
      {children}
    </fieldset>
  )
}
