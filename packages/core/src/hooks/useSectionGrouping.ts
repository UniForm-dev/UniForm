import { useMemo } from 'react'
import type { FieldConfig } from '../types'

export type SectionGroup = {
  title: string | null
  fields: FieldConfig[]
}

export function useSectionGrouping(fields: FieldConfig[]): SectionGroup[] {
  return useMemo(() => {
    const ungrouped: FieldConfig[] = []
    const sectionMap = new Map<string, FieldConfig[]>()
    const sectionOrder: string[] = []

    for (const field of fields) {
      const section = field.meta.section
      if (typeof section !== 'string') {
        ungrouped.push(field)
      } else {
        if (!sectionMap.has(section)) {
          sectionMap.set(section, [])
          sectionOrder.push(section)
        }
        sectionMap.get(section)!.push(field)
      }
    }

    const groups: SectionGroup[] = []

    if (ungrouped.length > 0) {
      groups.push({ title: null, fields: ungrouped })
    }

    for (const title of sectionOrder) {
      groups.push({ title, fields: sectionMap.get(title)! })
    }

    return groups
  }, [fields])
}
