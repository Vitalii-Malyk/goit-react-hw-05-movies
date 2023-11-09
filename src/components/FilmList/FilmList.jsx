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
      {data.map(({ title, id, poster_path, overview }) => {
        return (
          <StyleFilmItem className="gallery-film" key={id}>
            <StyleFilmLink to={`/movies/${id}`} state={location}>
              <Card sx={{ maxWidth: 200, backgroundColor: '#131415' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="270"
                    image={`${BASE_URL_IMG}${poster_path}`}
                    alt={title}
                  />
                  <CardContent sx={{ height: 150 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ color: '#9f9f9f' }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body3"
                      sx={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        color: '#9f9f9f',
                      }}
                    >
                      {overview}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </StyleFilmLink>
          </StyleFilmItem>
        );
      })}
    </StyleFilmList>
  );
};

export default FilmList;
