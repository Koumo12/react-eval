import React, { useState } from 'react';
import  axios  from 'axios';


function upload() {
    const url = 'http://localhost:3000/posts';
    const [data, setData] = useState({
        name: "",
        date: "",
        iduser: ""
    })

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }

    function submit(e) {
        e.preventDefault();
        fs.writeFileSync(url, {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name: data.name,
            date: data.date,
            iduser: data.iduser})
        })
        .then(res => {
            console.log(res.data);
        })

    }


   const [selectedFile, setSelctedFile] = useState('');

    const fileHandle = event => {
        setSelctedFile({
            selectedFile: event.target.files[0]
        })
    }

    const uploadFile = () => {
        const fd = new FormData();
        fd.append('image', selectedFile);
        fetch('http://localhost:3000/posts', fd.entries(), {
            onUploadProgress: progressEvent => {
                console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total*100) + '%')
            }
        })
        .then(res => {
            res.json
        });
    }

  return (
    <div>
       <form onSubmit={(e)=> submit(e)}>
            <input onChange={(e)=> handle(e)} id="name" value={data.name} placeholder='name' type="text" />
            <input onChange={(e)=> handle(e)} id="date" value={data.date} placeholder='date' type="date" />
            <input onChange={(e)=> handle(e)} id="iduser" value={data.iduser} placeholder='iduser' type="number" />
            <button type='submit'>Submit</button>
       </form>

        <div>
            <input 
                type='file' 
                onChange={fileHandle} 
                
            />       
        <button onClick={uploadFile}>upload</button>
        </div>
    </div>
  )
}

export default upload
