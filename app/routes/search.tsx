import { MetaFunction } from '@remix-run/node';
import { NavLink, Outlet } from '@remix-run/react';
import { Container, Badge } from '@nextui-org/react';

const searchPage = [
  { pageName: 'search.title.movie', pageLink: 'movie' },
  { pageName: 'search.title.tv', pageLink: 'tv' },
  { pageName: 'search.title.people', pageLink: 'people' },
  { pageName: 'search.title.anime', pageLink: 'anime' },
];

export const meta: MetaFunction = () => ({
  title:
    'Search Movies, Tv Series and Anime HD - Watch Movies, Tv Series and Anime HD Online on Sora',
  description:
    "Sora's advanced search allows you to run extremely powerful queries over all people and titles. Find exactly what you're looking for!",
  keywords:
    'watch free movies, free movies to watch online, watch movies online free, free movies streaming, free movies full, free movies download, watch movies hd, movies to watch',
  'og:url': 'https://sora-anime.vercel.app/search',
  'og:title':
    'Search Movies, Tv Series and Anime HD - Watch Movies, Tv Series and Anime HD Online on Sora',
  'og:image': 'https://sora-anime.vercel.app/api/ogimage?it=search',
  'og:description':
    "Sora's advanced search allows you to run extremely powerful queries over all people and titles. Find exactly what you're looking for!",
});

export const handle = {
  breadcrumb: () => (
    <NavLink to="/search" aria-label="Search Page">
      {({ isActive }) => (
        <Badge
          color="primary"
          variant="flat"
          css={{
            opacity: isActive ? 1 : 0.7,
            transition: 'opacity 0.25s ease 0s',
            '&:hover': { opacity: 0.8 },
          }}
        >
          Search
        </Badge>
      )}
    </NavLink>
  ),
  showTabLink: true,
  tabLinkPages: searchPage,
  tabLinkTo: '/search/',
};

const SearchPage = () => (
  <Container fluid responsive={false} css={{ m: 0, p: 0 }}>
    <Outlet />
  </Container>
);

export default SearchPage;
