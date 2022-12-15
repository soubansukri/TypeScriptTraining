import { Coach } from "./Coach"

export class CricketCoach implements Coach{
    getDailyWorkout(): string {
        return "Net practice batting for 10overs/day";
    }
}