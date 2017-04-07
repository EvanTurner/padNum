function padNum (num, padWidth, padChar, padDirection) {
    var numStr = ((typeof num === "number")) ? num.toString() : ((typeof num === "string") ? num : '');
    padWidth = ((typeof padWidth === "number") && (padWidth > 1)) ? padWidth : 0;
    padChar = ((typeof padChar === "string") && (padChar.length == 1)) ? padChar : '0';
    padDirection = (typeof padDirection === "string") ? padDirection.toLowerCase() : 'l';

    var numPadCharacters = Math.max((padWidth - numStr.length), 0);
    
    var numLeftPadCharacters;
    var numRightPadCharacers;
    
    switch(padDirection) {
        case 'lm':
        case 'm':
            numLeftPadCharacters = Math.floor(numPadCharacters / 2) + (numPadCharacters % 2);
            numRightPadCharacers = Math.floor(numPadCharacters / 2);
            break;
        case 'rm':
            numLeftPadCharacters = Math.floor(numPadCharacters / 2);
            numRightPadCharacers = Math.floor(numPadCharacters / 2) + (numPadCharacters % 2);
            break;
        case 'r':
            numLeftPadCharacters = 0;
            numRightPadCharacers = numPadCharacters;
            break;
        // case 'l':
        default :
            numLeftPadCharacters = numPadCharacters;
            numRightPadCharacers = 0;
    }
    
    // this is a pointless comment
    var leftPadCharacters = (numLeftPadCharacters > 0) ? Array(numLeftPadCharacters + 1).join(padChar) : '';
    var rightPadCharacters = (numRightPadCharacers > 0) ? Array(numRightPadCharacers + 1).join(padChar) : '';
        
    return leftPadCharacters + numStr + rightPadCharacters;
}

