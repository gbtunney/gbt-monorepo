import { Browser, Credentials, Page } from 'puppeteer'

export const authenticate = async (
    browser: Browser,
    url: string,
    credentials: Credentials,
): Promise<Page> => {
    const page: Page = await browser.newPage()
    await page.authenticate(credentials)
    await page.goto(`${url}/reboot_pg.htm`)
    return page
}
