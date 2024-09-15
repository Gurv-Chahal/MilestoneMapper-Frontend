import React, {useEffect} from 'react';
import { useState } from 'react';
import {addMilestone, getMilestoneById, updateMilestone} from "../services/MilMapService.js";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import '../App.css';

// create form for add milestone

const MilestoneMapper = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);

    const navigate = useNavigate();
    const {id} = useParams(); // gets id from url

    function AddorUpdateMilestone(e) {
        e.preventDefault();

        const milestone = {title, description, completed};
        console.log(milestone);

        // submit milestone button functionality
        if (id) {
            updateMilestone(id, milestone).then(() => {
                navigate('/milestone')
            }).catch(error => {
                console.error(error);
            })
        } else {
            addMilestone(milestone).then((response) => {
                console.log(response.data)
                navigate("/milestone")
            }).catch(error => {
                console.error(error)
            })
        }

    }

    function pageTitle() {
        if(id) { // if id is detected then we want the update page
            return <h2 className='text-center'>Update Milestone</h2>
        } else {
            return <h2 className='text-center'>Add Milestone</h2>
        }
    }

    useEffect(() => {

        if(id) {
            getMilestoneById(id).then((response) => {
                console.log(response.data);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setCompleted(response.data.completed);
            }).catch(error => {
                console.error(error);
            })
        }

    }, [id]);

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card cold-md-6 offset-md-3 offset-md-3'>
                    { pageTitle() }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Milestone Title: </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter Milestone Here'
                                    name='title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Milestone Description: </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter Description Here'
                                    name='description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Milestone Completed: </label>
                                <select
                                    className='form-control'
                                    value={completed}
                                    onChange={(e) => setCompleted(e.target.value)}
                                >
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                </select>
                            </div>

                            <button className='btn btn-success' onClick={(e) => AddorUpdateMilestone(e)}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MilestoneMapper;