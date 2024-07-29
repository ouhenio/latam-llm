// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'LLM Latinoamericano',
    description: 'Un modelo hecho en casa',
    image: {
      src: '/mascota_bandera.png',
      alt: 'An image showcasing my project.',
      width: 500,
      height: 500
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/mascota_bandera.png', // path of the logo
        pathDark: '/mascota_bandera.png', // path of the logo in dark mode, leave this empty if you want to use the same logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
    
  }
})
