import { path } from '../../data/paths';

const activeStyle = {
  color: '#4879fc',
};

export const isStyleActive = ({ isActive }: any) => (isActive ? activeStyle : undefined);

export const headerItems: NavLinkType[] = [
  { path: path.profile, destination: 'Profile' },
  { path: path.messages, destination: 'Messages' },
  { path: path.users, destination: 'Users' },
];
type NavLinkType = {
  path: string;
  destination: string;
};
