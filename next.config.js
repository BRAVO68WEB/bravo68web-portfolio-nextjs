const moduleExports = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: 'bravo68web.me',
			port: '',
			pathname: '/images/**/*.{jpg,jpeg,png,svg,gif,webp}',
		  },
		],
	},
};
module.exports = moduleExports;
