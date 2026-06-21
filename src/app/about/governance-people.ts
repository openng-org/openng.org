export type GovernancePerson = {
  name: string;
  role: string;
  avatar?: string;
};

export const team: GovernancePerson[] = [
  {
    name: 'Gerome Grignon',
    role: 'Co-founder',
    avatar: '/images/avatars/gerome-grignon.jpeg',
  },
  {
    name: 'Dominic Bachmann',
    role: 'Co-founder',
    avatar: '/images/avatars/dominic-bachmann.jpeg',
  },
];

export const advisoryBoard: GovernancePerson[] = [];
