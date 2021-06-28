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
  background: #2f9ad0;
  border-radius: 4px;
  color: white;
  padding: 5px 8px;
  display: inline-block;
  cursor:pointer;
  &:hover {
    background:#1688c1;
  }
`


export default SaveButton
