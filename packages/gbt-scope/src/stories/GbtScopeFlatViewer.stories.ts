import type { Meta, StoryObj } from '@storybook/react'
import SceneGBTScope from '../components/SceneGBTScope.tsx'
import { argTypes, flatDefaultArgs } from './SceneShared.ts'
/* eslint  sort/object-properties: "off" */

const meta: Meta<typeof SceneGBTScope> = {
    argTypes,
    component: SceneGBTScope,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...flatDefaultArgs,
    },
    tags: ['autodocs'],
    title: 'GbtScope/Flat Viewer',
} satisfies Meta<typeof SceneGBTScope>

export default meta

type FlatStory = StoryObj<typeof meta>

/** Baseline flat kaleidoscope — every prop adjustable from the Controls panel. */
export const Default: FlatStory = {
    args: { ...flatDefaultArgs },
}

/** Seamless mirrored tiling (tileMode: 'mirror') with extra tiling repeats. */
export const MirrorTiling: FlatStory = {
    args: {
        ...flatDefaultArgs,
        tileMode: 'mirror',
        tiling: 4,
        segments: 8,
    },
}

/** Mouse-reactive: rotation accelerates as the pointer nears the canvas edges. */
export const MouseReactive: FlatStory = {
    args: {
        ...flatDefaultArgs,
        mouse_curve: { min: 0, max: 0.05, multiplier: 0.03, exponent: 1.4 },
    },
}
