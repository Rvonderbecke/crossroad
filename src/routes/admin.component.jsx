import { useContext, useState } from 'react'

import { UserContext } from '../contexts/userContext';
import {addNewUserCollectionToDb, getCurrentUserData,addNewBillsCollectionToDb} from '../util/fireBase'


const emptyDataSet ={
  name: '',
  email: '',
  phoneNumber: '',
  address: '',
}
const bills= {
  essentials: {
  company: 'Nuvera',
  amountDue: '930.00',
  simplePay: '300',
  dueDate: '06/01/2022',
  phoneNumber: '',
  nameOnAccount: '',
  userName: '',
  password: '',

}}



const Admin = () => {
  const [formData, setFormData] = useState(emptyDataSet)
  const { currentUser, setUser, userData, setUserData } = useContext(UserContext);
  const handleonChange = (e) => {
    const { name, value } = e.target;
    setFormData(
      {...formData, [name]: value}
    )
}
  const handleCreate = async () => {
  addNewUserCollectionToDb(currentUser)
  };

  const handleCreateBIlls = async () => {
    const data = addNewBillsCollectionToDb(currentUser, bills)
    console.log(data)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNewUserCollectionToDb(currentUser, formData)
    console.log(formData)
  }
  const handleGet = async () => {
    const userdata = await getCurrentUserData(currentUser)
    console.log(userdata)
    
  }


  const { name, phoneNumber, address, email } = formData;
  return (
    <>
      <button onClick={handleCreateBIlls}>Create Bills for DB</button>
      <button onClick={handleCreate}>Create user DB</button>
      <button className='adminBtn' onClick={handleGet}>Get user Data</button>
      <form onSubmit={handleSubmit}>
        <input type="text" required name='name' value={name} placeholder='Name' onChange={handleonChange}/>
        <input type="text" required name='phoneNumber' value={phoneNumber} placeholder='Phone' onChange={handleonChange} />
        <button>Submit New Data</button>
      </form>
    </>
  )
}

export default Admin