import type { Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { defaultSceneGBTScopeProps } from '../components/SceneGBTScope.tsx'
import { defaultSceneRadialSymmetryProps } from '../components/SceneRadialSymmetry.tsx'
/* eslint  sort/object-properties: "off" */
/* eslint filenames-simple/naming-convention: 'off'*/

/**
 * Storybook default args — composed from the per-component default objects so
 * the defaults live in a single source of truth. Stories spread these.
 */
export const flatDefaultArgs = {
    ...defaultSceneGBTScopeProps,
    onInit: fn(),
    onUpdate: fn(),
}

export const meshDefaultArgs = {
    ...defaultSceneRadialSymmetryProps,
    onInit: fn(),
    onUpdate: fn(),
}

/** Shared default args (flat viewer) — kept for back-compat / generic stories. */
export const defaultArgs = flatDefaultArgs

export const argTypes: Meta['argTypes'] = {
    bg_color: { control: 'color' },
    resolution: { control: 'object' },

    //  General Settings
    src: {
        control: { type: 'select' },
        options: ['uv-checker.png', 'gradient4-3.png', 'eel.jpg'],
        table: { category: 'General Settings' },
    },
    aspect_ratio: {
        control: { type: 'select' },
        options: {
            // @ts-expect-error: storybook option map values
            '1:1': 1,
            '1:2': 0.5,
            '3:2': 1.5,
            '4:3': 1.33333333,
            '16:9': 1.7777778,
        },
        table: { category: 'General Settings' },
    },
    imageAspect: {
        description: 'Src image aspect ratio (camelCase canonical)',
        control: { max: 4, min: 0.01, step: 0.1, type: 'number' },
        table: { category: 'General Settings' },
    },

    //  Graphic Settings
    tiling: {
        control: { max: 20, min: 1, step: 1, type: 'number' },
        table: { category: 'Graphic Settings' },
    },
    tileMode: {
        description: 'Tiling strategy applied after the radial fold',
        control: { type: 'select' },
        options: ['none', 'repeat', 'mirror'],
        table: { category: 'Graphic Settings' },
    },
    scaleFactor: {
        control: { max: 3, min: 0.01, step: 0.1, type: 'number' },
        table: { category: 'Graphic Settings' },
    },
    segments: {
        control: { max: 30, min: 1, step: 1, type: 'number' },
        table: { category: 'Graphic Settings' },
    },
    opacity: {
        control: { max: 1, min: 0, step: 0.01, type: 'number' },
        table: { category: 'Graphic Settings' },
    },

    //  Rotation Settings
    rotation: {
        control: { max: 360, min: 0, step: 0.1, type: 'number' },
        table: { category: 'Rotation Settings' },
    },
    rotation_speed: {
        control: { max: 4, min: -4, step: 0.01, type: 'number' },
        table: { category: 'Rotation Settings' },
    },
    rotationScale: {
        control: { max: 4, min: 0.001, step: 0.001, type: 'number' },
        table: { category: 'Rotation Settings' },
    },

    //  Offset Settings
    offset: {
        control: { type: 'object' },
        table: { category: 'Offset Settings' },
    },
    offset_speed: {
        control: { max: 4, min: -4, step: 0.01, type: 'number' },
        table: { category: 'Offset Settings' },
    },
    offsetScale: {
        control: { max: 4, min: 0.001, step: 0.01, type: 'number' },
        table: { category: 'Offset Settings' },
    },

    //  Mouse Settings
    mouse_curve: {
        description:
            'Pointer-distance response curve (GbtScopeCurve object or [min,max] tuple)',
        control: { type: 'object' },
        table: { category: 'Mouse Settings' },
    },
    mouse_multiplier: {
        control: { max: 1, min: 0, step: 0.001, type: 'number' },
        table: { category: 'Mouse Settings' },
    },

    //  Animation Settings
    fps: {
        description: 'Frames per second',
        control: { max: 120, min: 10, step: 1, type: 'number' },
        table: { category: 'Animation Settings' },
    },
}
