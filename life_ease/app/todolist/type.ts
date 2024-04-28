interface TodoList {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    dueDate: Date;
}

interface TodoItem {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    dueTime: string | null;
}

interface TodoItemProps {
    loading: boolean;
    todos: TodoItem[];
    handleDelete: HandleDeleteTodo;
}

interface AddItemProps {
    toggleModal: () => void;
    addTodo: HandleAddTodo;
}

interface DeleteButtonProps {
    id: number;
    handleDelete: HandleDeleteTodo;
}

type HandleDeleteTodo = (id: number) => Promise<void>;

type HandleAddTodo = (todoItem: TodoList) => Promise<void>;

type ToggleModal = () => void;

type FetchTodos = () => Promise<TodoItem[]>;

type FetchTodo = () => Promise<void>;
