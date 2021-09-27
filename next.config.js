/** @type {import('next').NextConfig} */
module.exports = {
	webpack5: true,
	reactStrictMode: true,
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => { 
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})
		return config
	},
}