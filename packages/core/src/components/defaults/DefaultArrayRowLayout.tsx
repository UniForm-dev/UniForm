import type { ArrayRowLayoutProps } from '../../types'

export function DefaultArrayRowLayout({
  children,
  buttons,
}: ArrayRowLayoutProps) {
  return (
    <div>
      {buttons.collapse}
      {children}
      <div>
        {buttons.moveUp}
        {buttons.moveDown}
        {buttons.duplicate}
        {buttons.remove}
      </div>
    </div>
  )
}
