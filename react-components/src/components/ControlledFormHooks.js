import React, {useState} from 'react'

function ControlledFormHooks() {
    // name: a new state property
    // setName: a method to update name
    // useState(''): Default value of name
  const [name, setName] = useState('')  
  const [category, setCategory] = useState('website')  
  const [comment, setComments] = useState('')  
    //   Defines handleSubmit method which takes event as
    // a parameter and prevents default action
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, category, comment)
  }  
  return (
      <div>
          <h2>Please fill out the form below</h2>
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor='id-name'>Your Name: </label>
                  <input
                //   Value just needs to be name of state without the
                // this keyword 
                      value={name}
                    //   onChange attribute needs to take event as 
                    // parameter with method name 
                      onChange={
                        (e) => setName(e.target.value)
                    }
                      id='id-name'
                      name='name'
                      type='text'
                  />
              </div>
              <div>
                  <label htmlFor='id-category'>Query category: </label>
                  <select
                      value={category}
                      onChange={
                        (e) => setCategory(e.target.value)
                    }
                      id='id-category'
                      name='category'
                  >
                      <option value="website">Website issue</option>
                      <option value="order">Order issue</option>
                      <option value="general">General enquiries</option>
                  </select>
              </div>
              <div>
                  <label id='id-comments'>Comments</label>
                  <textarea
                      value={comment}
                      onChange={
                        (e) => setComments(e.target.value)
                    }
                      id='id-comments'
                      name='comments'
                  />
              </div>
              <input type='submit' value="Submit" />
          </form>
      </div>
  )
}

export default ControlledFormHooks