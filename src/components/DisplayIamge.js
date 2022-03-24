import React, { useEffect, useState } from "react";
import '../App.css'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const UploadAndDisplayImage = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedBoxes, setSelectedBoxes] = useState([])
    const [checkedImgs, setCheckedImgs] = useState([])
    const [imagesId, setImagesId] = useState([])
    const [imageCount, setImageCount] = useState(0)
    const [imageArr, updateImagaArr] = useState()
    const imageHandelChange = (e) => {
        if (e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            setSelectedImages((prevImages) => prevImages.concat(fileArray))
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)
            )
            setCheckedImgs((prevImages) => prevImages.concat(fileArray))

        }


    }



    const renderImages = (s) => {
        return (
            s.map((photo, index) => {
                return (
                    <Draggable key={photo} draggableId={photo} index={index}>
                        {(provided) => (
                            index === 0 ?
                                <div className="images-border col-md-4" {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                                    <div className="custom-control custom-checkbox image-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            onChange={selectedBox}
                                            value={photo}
                                            id={photo} />
                                        <label className="custom-control-label" htmlFor={photo}>
                                            <img draggable={'true'} src={photo} key={photo} alt="#" className="img-fluid" />
                                        </label>
                                    </div>
                                </div>
                                :

                                <div className="images-border-1 col-md-2" {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                                    <div className="custom-control custom-checkbox image-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            onChange={selectedBox}
                                            value={photo}
                                            id={photo} />
                                        <label className="custom-control-label" htmlFor={photo}>
                                            <img draggable={'true'} src={photo} key={photo} alt="#" className="img-fluid" />
                                        </label>
                                    </div>
                                </div>

                        )}
                    </Draggable>
                )
            }
            )
        )

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

    const selectedBox = (e) => {
        const checked = e.target.checked;

        const values = e.target.id
        setImagesId([...imagesId, values])
        if (checked) {
            setSelectedBoxes([...selectedBoxes, checked]);
            setImageCount(imageCount + 1)

        }
        // // // Case 2  : The user unchecks the box
        else {
            const index = selectedBoxes.indexOf(e.target.value)
            selectedBoxes.splice(index, 1)
            setSelectedBoxes([...selectedBoxes]);
            setImageCount(imageCount - 1)
        }
    };



    //delete button function 
    const handleDeleteMedia = () => {
        const intersection = checkedImgs.filter(element => imagesId.includes(element));
        const updatedImgs = selectedImages.filter((el) => !intersection.includes(el))
        setSelectedImages(updatedImgs)
        setImageCount(0)
    }


    ///handle the arrangment of images after draggin 
    const handleOnDragEnd = (result) => {

        if (!result.destination) return;
        const items = Array.from(selectedImages)
        const [reorderedImgs] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedImgs)

        setSelectedImages(items)
    }
    return (
        (selectedImages.length) == 0 ?

            <>
                <p>Media </p>
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

                <div>
                    {selectedBoxes.length > 0 ?
                        <div className="media">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                                {" "}   {imageCount} media selected
                            </div>
                            <div>
                                <button type="button" className="button btn btn-outline-danger" onClick={handleDeleteMedia}>Delete media</button>
                            </div>
                        </div> :
                        <p>Media </p>}
                </div>
                <div className="container">
                    <div className="result">
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="photos">
                                {(provided) => (
                                    <div className="row" {...provided.DroppableProps} ref={provided.innerRef}>
                                        {renderImages(selectedImages)}
                                        {provided.placeholder}
                                    </div>)}
                            </Droppable>
                        </DragDropContext>
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