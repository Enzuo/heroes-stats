import { useState } from 'react'
import styled from 'styled-components'

type SaveButtonProps = {
  onSave : () => Promise<boolean>
}

function SaveButton ({onSave} : SaveButtonProps) {
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    if(isSaving){
      return 
    }
    setIsSaving(true)
    await onSave()
    setIsSaving(false)
  }

  return (
    <Button onClick={handleSave}>{isSaving ? '...' : 'Save'}</Button>
  )
}

const Button = styled.div`
  border: 1px solid #39f;
  color: #39f;
  background-color: rgba(0,26,51,.9);
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;

  cursor:pointer;

  margin: 10px;
  padding: .5em 1.2em;
  display: inline-block;

  &:hover {
    background-color: #036;
    color: #fff;
  }
`


export default SaveButton
