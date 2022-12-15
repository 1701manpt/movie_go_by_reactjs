/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/shop',
				permanent: false,
			},
		]
	},
}

module.exports = nextConfig
