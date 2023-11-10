import { useLocation } from 'react-router-dom';
import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import {
  StyleFilmList,
  StyleFilmItem,
  StyleFilmLink,
} from 'components/FilmList/FilmList.styled';

const FilmList = ({ data }) => {
  const location = useLocation();
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

  return (
    <StyleFilmList>
      {data.map(
        ({ title, id, poster_path, overview, vote_average, release_date }) => {
          const releaseDate = new Date(release_date);
          const releaseYear = Number.isNaN(releaseDate)
            ? 'Unknown'
            : releaseDate.getFullYear();
          const userScore = Math.round((Number(vote_average) * 100) / 10);
          return (
            <StyleFilmItem className="gallery-film" key={id}>
              <StyleFilmLink to={`/movies/${id}`} state={location}>
                <Card sx={{ maxWidth: 200, backgroundColor: '#131415' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={`${BASE_URL_IMG}${poster_path}`}
                      alt={title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                          color: '#9f9f9f',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          color: '#9f9f9f',
                          marginBottom: '10px',
                        }}
                      >
                        ({releaseYear})
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          color: '#9f9f9f',
                        }}
                      >
                        User Score: {userScore}%
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </StyleFilmLink>
            </StyleFilmItem>
          );
        }
      )}
    </StyleFilmList>
  );
};

export default FilmList;
