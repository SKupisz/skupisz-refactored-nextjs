/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['.'],
  },
  async redirects(){
    return [{
      source: "/blog/lazy-loading-overview",
      destination: "/blog/laziness-pays-back",
      permanent: true
    },{
      source: "/blog/how-to-step-into-programming",
      destination: "/blog/step-into-programming",
      permanent: true
    },{
      source: "/blog/react-worth-to-learn-our-not",
      destination: "/blog/react-worth-it-or-not",
      permanent: true,
    },{
      source: "/blog/my-programming-books",
      destination: "/blog/my-favourite-books",
      permanent: true
    }]
  }
}

module.exports = nextConfig
