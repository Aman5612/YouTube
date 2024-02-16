import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import "./Navbar.css";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      top: 0,
      background: "#000",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <span className="HomeLogo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 380.9 85.1"
          focusable="false"
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <path
            fill="#ff0000"
            d="M 60.699219 0.30078125 C 60.699219 0.30078125 22.699219 0.30078125 13.199219 2.8007812 C 7.9992187 4.2007813 3.9 8.3 2.5 13.5 C 0 23 0 42.699219 0 42.699219 C 0 42.699219 0 62.500391 2.5 71.900391 C 3.9 77.100391 7.9992188 81.199609 13.199219 82.599609 C 22.699219 85.099609 60.699219 85.099609 60.699219 85.099609 C 60.699219 85.099609 98.699219 85.099609 108.19922 82.599609 C 113.39922 81.199609 117.50039 77.100391 118.90039 71.900391 C 121.40039 62.400391 121.40039 42.699219 121.40039 42.699219 C 121.40039 42.699219 121.40039 23 118.90039 13.5 C 117.50039 8.3 113.39922 4.2007812 108.19922 2.8007812 C 98.699219 0.30078125 60.699219 0.30078125 60.699219 0.30078125 z M 48.5 24.5 L 80.099609 42.800781 L 48.5 61 L 48.5 24.5 z "
          ></path>
          <path fill="#ffffff" d="M 48.5,61 80.1,42.8 48.5,24.5 Z"></path>
          <path d="M147.1 55.5L133.5 6.2h11.9l4.8 22.3c1.2 5.5 2.1 10.2 2.7 14.1h.3c.4-2.8 1.3-7.4 2.7-14l5-22.4h11.9L159 55.5v23.7h-11.8l-.1-23.7zm29.2 22.1c-2.4-1.6-4.1-4.1-5.1-7.6-1-3.4-1.5-8-1.5-13.6v-7.7c0-5.7.6-10.3 1.7-13.8 1.2-3.5 3-6 5.4-7.6 2.5-1.6 5.7-2.4 9.7-2.4 3.9 0 7.1.8 9.5 2.4s4.1 4.2 5.2 7.6 1.7 8 1.7 13.8v7.7c0 5.7-.5 10.2-1.6 13.7-1.1 3.4-2.8 6-5.2 7.6-2.4 1.6-5.7 2.4-9.8 2.4-4.3-.1-7.6-.9-10-2.5zm13.5-8.3c.7-1.7 1-4.6 1-8.5V44.2c0-3.8-.3-6.6-1-8.4s-1.8-2.6-3.5-2.6c-1.6 0-2.8.9-3.4 2.6-.7 1.8-1 4.6-1 8.4v16.6c0 3.9.3 6.8 1 8.5.6 1.7 1.8 2.6 3.5 2.6 1.5 0 2.7-.9 3.4-2.6zm51.7-43.4v53.3h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.9h12V65c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.9h12z"></path>
          <path d="M274.1 15.9h-11.9v63.3h-11.7V16h-11.9V6.4h35.5v9.5z"></path>
          <path d="M303 25.9v53.3h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.9h12V65c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.9h12zm39.7 8.5c-.7-3.4-1.9-5.8-3.5-7.3s-3.9-2.3-6.7-2.3c-2.2 0-4.3.6-6.2 1.9-1.9 1.2-3.4 2.9-4.4 4.9h-.1V3.5h-11.6v75.7h9.9l1.2-5h.3c.9 1.8 2.3 3.2 4.2 4.3 1.9 1 3.9 1.6 6.2 1.6 4.1 0 7-1.9 8.9-5.6 1.9-3.7 2.9-9.6 2.9-17.5v-8.4c0-6.2-.4-10.8-1.1-14.2zm-11 21.7c0 3.9-.2 6.9-.5 9.1-.3 2.2-.9 3.8-1.6 4.7-.8.9-1.8 1.4-3 1.4-1 0-1.9-.2-2.7-.7-.8-.5-1.5-1.2-2-2.1V38.3c.4-1.4 1.1-2.6 2.1-3.6 1-.9 2.1-1.4 3.2-1.4 1.2 0 2.2.5 2.8 1.4.7 1 1.1 2.6 1.4 4.8.3 2.3.4 5.5.4 9.6l-.1 7zm29.1.4v2.7c0 3.4.1 6 .3 7.7.2 1.7.6 3 1.3 3.7.6.8 1.6 1.2 3 1.2 1.8 0 3-.7 3.7-2.1.7-1.4 1-3.7 1.1-7l10.3.6c.1.5.1 1.1.1 1.9 0 4.9-1.3 8.6-4 11s-6.5 3.6-11.4 3.6c-5.9 0-10-1.9-12.4-5.6-2.4-3.7-3.6-9.4-3.6-17.2v-9.3c0-8 1.2-13.8 3.7-17.5s6.7-5.5 12.6-5.5c4.1 0 7.3.8 9.5 2.3s3.7 3.9 4.6 7c.9 3.2 1.3 7.6 1.3 13.2v9.1h-20.1v.2zm1.5-22.4c-.6.8-1 2-1.2 3.7s-.3 4.3-.3 7.8v3.8h8.8v-3.8c0-3.4-.1-6-.3-7.8-.2-1.8-.7-3-1.3-3.7-.6-.7-1.6-1.1-2.8-1.1-1.3 0-2.3.4-2.9 1.1z"></path>
        </svg>
      </span>
      {/* <img className="img" src={youtubetext} alt="text" height={45} /> */}
    </Link>

    <SearchBar />
  </Stack>
);

export default Navbar;
