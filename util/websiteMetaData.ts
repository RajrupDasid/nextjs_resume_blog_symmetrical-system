interface siteMetaData{
    title: string,
    author: string,
    headerTitle: string,
    description: string,
    language: string,
    theme: string, // system, dark or light
    siteUrl: string, // your website URL
    siteLogo: string,
    socialBanner: string, // add social banner in the public folder
    email: string, 
    github: string,
    twitter: string,
    facebook: string,
    youtube: string,
    linkedin: string,
    dribbble: string,
    behance:   string,
    locale: string,

}

export const websiteMetadata:siteMetaData = {
    title: 'Websatckpros.net information binder website',
    author: 'Webstackpros',
    headerTitle: 'Webstackpros netword',
    description: 'We are a team of professionals here to turn your digital dreams into reality. You imagine it, and we will develop it. Thank you for visiting our site.',
    language: 'en-us',
    theme: 'system', // system, dark or light
    siteUrl: 'https://www.webstackpros.net', // your website URL
    siteLogo: '/favicon.ico',
    socialBanner: '/social-banner.png', // add social banner in the public folder
    email: 'websatckprosnetwork@gmail.com', 
    github: 'https://github.com/RajrupDasid',
    twitter: 'https://twitter.com/webstackprosnetwork',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com/webstackprosnetwork',
    linkedin: 'https://www.linkedin.com/in/webstackprosnetwork/',
    dribbble: 'https://dribbble.com/Rajrup_official',
    behance:   'https://www.behance.net/rajrupdas',
    locale: 'en-US',
  }
// module.exports=websiteMetadata;