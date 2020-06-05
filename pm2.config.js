const app = {
    "name": "health-checks-app",
    "script": "./index.js",
    "max_memory_restart": "100M",
    "watch": true,
    "log_date_format": "YYYY-MM-DD HH:mm:ss.SSS",
    "env": {
        "NODE_ENV": "production"
    },
    "exec_mode": "cluster",
    "instances": "2",
    "kill_timeout": 5000,
};

module.exports = {
    "apps": [app]
};
