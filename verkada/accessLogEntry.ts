export class AccessLogEntry {
    public clientIp: string;
    public timestamp: string;
    public method: string;
    public path: string;
    public httpStatusCode: number;
    public userAgent: string;

    constructor(
        clientIp: string,
        timestamp: string,
        method: string,
        path: string,
        httpStatusCode: number,
        userAgent: string
    ) {
        this.clientIp = clientIp;
        this.timestamp = timestamp;
        this.method = method;
        this.path = path;
        this.httpStatusCode = httpStatusCode;
        this.userAgent = userAgent;
    }

    static parse(logEntry: string): AccessLogEntry | null {
        const regex = /^(\S+) - - \[([^\]]+)\] "(\S+) (\S+) \S+" (\d+) \d+ "(\S+)" "([^"]+)" "-"/;
        const match = logEntry.match(regex);

        if (match) {
            const [, clientIp, timestamp, method, path, httpStatusCodeStr, userAgent] = match;
            const httpStatusCode = parseInt(httpStatusCodeStr);

            return new AccessLogEntry(clientIp, timestamp, method, path, httpStatusCode, userAgent);
        } else {
            console.error("Invalid log entry format:", logEntry);
            return null;
        }
    }
}

// Example usage
const logEntryString = '13.66.139.0 - - [19/Dec/2020:13:57:26 +0100] "GET /index.php?option=com_phocagallery&view=category&id=1:almhuette-raith&Itemid=53 HTTP/1.1" 200 32653 "-" "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)" "-"';

const logEntryObject = AccessLogEntry.parse(logEntryString);

if (logEntryObject) {
    console.log("Parsed log entry:", logEntryObject);
}
