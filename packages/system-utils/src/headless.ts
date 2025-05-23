/* * JSON TYPES and UTILS * */
import { Credentials } from 'puppeteer'
import { doPuppeter } from './reboot-router.js'

declare namespace NodeJS {
    type ProcessEnv = {
        NETGEAR_USERNAME: string
        NETGEAR_PASSWORD: string
        NETGEAR_URL: string
    }
}

const USER_NAME: string = process.env['NETGEAR_USERNAME'] || 'admin'
const USER_PASS: string = process.env['NETGEAR_PASSWORD'] || 'meddle11'
const ROUTER_URL: string = process.env['NETGEAR_URL'] || 'http://192.168.1.1'

export const CREDENTIALS: Credentials = {
    password: USER_PASS,
    username: USER_NAME,
}

doPuppeter(ROUTER_URL, CREDENTIALS, { headless: true })
