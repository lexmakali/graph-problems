function solution(roadRegister: boolean[][]): boolean {
    const numCities: number = roadRegister.length
    for (let city = 0; city < numCities; city++) {
	    const isRoadSystemConvenient = getIncomingRoads(city, roadRegister) === getOutgoingRoads(city, roadRegister);
	    if (!isRoadSystemConvenient) {
	        return false;
	    }
	}
	return true;
}

function getIncomingRoads(city: number, roadRegister: boolean[][]): number {
    var numIncoming: number = 0
    for (var row = 0; row < roadRegister.length; row++) {
        if (roadRegister[row][city]) {
            numIncoming++
        }
    }
    return numIncoming
}

function getOutgoingRoads(city: number, roadRegister: boolean[][]): number {
    var numOutgoing: number = 0
    for (var col = 0; col < roadRegister.length; col++) {
        if (roadRegister[city][col]) {
            numOutgoing++
        }
    }
    return numOutgoing
}