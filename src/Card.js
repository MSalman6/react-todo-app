import { Button, Card, CardHeader, IconButton, Typography } from "@material-ui/core";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import CardContent from '@mui/material/CardContent';

const TodoCard = ({todo, handleDelete}) => {
    return ( 
        <Card>
            <CardHeader style={{overflow: "hidden"}}
                title={todo.title}
                action={
                    <IconButton onClick={() => handleDelete(todo)}>
                        <DeleteOutlineOutlined></DeleteOutlineOutlined>
                    </IconButton>
                }
            />
            <CardContent>
                <Typography style={{ wordWrap: "break-word" }}>
                    {todo.description}
                </Typography>
            </CardContent>
        </Card>
     );
}
 
export default TodoCard;