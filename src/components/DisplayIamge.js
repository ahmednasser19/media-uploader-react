import React, { useState } from "react";
import '../App.css'
const UploadAndDisplayImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <h1>Upload and Display Image usign React Hook's</h1>
            {selectedImage && (
                <div style={{ marginTop: "50px", }}>
                    <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )
            }

            <br />

            <br />

            <div>
                <input type="file" id="file" />
                <div className="label-holder">
                    <label htmlFor="file" className="label">
                        <i className="material-icons">add_a_photo</i>
                    </label>
                </div>
            </div>


            {/* 
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            /> */}
        </div >
    );
};

export default UploadAndDisplayImage;