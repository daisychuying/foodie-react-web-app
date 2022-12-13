import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {createPostThunk} from "./posts-thunks";
import {useNavigate} from "react-router";

const UploadPost = () => {
    const {currentUser} = useSelector((state) => state.users)
    let [title, setTitle] = useState('');
    let [ingredients, setIngredients] = useState('');
    let [readyInMinutes, setReadyInMinutes] = useState('');
    let [instructions, setInstructions] = useState('');

    const [error, setError] = useState(false);
    const [fileInput, setFileInput] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [previewSource, setPreviewSource] = useState('');

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handlePostBtn = () => {
        if (!previewSource || !title || !ingredients || !readyInMinutes || !instructions) {
            setError(true);
            return;
        }
        const image = uploadImage(previewSource)
        const newPost = {
            title: title,
            author: currentUser._id,
            ingredients: ingredients,
            readyInMinutes: readyInMinutes,
            instructions: instructions,
            image: image,
        }
        dispatch(createPostThunk(newPost))
        navigate("/all-posts");
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInput(e.target.value)
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const uploadImage = (base64EncodedImage) => {
        return base64EncodedImage;
    }

    return (
        <div className="container d-flex justify-content-center">
            {currentUser &&
                <div className="card rounded-3 w-75">
                    <img
                        src="https://media.glamour.com/photos/6232428d3cd68a607606b849/master/w_1600%2Cc_limit/factor%2520healthy%2520meal%2520delivery.png"
                        className="w-100" alt="Sample photo"/>
                    <div className="card-body">
                        <div className="row">
                            <div className="col col-10">
                                <h3>{currentUser.firstName} {currentUser.lastName}</h3>
                            </div>
                            <div className="col col-2">
                                <button onClick={handlePostBtn} className="btn btn-primary float-end">Upload Post</button>
                            </div>
                        </div>
                        <div className="">
                            {error &&
                                <div className="alert alert-danger" role="alert">
                                    Please fill all fields!
                                </div>}
                            <div className="form-floating">
                                <input id="title" value={title} placeholder="Title" className="form-control form-floating mb-2"
                                onChange={(e) => setTitle(e.target.value)}/>
                                <label htmlFor="title">Title</label>
                            </div>
                            <div className="form-floating">
                                <input id="readyInMinutes" value={readyInMinutes} placeholder="Ready In Minutes" className="form-control form-floating mb-2"
                                onChange={(e) => setReadyInMinutes(e.target.value)}/>
                                <label htmlFor="title">Ready In Minutes</label>
                            </div>
                            <div className="form-floating">
                                <textarea id="ingredients" value={ingredients} placeholder="Ingredients" className="form-control form-floating mb-2"
                                onChange={(e) => setIngredients(e.target.value)}/>
                                <label htmlFor="ingredients">Ingredients</label>
                            </div>
                            <div className="form">
                                <label htmlFor="instructions">Instructions</label>
                                <textarea id="instructions" value={instructions} placeholder="Instructions" className="form-control form-floating mb-2" rows={5}
                                onChange={(e) => setInstructions(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="image">Image Upload</label>
                                <input onChange={handleFileInputChange} value={fileInput} type="file" id="image" className="form-control form-floating mb-2" />
                                {previewSource &&
                                    <img src={previewSource} alt="chosen" style={{height: '300px'}} />
                                }
                            </div>

                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default UploadPost;