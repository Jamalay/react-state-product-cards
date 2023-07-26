import { useState } from "react";

const Form = (props) => {
    const [text, setText] = useState('')
    const [newData, setNewData] = useState(props.data)

    const find = (e) => {
        setText(e.target.value);
        console.log(text);
        props.setData(props.data.filter(dataElem => {
            if(dataElem.name.includes(text)){
                return dataElem
            }
        }))
    }

    return (
        <div>
            <input type="text" onChange={find}></input>
        </div>
    )
}

export default Form;