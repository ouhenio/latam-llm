// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'LLM Latinoamericano',
    description: 'Un modelo hecho en casa',
    image: {
      src: '/perceptrin.webp',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 400
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/perceptrin.webp', // path of the logo
        pathDark: '/perceptrin.webp', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'GPT-LAS' // alt of the logo
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
