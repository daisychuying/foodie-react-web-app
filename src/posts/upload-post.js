import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {createPostThunk} from "./posts-thunks";

const UploadPost = () => {
    const {currentUser} = useSelector((state) => state.users)
    let [title, setTitle] = useState('');
    let [ingredients, setIngredients] = useState('');
    let [readyInMinutes, setReadyInMinutes] = useState('');
    let [instructions, setInstructions] = useState('');

    const dispatch = useDispatch()

    const handlePostBtn = () => {
        const newPost = {
            title: title,
            ingredients: ingredients,
            readyInMinutes: readyInMinutes,
            instructions: instructions
        }
        dispatch(createPostThunk(newPost))
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
                            <div className="form-floating">
                                <textarea id="instructions" value={instructions} placeholder="Instructions" className="form-control form-floating mb-2"
                                onChange={(e) => setInstructions(e.target.value)}/>
                                <label htmlFor="instructions">Instructions</label>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default UploadPost;