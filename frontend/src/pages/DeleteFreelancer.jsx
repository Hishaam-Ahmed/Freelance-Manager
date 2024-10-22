import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteFreelancer = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteFreelancer = () => {
        setLoading(true);
        axios
          .delete(`http://localhost:5555/freelancers/${id}`)
          .then(() => {
            setLoading(false);
            navigate('/');
          })
          .catch((error) => {
            setLoading(false);
            alert('An error occured, please check console');
            console.log(error);
          })
      }
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3x1 my-4'>Delete Freelancer</h1>
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[400px] p-4 mx-auto'>
            <h3 className='text-2x1'>Are you sure you want to delete this freelancer?</h3>
            <button className='p-4 bg-red-600 text-white m-2 w-full' onClick={handleDeleteFreelancer}>
                Yes, delete it
            </button>
            </div>
        </div>
    )
}

export default DeleteFreelancer