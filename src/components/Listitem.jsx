import { useState , useEffect} from "react";


function ListItem({text, onDelete}){
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        //init component
        console.log('init');
        return ()=> {
            //destroy component
            console.log("cleanup");

        }
    },[])


    useEffect(()=>{
        console.log("checked", checked);
        if(checked) alert ("check");
    },[checked]);

    const handleCheck = () => {
        
        setChecked(!checked);
    }
    return (
    <li className={`flex items-center justify-between rounded-md p-2 bg-indigo-800 ${checked ? 'text-green-400 line-through' : null}`}>
        <div>
        <input type="checkbox" checked={checked} onChange={handleCheck}/>
        <span>{text}</span>
        </div>
        
        <button onClick={onDelete} className="rounded-md bg-red-500 p-2 hover:bg-red-700">Delete</button>
    </li>
    );
}

export default ListItem;