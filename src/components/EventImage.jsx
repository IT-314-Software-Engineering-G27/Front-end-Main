import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";



export default function EventImage({ id, setImages }) {

    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    useEffect(() => {
        if (image) {
            setImages((prev) => {
                const newImages = [...prev];
                newImages[id] = image;
                return newImages;
            });
        }
    }, [image, id, setImages]);

    return (
        <Box onClick={() => {
            inputRef.current.click();
        }
        }>
            {image ? (
                <img src={URL.createObjectURL(image)} style={{ height: "250px", width: "250px" }} alt="event" />
            ) : (
                <img src="https://cdn2.iconfinder.com/data/icons/design-development-7/512/022-add_image-512.png" style={{ height: "250px", width: "250px" }} alt="placeholder" />
            )}
            <input type="file" ref={inputRef} onChange={(event) => {
                const file = event.target.files[0];
                setImage(file);
            }} style={{ display: "none" }} />
        </Box>
    );
};