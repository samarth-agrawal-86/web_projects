import { Stack, Autocomplete, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

function MuiAutoComplete() {
  const [movieL, setMovieL] = useState(null);
  function handleMovieList(event, newMovieL) {
    setMovieL(newMovieL);
  }
  console.log(typeof movieL);
  console.log({ movieL });
  const [movieO, setMovieO] = useState(null);
  function handleMovieObj(event, newMovieO) {
    setMovieO(newMovieO);
  }
  console.log(typeof movieO);
  console.log({ movieO });

  return (
    <Stack width="300px" spacing={3}>
      <Autocomplete
        options={topFilmsList}
        value={movieL}
        onChange={handleMovieList}
        renderInput={(params) => <TextField {...params} label="Movies List" />}
      />
      <Autocomplete
        options={topFilmsObjects}
        value={movieO}
        onChange={handleMovieObj}
        renderInput={(params) => (
          <TextField {...params} label="Movies List Objects" />
        )}
      />
      <Autocomplete
        options={topFilmsGroups}
        groupBy={(option) => option.category}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label="Movies List Objects" />
        )}
      />
    </Stack>
  );
}

export default MuiAutoComplete;

const topFilmsList = [
  'The Godfather I',
  'The Godfather II',
  'The Dark Knight',
  'Pulp Fiction',
];
const topFilmsGroups = [
  { category: 'Thriller', label: 'The Godfather I' },
  { category: 'Thriller', label: 'The Godfather II' },
  { category: 'Thriller', label: 'The Godfather III' },

  { category: 'Super Hero', label: 'The Dark Knight' },

  { category: 'Fiction', label: 'Pulp Fiction' },
  { category: 'Fiction', label: 'Fight Club' },

  { category: 'True Story', label: "Schindler's List" },
];
const topFilmsObjects = [
  { id: 1, label: 'The Shawshank Redemption', year: 1994 },
  { id: 2, label: 'The Godfather', year: 1972 },
  { id: 3, label: 'The Godfather: Part II', year: 1974 },
  { id: 4, label: 'The Dark Knight', year: 2008 },
  { id: 5, label: '12 Angry Men', year: 1957 },
  { id: 6, label: "Schindler's List", year: 1993 },
  { id: 7, label: 'Pulp Fiction', year: 1994 },
  {
    id: 8,
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { id: 9, label: 'The Good, the Bad and the Ugly', year: 1966 },
  { id: 10, label: 'Fight Club', year: 1999 },
];
