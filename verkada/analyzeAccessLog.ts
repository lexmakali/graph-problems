// 13.66.139.0 - - [19/Dec/2020:13:57:26 +0100] "GET /index.php?option=com_phocagallery&view=category&id=1:almhuette-raith&Itemid=53 HTTP/1.1" 200 32653 "-" "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)" "-"

// Success rate - everything except 500, denom = entries in access.log
// Number of unique clients per hour - num unique IPs per hour in ts
// Top clients by IP - top means the most number of entries in access.log

import * as fs from 'fs'

function analyzeAccessLog() {
    const fileContents = readAccessLog()
    const fileContentsArray: string[] = fileContents.split("\n")
    console.log("Success Rate: {}", computeSuccessRate(fileContentsArray))
    const map = numUniqueClientsPerHour(fileContentsArray)
    console.log("Num unique clients per hour [19/Dec/2020:21: {}", map.get("[19/Dec/2020:21")?.size)
    console.log("Num unique clients per hour [19/Dec/2020:23: {}", map.get("[19/Dec/2020:23")?.size)
    console.log("Num unique clients per hour [19/Dec/2029:21: {}", map.get("[19/Dec/2029:21")?.size)

    const topIp = topClientsByIP(fileContentsArray)
    console.log("topIp = {}", topIp)
}

function readAccessLog(filePath: string = "./access.log"): string {
    const contents = fs.readFileSync(filePath, { encoding: 'utf-8' })
    return contents
}

function computeSuccessRate(fileContentsArray: string[]): number {
    let numSuccess = 0
    fileContentsArray.forEach((line: string) => {
        const httpStatusCode = parseInt(line.split(" ")[8])
        if (httpStatusCode >= 100 && httpStatusCode < 399) {
            numSuccess++
        }
    })
    return (numSuccess/fileContentsArray.length) * 100
}

function numUniqueClientsPerHour(fileContentsArray: string[]): Map<string, Set<string>> {
    let map: Map<string, Set<string>> = new Map()
    fileContentsArray.forEach((line: string) => {
        // TODO: based on +0100
        const clientIp = line.split(" ")[0]
        const timeStamp = line.split(" ")[3]
        //[19/Dec/2020:13:57:26
        const parts = timeStamp.split(":")
        const key = parts[0] + ":" + parts[1]
        if (map.has(key)) {
            const ips = map.get(key)
            ips?.add(clientIp)
        } else {
            const clientIpSet = new Set<string>()
            clientIpSet.add(clientIp)
            map.set(key, clientIpSet)
        }
    })
    console.log(map)
    return map
}

function topClientsByIP(fileContentsArray: string[]): [string, number] {
    let map: Map<string, number> = new Map()
    fileContentsArray.forEach((line: string) => {
        const clientIp = line.split(" ")[0]
        if (map.has(clientIp)) {
            map.set(clientIp, map.get(clientIp) + 1)
        } else {
            map.set(clientIp, 1)
        }
    })

    let topIp 
    let maxFreq = Number.MIN_SAFE_INTEGER
    map.forEach((freq, ip) => {
        if (freq > maxFreq) {
            maxFreq = freq
            topIp = ip
        }
    })

    return [topIp, maxFreq]
}

analyzeAccessLog()