function calculateFactorial(number) {
    let result = 1
    for (let i = 1; i<= number; i++) {
        result *= i;
    }
    return result;
}

function reverseString(string) {
    if (typeof string == 'string') {
        return string.split('').reverse().join('');
    } else {
        return null;
    }
}

function sayHello(lang) {
    if (lang && typeof lang == 'string') {
        switch (lang) {
            case 'vi': {
                return 'Xin chào!';
                break;
            }
            case 'eng': {
                return 'Hello, nice to meet you!';
                break;
            }
            case 'fr': {
                return 'Bonjour!';
                break;
            }
        }
    } else {
        return 'Please try again!'
    }
}

function subString(string) {
    if (string) {
        if (string.length <= 10) {
            return string;
        } else {
            return string.substr(0, 10) + '...';
        }
    } else {
        return null;
    }
}
