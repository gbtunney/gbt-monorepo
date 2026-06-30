import type { StorybookConfig } from '@storybook/react-vite'
import { getDirname } from '@snailicid3/config'


const config: StorybookConfig = {
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-vitest',
        '@chromatic-com/storybook',
        // - getAbsolutePath('@storybook/addon-onboarding')
        //  getAbsolutePath('@chromatic-com/storybook'),
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    typescript: {
        check: true,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            propFilter: (prop) => {
                // Exclude the 'css' prop
                if (prop.name === 'css' || prop.name === 'style') {
                    return false
                }
                if (prop.name === 'cssStyles') {
                    return true
                }
                const res = !/node_modules/.test(prop.parent?.fileName ?? '')
                return prop.parent ? res : true
            },
            shouldExtractLiteralValuesFromEnum: true,
            shouldExtractValuesFromUnion: true,
            shouldIncludeExpression: false,
            shouldRemoveUndefinedFromOptional: true,
        },
    },
}
export default config
