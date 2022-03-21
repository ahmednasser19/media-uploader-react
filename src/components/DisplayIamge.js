import React, { useState } from "react";
import '../App.css'
import HomePage from "./HomePage";
const UploadAndDisplayImage = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const imageHandelChange = (e) => {
        //console.log(e.target.files)
        if (e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            console.log(fileArray)
            setSelectedImages((prevImages) => prevImages.concat(fileArray))
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)
            )
        }
    }

    const renderImages = (s) => {

        return s.map((photo) => {
            return <>
                <div className="images-layout" >
                    <img src={photo} key={photo} />
                </div>
            </>
        })
    }

    ///drag and drop images 

    const dragOver = (e) => {
        e.preventDefault();
    }
    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(files)

        if (files) {
            const fileArray = Array.from(files).map((file) => URL.createObjectURL(file))
            console.log(fileArray)
            setSelectedImages((prevImages) => prevImages.concat(fileArray))
            Array.from(files).map(
                (file) => URL.revokeObjectURL(file)
            )
        }

    }




    return (
        // (selectedImages.length) == 0 ?
        // <>
        //     <div className="draggable-container">
        //         <div>
        //             <h5>Media</h5>
        //         </div>



        //         <div className="home" onDragOver={dragOver} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={fileDrop}>








        //             {/* <input type="file" id="file" multiple onChange={imageHandelChange} />
        //                 <div className="label-holder">
        //                     <label htmlFor="file" className="label">
        //                         <i className="material-icons">add_a_photo</i>
        //                     </label>
        //                 </div> */}
        //         </div>

        //     </div>


        // </>





        //    :

        <>


            <h1>Upload and Display Image </h1>

            <div className="result">
                {renderImages(selectedImages)}
            </div>


            <br />
            <br />
            <div className="container">




                <div className="home"
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}>

                    <input type="file" id="file" multiple onChange={imageHandelChange} />
                    <div className="label-holder">
                        <label htmlFor="file" className="label">
                            <i className="material-icons">add_a_photo</i>
                        </label>
                    </div>
                </div>



            </div>




        </>




    );
};

export default UploadAndDisplayImage;