import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { format } from "date-fns";
import { useHistory, useLocation } from "react-router-dom";


const drawerWidth = 240;

const listItems = [
    {
        text: "Todos List",
        icon: <SubjectOutlined color="primary"/>,
        path: '/'
    },
    {
        text: "Create Todo",
        icon: <AddCircleOutlineOutlined color="primary"/>,
        path: '/add'
    }
]

const useStyles = makeStyles(theme => {
    return {
        page: {
            width: '100%',
        },
        root: {
            display: 'flex'
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth
        },
        title: {
            padding: theme.spacing(3),
            fontWeight: "bold",
            fontSize: 20
        },
        active: {
            background: "#f4f4f4"
        },
        toolbar: theme.mixins.toolbar,
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        date: {
            fontWeight: 'bold'
        }
    }
})

const Layout = ({children}) => {
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <AppBar className={classes.appbar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.date}>
                            Today is: {format(new Date(), 'do MMMM Y')}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="permanent"
                    className={classes.drawer}
                    anchor='left'
                    classes={{paper: classes.drawerPaper}}
                >
                    <Typography
                        className={classes.title}
                    >
                        Todo App
                    </Typography>

                    <List>
                        
                        {listItems.map(listItem => (
                            <ListItem
                                button
                                key={listItem.text}
                                onClick={() => history.push(listItem.path)}
                                className={location.pathname == listItem.path ? classes.active : null}
                            >
                                <ListItemIcon>
                                    {listItem.icon}
                                </ListItemIcon>
                                <ListItemText primary={listItem.text}></ListItemText>
                            </ListItem>
                        ))}
                        
                    </List>

                </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div> 
     );
}
 
export default Layout;