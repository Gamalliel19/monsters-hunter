/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "thumbs.dreamstime.com",
			},
		],
	},
};

export default nextConfig;
