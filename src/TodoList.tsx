import { useState } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';

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

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    const removeTodo = (id: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter((t) => t.id !== id);
        });
    }

    const toggleTodo = (id: string) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) return { ...todo, completed: !todo.completed };
                else return todo;
            });
        });
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
                <TodoItem 
                    todo={todo} 
                    key={todo.id}
                    remove={removeTodo}     // one way to pass this down
                    toggle={() => toggleTodo(todo.id)}  // another way to do it
                />
            ))}
        </List>
    );
}