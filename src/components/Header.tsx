import { HomeIcon, PokedexIcon, GameIcon, GccIcon, TvIcon, PlayIcon, NewsIcon } from './Icons';
import { Link } from 'react-router-dom';

const navIcons = {
  home: HomeIcon,
  pokedex: PokedexIcon,
  game: GameIcon,
  gcc: GccIcon,
  tv: TvIcon,
  play: PlayIcon,
  news: NewsIcon
} as const;

interface NavItem {
  icon: keyof typeof navIcons;
  label: string;
  active: boolean;
}

export default function Header() {
  const navItems: NavItem[] = [
    { icon: 'home', label: "Home", active: true },
    { icon: 'pokedex', label: "Pokedex", active: false },
    { icon: 'game', label: "Videogames", active: false },
    { icon: 'gcc', label: "GCC Pokemon", active: false },
    { icon: 'tv', label: "TV Pokemon", active: false },
    { icon: 'play', label: "Play! Pokemon", active: false },
    { icon: 'news', label: "News", active: false },
  ];

  return (
    <header className="px-10 py-8 bg-white rounded-xl shadow-sm">
      <nav className="flex justify-center">
        <ul className="flex items-center space-x-8">
          {navItems.map((item, index) => {
            const Icon = navIcons[item.icon];
            return (
              <li key={index}>
                <Link
                  to="example.com"
                  className={`flex items-center space-x-2 ${
                    item.active ? 'text-red-500' : 'text-neutral-500'
                  } hover:text-red-500 transition-colors`}
                >
                  <Icon className="w-12 h-12" />
                  <span className="font-bold">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}