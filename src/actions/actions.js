
// server action

export async function submit(prevState, formData){
    "use server"
    
    let data = {}
    data.ID = formData.get("ID")
    data.nama = formData.get("nama");
    data.type = formData.get("TYPE")
    data.people = formData.get("people")
    data.activity = formData.get("activity")
    data.skill = formData.get("skill")
    data.weight = formData.get("weight")
    data.height = formData.get("height")
    data.width = formData.get("width")
    data.status = formData.get("status")
    data.image = formData.get("image")
    data.notes = formData.get("notes")

    // console.log("Form prevState Submit: ", prevState)
    // console.log("Data Submit: ", data)

    // validation of the input
    for(let key in data){
        if(data[key] !== ""){
            return {nametitle:key, description:"Successfully Submitted!", error:''}
        }else {
            return {nametitle:key, description:"", error:'Cant be Empty'}
        }
    }
        
}


