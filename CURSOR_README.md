# Animated Cursor Component

A custom animated cursor component for Next.js + Tailwind CSS that provides a smooth, professional cursor experience similar to modern portfolio websites.

## Features

- ✅ **Smooth cursor following** - Main cursor follows mouse with smooth easing
- ✅ **Trailing dots** - 5 dots that follow with staggered delays for a trail effect
- ✅ **Hover interactions** - Cursor scales up on links, buttons, and `.cursor-grow` elements
- ✅ **Hide on hover** - Hides on elements with `.cursor-hidden` class
- ✅ **Click ripple** - Optional pulse animation on click
- ✅ **Mobile detection** - Automatically disabled on mobile/tablet devices
- ✅ **Keyboard navigation** - Hides when user navigates with keyboard (Tab key)
- ✅ **Performance optimized** - Uses `requestAnimationFrame` for smooth 60fps animation
- ✅ **Accessibility** - Doesn't block pointer events, works with screen readers

## Usage

The cursor is already integrated into your layout. It will automatically:
- Show on desktop devices
- Hide on mobile/tablet devices
- Hide when user navigates with keyboard

## Custom Classes

### `.cursor-grow`
Add this class to any element to make the cursor scale up on hover:

```tsx
<div className="cursor-grow">
  Hover me to see cursor grow
</div>
```

### `.cursor-hidden`
Add this class to hide the cursor on hover:

```tsx
<div className="cursor-hidden">
  Cursor will hide when hovering here
</div>
```

## Examples

### Links and Buttons
Links and buttons automatically trigger the grow effect:

```tsx
<a href="/about">About Me</a>
<button>Click Me</button>
```

### Custom Elements
Add `.cursor-grow` to any element:

```tsx
<div className="cursor-grow p-4 bg-gray-800 rounded">
  Custom hoverable element
</div>
```

### Hide Cursor
Use `.cursor-hidden` to hide cursor:

```tsx
<div className="cursor-hidden">
  Cursor disappears here
</div>
```

## Configuration

### Disable on Mobile
The cursor automatically detects mobile devices and disables itself. To manually control:

```tsx
// In AnimatedCursor.tsx, modify isMobile() function
const isMobile = () => {
  return window.innerWidth < 1024 // Change breakpoint
}
```

### Adjust Animation Speed
Modify the lerp factor in `AnimatedCursor.tsx`:

```tsx
// Current: 0.15 (smooth, slower)
cursorPosition.current.x = lerp(cursorPosition.current.x, mousePosition.current.x, 0.15)

// Faster: 0.25
// Slower: 0.10
```

### Adjust Trail Delays
Modify the delays array:

```tsx
const delays = [0.08, 0.12, 0.16, 0.20, 0.24] // Current
const delays = [0.05, 0.10, 0.15, 0.20, 0.25] // Faster trail
```

### Disable Click Ripple
Remove or comment out the click handler in `AnimatedCursor.tsx`:

```tsx
// window.addEventListener('click', handleClick) // Comment this out
```

## Styling

### Customize Cursor Colors
Edit `components/AnimatedCursor.tsx`:

```tsx
// Main cursor
className="... bg-primary ..." // Change bg-primary to your color

// Trail dots
className="... bg-primary/40 ..." // Change opacity or color
```

### Customize Hover Scale
Modify the scale value:

```tsx
isHovering 
  ? 'scale-150 ...' // Change 150 to your preferred scale
  : 'scale-100 ...'
```

## Performance

- Uses `requestAnimationFrame` for 60fps animation
- Minimal DOM updates
- Automatically disabled on mobile
- No external dependencies

## Accessibility

- ✅ Hides on keyboard navigation (Tab key)
- ✅ Doesn't block pointer events
- ✅ Works with screen readers
- ✅ Respects user preferences

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Automatically disabled

## Troubleshooting

### Cursor not showing
1. Check if you're on desktop (cursor is disabled on mobile)
2. Check browser console for errors
3. Ensure `AnimatedCursor` is imported in `app/layout.tsx`

### Cursor blocking clicks
- The cursor uses `pointer-events: none` so it shouldn't block clicks
- If issues persist, check z-index values

### Performance issues
- Reduce number of trail dots (currently 5)
- Increase lerp delay for slower animation
- Disable click ripple if not needed

## Customization Examples

### Different cursor styles

**Dot cursor:**
```tsx
className="w-2 h-2 rounded-full ..." // Smaller, solid dot
```

**Ring cursor:**
```tsx
className="w-4 h-4 rounded-full border-2 border-primary bg-transparent ..."
```

**Square cursor:**
```tsx
className="w-3 h-3 ..." // Remove rounded-full
```

## Notes

- The cursor is automatically hidden on mobile devices
- Keyboard users won't see the cursor (accessibility feature)
- The cursor doesn't interfere with normal mouse interactions
- All animations are GPU-accelerated for smooth performance

