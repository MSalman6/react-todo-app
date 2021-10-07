import { Avatar, Card, CardHeader, IconButton, Typography } from "@material-ui/core";
import { purple, red, green, pink, orange, brown } from "@material-ui/core/colors";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import CardContent from '@mui/material/CardContent';

const colors = [purple, red, green, pink, orange, brown];

const TodoCard = ({todo, handleDelete}) => {

    return ( 
        <Card>
            <CardHeader style={{overflow: "hidden"}}
                avatar={
                    <Avatar style={{backgroundColor: colors[Math.floor(Math.random() * colors.length)][700]}}>
                        {todo.title[0]}
                    </Avatar>
                }
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