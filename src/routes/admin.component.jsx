import { useContext, useState } from 'react'

import { UserContext } from '../contexts/userContext';
import {addNewUserCollectionToDb, getCurrentUserData} from '../util/fireBase'


const emptyDataSet ={
  name: '',
  email: '',
  phoneNumber: '',
  address: '',
}



const Admin = () => {
const [formData, setFormData]= useState(emptyDataSet)
  const handleonChange = (e) => {
    const { name, value } = e.target;
    setFormData(
      {...formData, [name]: value}
    )
}
  const handleCreate = async () => {
  addNewUserCollectionToDb(currentUser)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNewUserCollectionToDb(currentUser, formData)
    console.log(formData)
  }
  const handleGet = async () => {
    const userData = await getCurrentUserData(currentUser)
    console.log(userData);
  }


  const { currentUser, setUser, userData, setUserData } = useContext(UserContext);
  const { name, phoneNumber, address, email } = formData;
  return (
    <>
      <button onClick={handleCreate}>Create user DB</button>
      <button onClick={handleGet}>Get user Data</button>
      <form onSubmit={handleSubmit}>
        <input type="text" required name='name' value={name} placeholder='Name' onChange={handleonChange}/>
        <input type="text" required name='phoneNumber' value={phoneNumber} placeholder='Phone' onChange={handleonChange} />
        <button>Submit New Data</button>
      </form>
    </>
  )
}

export default Admin