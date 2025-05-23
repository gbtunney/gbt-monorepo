import { Presets, SingleBar } from 'cli-progress'

// Define the return type for the progress bar
export type ProgressBar = {
    start: () => void
    stop: () => void
}

export const createProgressBar = (
    framerate: number,
    totalSteps: number = 30,
): ProgressBar => {
    const bar = new SingleBar(
        {
            format: 'Loading {bar}',
            hideCursor: true,
        },
        Presets.shades_classic,
    )

    let currentStep = 0
    /** Use ReturnType<typeof setInterval> for compatibility */
    let timer: ReturnType<typeof setInterval> | null = null

    return {
        start: () => {
            if (!timer) {
                bar.start(totalSteps, 0)
                timer = setInterval(() => {
                    currentStep = (currentStep + 1) % totalSteps // Loop the bar
                    bar.update(currentStep)
                }, 1000 / framerate) // Convert framerate to interval
                console.log('Progress bar started.')
            } else {
                console.warn('Progress bar is already running.')
            }
        },
        stop: () => {
            if (timer) {
                clearInterval(timer) // Clear the timer
                timer = null
                bar.stop()
                console.log('Progress bar stopped.')
            } else {
                console.warn('Progress bar is not running.')
            }
        },
    }
}
