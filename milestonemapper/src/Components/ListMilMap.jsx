// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {deleteMilestone, finishMilestone, getAllMilestones, notCompleteMilestone} from "../services/MilMapService.js";
import {useNavigate} from "react-router-dom";



const ListMilMap = () => {

    const [MilMap, setMilMap] = useState([])

    const navigate = useNavigate();

    //useEffect hook fetches the data and makes rest api calls
    useEffect(() => {
        listAllMilestones();
    }, [])

    // function calls all milestones from backend using axios
    function listAllMilestones() {

        // exported from milmapservice.js
        getAllMilestones().then((response) => {
            setMilMap(response.data);
        }).catch(error => {
            console.error(error);
        })

    }

    // functionality for Add Milestone Button
    function addNewMilestone() {
        navigate('/add-milestone');
    }

    //functionality for Update Milestone
    function updateMilestone(id) {
        console.log(id)
        navigate(`/update-milestone/${id}`);
    }

    //functionality for Delete Milestone
    function removeMilestone(id) {
        deleteMilestone(id).then((response) => {
            listAllMilestones();
        }).catch(error => {
            console.error(error);
        })
    }

    function completeMilestone(id) {
        finishMilestone(id).then((response) => {
            listAllMilestones();
        }).catch(error => {
            console.error(error);
        })
    }

    function inCompleteMilestone(id) {
        notCompleteMilestone(id).then((response) => {
            listAllMilestones();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>

            <h2 className='text-center'>List of Milestones</h2>
            <button className='btn btn-primary mb-2' onClick={addNewMilestone}>Add Milestone</button>
            <div>
                <table className='table table-bordered table-striped'>


                    <thead>
                    <tr>
                        <th>MilMap Title</th>
                        <th>MilMap Description</th>
                        <th>MilMap Completed</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        MilMap.map((milestone) =>
                            <tr key={milestone.id}>
                                <td>{milestone.title}</td>
                                <td>{milestone.description}</td>
                                <td>{milestone.completed ? "Yes" : "No"}</td>
                                <td>

                                    <button className='btn btn-info'
                                            onClick={() => updateMilestone(milestone.id)}>Update
                                    </button>

                                    <button className='btn btn-danger' onClick={() => removeMilestone(milestone.id)}
                                            style={{marginLeft: "10px"}}>Delete
                                    </button>

                                    <button className='btn btn-success'
                                            onClick={() => completeMilestone(milestone.id)}
                                            style={{marginLeft: "10px"}}> Yes ✅
                                    </button>

                                    <button className='btn btnpurple'
                                            onClick={() => inCompleteMilestone(milestone.id)}
                                            style={{marginLeft: "10px"}}> No ❌
                                    </button>

                                </td>
                            </tr>
                        )
                    }
                    <tr>

                    </tr>
                    </tbody>


                </table>
            </div>

        </div>
    )
}

export default ListMilMap;