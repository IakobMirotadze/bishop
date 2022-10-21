
const jsonConfig = {

    API_URL: "http://188.40.156.189/api",
    WEBSITE_URL: "http://188.40.156.189/api",
    IMG_URL: "http://188.40.156.189/api",

    maillerConfig: {
        // host: 'smtp.gmail.com',
        // port: 465,
        // secure: true,
        // tls: { rejectUnauthorized: true },
        service: 'Gmail',
        auth: {
            user: 'noreplyexamplemail@gmail.com',
            pass: 'noraplymailpassword'
        }
    },

    languageData: [
        {
            languageId: 'english',
            locale: 'en',
            name: 'English',
            icon: 'us'
        },
        {
            languageId: 'turkish',
            locale: 'tr',
            name: 'Türkçe',
            icon: 'tr'
        },

    ],

    defaultLanguage: {
        languageId: 'english',
        locale: 'en',
        name: 'English',
        icon: 'us'
    }
}

if (process.env.NODE_ENV === 'development') {
    jsonConfig.API_URL = "http://localhost:5000"
    jsonConfig.WEBSITE_URL = "http://localhost:80"
    jsonConfig.IMG_URL = "http://localhost:5000/"
}


module.exports = jsonConfig
