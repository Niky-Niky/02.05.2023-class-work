// import { alert, defaultModules } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import * as PNotifyMobile from '@pnotify/mobile';
// import '@pnotify/mobile/dist/PNotifyMobile.css';

// const { log } = require("console")

// defaultModules.set(PNotifyMobile, {});

// alert({
//   text: 'Notice me, senpai!',
// });

// try{
// console.log('Code before myName');

// myName;


// } catch (error){
// console.log('Code before myName')
// }
// console.log('Code outside');

const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{ щось не зрозуміле від бекенду }';

// console.log(JSON.parse(invalidJSON)); 

try{
    console.log('Code before');
    console.log(JSON.parse(invalidJSON));
} catch (error){
     console.log(error)
} console.log('Code outside');