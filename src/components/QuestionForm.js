import { useState } from "react";

export default function ControlledQuestionForm(){
    const [inputValue,setInputValue] = useState('');
    function handleInput(e){
        setInputValue(e.target.value)
    }
    function checkEmail(){
        if(!inputValue.includes('@')) {
            alert('ACHTUNG!! il n y a pas "@" ceci est une adresse invalide');
        }
    }
    return(
        <div className="lmj-plant-item">
            <span>Saisissez votre email ci-dessous</span>
            <input
            onChange = {handleInput }
            value={inputValue}
             onBlur = {checkEmail}
            />
            
        </div>
    )
}
/* Un controlled Form 
<button onClick={()=>alert(  inputValue )}>Alerte-Moi 🚖  </button>


<form onSubmit={handleSubmit}>
    <input type='text' name= 'my_input' defaultValue='saisissez votre question'/>
    <button type="submit">Envoyer</button>
</form>

export default function handleSubmit(e) {
    e.preventDefault();
    alert(e.target['my_input'].value)
} */