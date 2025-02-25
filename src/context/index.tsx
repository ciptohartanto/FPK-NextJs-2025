import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { PopupDataProps } from '@/components/Popup'

type FpkContextProps = {
  popupContent: PopupDataProps | undefined
  handlePopupContent: (val: PopupDataProps | undefined) => void
}

export const FpkContext = createContext<FpkContextProps | null>(null)

export function FpkProvider({ children }: { children: ReactNode }) {
  const [popupContent, setPopupContent] = useState<PopupDataProps | undefined>(
    undefined
  )

  const handlePopupContent = useCallback((val: PopupDataProps | undefined) => {
    setPopupContent(val)
  }, [])

  const value = useMemo(() => {
    return { handlePopupContent, popupContent }
  }, [handlePopupContent, popupContent])

  return <FpkContext.Provider value={value}>{children}</FpkContext.Provider>
}

export function useFpkContext() {
  const context = useContext(FpkContext)
  if (!context) {
    throw new Error('Context is incorrect')
  }
  return context
}
