import React, { useEffect, useState } from 'react';
import { db } from './src/components/auth/firebase';
import {addDoc, collection, getDocs, updateDoc, doc, deleteDoc} from "firebase/firestore"

function Dashboard() {
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState();

   const [users, setUsers] = useState([]);
   const userCollectionRef = collection(db, "Users");

   const createUser = async () => {
        await addDoc(userCollectionRef, {name: newName, age: Number(newAge)});
   }

   const updateUser = async (id, age) => {
    const userDoc = doc (db, "Users", id)
    const newFields = {age : age + 1};
    await updateDoc(userDoc, newFields);
   }

   const deleteUser = async (id) => {
        const userDoc = doc(db, "Users", id);
        await deleteDoc(userDoc);
   }

   useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers (data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
        }

        getUsers();
   }, []);

   // Image upload
    const [imageFile, setImageFile] = useState();

   const handlSeletedFile = (files) => {
        if(files && files[0].size < 10000000)
        {
            setImageFile(files[0])

            console.log(files[0]);
        } else
        {
            message.error('File size to large')
        }
   }

   const handleUploadFile = () => {
    if(imageFile) {

    } else {
        message.error('File not found')
    }
   }

   const handleRemoveFile = ()=> setImageFile(undefined);

   const onSubmit = () => {
        
   }

  return (
    <div className='container'>
      <div className='row p-5'>
            <div className='col-md-12 fs-2 fw-bold'>Ajouter une image</div>
      </div>
      <div className='row p-5'>
            <div className='col-md-6 fs-5 fw-bold justify-content-center'>
                <form onSubmit={onSubmit}>
                    
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupFile01">Image:</label>
                        <input 
                            type="file" 
                            className="form-control" 
                            id="inputGroupFile01" 
                            onChange={(files) => handlSeletedFile(files.target.files)}
                        />                        
                    </div>

                    <div className='card'>
                        <button type="button" className="btn-close me-auto" onClick={handleRemoveFile} aria-label="Close"></button>
                        {imageFile && (
                             <>
                                <h6>{`${imageFile.name} Size: ${imageFile.size}`}</h6>
                                <button onClick={handleUploadFile}> upload</button>
                            </>
                        )}
                        
                    </div>

                    <button type='submit'  >Ajouter</button>
                </form> 
            </div>
            <div className='col-md-6 fs-5 fw-bold'>
                <div>
                    <input 
                        placeholder='Name...'
                        onChange={(event) => {
                            setNewName(event.target.value)
                        }}     
                    />
                    <input 
                        type="number" 
                        onChange={(event) => {
                            setNewAge(event.target.value)
                        }} 
                        placeholder='Age...'
                    />
                    <button onClick={createUser}>Create user</button>
                </div>
                {users.map((user) => {
                    return (
                        <>                           
                            <div key={user.id}>
                                <h1>Name: {user.name}</h1>
                                <h1>Age: {user.age}</h1>
                                <button onClick={() => {
                                    updateUser(user.id, user.age)
                                }}> Modifier l´age</button>
                                 <button onClick={() => {
                                    deleteUser(user.id)
                                }}> Supprimmer </button>
                            </div>
                        </>
                    )
                })}
            </div>
      </div>
    </div>
  )
}

export default Dashboard;

