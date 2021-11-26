import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import MyOrder from "../MyOrder/MyOrder";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";
import useAuth from "../../Hooks/useAuth";
import ManageAllOrders from "../AdminDashboard/ManageAllOrders/ManageAllOrders";
import AddAProduct from "../AdminDashboard/AddAProduct/AddAProduct";
import MakeAdmin from "../AdminDashboard/MakeAdmin/MakeAdmin";
import ManageProducts from "../AdminDashboard/ManageProducts/ManageProducts";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import UpdateProduct from "../AdminDashboard/ManageProducts/UpdateProduct/UpdateProduct";
import Update from "../AdminDashboard/ManageAllOrders/Update/Update";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { logOut, admin, user } = useAuth();
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <ListItem sx={{ fontSize: 18 }} style={{ marginLeft: "15px" }}>
        <Link style={{ textDecoration: "none" }} to="/home">
          Home
        </Link>
      </ListItem>
      {/* --------------------- */}
      {admin ? (
        <Box>
          <ListItem sx={{ fontSize: 18 }} style={{ marginLeft: "15px" }}>
            <Link style={{ textDecoration: "none" }} to={`${url}`}>
              Manage All Orders
            </Link>
          </ListItem>
          <ListItem sx={{ fontSize: 18 }} style={{ marginLeft: "15px" }}>
            <Link style={{ textDecoration: "none" }} to={`${url}/AddProduct`}>
              Add A Product
            </Link>
          </ListItem>
          <ListItem sx={{ fontSize: 18 }} style={{ marginLeft: "15px" }}>
            <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
              Make Admin
            </Link>
          </ListItem>
          <ListItem sx={{ fontSize: 18 }} style={{ marginLeft: "15px" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={`${url}/manageProduct`}
            >
              Manage Products
            </Link>
          </ListItem>
        </Box>
      ) : (
        <Box>
          <ListItem sx={{ fontSize: 18 }} style={{ marginLeft: "15px" }}>
            <Link style={{ textDecoration: "none" }} to={`${url}`}>
              My Orders
            </Link>
          </ListItem>
          <ListItem sx={{ fontSize: 18 }} style={{ marginLeft: "15px" }}>
            <Link style={{ textDecoration: "none" }} to={`${url}/pay`}>
              Pay
            </Link>
          </ListItem>
          <ListItem sx={{ fontSize: 18 }} style={{ marginLeft: "15px" }}>
            <Link style={{ textDecoration: "none" }} to={`${url}/review`}>
              Review
            </Link>
          </ListItem>
        </Box>
      )}
      {/* -------------------------- */}

      <ListItem sx={{ fontSize: 18 }} style={{ marginLeft: "15px" }}>
        <Button onClick={logOut} color="inherit">
          Logout
        </Button>
      </ListItem>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h5" noWrap component="div">
            {user.displayName} Dashboard
          </Typography>
          <Button onClick={logOut} variant="contained">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          {admin ? (
            <AdminRoute exact path={`${path}`}>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
          ) : (
            <Route exact path={`${path}`}>
              <MyOrder></MyOrder>
            </Route>
          )}

          <AdminRoute path={`${path}/AddProduct`}>
            <AddAProduct></AddAProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProduct`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/updateProduct/:id`}>
            <UpdateProduct></UpdateProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/update/:id`}>
            <Update></Update>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
