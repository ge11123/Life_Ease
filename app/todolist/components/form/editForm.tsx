import InputField from '@/todolist/components/box/inputField';
import { EditFormProps } from '@/todolist/types/index.type';

const EditForm: React.FC<EditFormProps> = ({ todo, handleChange, formatDate }) => {
    return (
        <>
            <InputField
                label="標題"
                type="text"
                name="title"
                placeholder="請輸入標題"
                value={todo.title}
                onChange={handleChange}
            />
            <InputField
                label="內容"
                type="text"
                name="description"
                placeholder="請輸入內容"
                value={todo.description}
                onChange={handleChange}
            />
            <InputField
                label="到期日"
                type="date"
                name="dueDate"
                placeholder="請輸入時間"
                value={formatDate(todo.dueDate)}
                onChange={handleChange}
            />
        </>
    )
}

export default EditForm;