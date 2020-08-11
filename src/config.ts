// config.js
/* 
    !   Reference:
    *   
    *   https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
    *   
    *   
    *   
*/

if (process.env.NODE_ENV !== 'production') {
    
    const dotenv = require('dotenv');
    
    const result = dotenv.config();
    if (result.error) {
        throw result.error;
    };
};

// const config = {
//     endpoint: process.env.MONGODB_URI,
//     masterKey: process.env.API_KEY,
//     port: process.env.PORT
// };

// export default config;
module.exports = {
    endpoint: process.env.MONGODB_URI,
    masterKey: process.env.API_KEY,
    port: process.env.PORT
};