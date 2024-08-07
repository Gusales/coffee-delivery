import { ComponentProps, useState } from "react";

import { Minus, Plus } from "@phosphor-icons/react";

import './style.scss'

interface InputPriceProps extends ComponentProps<'input'> {}

export function InputPrice(props: InputPriceProps){
  const [value, setValue] = useState(props.value ? Number(props.value) : 0)

  function handleIncrementValue(){
    setValue(state => state === 100 ? 100 : state + 1)
  }

  function handleDecrementValue() {
    setValue(state => state === 0 ? 0 : state - 1) 
  }

  return(
    <div className="input_container">
      <button 
        type="button" 
        onClick={handleDecrementValue} 
        className="input_button"
        name="Adicionar unidade ao carrinho"
        > 
        <Minus weight="bold" />  
      </button>

      <span className="input_text">
        {value}
      </span>

      <input 
        type="number" 
        className="input_field" 
        value={value}
        {...props}
      />

      <button 
        type="button" 
        onClick={handleIncrementValue} 
        className="input_button"
        name="Remover unidade do carrinho"
        > 
        <Plus weight="bold" />
        </button>
    </div>
  )
}