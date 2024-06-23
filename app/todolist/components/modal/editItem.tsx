import React from 'react';
import useEditTodo from '@/todolist/hooks/useEditTodo';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/todolist/styles/index.scss';
import { EditItemProps } from '@/todolist/types/index.type';
import EditCloseButton from '@/todolist/components/button/editCloseButton';
import UpdateSubmitButton from '@/todolist/components/button/updateSubmitButton';
import EditForm from '@/todolist/components/form/editForm';

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
                <EditCloseButton toggleModalOpenStatus={toggleModal} />

                <div
                    className="editItem__form-container">
                    <EditForm todo={todo} handleChange={handleChange} />
                </div>
                <UpdateSubmitButton handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}


export default EditItem;