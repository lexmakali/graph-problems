import * as fs from 'fs'
import * as path from 'path'

function analyzeIpAddresses(directoryPath: string = '/root/data') {
    const result: Set<string> = new Set()
    const files: string[] = []
    readFilesFromDirectory(directoryPath, files)
    files.forEach(file => {
        const contents = readFile(file)
        const ipAddresses: string[] = parseIpAddress(contents)
        if (ipAddresses !== null && ipAddresses.length > 0) {
            ipAddresses.forEach(ip => {
                if (isValidIpAddress(ip)) {
                    result.add(ip)
                }
            })
        }
    })
    return sortIpAddresses(Array.from(result))
}

function isValidIpAddress(ip: string): boolean {
    return ip.split(".").findIndex(part => parseInt(part) > 255) === -1
}

// O(len(line))
function parseIpAddress(contents): any[] {
    const matches = contents.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g)
    return matches
}

// O(nlogn) ->O(n2)
function sortIpAddresses(result: string[]): string[] {
    return result.sort((p: string, q: string) => ipAddressComparator(p, q))
}

// O(len(string))
function ipAddressComparator(p: string, q: string): number{
    const pOctets = p.split(".")
    const qOctets = q.split(".")
    
    for (let i = 0; i < pOctets.length; i++) {
        const comp = pOctets[i].localeCompare(qOctets[i])
        if (comp === -1) {
            return -1
        } else if (comp === 1) {
            return 1
        }
    }
    
    return 0
}

function readFilesFromDirectory(currentDir: string, files: string[]): void {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        readFilesFromDirectory(fullPath, files);
      } else {
        files.push(fullPath);
      }
    }
  }

function readFile(filePath: string): string {
  const fileContents = fs.readFileSync(filePath, 'utf-8')
  return fileContents
}

const ipAddresses = analyzeIpAddresses()
console.log(ipAddresses.join("\n"))
