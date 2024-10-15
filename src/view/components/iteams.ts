export default interface ITeams {
  id: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: any;
  picture: any;
}
