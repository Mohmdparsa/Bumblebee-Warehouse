import {
  Grid,
  TextField,
  Divider,
  Rating,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addStoreData } from "../feature/ProductSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [count, setCount] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    dispatch(
      addStoreData({
        name,
        model,
        price,
        description,
        rating,
        day,
        month,
        count,
        year,
      })
    );
    setName("");
    setModel("");
    setPrice("");
    setDescription("");
    setDay("");
    setMonth("");
    setYear("");
    setRating("");
    setCount("");
  };

  return (
    <>
      <Grid
        sx={{
          backgroundColor: "primary.dark",
          height: "100vh",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
        xs={5}
        md={4}
        lg={3}
      >
        <h1
          style={{ marginLeft: "20px", marginRight: "20px", color: "#555273" }}
        >
          Bumblebee Warehouse
        </h1>
        <Divider variant="middle" sx={{ width: "90%" }} />
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          sx={{ marginTop: "40px", width: "80%", color: "primary.main" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="model"
          variant="outlined"
          sx={{ marginTop: "10px", width: "80%" }}
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="price$"
          variant="outlined"
          sx={{ marginTop: "10px", width: "80%" }}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="description"
          multiline
          maxRows={4}
          sx={{ marginTop: "10px", width: "80%" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Grid sx={{ marginTop: "10px" }} xs={12} sm={8} md={12}>
          <Typography sx={{ marginLeft: 0, color: "#555273" }}>
            Enterance Date
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 110 }} size="small">
            <InputLabel id="demo-simple-select-label">day</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={17}>17</MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={19}>19</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={21}>21</MenuItem>
              <MenuItem value={22}>22</MenuItem>
              <MenuItem value={23}>23</MenuItem>
              <MenuItem value={24}>24</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={26}>26</MenuItem>
              <MenuItem value={27}>27</MenuItem>
              <MenuItem value={28}>28</MenuItem>
              <MenuItem value={29}>29</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={31}>31</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 110 }} size="small">
            <InputLabel id="demo-simple-select-label">month</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <MenuItem value={1}>January</MenuItem>
              <MenuItem value={2}>February</MenuItem>
              <MenuItem value={3}>March</MenuItem>
              <MenuItem value={4}>April</MenuItem>
              <MenuItem value={5}>May</MenuItem>
              <MenuItem value={6}>June</MenuItem>
              <MenuItem value={7}>July</MenuItem>
              <MenuItem value={8}>August</MenuItem>
              <MenuItem value={9}>September</MenuItem>
              <MenuItem value={10}>October</MenuItem>
              <MenuItem value={11}>November</MenuItem>
              <MenuItem value={12}>December</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 110 }} size="small">
            <InputLabel id="demo-simple-select-label">year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <MenuItem value={1}>2025</MenuItem>
              <MenuItem value={2}>2024</MenuItem>
              <MenuItem value={3}>2023</MenuItem>
              <MenuItem value={4}>2022</MenuItem>
              <MenuItem value={5}>2021</MenuItem>
              <MenuItem value={6}>2020</MenuItem>
              <MenuItem value={7}>2019</MenuItem>
              <MenuItem value={8}>2018</MenuItem>
              <MenuItem value={9}>2017</MenuItem>
              <MenuItem value={10}>2016</MenuItem>
              <MenuItem value={11}>2015</MenuItem>
              <MenuItem value={12}>2014</MenuItem>
              <MenuItem value={13}>2013</MenuItem>
              <MenuItem value={14}>2012</MenuItem>
              <MenuItem value={15}>2011</MenuItem>
              <MenuItem value={16}>2010</MenuItem>
              <MenuItem value={17}>2009</MenuItem>
              <MenuItem value={18}>2008</MenuItem>
              <MenuItem value={19}>2007</MenuItem>
              <MenuItem value={20}>2006</MenuItem>
              <MenuItem value={21}>2005</MenuItem>
              <MenuItem value={22}>2004</MenuItem>
              <MenuItem value={23}>2003</MenuItem>
              <MenuItem value={24}>2003</MenuItem>
              <MenuItem value={25}>2002</MenuItem>
              <MenuItem value={26}>2001</MenuItem>
              <MenuItem value={27}>2000</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Typography style={{ color: "#555273" }}>Number of products</Typography>
        <FormControl sx={{ m: 1, minWidth: 110 }} size="small">
          <InputLabel id="demo-simple-select-label">count</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={14}>14</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={17}>17</MenuItem>
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={19}>19</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
        <Rating
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{
            marginTop: "30px",
            width: "80%",
            marginBottom: "30px",
            backgroundColor: "secondary.main",
            color: "white",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </>
  );
};

export default Sidebar;
