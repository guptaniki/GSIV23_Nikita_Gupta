import React from "react";
import { TextField, Paper, MenuItem, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useDispatch } from "react-redux";
import { searchMovie } from "../redux/search";
import Downshift from "downshift";
import { Link } from "react-router-dom";
import { IMAGE_PATH, COVER_PLACEHOLDER } from "../config";
import { mapGenres } from "../lib/helper";
const InputBox = styled(TextField)({
  width: 1500,
  padding: "10px",
  //   height:'10px'
});
const PaperStyle = styled(Paper)({
  backgroundColor: "lightgray",
  top: 20,
  position: "relative",
});
const MenuItemStyle = styled(MenuItem)({
  paddingTop: 5,
  paddingBottom: 5,
});
const ImageStyle = styled("img")({
  height: "100%",
  paddingRight: 10,
  paddingleft: 10,
});
const LinkStyled = styled(Link)({
  display: "block",
  textDecoration: "none",
});
const TitleStyled = styled(Typography)({
  color: "black",
  paddingTop: 10,
  paddingleft: 10,
});
const CaptionStyled = styled(Typography)({
  color: "black",
});
const Suggestion = ({ movies, genres }) => {
  const dispatch = useDispatch();
  const inputOnchange = (event) => {
    if (!event.target.value) {
      return;
    }
    dispatch(searchMovie(event.target.value));
  };
  const itemToString = () => "";
  return (
    <Downshift itemToString={itemToString}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <InputBox
            id="search"
            placeholder="Search"
            variant="outlined"
            size="small"
            inputProps={{
              ...getInputProps({ onChange: inputOnchange }),
            }}
          />
          {isOpen ? (
            <PaperStyle square={true} {...getMenuProps()}>
              {movies.results
                .slice(0, 10)
                .filter(
                  (item) =>
                    !inputValue ||
                    item.title.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <MenuItemStyle
                    {...getItemProps({
                      item,
                      key: item.id,
                      selected: (highlightedIndex = index),
                      style: {
                        fontWeight: selectedItem === item ? 500 : 900,
                      },
                    })}
                  >
                    <LinkStyled to={`/movie/${item.id}`}>
                      <Grid container={true}>
                        <Grid item={true}>
                          {item.poster_path ? (
                            <ImageStyle
                              src={`${IMAGE_PATH}/w92${item.poster_path}`}
                              alt={item.title}
                            />
                          ) : (
                            <ImageStyle
                              src={COVER_PLACEHOLDER}
                              alt={item.name}
                            />
                          )}
                        </Grid>
                        <Grid item={true}>
                          <TitleStyled variant="h4">{item.title}</TitleStyled>
                          <CaptionStyled variant="caption">
                            {mapGenres(item.genre_ids, genres)}
                          </CaptionStyled>
                        </Grid>
                      </Grid>
                    </LinkStyled>
                  </MenuItemStyle>
                ))}
            </PaperStyle>
          ) : null}
        </div>
      )}
    </Downshift>
  );
};
export default Suggestion;
