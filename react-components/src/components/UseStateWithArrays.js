import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3])
    // Button functions that refer to the setNums
    // function above
    const addNums = () => {
        setNums([...nums, nums.length + 1]) 
    }
    const deleteNums = () => {
        setNums(
            // Returns false when dealing with last item
            nums.filter((item, ide) => {
                return ide !== nums.length -1
            })
        )
    }
    return (
    <div>
        <button onClick={deleteNums}>Remove last item</button>
        <button onClick={addNums}>Add item</button>
        <ul>
            {/* Iterates through nums array and creates a list */}
            {/* item for each */}
            {nums.map(num => 
                <li key={num}>{num}</li>
            )}
        </ul>
    </div>
  )
}

export default UseStateWithArrays