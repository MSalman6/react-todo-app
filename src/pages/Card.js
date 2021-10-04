import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@mui/icons-material';
import { pink, red, yellow, blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if (note.category === 'peach') {return pink[700]}
            if (note.category === 'bowser') {return yellow[700]}
            if (note.category === 'mario') {return red[700]}
            return blue[700]
        }
    }
});

const NoteCard = ({note, handleDelete}) => {
    const classes = useStyles(note)

    return ( 
        <Card elevation={1}>

            <CardHeader 
                avatar={
                    <Avatar className={classes.avatar}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
            }
            title={note.title}
            subheader={note.category}
            />
            <CardContent>
                <Typography
                    variant="body2"
                    color="textSecondary"
                >
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
     );
}
 
export default NoteCard;