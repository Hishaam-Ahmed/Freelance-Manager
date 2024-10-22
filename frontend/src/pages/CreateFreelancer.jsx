import React, { useEffect, useState} from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateFreelancer = () => {
    const [name, setName] = useState('');
    const [task, setTask] = useState('');
    const [cost, setCost] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveFreelancer = () => {
        const data = {
            name, 
            task,
            cost 
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/freelancers', data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error has occurred')
                console.log(error);
            });
    }
    
    return (
        <div className='p-4'>
        <BackButton />
        <h1 className='text-3x1 my-4'>Add a Project</h1>
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
            <label className='text-xl mr-4 text-gray-500'>Task assigned</label>
            <input 
              type='text'
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Cost required</label>
            <input 
              type='number'
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <button className='p-2 bg-sky-300 m-8' onClick={handleSaveFreelancer}>Save</button>
        </div>
      </div>
    )
}

export default CreateFreelancer