import React from 'react'
import { useState } from 'react';
const AddProducts = () => {
    const [noOfImages,setNoOfImages] = useState(new Array(1));
  return (
    <div>
      <form action="">
        <input type="text" name={'title'} placeholder='Enter title...' />
        <input type="text" name={'desxription'} placeholder='Enter description...' />
        <select name="" id="" onChange={(event)=>{
            console.log(event.target.value,noOfImages);
            setNoOfImages(new Array(parseInt(event.target.value )).fill(1));
        }}>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
        </select>
        <label htmlFor="">Add images</label>
        {
            noOfImages.map((ele)=>{
                <input type="file" accept='images/'></input>
            })
        }
      </form>
    </div>
  )
}

export default AddProducts
