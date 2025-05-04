export const formData1 = [
    {id:0, label:"Kayak ID", type:'text', inputName:"ID", placeholder:'KAY-013'},
    {id:1, label:"Kayak Name", type:'text', inputName:"nama", placeholder:''},
    {id:2, label:"Type", type:'select', inputName:"TYPE", placeholder:'KAY-013'},
    {id:3, label:"No. People", type:'select', inputName:"people", placeholder:'KAY-013'},
    {id:4, label:"Activity Type", type:'select', inputName:"activity",  placeholder:'KAY-013'},
    {id:5, label:"Skill Level", type:'select', inputName:"skill", placeholder:'KAY-013'},
    {id:6, label:"Weight", type:'select', inputName:"weight", placeholder:'KAY-013'}
]


export const formData2 = [
    {label:"Height", type:'select', inputName:"height", placeholder:'KAY-013'},
    {label:"Width", type:'select', inputName:"width", placeholder:'KAY-013'},
    {label:"Status", type:'select', inputName:"status", placeholder:'KAY-013'},
    {
        label:"Kayak Images",
        type:'file',
        inputName:"image",
        placeholder:'KAY-013', 
        required:true, 
        description:"Image size must be less than 5Mb"
    },
    {label:"Admin Notes", type:'textarea', inputName:"notes", placeholder:'Add admin notes'}
]