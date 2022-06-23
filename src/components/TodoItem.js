import { Checkbox } from '@material-ui/core'
import React from 'react'
import './TodoItem.css'
import {useDispatch} from 'react-redux'
import { setCheck } from '../features/todoSlice'

const TodoItem = ({item,done,id}) => {
  const dispatch = useDispatch()
    
    const handleCheck = () => {
      dispatch(setCheck(id))
    }

  return (
    <div className='todoItem'>

        <Checkbox
            checked={done}//responsible for item is checked or not
            color="primary"
            onChange={handleCheck}
            inputProps={{'aria-label':'secondary checkbox'}}
        />
        <p className={done && 'todoItem--done'}>{item}</p>
    </div>
  )
}

export default TodoItem