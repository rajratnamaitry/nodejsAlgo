const logger = (msg,key = '') => {
    const msgDate =  new Date().toDateString() + ' ==>'+ msg;
    console.log(key,msgDate);
}
module.exports.logger = logger;