function solution(roadRegister) {
    var numCities = roadRegister.length;
    for (var city = 0; city < numCities; city++) {
        var isRoadSystemConvenient = getIncomingRoads(city, roadRegister) === getOutgoingRoads(city, roadRegister);
        if (!isRoadSystemConvenient) {
            return false;
        }
    }
    return true;
}
function getIncomingRoads(city, roadRegister) {
    var numIncoming = 0;
    for (var row = 0; row < roadRegister.length; row++) {
        if (roadRegister[row][city]) {
            numIncoming++;
        }
    }
    return numIncoming;
}
function getOutgoingRoads(city, roadRegister) {
    var numOutgoing = 0;
    for (var col = 0; col < roadRegister.length; col++) {
        if (roadRegister[city][col]) {
            numOutgoing++;
        }
    }
    return numOutgoing;
}
