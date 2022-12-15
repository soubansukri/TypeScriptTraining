"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const FootballCoach_1 = require("./FootballCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myFootballCoach = new FootballCoach_1.FootballCoach();
let theCoaches = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myFootballCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
