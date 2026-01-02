import styles from './bullet-list.module.css'
import { miscIcons } from '@/lib/icons/lucide-map'

type BulletListProps = {
  items?: string[]
  className?: string
}

export default function BulletList({ items, className }: BulletListProps) {
  if (!items?.length) return null

  const listClassName = `${styles.list} ${className ?? ''}`.trim()

  return (
    <ul className={listClassName}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          <miscIcons.ChevronRight className={styles.icon} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
