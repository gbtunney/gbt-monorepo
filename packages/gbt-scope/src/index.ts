/** Public API barrel for @snailicid3/gbt-scope */

// Core shader material
export {
    default as MaterialRadialSymmetry,
    defaultMaterialRadialSymmetryProps,
    type MaterialRadialSymmetryProps,
} from './components/MaterialRadialSymmetry.tsx'

// Flat (non-3D) viewer
export {
    default as SceneGBTScope,
    defaultSceneGBTScopeProps,
    type SceneGBTScopeProps,
} from './components/SceneGBTScope.tsx'

// 3D mesh viewer
export {
    default as SceneRadialSymmetry,
    defaultSceneRadialSymmetryProps,
    type SceneRadialSymmetryProps,
} from './components/SceneRadialSymmetry.tsx'

// Shared types
export {
    type GbtScopeCurve,
    type GbtScopeMaterialProps,
    type GbtScopeTileMode,
    defaultGbtScopeMaterialProps,
} from './types.ts'

// Motion utilities
export {
    applyCurve,
    isTupleCurve,
    tupleToGbtScopeCurve,
} from './motion/curve.ts'
export {
    createPointerState,
    type PointerState,
    type PointerStateHandle,
} from './motion/pointer.ts'

// Helpers
export { type Dimensions, type Point, type XY } from './helpers.ts'
