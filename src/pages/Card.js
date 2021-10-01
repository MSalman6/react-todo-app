import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@mui/icons-material';

const useStyles = makeStyles({
    test: {
        border: (note) => {
            if (note.category === 'peach') {return '1px solid green'}
        }
    }
});

const NoteCard = ({note, handleDelete}) => {
    const classes = useStyles(note)

    return ( 
        <Card elevation={1} className={classes.test}>
            <CardHeader action={
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