const moduleExports = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: 'itsmebravo.dev',
			port: '',
			pathname: '/images/**/*.{jpg,jpeg,png,svg,gif,webp}',
		  },
		],
	},
};
module.exports = moduleExports;
