/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

module.exports = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},
	output: 'export',
	images: {
		unoptimized: true
	},
	trailingSlash: true,
	basePath: basePath || undefined,
	assetPrefix: basePath ? `${basePath}/` : undefined
};
