import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["AR", "EN"];
const Header = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        bgcolor: "#283445",
        py:"1px",
        borderBottomRightRadius:5
      }}
    >
      
      <Stack direction={"row"} alignItems={"center"} >
        <Typography
          sx={{
            mr: 2,
            p: "5px 15px",
            bgcolor: "#D23F57",
            borderRadius: "12px",
            fontSize: "10px",
            fontWight: "bold",
            color: "#fff",
          }}
          variant="body1"
        >
          SHOP
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 300,
            color: "#fff",
          }}
          variant="body2"
        >
          Free Express shipping
        </Typography>
        <Box flexGrow={1} />

        <div>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined sx={{fontSize:"22px",color : "#fff"}} />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined sx={{fontSize:"22px",color : "#fff"}}  />
            </IconButton>
          )}
        </div>
        <div>
          <List component="nav" aria-label="Device settings" sx={{p:0,m:0}}>
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{"&:hover":{cursor:"pointer"},px:1}}
            >
              <ListItemText
                sx={{ ".MuiTypography-root": { fontSize: "13px",color:"#fff" } }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{fontSize:"16px",color:"#fff"}}/>
            </ListItemButton>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
              sx={{
                fontSize:"13px",
                p:"3px 10px",
                minHeight:"10px"
              }
                
              }
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <FacebookIcon
            sx={{
              mr: 1.2,
              fontSize: "18px",
              color: "#fff",
            }}
          />
          <InstagramIcon
            sx={{
              mr: 1.2,
              fontSize: "18px",
              color: "#fff",
            }}
          />
        </div>
      </Stack>
    </Box>
  );
};

export default Header;
