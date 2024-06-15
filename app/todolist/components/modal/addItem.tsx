"use client"; // This is a client component 👈🏽
import React from 'react';
import InputField from '@/todolist/components/modal/inputField';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/todolist/styles/index.scss';
import useAddTodo from '@/todolist/hooks/useAddTodo';

interface AddItemProps {
    toggleModal: () => void;
    addTodo: AddTodo;
}
type AddTodo = (todoItem: TodoList) => Promise<void>;

const AddItem: React.FC<AddItemProps> = ({ toggleModal, addTodo }) => {

    const {
        todo,
        handleAddChange,
        handleAddSubmit,
        formatDate
    } = useAddTodo(toggleModal, addTodo);

    return (
        <div className="addItem__background">
            <div className="addItem__container">
                <h1
                    className="addItem__header">
                    新增事項
                </h1>
                <button
                    className="addItem__close-button"
                    onClick={toggleModal}>
                    <i className="fas fa-times"></i> {/* 關閉視窗 X */}
                </button>
                <div
                    className="addItem__form-container">
                    <InputField
                        label="標題"
                        type="text"
                        name="title"
                        placeholder="請輸入標題"
                        value={todo.title}
                        onChange={handleAddChange}
                    />
                    <InputField
                        label="內容"
                        type="text"
                        name="description"
                        placeholder="請輸入內容"
                        value={todo.description}
                        onChange={handleAddChange}
                    />
                    <InputField
                        label="到期日"
                        type="date"
                        name="dueDate"
                        placeholder="請輸入時間"
                        value={formatDate(todo.dueDate)}
                        onChange={handleAddChange}
                    />
                </div>
                <button
                    className="addItem__submit-button"
                    onClick={handleAddSubmit}>
                    <i className="fas fa-save"></i> {/* 儲存 icon */}
                </button>
            </div>
        </div>
    )

}


export default AddItem;