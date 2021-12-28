import React,{useState} from 'react'

function First() {

    const[fill,setFill]=useState({
        name:'',
        dep:'',
        rating:''

    })
    const[data,setData]=useState([]);
    const[sub,setSubmit]=useState(false);

    const change=(e)=>{
        setFill({...fill,[e.target.name]:e.target.value})

    }

   
    const move=(e)=>{
        e.preventDefault();
        console.log(fill);
        const newdata={...fill,id:new Date().getTime().toString()};

        setData([...data,newdata]);
        setSubmit(true)
        
    }
    const back=()=>{

        setSubmit(false)
    }


    return (
    
        
        <div>

            <div>
                {sub ? null:

                <form action=''>
                <h1>EMPLOYEE FEED BACK FORM</h1>

                <label className='first'> Name</label>
                <input  className='second' onChange={change} type='text' id='name' name='name' value={fill.value}/>                      
                <br></br>
                <label className='third'> Department</label>
                <input className='four' onChange={change} type='text' id='dep' name='dep' value={fill.value}/> <br></br>
                <label className='five'>Rating</label>
                <input className='six' onChange={change} type='number' id='rating' name='rating' value={fill.value} />
                <br></br> <br></br>
                <button onClick={move} className='submit' >Submit</button> <br></br>
                </form>}
            </div>
            {sub ? 
            <div>
                <h1>EMPLOYEE DATA FORM</h1>/
                <div className='divv'>
                    {
                        data.map((value)=> {
                            const {name,dep,rating,id}=value;
                            return(
                                <div className='magic' key={id}>
                                    <p>Name:{name}  |  Department:{dep}  | Ratings:{rating}</p>
                                </div>
                            )
                        } )
                     }
                </div>
                {sub?<input onClick={back} type="button" value="back"/>: null }
                    
            </div> :null}
            
    </div>
    )

}

export default First;