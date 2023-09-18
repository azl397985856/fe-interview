// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import './cover.less'


export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, {class:'fe-interview-layout'}, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
