import {BASE_URL, TOKEN} from '@env'

export function hello() {
    return console.log('hello', BASE_URL, TOKEN)
}
