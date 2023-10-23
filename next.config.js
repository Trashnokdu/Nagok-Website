/** @type {import('next').NextConfig} */
const nextConfig = {
    generateBuildId: async() => 'constant-build-id'
}

module.exports = nextConfig
