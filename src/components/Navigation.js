import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ContactsIcon from "@mui/icons-material/Contacts";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { data } from "../utils/pathLocations";
import { Link } from "react-router-dom";
// import { makeStyles } from '@mui/styles';
import makeStyles from "@mui/styles/makeStyles";

// export const data = [
//   {
//     title: "Home",
//     path: "/",
//     icons: <HomeIcon />,
//   },

//   {
//     title: "About us",
//     path: "/aboutus",
//     icons: <ArticleIcon />,
//   },

//   {
//     title: "Contact",
//     path: "/contact",
//     icons: <ContactsIcon />,
//   },
//   {
//     title: "Services",
//     path: "/services",
//     icons: <DesignServicesIcon />,
//   },
// ];

// function ResponsiveDrawer(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = (props) => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       {/* <Toolbar /> */}
//       {/* <Divider /> */}
//       <List></List>
//       {/* <Divider /> */}
//       {/* <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       {/* <CssBaseline /> */}
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//           backgroundColor: "white",
//           color: "black",
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <div style={{ display: "flex" }}>
//             {data?.map((text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>{text.icons}</ListItemIcon>
//                   <ListItemText primary={text.title} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </div>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: "none", sm: "block" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           //   marginTop: "60px",
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//         }}
//       >
//         <Toolbar />
//         {props.children}
//       </Box>
//     </Box>
//   );
// }

// ResponsiveDrawer.propTypes = {
//   window: PropTypes.func,
// };

// export default ResponsiveDrawer;

const useStyle = makeStyles((theme) => ({
  navLinks: {
    padding: "15px",
    textDecoration: "none",
    color: "black",

    // display: "block",
    // content: "",

    // transform: "scaleX(0)",
    transition: "border 250ms ease-in-out",
    "&:hover": {
      color: "#2F3C68 !important",
      fontWeight: "bold",
      // transform: "scaleX(1)",
      borderBottom: "solid 3px #2F3C68",
    },

    // "&::after": {
    //   content: "",
    //   display: "block",
    //   width: "0",
    //   height: "2px",
    //   background: "#000",
    //   transition: "width .3s",
    // },
    // "&:hover::after": {
    //   width: "100%",
    // },
  },
  mainNav: {
    margin: "auto",
    height: "3.5rem",
  },
  navBarbg: {
    backgroundColor: "#eeeeee",
    color: "black",
    height: "100% !important",
  },
  navLogo: {
    textDecoration: "none",
    color: "black",
    fontSize: "25px",
    fontWeight: 600,
    "&:hover": {
      color: "black",
    },
  },
  navLinkHover: {},
}));

function BasicExample(props) {
  const classes = useStyle();

  return (
    <>
      <Navbar className={classes.navBarbg} expand="lg">
        <Container>
          <Link className={classes.navLogo} to="/">
            Cyber Tech
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={classes.mainNav}>
              {data.map((item) => {
                return (
                  <Link
                    className={`${classes.navLinks} ${classes.navLinkHover}`}
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {props.children}
    </>
  );
}

export default BasicExample;
