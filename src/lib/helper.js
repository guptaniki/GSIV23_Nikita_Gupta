export function mapGenres(genresIds, genres) {
  const genresMap = genres.reduce((result, current) => {
    result[current.id] = current.name;
    return result;
  }, {});
  return genresIds.map((id) => genresMap[id]).join(", ");
}

export function onlyYear(date) {
  const onlyYear = new Date(date).getFullYear();
  return onlyYear;
}
export const getDirectorName = (data) => {
  const DirectorName = data?.map((item) => item.name).join(",");

  return DirectorName;
};
export const getCast = (data) => {
  const CastName = data?.cast?.map((item) => item.name).join(",");
  return CastName;
};
export const runtimeValue=(runtime)=>{
  const time=Math.floor(runtime/60)+'h' +  runtime%60+'m';
  return time;
}
