import { markdownlint } from '@snailicide/build-config'
export const mdlint = { config: markdownlint.config({}) }
// @ts-check

const options = {
    config: {
        'MD013': {
            // Number of characters for code blocks
            //  code_block_line_length: markdownlint.getScaledWidth('comments'),
            code_block_line_length: 140,
            // Include code blocks
            code_blocks: true,
            // Number of characters for headings
            heading_line_length: 100, //markdownlint.getScaledWidth('markdown'),

            // Include headings
            headings: true,
            // Number of characters
            line_length: 100, //markdownlint.getScaledWidth('markdown'),
            // Stern length checking
            stern: false,
            // Strict length checking
            strict: false,
            // Include tables
            tables: true,
        },
        'MD032': false,
        'no-multiple-blanks': false,
    },
}

export default mdlint
