import { useState } from 'react';
import { ListItem, TextField, InputAdornment, IconButton } from '@mui/material';
import Create from '@mui/icons-material/Create';

interface TodoFormProps {
    addTodo: (text: string) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
    const [text, setText] = useState("");

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setText(evt.target.value);
    }

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Outlined" 
                    variant="outlined" 
                    onChange={handleChange} 
                    value={text}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="create todo" edge="end" type="submit">
                                        <Create />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                    }}
                />
            </form>
        </ListItem>
    )
}