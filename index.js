const CronJob = require('cron').CronJob
const check4OfflineSensors = require('./check4OfflineSensor.js').check

const job = new CronJob('*/20 * * * *', function () {
  check4OfflineSensors()
}, function () {
    /* This function is executed when the job stops */
  console.log('error')
},
  true, /* Start the job right now */
  'Europe/Brussels'
)
