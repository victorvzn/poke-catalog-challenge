import React from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './PageShell.css'

interface Props {
  children: React.ReactNode
  pageContext: PageContext
}

export const PageShell: React.FC<Props> = ({ children, pageContext }) => {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {children}
      </PageContextProvider>
    </React.StrictMode>
  )
}
