module.exports = function check(str, bracketsConfig) {
    const openBrackets = bracketsConfig.map(el => el[0]);
    const bracketsPairMap = bracketsConfig
        .reduce((acc, arr) => (acc[arr[0]] = arr[1], acc), {});
    const stack = [];
    const isClosedForPrevious = el => {
        return bracketsPairMap[stack[stack.length - 1]] === el;
    }

    for (const el of str) {
        if (isClosedForPrevious(el)) {
            stack.pop();
        } else if (openBrackets.includes(el)) {
            stack.push(el);
        } else {
            return false;
        }
    }
    
    if (stack.length) return false;
    
    return true;
}


