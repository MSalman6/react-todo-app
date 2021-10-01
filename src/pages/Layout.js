import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router-dom";

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: "#f9f9f9",
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        }
    }
});

const menuItems = [
    {
        text: 'My Notes',
        icon: <SubjectOutlined color="secondary" />,
        path: '/'
    },
    {
        text: 'Create Note',
        icon: <AddCircleOutlineOutlined color="secondary" />,
        path: '/create'
    }
]

const Layout = ({children}) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const handleRedirect = (path) => {
        history.push(path)
    }

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <Typography 
                    variant="h5"
                    className={classes.title}
                >Salman Notes</Typography>

                <List>
                    {menuItems.map((item) =>
                        (<ListItem button key={item.text} onClick={() => handleRedirect(item.path)} className={location.pathname === item.path ? classes.active : null}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <div className={classes.page}>
                {children}
            </div>
        </div>
     );
}
 
export default Layout;