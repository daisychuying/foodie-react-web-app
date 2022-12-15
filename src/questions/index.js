import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    answerQuestionThunk,
    createQuestionThunk,
    deleteQuestionThunk,
    findQuestionsByPostIDThunk
} from "./questions-thunk";
import {Link} from "react-router-dom";

const QuestionsList = () => {
    const {postID} = useParams();
    const {questions} = useSelector(state => state.questions)
    const {currentUser} = useSelector(state => state.users);
    const [question, setQuestion] = useState('');
    const [isReplying, setIsReplying] = useState('');
    const [reply, setReply] = useState('');
    const dispatch = useDispatch();

    const handlePostQuestionBtn = () => {
        dispatch(createQuestionThunk({
            question,
            post: postID,
            author: currentUser._id
        }))
        setQuestion('');
    }

    const handleSubmitReplyBtn = (question) => {
        dispatch(answerQuestionThunk({
            ...question,
            answer: reply
        }))
        setIsReplying('');
        setReply('');
    }

    useEffect(() => {
        dispatch(findQuestionsByPostIDThunk(postID))
    }, [])

    return (
        <div className="mt-3">
            <h4>Q&A</h4>
            {currentUser && currentUser.role !== "CHEF" &&
                <>
                    <div className="mt-3 mb-5">
                        <textarea className="form-control border border-warning" onChange={(e) => setQuestion(e.target.value)} value={question} placeholder="Write down your question, our chef will be willing to answer!"/>
                        <button className="btn btn-warning float-end mt-2" onClick={handlePostQuestionBtn}>Ask Question</button>
                    </div>
                    <br />
                </>
            }
            <div className="list-group border border-warning border-bottom-0">
                {questions && questions.map((question, index) =>
                    <div key={index} className="list-group-item border-0 border-bottom border-warning">
                        {currentUser && (question.author._id === currentUser._id || currentUser.role === "ADMIN") &&
                            <button onClick={() => dispatch(deleteQuestionThunk(question._id))} className="btn btn-sm btn-outline-danger float-end"><i className="bi bi-x-square"></i></button>}
                        <h5>Question from <Link to={`/profile/${question.author._id}`}>{question.author.username}</Link>:</h5>
                        <p>{question && question.question}</p>
                        {(currentUser && !question.answer && question.post.author._id === currentUser._id && !isReplying) &&
                            <button onClick={() => setIsReplying(question._id)} className="btn btn-warning btn-sm">Reply</button>
                        }
                        {question.answer &&
                            <>
                                <h5>Answer from <Link to={`/profile/${question.post.author._id}`}>{question.post.author.username}</Link>:</h5>
                                <p>{question.answer}</p>
                                {(currentUser && question.post.author._id === currentUser._id && !isReplying) &&
                                    <button onClick={() => setIsReplying(question._id)} className="btn btn-warning btn-sm">Edit</button>
                                }
                            </>
                        }
                        {isReplying === question._id &&
                            <>
                                <textarea onChange={(e) => setReply(e.target.value)} value={reply} className="form-control mb-2" />
                                <button onClick={() => setIsReplying('')} className="btn btn-sm btn-info float-end ms-2">Cancel</button>
                                <button onClick={() => handleSubmitReplyBtn(question)} className="btn btn-sm btn-warning float-end">Submit</button>
                            </>
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default QuestionsList;