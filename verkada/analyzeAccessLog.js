"use strict";
// 13.66.139.0 - - [19/Dec/2020:13:57:26 +0100] "GET /index.php?option=com_phocagallery&view=category&id=1:almhuette-raith&Itemid=53 HTTP/1.1" 200 32653 "-" "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)" "-"
Object.defineProperty(exports, "__esModule", { value: true });
// Success rate - everything except 500, denom = entries in access.log
// Number of unique clients per hour - num unique IPs per hour in ts
// Top clients by IP - top means the most number of entries in access.log
var fs = require("fs");
function analyzeAccessLog() {
    var _a, _b, _c;
    var fileContents = readAccessLog();
    var fileContentsArray = fileContents.split("\n");
    console.log("Success Rate: {}", computeSuccessRate(fileContentsArray));
    var map = numUniqueClientsPerHour(fileContentsArray);
    console.log("Num unique clients per hour [19/Dec/2020:21: {}", (_a = map.get("[19/Dec/2020:21")) === null || _a === void 0 ? void 0 : _a.size);
    console.log("Num unique clients per hour [19/Dec/2020:23: {}", (_b = map.get("[19/Dec/2020:23")) === null || _b === void 0 ? void 0 : _b.size);
    console.log("Num unique clients per hour [19/Dec/2029:21: {}", (_c = map.get("[19/Dec/2029:21")) === null || _c === void 0 ? void 0 : _c.size);
    var topIp = topClientsByIP(fileContentsArray);
    console.log("topIp = {}", topIp);
}
function readAccessLog(filePath) {
    if (filePath === void 0) { filePath = "./access.log"; }
    var contents = fs.readFileSync(filePath, { encoding: 'utf-8' });
    return contents;
}
function computeSuccessRate(fileContentsArray) {
    var numSuccess = 0;
    fileContentsArray.forEach(function (line) {
        var httpStatusCode = parseInt(line.split(" ")[8]);
        if (httpStatusCode >= 100 && httpStatusCode < 399) {
            numSuccess++;
        }
    });
    return (numSuccess / fileContentsArray.length) * 100;
}
function numUniqueClientsPerHour(fileContentsArray) {
    var map = new Map();
    fileContentsArray.forEach(function (line) {
        // TODO: based on +0100
        var clientIp = line.split(" ")[0];
        var timeStamp = line.split(" ")[3];
        //[19/Dec/2020:13:57:26
        var parts = timeStamp.split(":");
        var key = parts[0] + ":" + parts[1];
        if (map.has(key)) {
            var ips = map.get(key);
            ips === null || ips === void 0 ? void 0 : ips.add(clientIp);
        }
        else {
            var clientIpSet = new Set();
            clientIpSet.add(clientIp);
            map.set(key, clientIpSet);
        }
    });
    console.log(map);
    return map;
}
function topClientsByIP(fileContentsArray) {
    var map = new Map();
    fileContentsArray.forEach(function (line) {
        var clientIp = line.split(" ")[0];
        if (map.has(clientIp)) {
            map.set(clientIp, map.get(clientIp) + 1);
        }
        else {
            map.set(clientIp, 1);
        }
    });
    var topIp;
    var maxFreq = Number.MIN_SAFE_INTEGER;
    map.forEach(function (freq, ip) {
        if (freq > maxFreq) {
            maxFreq = freq;
            topIp = ip;
        }
    });
    return [topIp, maxFreq];
}
analyzeAccessLog();
