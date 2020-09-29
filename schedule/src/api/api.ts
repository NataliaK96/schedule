export const api = {
  teamId: 15,
  getUrlEvent(id?: string) {
    return `${this.getUrlApi()}${this.teamId}/event/${
      id === undefined ? '' : id
    }`;
  },
  getUrlEvents() {
    return `${this.getUrlApi()}${this.teamId}/events`;
  },
  getUrlOrganizer(id: string) {
    return `${this.getUrlApi()}${this.teamId}/organizer/${id}`;
  },
  getUrlOrganizers() {
    return `${this.getUrlApi()}${this.teamId}/organizers`;
  },
  getUrlApi() {
    return 'https://rs-react-schedule.firebaseapp.com/api/team/';
  },
  getTeamId() {
    return this.teamId;
  },
  setTeamId(id: number) {
    this.teamId = id;
  },
};
