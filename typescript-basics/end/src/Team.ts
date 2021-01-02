export const Team = class Team {
  // public teamName: string;
  private teamName: string;
  // readonly teamName: string;

  constructor(teamName) {
    this.teamName = teamName;
  }

  score(): string {
    // this.teamName = "change";
    console.log('goaal');
    return 'goal!';
  }
}