/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pixabay.com',]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: { presets: ['@babel/env','@babel/preset-react'] },
    })
    return config
  },
 
}

module.exports = nextConfig
