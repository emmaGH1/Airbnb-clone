'use client'

import { useEffect, useState, ReactNode } from 'react';

interface ClientOnlyProps {
    children: ReactNode
}

const ClientOnly = ({ children }: ClientOnlyProps) => {
    const [hasMounted, setHasMounted] = useState<boolean>(false)
    
    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) {
        return null
    }

    return (
      <>
        {children}
      </>
    )
}
 
export default ClientOnly;