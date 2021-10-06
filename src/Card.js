import { Button, Card, CardHeader, IconButton, Typography } from "@material-ui/core";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import CardContent from '@mui/material/CardContent';

const TodoCard = ({todo}) => {
    return ( 
        <Card>
            <CardHeader
                title={todo.title}
                action={
                    <IconButton>
                        <DeleteOutlineOutlined></DeleteOutlineOutlined>
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {todo.description}
                </Typography>
            </CardContent>
        </Card>
     );
}
 
export default TodoCard;