// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import HomeIcon from "@mui/icons-material/Home";
// import ArticleIcon from "@mui/icons-material/Article";
// import ContactsIcon from "@mui/icons-material/Contacts";
// import DesignServicesIcon from "@mui/icons-material/DesignServices";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import headImg from "../assets/header-background-card.png";
// import { data } from "../utils/pathLocations";
// import { Link } from "react-router-dom";
// // import { makeStyles } from '@mui/styles';
// import makeStyles from "@mui/styles/makeStyles";

// const useStyle = makeStyles((theme) => ({
//   navLinks: {
//     padding: "15px",
//     textDecoration: "none",
//     color: "white",
//   },
//   mainNav: {
//     margin: "auto",
//   },
//   navBarbg: {
//     // backgroundImage: `url(${headImg})`,
//     boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
//     color: "white",
//   },
//   navLogo: {
//     textDecoration: "none",
//     color: "white",
//     "& > a:hover": {
//       color: "red",
//     },
//   },
// }));

// function BasicExample(props) {
//   const classes = useStyle();

//   return (
//     <>
//       <Navbar className={classes.navBarbg} expand="lg">
//         <Container>
//           <Link className={classes.navLogo} to="/">
//             Cyber Tech
//           </Link>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className={classes.mainNav}>
//               {data.map((item) => {
//                 return (
//                   <Link className={classes.navLinks} to={item.path}>
//                     {item.title}
//                   </Link>
//                 );
//               })}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       {props.children}
//     </>
//   );
// }

// export default BasicExample;

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { HashLink as Link } from "react-router-hash-link";
const drawerWidth = 240;
const navItems = [
  { title: "Home", to: "#top" },
  { title: "About", to: "#about" },
  { title: "Services", to: "#services" },
  { title: "Contact", to: "#contact" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#0c0c0c",
        color: "white",
        // height: "auto",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        CYBER TECH
      </Typography>
      <Divider variant="middle" sx={{ backgroundColor: "white" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={item.to}
                smooth
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItemText primary={item.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 10px 10px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            CYBER TECH
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                to={item.to}
                smooth
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button key={item} sx={{ color: "#fff" }}>
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" bgcolor="black">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
