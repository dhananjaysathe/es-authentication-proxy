module.exports =  {

    ////////////////////////////////////
    // ElasticSearch Backend Settings
    ////////////////////////////////////
    "es_host": "localhost",  // The host of Elastic Search
    "es_port": 9200,  // The port of Elastic Search
    "es_using_ssl": false,  // If the ES is using SSL(https)?
    "es_username":  "",  // The basic authentication user of ES server, leave it blank if no basic auth applied
    "es_password":  "",  // The password of basic authentication of ES server, leave it blank if no basic auth applied.


    ////////////////////////////////////
    // Proxy server configurations
    ////////////////////////////////////
    // Which port listen to
    "listen_port": 9201,
    // Control HTTP max-Age header. Whether the browser cache static kibana files or not?
    // 0 for no-cache, unit in millisecond, default to 0
    // We strongly recommand you set to a larger number such as 2592000000(a month) to get a better loading speed
    "brower_cache_maxage": 0,
    // Enable SSL protocol
    "enable_ssl_port": false,
        // The following settings are valid only when enable_ssl_port is true
        "listen_port_ssl": 4443,
        // Use absolute path for the key file
        "ssl_key_file": "POINT_TO_YOUR_SSL_KEY",
        // Use absolute path for the certification file
        "ssl_cert_file": "POINT_TO_YOUR_SSL_CERT",


    ////////////////////////////////////
    // Security Configurations
    ////////////////////////////////////
    // Cookies secret
    // Please change the following secret randomly for security.
    "cookie_secret": "tezt",

    // =================================
    // Google OAuth2 settings
    // Enable? true or false
    // When set to false, google OAuth will not be applied.
    "enable_google_oauth": false,
        // We use the following redirect URI:
        // http://YOUR-KIBANA-SITE:[listen_port]/auth/google/callback
        // Please add it in the google developers console first.
        // The client ID of Google OAuth2
        "client_id": "",
        "client_secret": "",  // The client secret of Google OAuth2
        "allowed_emails": ["*"],  // An emails list for the authorized users


    // =================================
    // Basic Authentication Settings
    // The following config is different from the previous basic auth settings.
    // It will be applied on the client who access kibana3.
    // Enable? true or false
    "enable_basic_auth": false,
        // Multiple user/passwd supported
        // The User&Passwd list for basic auth
        "basic_auth_users": [
            {"user": "demo1", "password": "pwd1"},
            {"user": "demo1", "password": "pwd2"},
        ],


    // =================================
    // CAS SSO Login
    // Enable? true or false
    "enable_cas_auth": true,
        // Point to the CAS authentication URL
        "cas_server_url": "https://your-cas-server/",

};
