import React, { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link } from "@reach/router";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    active: {
      color: "blue",
      textDecoration: "none"
    },
    inactive: {
      color: "white",
      textDecoration: "none"
    }
  })
);

export interface INavLink {
  /** Nav link icon */
  icon: FC;
  /** Path used for navigation */
  to: string;
}

const NavLink: FC<INavLink> = ({ to, icon: Icon, children }) => {
  const classes = useStyles();

  return (
    <Link
      to={to}
      getProps={({ isCurrent }) => {
        return {
          className: isCurrent ? classes.active : classes.inactive
        };
      }}
    >
      <ListItem button>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText>{children}</ListItemText>
      </ListItem>
    </Link>
  );
};

export default NavLink;
