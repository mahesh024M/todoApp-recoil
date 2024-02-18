import { atom, selector } from "recoil";


export const titleAtom=atom({
     key:"titleAtom",
     default:""
})

export const descriptionAtom=atom({
    key:"descriptionAtom",
    default:""
})

export const todosAtom=atom({
    key:"todosAtom",
    default:[]
})

export const filterAtom=atom({
    key:"filterAtom",
    default:""
})

export const filterSelector=selector({
    key:"filterSelector",
    get:({get})=>{
        const filter=get(filterAtom);
        const todos=get(todosAtom);
        const filteredTodos = todos.filter(x => x.title.includes(filter) || x.description.includes(filter))
        return filteredTodos;
     }
})

