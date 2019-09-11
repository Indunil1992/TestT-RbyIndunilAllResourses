module.exports = function() {
    this.clusters = [];

    this.clusters["clster"] = {
        host: process.env.EndPoint_redisClster,
        port: 6379,
        clusterModeEnabled: false
    };
};