import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
import axios from 'axios'

const Home = () => {
  const [freelancers, setFreelancers] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5555/freelancers')
      .then((response) => {
        console.log(response);
        setFreelancers(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3x1 my-8'>Freelancers List</h1>
        <Link to='/freelancers/create'>
          <MdOutlineAddBox className='text-sky-800 text-4x1' />
        </Link>
      </div>
      <table className='w-full border-separate border-spacing-2'>
        <tr>
          <th className='border border-slate-600 rounded-md'>No.</th>
          <th className='border border-slate-600 rounded-md'>Name</th>
          <th className='border border-slate-600 rounded-md'>Task</th>
          <th className='border border-slate-600 rounded-md'>Cost</th>
        </tr>
        <tbody>
        {freelancers?.map((data, index) => (
          <tr key={data._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
                {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
                {data.name}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
                {data.task}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
                {data.cost}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                 <Link to={`/freelancers/edit/${data._id}`}>
                    <AiOutlineEdit className='text-2x1 text-yellow-600' />
                  </Link>
                 <Link to={`/freelancers/delete/${data._id}`}>
                    <MdOutlineDelete className='text-2x1 text-red-600' />
                   </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  )
}

export default Home