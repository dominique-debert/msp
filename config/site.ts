export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Moviez',
  description: 'Moviez is a movie and tv show tracker built by Dominique DEBERT.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
      scroll: true,
    },
    {
      title: 'Movies',
      href: '/movies',
      scroll: true,
    },
    {
      title: 'TV Shows',
      href: '/tv-shows',
      scroll: true,
    },
    // {
    //   title: 'Watch History',
    //   href: '/watch-history',
    //   scroll: true,
    // },
    // {
    //   title: 'Disclaimer',
    //   href: '/disclaimer',
    //   scroll: false,
    // },
  ],
  personalLogo:
    'https://pbs.twimg.com/profile_images/1446549954231738370/IVkXC16N_400x400.jpg',
  links: {
    twitter: '',
    github: 'https://github.com/dominique-debert',
    website: '',
    buyMeACoffee: '',
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
  },
  email: 'dominiquedebert@gmail.com',
  websiteURL: 'https://localhost',
  twitterTag: '@district88',
  image:
    'https://pbs.twimg.com/profile_images/1446549954231738370/IVkXC16N_400x400.jpg',
  keywords: [
    'Moviez',
    'Moviez Site',
    'Moviez Tracker',
    'Movie Tracker',
    'TV Show Tracker',
    'Moviez Live',
    'Software Engineer',
    'Frontend Engineer',
    'Web Developer',
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Dominique DEBERT',
    'DEBERT',
    'DEBERT Dominique',
    'React Engineer',
    'React.js',
    'Next.js',
    'NextJS',
    'Next.js Engineer',
  ],
}
