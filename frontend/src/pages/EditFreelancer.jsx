import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditFreelancer = () => {
    const [name, setName] = useState('');
    const [task, setTask] = useState('');
    const [cost, setCost] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/freelancers/${id}`)
        .then((response) => {
            setName(response.data.name);
            setTask(response.data.task);
            setCost(response.data.cost);
            setLoading(false);
        }).catch((error) =>{
            setLoading(false);
            alert('An error occured, please check console');
            console.log(error);
        })
    }, [])
    const handleEditFreelancer = () => {
        const data = {
        name, 
        task,
        cost
        };
        setLoading(true);
        axios
        .put(`http://localhost:5555/freelancers/${id}`, data)
        .then(() => {
            setLoading(false);
            navigate('/');
        })
        .catch((error) =>{
            setLoading(false);
            alert('An error occured, please check console');
            console.log(error);
        })
    };

    return (
        <div className='p-4'>
        <BackButton />
        <h1 className='text-3x1 my-4'>Edit Freelancer</h1>
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Name</label>
            <input 
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2 w-full'
            />
            </div>
            <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Task</label>
            <input 
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2 w-full'
            />
            </div>
            <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Cost</label>
            <input 
                type='number'
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2 w-full'
            />
            </div>
            <button className='p-2 bg-sky-300 m-8' onClick={handleEditFreelancer}>Save</button>
        </div>
        </div>
    )
}

export default EditFreelancer