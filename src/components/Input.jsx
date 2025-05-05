import './Input.css';
import uploadImage from '../../public/upload image.svg'
import { useFormControl } from '../state/state';
import { useRef } from 'react';
// import uploadImageText from '../../public/texts.svg'

const InputControl = ({ label, type, inputName, placeholder, required, description }) => {

    const inputFileRef = useRef(null);

    let formControlLogic = useFormControl('')


    let InputUI = 'No Input'

    switch(type){ 
        case 'text':
            InputUI = <input required {...formControlLogic} type={type} name={inputName} placeholder={placeholder}  />
            break;

        case 'select':
            InputUI = <select className='select-control' {...formControlLogic} name={inputName}>
                <option value="whatever">Select</option>
                <option value="whatever2">Select 2</option>
            </select>
            break;  

        case 'textarea':
            InputUI = <textarea style={{resize:'none'}} {...formControlLogic} name={inputName} placeholder={placeholder}></textarea>
            break;

        default:
            InputUI = (<>
                        <input ref={inputFileRef} {...formControlLogic} className='file-upload-input' type="file" name={inputName}  />
                        <div className='file-upload' style={{cursor:'pointer'}} onClick={()=> { inputFileRef.current.click()}}>
                           <img src={uploadImage} alt="upload image" /> 
                           {/* <p><img src={uploadImageText} alt="upload image text" /> or drag and drop</p> */}
                           <p><span>click to upload</span> or drag and drop</p>
                           <p>SVG, PNG, JPG or GIF(max. 800x400px)</p>
                        </div>
                    </>)
    }

    return <div className={`form-control`}>
            <label>{label}{required?<span style={{color:'red'}}>*</span>:''}</label>
            {required?
                <p 
                    style={{
                        textAlign:'left',
                        marginTop:'0px',
                        marginBottom:'16px',
                        color: '#4E5B6C',
                        fontSize:'12px'
                        }}>
                            {description}
            </p>:""}
            {InputUI}
        </div>

    
}

export default InputControl;