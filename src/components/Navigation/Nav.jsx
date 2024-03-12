import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import "./Nav.css";

function Nav() {
  return (
    <section>
      <nav id="nav" className="nav">
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/all-articles">Articles</Link>
        <form>
        <TextField
        className = "input"
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
        />

        <Button
          className="search-button"
          variant="contained"
          color="success"
          size="small"
          type="submit"
          sx={{
            marginLeft: "1em",
            height: "33px",
          }}
        >
          Search
        </Button>
        </form>
      </nav>
    </section>
  );
}

export default Nav;





