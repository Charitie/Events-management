import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventDeleted } from "../redux/actions/eventsActions";
import { closeModal } from "../redux/actions/modalAction";
import Backdrop from "./backdrop/Backdrop";

const Modal = (props) => {

	return (
		<div className='form-modal'>
			{props.children}
		</div>
	);
};

export default Modal;
