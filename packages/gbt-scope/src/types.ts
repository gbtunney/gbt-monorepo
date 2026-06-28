import { type Dimensions } from './helpers.ts'

/**
 * Curve parameters controlling how an input value (eg. pointer distance from
 * center, scroll velocity) maps to an effect amount. Replaces the old
 * `[min, max]` tuple form of `mouse_curve` with a richer, named shape.
 *
 * @see applyCurve in ./motion/curve.ts
 */
export type GbtScopeCurve = {
    /** Lower clamp applied after curving. Default 0. */
    min?: number
    /** Upper clamp applied after curving. Default 1. */
    max?: number
    /** Linear gain applied before the exponent. Default 1. */
    multiplier?: number
    /** Shaping exponent (1 = linear, >1 = ease-in). Default 1. */
    exponent?: number
    /** Input magnitude below this is treated as 0. Default 0. */
    deadzone?: number
    /** Negate the result. Default false. */
    invert?: boolean
}

/**
 * Tiling strategy applied to the kaleidoscope pattern after the radial fold.
 *
 * - `none`   — no wrapping; the pattern is sampled directly.
 * - `repeat` — `fract(uv * tiling)` square repeats (the historical behavior).
 * - `mirror` — mirrored repeats for seamless edges.
 */
export type GbtScopeTileMode = 'none' | 'repeat' | 'mirror'

/**
 * Shared material props for all GbtScope viewers (flat + 3D mesh). camelCase
 * names are the canonical form; the snake_case fields are temporary legacy
 * aliases kept for backward compatibility and will be deprecated later.
 */
export type GbtScopeMaterialProps = {
    src: string
    segments?: number
    opacity?: number
    scaleFactor?: number
    tiling?: number
    tileMode?: GbtScopeTileMode
    imageAspect?: number
    rotation?: number
    rotationScale?: number
    offset?: [number, number]
    offsetScale?: number
    resolution?: 'screen' | Dimensions | null
    // --- legacy aliases (snake_case) — deprecated, kept for compatibility ---
    image_aspect?: number
    rotation_speed?: number
    offset_speed?: number
    aspect_ratio?: string | number
    bg_color?: string
    mouse_curve?: GbtScopeCurve
    mouse_multiplier?: number
}

/**
 * Canonical default values for {@link GbtScopeMaterialProps}. `src` is required
 * and has no default. Imported by component defaults and Storybook args so the
 * defaults live in a single place.
 */
export const defaultGbtScopeMaterialProps: Omit<GbtScopeMaterialProps, 'src'> =
    {
        segments: 6,
        opacity: 1,
        scaleFactor: 1,
        tiling: 1,
        tileMode: 'repeat',
        imageAspect: 1,
        rotation: 0,
        rotationScale: 1,
        offset: [0, 0],
        offsetScale: 1,
    }
