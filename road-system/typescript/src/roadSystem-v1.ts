function solution(roadRegister: boolean[][]): boolean {
    const numCities: number = roadRegister.length;

    for (const city of Array.from({ length: numCities }, (_, i) => i)) {
        if (getIncomingRoads(city, roadRegister) !== getOutgoingRoads(city, roadRegister)) {
            return false;
        }
    }

    return true;
}

function getIncomingRoads(city: number, roadRegister: boolean[][]): number {
    return roadRegister.reduce((numIncoming, row) => (row[city] ? numIncoming + 1 : numIncoming), 0);
}

function getOutgoingRoads(city: number, roadRegister: boolean[][]): number {
    return roadRegister[city].reduce((numOutgoing, isRoad) => (isRoad ? numOutgoing + 1 : numOutgoing), 0);
}