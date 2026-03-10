# Manual Layers Configuration Guide

The `manualLayers` array in `DesignHero.tsx` is a powerful system for creating complex, multi-layered parallax compositions with entrance animations and scroll effects.

## Layer Schema

Each object in the `manualLayers` array supports the following properties:

### 1. Basic properties

- `id`: Unique identifier for the layer.
- `src`: Path to the SVG or image asset.
- `nr`: Z-index and sort order.
- `hidden`: boolean, if true, the layer is not rendered.

### 2. Positioning

- `top`, `bottom`, `left`, `right`: Standard CSS positioning values (e.g., `'10vh'`, `'5vw'`, `'auto'`).
- `x`, `y`: Initial pixel offsets (e.g. `150`).
- `rotate`: Rotation in degrees (e.g. `45`).
- `scale`: Scale factor (e.g. `2.5`).
- `flipX`: boolean, mirrors the image horizontally if true.
- `opacity`: Alpha transparency (0 to 1).

### 3. Visuals

- `color`: CSS color that will fill the SVG mask (if the asset is an SVG used as a mask).
- `brightness`: Multiplier for brightness (e.g. `1.2`).

### 4. Interactive Effects

- `parallax`: Mouse movement factor. Higher values make the layer move _more_ relative to the mouse.
- `scrollFactor`: Vertical scroll factor.
  - `0.1`: Moves slightly _down_ as you scroll down.
  - `-0.2`: Moves _up_ (classic parallax) as you scroll down.

### 5. Entrance Animations

The `animation` object controls how the layer enters the screen after the loading screen completes.

```tsx
animation: {
  type: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right',
  duration: '1.5s', // Standard CSS duration
  delay: '0.2s',    // Standard CSS delay
  ease: 'ease-out'  // CSS easing or cubic-bezier
}
```

## Tips for High-End Compositions

1.  **Staggered Entrance**: Give each layer a slightly different `delay` (e.g. `0s`, `0.15s`, `0.3s`) for a sophisticated "populating" effect.
2.  **Depth of Field**: Subtle `scrollFactor` variations create a sense of massive scale. Elements at the "back" should have smaller `scrollFactor` and `parallax` values.
3.  **SVG Masking**: Use the `color` property to tint SVG assets to match the brand palette (`#ced4b1` vs `#bdc690`).
4.  **Culling**: Use `isInView` (handled by component logic) to ensure these heavy layers don't consume GPU memory when the user is deep in the Menu or Footer sections.
