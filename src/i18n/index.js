
import { createI18n } from 'vue-i18n'

import ru from './ru.json'
import uz from './uz.json'
import en from './en.json'

const languages = {
    en,
    ru,
    uz
}


const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'ru',
    messages: languages
})

export default i18n;


