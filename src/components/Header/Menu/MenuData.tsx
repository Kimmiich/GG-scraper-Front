import {
  Book,
  Home,
  Star,
  MapPin,
  Video,
  LogIn,
  Edit,
  Database,
  Users,
  Smile,
} from 'react-feather';

export const MenuData = [
  {
    text: 'Home',
    href: '/',
    icon: <Home />,
  },
  {
    text: 'Guides',
    href: '/guides',
    icon: <Book />,
  },
  {
    text: 'Maps',
    href: '/maps',
    icon: <MapPin />,
  },
  {
    text: 'Reviews',
    href: '/reviews',
    icon: <Star />,
  },
  {
    text: 'Videos',
    href: '/videos',
    icon: <Video />,
  },
  {
    text: 'Members',
    href: '/members',
    icon: <Users />,
  },
  {
    text: 'Pokedex',
    href: '/pokedex',
    icon: <Smile />,
  },
  {
    text: 'Elden Ring DB',
    href: '/elden-ring-db',
    icon: <Database />,
  },
  {
    text: 'Sign up',
    href: '/sign-up',
    icon: <Edit />,
  },
  {
    text: 'Go Premium',
    href: '/go-premium',
    icon: <Star />,
  },
  {
    text: 'Login',
    href: '/login',
    icon: <LogIn />,
  },
];
