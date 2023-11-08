import { Typography, Box } from "@mui/material";
import Image from "../images/p404.png";
import { useEffect } from "react";
const NotFound = () => {
  useEffect(() => {
    let container = document.getElementById("container");
    window.onmousemove = function (e) {
      let x = -e.clientX / 5,
        y = -e.clientY / 5;
      container.style.backgroundPositionX = x + "px";
      container.style.backgroundPositionY = y + "px";
    };
  }, []);
  return (
    <Box
      id="container"
      sx={{
        backgroundColor: "#151729",
        backgroundImage: `url(${Image})`,
        textAlign: "center",
        height: "100vh",
        pt: "26vh",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "90px", sm: "180px", md: "240px", lg: "360px" },
          textAlign: "center",
          color: "white",
          lineHeight: { xs: "80px", sm: "160px", md: "220px", lg: "340px" },
        }}
      >
        404
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { sm: "30px", md: "50px", lg: "70px" },
          color: "white",
        }}
      >
        Oops! Page not found
      </Typography>
    </Box>
  );
};

export default NotFound;
