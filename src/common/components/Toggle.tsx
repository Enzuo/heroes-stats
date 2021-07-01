import React, { useRef } from 'react'
import styled from 'styled-components'

type ToggleProps = {
  name: string
  value: boolean
  onChange? : Function
}

export default function Toggle(props : ToggleProps) {
  const toggle = useRef()
  const checkbox = useRef()

  function handleToggle() {
    // if (props.onChange) props.onChange()
    props.onChange?.(!props.value)
    // toggle.current.classList.toggle('toggled')
    // checkbox.current.checked = !checkbox.current.checked
  }
  return (
    <div>
      <ToggleCheckbox
        ref={checkbox}
        id="chkb"
        name={props.name}
        type='checkbox'
        defaultChecked={!!props.value}
        value={props.value || false}
        onClick={handleToggle}
      />
      <Label htmlFor="chkb">
        <span>
          {props.name}
        </span>
        <ToggleSwitch
          ref={toggle}
          checked={!!props.value}
        >
          <ToggleKnob />
        </ToggleSwitch>
      </Label>
    </div>
  )
}

const ToggleCheckbox = styled.input`
  height: 0px;
  width: 0px;
  opacity: 0;
`

const Label = styled.label`
  display:flex;
  align-items:center
`


const ToggleKnob = styled.span`
  height: 20px;
  width: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #50ceff;
  right: 50%;
  transition: all .3s;
`

const ToggleSwitch = styled.span`
  border: solid 2px #50ceff;
  position: relative;
  display: inline-block;
  border-radius: 20px;
  padding: 3px;
  margin: 0 5px;
  width: 40px;
  height: 20px;
  cursor:pointer;

  ${(props) => props.checked ? '' : 'border-color: #666;'}

  ${ToggleKnob} {
    ${(props) => props.checked ? 'right: 3px;' : 'background-color: #666;'}
  }
`


