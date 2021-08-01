module.exports = {
    root: process.cwd(),
    port: "3000",
    hostname: "127.0.0.1",
    compress: /\.(html|js|css|md)/,
    cache: {
        maxAge: 600,
        expires: true,
        cacheControl: true,
        lastModified: true,
        etag: true
    }
}