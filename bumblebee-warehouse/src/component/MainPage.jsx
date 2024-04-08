import { TextField, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectedItem } from "../feature/ProductSlice";
import { useState } from "react";
import CardsContent from "./CardContent";

const MainPage = () => {
  const ProductData = useSelector(selectedItem);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = ProductData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const isNoContent = filteredProducts.length === 0;
  return (
    <div style={{ overflowY: "auto" }}>
      <Box
        container
        xs={12}
        sx={{
          backgroundColor: "primary.dark",
          height: "70px",
          textAlign: "center",
        }}
      >
        <TextField
          type="text"
          placeholder="Search products by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ height: "20px", margin: 1 }}
        />
      </Box>
      {/* <CardsContent filteredProducts={filteredProducts} /> */}
      {/* Conditional rendering based on whether there are filteredProducts */}
      {isNoContent ? (
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <h1>There is no content.</h1>
        </Box>
      ) : (
        <CardsContent filteredProducts={filteredProducts} />
      )}
    </div>
  );
};

export default MainPage;
