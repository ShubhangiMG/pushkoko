import React from 'react'

export default function Listl(){
    return (
      <div>
        <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <label>Birthday<input type="date"/></label>
        
        <label>Image<input type="file"/></label>
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
}
