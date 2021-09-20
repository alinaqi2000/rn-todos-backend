module.exports = ({ env }) => ({
    url: env("MY_HEROKU_URL"),
    admin: {
        auth: {
            secret: env("ADMIN_JWT_SECRET", "85d58bb5dc6a9dd37fb9e5e60d6937e5"),
        },
    },
});