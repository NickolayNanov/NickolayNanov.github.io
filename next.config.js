/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},
	output: 'export',
	images: {
		unoptimized: true
	},
	trailingSlash: true
};
