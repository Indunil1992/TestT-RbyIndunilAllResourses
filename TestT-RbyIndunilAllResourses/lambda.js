let SL_REDIS = require('slappforge-sdk-redis');
let clusterManager = require('./ClusterManager');
const redis = new SL_REDIS.Redis(clusterManager);

exports.handler = function (event, context, callback) {
    // You must always quit the redis client after it's used
    redis.incrby({
        clusterIdentifier: 'clster',
        params: [{
            key: '1',
            increment: 2
        }]
    }, function (error, response, redisClient) {
        if (error) {
            callback(error);
            console.log("errorr");
            console.log(error);
        } else {
            console.log("quittt");
            //redisClient.quit();
        }
    });

    callback(null, { "message": "Successfully executed" });
}