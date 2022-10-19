module.exports = {
    apps: [
        {
            name: 'website',
            cwd: './website/',
            script: 'npm',
            args: 'start',
        },
        {
            name: 'admin',
            cwd: './admin/',
            script: 'npm',
            args: 'start',
        },
        {
            name: 'backend',
            cwd: './backend/',
            script: 'node',
            args: 'server.js',
        },
        // optionally a second project
    ],
};
