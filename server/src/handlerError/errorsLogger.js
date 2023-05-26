// Task 12

// const fs = require('fs');
// const path = ('path');

// // const logDirectory = 'errorLoggers';
// const logFile = path.resolve(__dirname, '..', '..', 'public/errorLoggers');

// if (!fs.existsSync(logDirectory)) {
//     fs.mkdirSync(logDirectory);
// }
// const logError = (error) => {
//     const log = {
//         message: error.message,
//         time: Date.now(),
//         code: error.code, 
//         stackTracer: error.stack
//     };

//     fs.appendFileSync(`${logFile}/errors.txt`, JSON.stringify(log) + '\n');
// } 


// Task 13

const CronJob = require('cron').CronJob;

const logFile = path.resolve(__dirname, '..', '..', 'public/errorLoggers/errors.txt');

// Функція для трансформування логу перед записом в файл
const transformLog = (log) => {
  return {
    message: log.message,
    code: log.code,
    time: log.time
  };
};

// Функція для копіювання вмісту файлу і його очищення
const copyAndClearLogFile = () => {
  const timestamp = new Date().getTime();
  const newLogFile = `${logFile}.${timestamp}`;

  // Копіювання вмісту файлу в новий файл з таймштампом
  fs.copyFileSync(logFile, newLogFile);

  // Трансформування вмісту файлу
  const logs = fs.readFileSync(newLogFile, 'utf-8').split('\n').filter(line => line.trim() !== '');
  const transformedLogs = logs.map(log => transformLog(JSON.parse(log)));

  // Запис трансформованого вмісту у новий файл з таймштампом
  fs.writeFileSync(newLogFile, transformedLogs.map(log => JSON.stringify(log)).join('\n'));

  // Очищення вмісту оригінального файлу
  fs.writeFileSync(logFile, '');
};

// Запуск задачі щоденно о 00:00
const job = new CronJob('0 0 * * *', copyAndClearLogFile);
job.start();