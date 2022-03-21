import React, { useEffect, useState } from "react";
import '../App.css'
import HomePage from "./HomePage";
import Checkbox from './Checkbox';
const UploadAndDisplayImage = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedBoxes, setSelectedBoxes] = useState(0)
    const [checkedImages, setCheckedImaged] = useState([false])

    const imageHandelChange = (e) => {
        //console.log(e.target.files)
        if (e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))

            setSelectedImages((prevImages) => prevImages.concat(fileArray))
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)
            )
        }
    }

    const renderImages = (s) => {

        return s.map((photo) => {
            return (

                <div key={photo} className="images-border col-md-3">
                    <div className="custom-control custom-checkbox image-checkbox">
                        <input type="checkbox" className="custom-control-input" onChange={() => selectedBox()} id={photo} />
                        <label className="custom-control-label" htmlFor={photo}>
                            <img src={photo} key={photo} alt="#" className="img-fluid" />
                        </label>
                    </div>

                </div>
            )
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
    //function to invoke the dragged images to the images array 
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files) {
            const fileArray = Array.from(files).map((file) => URL.createObjectURL(file))
            setSelectedImages((prevImages) => prevImages.concat(fileArray))
            Array.from(files).map(
                (file) => URL.revokeObjectURL(file)
            )
        }

    }


    useEffect(() => {

        setCheckedImaged(Array(selectedImages.length).fill(false))
        console.log(checkedImages)
    }, [selectedImages]);
    //count number of selected images 
    const selectedBox = () => {
        // setCheckedImaged(!checkedImages)

        // console.log(checkedImages)

        // checkedImages.map((e) => {
        //     console.log(e)
        // })
        // if (checkedImages === true) {
        //     setSelectedBoxes(selectedBoxes + 1)
        // }
        // else
        //     setSelectedBoxes(selectedBoxes - 1)

        // console.log(checkedImages)
    }



















    return (
        (selectedImages.length) == 0 ?

            <>
                <p>Media </p>
                <div className="result">
                    {renderImages(selectedImages)}
                </div>

                <div className="container">

                    <div className="home"
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={fileDrop}>

                        <div>
                            {/*arrow svg */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                            </svg>
                        </div>
                        <input type="file" id="file" multiple onChange={imageHandelChange} />

                        <div className="add-file-layout">
                            <label htmlFor="file" className="label">

                                <p className="add-files">Add files</p>

                            </label>
                        </div>

                        <div className="drag-text">or drop files to upload</div>
                    </div>
                </div>
            </>
            :
            <>

                <p>{selectedBoxes} --- {selectedImages.length} media selected </p>

                <div className="container">

                    <div className="result">
                        {renderImages(selectedImages)}
                    </div>

                    <div className="home-1"
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={fileDrop}>

                        <input type="file" id="file" multiple onChange={imageHandelChange} />

                        <div className="label-holder-1">
                            <label htmlFor="file" className="label-1">
                                <p className="add">Add media</p>
                            </label>
                        </div>
                        <div style={{ fontSize: "14px" }}>
                            or drop files to upload
                        </div>
                    </div>
                </div>

            </>




    );
};

export default UploadAndDisplayImage;