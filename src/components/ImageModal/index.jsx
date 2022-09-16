import React from 'react';
import Dialog from '@mui/material/Dialog';
import CancelIcon from '@mui/icons-material/Cancel';
import Zoom from 'react-img-zoom'
import { MapInteractionCSS } from 'react-map-interaction';


function ImageModal({setModal, openModal, image}){
    const handleClose = () => {
        setModal(false);
    }


    return (
        <Dialog
            open={openModal}
            onClose={handleClose}
        >
                <CancelIcon sx={{
                    position: 'absolute',
                    right: '8px',
                    top: '5px',
                    zIndex:9999
                }}
                            onClick={handleClose}
                />
            <MapInteractionCSS>
                <img src={image} />
            </MapInteractionCSS>
        </Dialog>
    )
}
export default ImageModal;