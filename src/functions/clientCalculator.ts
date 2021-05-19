interface client {
    firstName: string,
    lastName: string,
    clientId: string
};

interface apiRes {
    statusCode: number,
    data: client
};

export function clientCalc(strClient: string, version: number): apiRes {
    let index1 = strClient.indexOf('0000');
    let index2 = strClient.indexOf('000', index1 + 4);
    if (index1 < 0 || index2 < 0)
        throw "Error: Invalid input";
    if (version === 1) {
        return {
            statusCode: 200,
            data: {
                firstName: strClient.substring(0, index1 + 4),
                lastName: strClient.substring(index1 + 4, index2 + 3),
                clientId: strClient.substr(index2 + 3)
            }
        };
    }
    else if (version === 2) {
        return {
            statusCode: 200,
            data: {
                firstName: strClient.substring(0, index1),
                lastName: strClient.substring(index1 + 4, index2),
                clientId: strClient.substring(index2 + 3, index2 + 6) + "-" + strClient.substr(index2 + 6)
            }
        };
    }
    throw "Error: Incorrect response version requested";
}