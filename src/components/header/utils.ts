import { path } from '../../data/paths';

const activeStyle = {
  color: '#4879fc',
  fontWeight: 500,
};

export const isStyleActive = ({ isActive }: any) => (isActive ? activeStyle : undefined);

export const headerItems: NavLinkType[] = [
  { path: path.profile, destination: 'Profile' },
  { path: path.users, destination: 'Users' },
];
type NavLinkType = {
  path: string;
  destination: string;
};
