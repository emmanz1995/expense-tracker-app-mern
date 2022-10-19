import React, {FC, useEffect} from 'react';
import './addModal.scss';
import Modal from '../modal/Modal';
import { FaPowerOff } from 'react-icons/fa';
import * as yup from 'yup';
import { Formik } from 'formik';
import { DispatchProp, useDispatch, useSelector } from 'react-redux';
import { createExpense } from '../../../expense/store/action/expenseAction';

const formikValidations = yup.object().shape({
    item: yup.string().required('Item is required!').min(5).max(25),
    amount: yup.number().required('Amount is required!'),
    type: yup.string().required('Type is required!')
})

const initialValues = {
    item: '',
    amount: 0,
    type: ''
}

const AddModal: FC<{ closeModal: () => void; }> = ({ closeModal }) => {
    const dispatch = useDispatch();

    const handleAddTransaction = (values: { item: string, amount: number; type: string; }) => {
        const formData = {
            item: values.item,
            price: +values.amount,
            type: values.type
        }

        dispatch<any>(createExpense(formData));
        console.log(values);
        closeModal();
    }
    return (
        <Modal>
            <Formik initialValues={initialValues} onSubmit={handleAddTransaction} validationSchema={formikValidations}>
                {({ handleSubmit, values, errors, touched, handleChange }) => (
                    <div className="addModal" onClick={(evt) => evt.stopPropagation()}>
                        <div className="addModal__header">
                            <h5>Add Expense</h5>
                            <FaPowerOff onClick={closeModal} />
                        </div>
                        <div className="addModal__body">
                            <form className="addModal__form" onSubmit={handleSubmit}>
                                <span>
                                    <input name="item" type="text" placeholder="Item" value={values.item} onChange={handleChange} className={errors.item ? `input errors`: 'input'} />
                                    {errors.item && touched.item ? (<div className="error">{errors.item}</div>) : null}
                                </span>
                                <span>
                                    <input name="amount" type="number" placeholder="Amount" value={values.amount} onChange={handleChange} className={errors.amount ? `input errors`: 'input'} />
                                    {errors.amount && touched.amount ? (<div className="error">{errors.amount}</div>) : null}
                                </span>
                                <span>
                                    <select name="type" value={values.type} onChange={handleChange} className={errors.type ? `input errors`: ''}>
                                        <option value="">Select Type</option>
                                        <option value="expense">Expense</option>
                                        <option value="income">Income</option>
                                    </select>
                                    {errors.type && touched.type ? (<p className="error">{errors.type}</p>) : null}
                                </span>
                                <button type="submit">Add New Transaction!</button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </Modal>
    );
};

export default AddModal;