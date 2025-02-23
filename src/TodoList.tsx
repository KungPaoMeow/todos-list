import { useState, useEffect } from 'react';
import { List, Box, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

type Todo = {
    id: string;
    text: string;
    completed: boolean;
};

const initialTodos: Todo[] = [
    { id: '1', text: 'walk the dog', completed: false },
    { id: '2', text: 'walk the cat', completed: false },
    { id: '3', text: 'walk the fish', completed: true },
    { id: '4', text: 'walk the chicken', completed: true },
]

const LOCALSTORAGEKEY = "todos";
const getInitialData = () => {
    const data = localStorage.getItem(LOCALSTORAGEKEY);
    if (data) return JSON.parse(data);
    return initialTodos;
};

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        window.localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id: string) => {
        setTodos((prevTodos: Todo[]) => {
            return prevTodos.filter((t) => t.id !== id);
        });
    };

    const toggleTodo = (id: string) => {
        setTodos((prevTodos: Todo[]) => {
            return prevTodos.map(todo => {
                if (todo.id === id) return { ...todo, completed: !todo.completed };
                else return todo;
            });
        });
    };

    const addTodo = (text: string) => {
        setTodos((prevTodos: Todo[]) => {
            return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }];
        })
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            m: 3
        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                Todos List
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo: Todo) => (
                    <TodoItem 
                    todo={todo} 
                    key={todo.id}
                    remove={removeTodo}     // one way to pass this down
                    toggle={() => toggleTodo(todo.id)}  // another way to do it
                    />
                ))}
                <Box sx={{ml: 5}}>
                    <TodoForm addTodo={addTodo} />
                </Box>
            </List>
        </Box>
    );
}