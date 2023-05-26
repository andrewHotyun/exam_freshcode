const fs = require('fs');
const path = ('path');

// const logDirectory = 'errorLoggers';
const logFile = path.resolve(__dirname, '..', '..', 'public/errorLoggers');

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}
const logError = (error) => {
    const log = {
        message: error.message,
        time: Date.now(),
        code: error.code, 
        stackTracer: error.stack
    };

    fs.appendFileSync(`${logFile}/errors.txt`, JSON.stringify(log) + '\n');
} 