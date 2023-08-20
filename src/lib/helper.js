export function mapGenres(genresIds, genres) {
  const genresMap = genres.reduce((result, current) => {
    result[current.id] = current.name;
    return result;
  }, {});
  return genresIds.map((id) => genresMap[id]).join(", ");
}
