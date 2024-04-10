import Link from 'next/link'
import { ReactNode, useMemo } from 'react'

import { PROJECT } from '@/constants'

interface AnchorLinkProps {
  href: string
  children: ReactNode
}

export default function AnchorLink({ href, children }: AnchorLinkProps) {
  const parsedLinkAttrs = useMemo(() => {
    if (href.startsWith(PROJECT.KEYWORD_HTTP)) {
      return {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    } else {
      return
    }
  }, [href])

  return (
    <Link href={href} {...parsedLinkAttrs}>
      {children}
    </Link>
  )
}

AnchorLink.defaultProps = {
  href: '#',
  children: <>missing data..</>,
}
