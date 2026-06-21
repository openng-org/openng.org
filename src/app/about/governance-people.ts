export type GovernancePerson = {
  name: string;
  role: string;
  github?: string;
};

export const team: GovernancePerson[] = [
  {
    name: 'Gerome Grignon',
    role: 'Co-founder',
  },
  {
    name: 'Jordan Lee',
    role: 'Co-founder',
  },
];

export const advisoryBoard: GovernancePerson[] = [
  {
    name: 'Sam Patel',
    role: 'Advisor',
  },
  {
    name: 'Riley Kim',
    role: 'Advisor',
  },
  {
    name: 'Morgan Taylor',
    role: 'Advisor',
  },
];
