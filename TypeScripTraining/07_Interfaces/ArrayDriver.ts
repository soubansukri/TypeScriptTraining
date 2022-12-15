import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { FootballCoach } from "./FootballCoach";

let myCricketCoach=new CricketCoach();
let myFootballCoach=new FootballCoach();

let theCoaches:Coach[]=[];

theCoaches.push(myCricketCoach);
theCoaches.push(myFootballCoach);

for(let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout());
}