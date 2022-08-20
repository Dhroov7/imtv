import React from 'react';
import Modal from 'react-modal';
import "./ContentModal.css";
import { CDN_PATH } from "../../constant";
import { ReactSVG } from 'react-svg';
import plusSvg from "../../assets/icons/plus.svg";
import heartSvg from "../../assets/icons/heart.svg";
import { Link } from "react-router-dom";
import axios from 'axios';

const customStyles = {
    overlay: {
        zIndex: 1000,
        backgroundColor: "none",
        backdropFilter: "blur(3px)"
    },
    content: {
        position: 'absolute',
        top: '20%',
        left: '25%',
        right: '25%',
        bottom: '20%',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '8px',
        outline: 'none',
        backgroundColor: '#393E46'
    }
}

Modal.setAppElement("#root");

function ContentModal({ modalIsOpen, closeModal, data }) {
    function addTowatchlist(movieId) {
        axios.post("http://localhost:8080/api/v1/movie/add/watchlist", {
            "movie_id": movieId
        }, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZW1haWwiOiJkaHJvb3ZAZ21haWwuY29tIiwiZXhwIjoxNjYxMDExNjU1LCJpZCI6IjYyZDk4YjEyMjMyZDFmMTY2MTdkOWVjZiJ9.RgYZKcwViKWCmjw8w0drORLRjcZcKyc_-FrbEca_tZk"
            }
        })
    }
    return <div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            closeTimeoutMS={150}
        >
            <div className='modal-image'>
                <img src={CDN_PATH + "/images/" + data.Image} className='content-modal-image'></img>
            </div>
            <div className='content-modal-header'>
                <p>{data.Name}</p>
                <div className='modal-actions'>
                    <Link to="/watch" className="watch-now">Watch Now</Link>
                    <ReactSVG src={plusSvg} className="banner-action-buttons-svg" onClick={() => addTowatchlist(data.ID)}/>
                    <ReactSVG src={heartSvg} className="banner-action-buttons-svg" />
                </div>
            </div>
            <p className='modal-description'>{data.Description}</p>
        </Modal>
    </div>;
}

export default ContentModal;
