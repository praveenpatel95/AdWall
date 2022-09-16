import React, {useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageModal  from '../../ImageModal'

function Images(){
    const itemData = [
        {img:process.env.PUBLIC_URL+"/assets/images/ads/1.png"},
        {img:process.env.PUBLIC_URL+"/assets/images/ads/2.png"},
        {img:process.env.PUBLIC_URL+"/assets/images/ads/3.png"},
        {img:process.env.PUBLIC_URL+"/assets/images/ads/5.png"},
    ];

    const [openModal, setModal] = useState(false)
    const [zoomImg, setZoomImg] = useState('')



    return (
        <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        onClick={() => {
                            setZoomImg(item.img);
                            setModal(true);
                        }}
                        style={{cursor: 'zoom-in'}}
                    />
                </ImageListItem>
            ))}
            <ImageModal
                openModal={openModal}
                        setModal={setModal}
                image={zoomImg}
            />
        </ImageList>
    )
}
export default Images;