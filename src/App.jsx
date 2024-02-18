import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import { titleAtom,descriptionAtom, todosAtom,filterAtom, filterSelector, } from './Store/atom/todos';
function App(){


   return(
     <div>
         <RecoilRoot>
          <Todo/>
          <Filter/>
         </RecoilRoot>
     </div>
   )
}



function Todo(){
      
       const [title,setTitle]=useRecoilState(titleAtom);
       const [description,setDescription]=useRecoilState(descriptionAtom);
       const [todos,setTodos]=useRecoilState(todosAtom);
   return (<div>
     <input onChange={(e)=>{setTitle(e.target.value)}} placeholder='title'></input>  <br/> <br/>
     <input  onChange={(e)=>{setDescription(e.target.value)}} placeholder='description'/>  <br/> <br/>
     <button onClick={()=>{
        setTodos([...todos,{
          title:title,
          description:description
        }])
     }}>AddTodo</button>  <br/> <br/>
     <FilterSelector/>
   </div>)
}

function Filter(){
     const setFilter=useSetRecoilState(filterAtom)
    return <div>
       <input onChange={(e)=>setFilter(e.target.value)} placeholder='filter'/>
          
    </div>
}

function FilterSelector(){
    
 
 
  const filteredTodos=useRecoilValue(filterSelector);
  
     return <div>
        {   filteredTodos.map((ele,index)=>{
            return <div key={index}>
            <h1>{ele.title}</h1> 
               <p>{ele.description}</p>
            </div>
          })}
          
     </div>
   

}







export default App;