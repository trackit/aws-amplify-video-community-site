import { useState, useRef, useEffect } from 'react'

const useSizeElement = () => {
    const elementRef = useRef<HTMLInputElement>(null)
    const [width, setWidth] = useState<any>(0)

    useEffect(() => {
        setWidth(elementRef?.current?.clientWidth)
    }, [])

    return { width, elementRef }
}

export default useSizeElement
