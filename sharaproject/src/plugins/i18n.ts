import  {createI18n}  from 'vue-i18n'
import EN from '../locale/EN.json'
import GE from '../locale/GE.json'
console.log(document.cookie.split('=')[2] || 'EN')
const i18n = createI18n({
    locale:'EN',
    fallbackLocale: 'EN',
    silentTranslationWarn: true,
    messages: {
        EN: EN,
        GE: GE,
    }
})
export const { t: $t, tm: $tm } = i18n.global;
export default i18n