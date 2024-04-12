import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { selectedItem } from "../feature/ProductSlice";
import { useState } from "react";
import CardsContent from "./CardContent";
import EmptyContent from "./EmptyContent";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const MainPage = () => {
  const ProductData = useSelector(selectedItem);
  const [searchQuery, setSearchQuery] = useState("");
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginTop:"16px",
    marginBottom:"24px",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "98%",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const filteredProducts = ProductData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const isNoContent = filteredProducts.length === 0;
  return (
    <div style={{ overflowY: "auto" }}>
      <Grid
        container
        sx={{
          backgroundColor: "primary.main",
          height: "70px",
          textAlign: "center",
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Search>
      </Grid>
      {isNoContent ? (
        <EmptyContent />
      ) : (
        <CardsContent filteredProducts={filteredProducts} />
      )}
    </div>
  );
};

export default MainPage;
