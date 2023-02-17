import { useState } from "react";
import '../styles/Footer.css'

export default function ControlledQuestionForm(){
    const [inputValue,setInputValue] = useState('');
    function handleInput(e){
        setInputValue(e.target.value)
    }
    function checkEmail(){
        if(!inputValue.includes('@')) {
            alert('ACHTUNG!! il n y a pas de "@", ceci est une adresse invalide.');
        }
    }
    return(
        <div className="lmj-footer">
            <div>
            <span>Saisissez votre email ci-dessous</span>
           
            </div>
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