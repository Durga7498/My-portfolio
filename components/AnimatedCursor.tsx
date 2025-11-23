'use client'

import { useEffect, useRef, useState } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export default function AnimatedCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isKeyboardUser, setIsKeyboardUser] = useState(false)
  const [isMobileDevice, setIsMobileDevice] = useState(true)
  
  const mainCursorRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<(HTMLDivElement | null)[]>([])
  const rippleRef = useRef<HTMLDivElement>(null)
  
  const mousePosition = useRef<CursorPosition>({ x: 0, y: 0 })
  const cursorPosition = useRef<CursorPosition>({ x: 0, y: 0 })
  const trailPositions = useRef<CursorPosition[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ])

  // Check if device is mobile/tablet
  const checkMobile = () => {
    if (typeof window === 'undefined') return true
    return window.innerWidth < 768 || 'ontouchstart' in window
  }

  // Smooth lerp function with improved easing
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor
  }

  // Update cursor position with smooth animation
  const updateCursor = () => {
    if (isMobileDevice || isKeyboardUser || !isVisible) return

    // Smoother main cursor movement (increased lerp for more responsive feel)
    const mainLerp = isHovering ? 0.25 : 0.12
    cursorPosition.current.x = lerp(cursorPosition.current.x, mousePosition.current.x, mainLerp)
    cursorPosition.current.y = lerp(cursorPosition.current.y, mousePosition.current.y, mainLerp)

    if (mainCursorRef.current) {
      mainCursorRef.current.style.transform = `translate(${cursorPosition.current.x}px, ${cursorPosition.current.y}px) translate(-50%, -50%)`
    }

    // Update trail dots with improved staggered delays and opacity
    const delays = [0.10, 0.15, 0.20, 0.25, 0.30]
    const opacities = [0.6, 0.5, 0.4, 0.3, 0.2]
    
    trailPositions.current.forEach((pos, index) => {
      const targetX = index === 0 
        ? cursorPosition.current.x 
        : trailPositions.current[index - 1].x
      const targetY = index === 0 
        ? cursorPosition.current.y 
        : trailPositions.current[index - 1].y

      pos.x = lerp(pos.x, targetX, delays[index])
      pos.y = lerp(pos.y, targetY, delays[index])

      if (trailRefs.current[index]) {
        trailRefs.current[index]!.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`
        trailRefs.current[index]!.style.opacity = `${opacities[index]}`
      }
    })

    requestAnimationFrame(updateCursor)
  }

  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    if (isMobileDevice || isKeyboardUser) return

    mousePosition.current = { x: e.clientX, y: e.clientY }
    
    if (!isVisible) {
      setIsVisible(true)
      updateCursor()
    }
  }

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsVisible(false)
  }

  // Check for hoverable elements with improved detection
  const checkHover = (e: MouseEvent) => {
    if (isMobileDevice || isKeyboardUser) return

    const target = e.target as HTMLElement
    
    // Check for interactive elements
    const isHoverable = !!(
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.getAttribute('role') === 'button' ||
      target.closest('a') ||
      target.closest('button') ||
      target.closest('[role="button"]') ||
      target.closest('.cursor-grow') ||
      target.closest('[onclick]') ||
      (target.closest('[tabindex]') && target.closest('[tabindex]')?.getAttribute('tabindex') !== '-1')
    )

    setIsHovering(isHoverable)

    // Check for cursor-hidden class
    const shouldHide = target.closest('.cursor-hidden')
    setIsHidden(!!shouldHide)
  }

  // Handle click ripple with improved animation
  const handleClick = (e: MouseEvent) => {
    if (isMobileDevice || isKeyboardUser || !rippleRef.current) return

    const ripple = rippleRef.current
    ripple.style.left = `${e.clientX}px`
    ripple.style.top = `${e.clientY}px`
    ripple.style.animation = 'none'
    ripple.style.opacity = '0.8'
    
    // Trigger animation
    requestAnimationFrame(() => {
      ripple.style.animation = 'cursorRipple 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    })
  }

  // Detect keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      setIsKeyboardUser(true)
      setIsVisible(false)
    }
  }

  const handleMouseDown = () => {
    setIsKeyboardUser(false)
  }

  useEffect(() => {
    // Check if mobile on mount
    const mobile = checkMobile()
    setIsMobileDevice(mobile)
    
    // Don't initialize on mobile
    if (mobile) return

    // Set initial position
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    mousePosition.current = { x: centerX, y: centerY }
    cursorPosition.current = { x: centerX, y: centerY }
    trailPositions.current = Array(5).fill(null).map(() => ({ x: centerX, y: centerY }))

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('click', handleClick)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handleMouseDown)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handleMouseDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Don't render on mobile or for keyboard users
  if (isMobileDevice || isKeyboardUser || !isVisible) {
    return null
  }

  return (
    <>
      {/* Main cursor */}
      <div
        ref={mainCursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out ${
          isHidden ? 'opacity-0 scale-0' : 'opacity-100'
        } ${
          isHovering 
            ? 'w-8 h-8 bg-transparent border-2 border-primary scale-100' 
            : 'w-2.5 h-2.5 bg-primary border-0 scale-100'
        } rounded-full`}
        style={{
          transform: `translate(${cursorPosition.current.x}px, ${cursorPosition.current.y}px) translate(-50%, -50%)`,
          willChange: 'transform',
        }}
      />

      {/* Trail dots with improved styling */}
      {!isHidden && trailPositions.current.map((_, index) => (
        <div
          key={index}
          ref={(el) => { trailRefs.current[index] = el }}
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9998] transition-opacity duration-300"
          style={{
            transform: `translate(${trailPositions.current[index].x}px, ${trailPositions.current[index].y}px) translate(-50%, -50%)`,
            opacity: isVisible ? (index === 0 ? 0.6 : index === 1 ? 0.5 : index === 2 ? 0.4 : index === 3 ? 0.3 : 0.2) : 0,
            willChange: 'transform, opacity',
          }}
        />
      ))}

      {/* Click ripple with improved animation */}
      <div
        ref={rippleRef}
        className="fixed w-3 h-3 rounded-full border border-primary pointer-events-none z-[10000] opacity-0"
        style={{
          transform: 'translate(-50%, -50%)',
          willChange: 'width, height, opacity',
        }}
      />
    </>
  )
}

