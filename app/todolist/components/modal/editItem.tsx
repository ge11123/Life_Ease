import React from 'react';
import InputField from '@/todolist/components/modal/inputField';
import useEditTodo from '@/todolist/hooks/useEditTodo';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/todolist/styles/index.scss';

interface EditItemProps {
    toggleModal: () => void;
    updateTodo: UpdateTodoAsync;
    id: number;
}

const EditItem: React.FC<EditItemProps> = ({ toggleModal, updateTodo, id }) => {

    const {
        todo,
        handleSubmit,
        handleChange
    } = useEditTodo(id, toggleModal, updateTodo);

    return (
        <div className="editItem__background">
            <div className="editItem__container">
                <h1
                    className="editItem__header">
                    編輯
                </h1>
                <button
                    className="editItem__close-button"
                    onClick={toggleModal}>
                    <i className="fas fa-times"></i> {/* 關閉視窗 X */}
                </button>
                <div
                    className="editItem__form-container">
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
                        value={todo.dueDate.toISOString()}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="editItem__submit-button"
                    onClick={handleSubmit}>
                    <i className="fas fa-save"></i> {/* 儲存 icon */}
                </button>
            </div>
        </div>
    )
}


export default EditItem;