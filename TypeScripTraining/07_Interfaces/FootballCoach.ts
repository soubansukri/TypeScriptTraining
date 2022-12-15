import { Coach } from "./Coach"

export class FootballCoach implements Coach{
    getDailyWorkout(): string {
        return "Dribble for 2 hours/day";
    }
}