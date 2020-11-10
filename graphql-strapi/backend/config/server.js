module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env("URL", "http://localhost:1337"),
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', 'f08b090b4e711517e63f5d030f6115a2'),
        },
    },
});