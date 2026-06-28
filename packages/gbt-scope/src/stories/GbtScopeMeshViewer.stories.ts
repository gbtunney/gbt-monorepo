import type { Meta, StoryObj } from '@storybook/react'
import SceneRadialSymmetry from '../components/SceneRadialSymmetry.tsx'
import { argTypes, meshDefaultArgs } from './SceneShared.ts'
/* eslint  sort/object-properties: "off" */

/**
 * Chromatic runs visual snapshots; disable time-based animation so frames are
 * deterministic. Returns args with rotation/offset speeds zeroed under CHROMATIC.
 */
const stillForChromatic = <T extends object>(args: T): T =>
    process.env['CHROMATIC'] === 'true'
        ? { ...args, offset_speed: 0, rotation_speed: 0 }
        : args

const meta: Meta<typeof SceneRadialSymmetry> = {
    argTypes,
    component: SceneRadialSymmetry,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...meshDefaultArgs,
    },
    tags: ['autodocs'],
    title: 'GbtScope/Mesh Viewer',
} satisfies Meta<typeof SceneRadialSymmetry>

export default meta

type MeshStory = StoryObj<typeof meta>

/** Baseline 3D mesh viewer — kaleidoscope material on a rotatable box. */
export const Default: MeshStory = {
    args: stillForChromatic({ ...meshDefaultArgs }),
}

/** Slow continuous drift via the legacy rotation animation. */
export const SlowDrift: MeshStory = {
    args: stillForChromatic({
        ...meshDefaultArgs,
        rotation_speed: 0.02,
    }),
}

/** Twelve-segment radial symmetry. */
export const Segments12: MeshStory = {
    args: stillForChromatic({
        ...meshDefaultArgs,
        segments: 12,
    }),
}
