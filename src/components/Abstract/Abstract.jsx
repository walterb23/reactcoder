import React,{useState} from 'react'
import Select from '../Select/Select'
import Radio from '../Radio/Radio'

const Abstract = () => {

    const [option,setOption] = useState(1)
    const options = [
        {value: 1, text: "Azul"},
        {value: 2, text: "Rojo"}
    ]
    const optionSelected = (value) => {

        setOption(value)
    }

  return (
    <div>
        <h3>Abstract Component</h3>
       
        <Select option={option} options={options} optionSelected={optionSelected}/>
        <p>Seleccionada: {option}</p>
    </div>
  )
}

export default Abstract