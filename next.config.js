/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    API_KEY:process.env.API_KEY,
    NEWS_KEY:process.env.NEWS_KEY,
  },  
  images: {
          domains: ['image.tmdb.org','wikimedia.org','www.si.com'],
          // domains: ['https://*','www.'],
       
          remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
          ],
        },
    
      
}

module.exports = nextConfig
