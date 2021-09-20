import React, {useState} from 'react';
import ConfirmationModal from './Modal/Modal'
import './Options.css';

function Options(props) {
    const [modalShow, setModalShow] = useState(false);

    function handleSuccessClick() {

    }
    return (
        <div className="d-grid gap-2 opt-margin">
            <h3>This {props.date}</h3>
            <button type="button" className="btn btn-success" onClick={() => setModalShow(true)}>I'll Go, sounds fun!</button>
            <ConfirmationModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <button type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Are you serious-.-" className="btn btn-danger">Nah, I'll sing in the shower</button>
        </div>
    )
}

export default Options