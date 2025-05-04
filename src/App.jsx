import { useActionState, useEffect, useRef } from 'react'
import './App.css'
import FormSection from './UI/FormSection'
import { formData1 } from './data/formData'
import { formData2 } from './data/formData'
import Input from './components/Input'
import { submit } from './actions/actions' //server action import

function App() {
  
  const formRef = useRef(null)
  
  // useActionState
  const [state, formAction, pending] = useActionState(submit, {nametitle:'', error:"", description:''})


  useEffect(()=>{
   const formElements = formRef.current.elements;
   console.log("The error: ", state)

  //  Validation
    for(let element of formElements){
        element.setCustomValidity("");
    } 


    if(state.error){
      let inputControl = null;

      for(let element of formElements){
        if(element.name == state.nametitle){
          inputControl = element
          inputControl.focus()
          // inputControl.setCustomValidity(state.error);
        }
      }  

      if(inputControl){
        console.log("Personal: ", inputControl)
        // inputControl.reportValidity();
      }
    }
  },[state, formRef])



  return (
    <div className='container'>
      <h1>REGISTRATION FORM</h1>

      {/* form element */}
      <form  ref={formRef} action={formAction} className='form-container'>{/*action attributes*/}
        <FormSection>
          {formData1.map(formcontrol => (<Input {...formcontrol} />))}
        </FormSection>
        
        <FormSection>
          {formData2.map(formcontrol => <Input {...formcontrol} />)}
          {state.error? <p>{state.error}</p>:""}
          {pending? <p>Loading...</p>:<p>{state.description}</p>}
        </FormSection> 
        <button style={{display:'none'}} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
