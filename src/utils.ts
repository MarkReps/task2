import { ITask } from "./types/task";

 function findAllCategory(tasks:ITask[]){
    const categories:string[] = [];

    tasks.forEach(({category}) =>{
        if(!categories.includes(category)){
            categories.push(category)
        }
    })

    return categories;
}

 function calculateCategory(tasks:ITask[],category:string){
    return tasks.reduce((prevCount,{active,category:taskCategory}) =>{
        
        
        if(taskCategory === category){
            active ? prevCount.active += 1:prevCount.archive+=1;
            return prevCount;
        } else {
            return prevCount;
        }
    },{active:0,archive:0})
}

export function getCountCategory(tasks:ITask[]){
    const categories = findAllCategory(tasks)

    const categoriesForRender: { name: string; count: number }[] = [];

    categories.forEach(category => {
        categoriesForRender.push({
          name: category,
          count: 0
        });
      });
    
    
      const result = categoriesForRender.map(category => {
        const count = calculateCategory(tasks, category.name);
        return {
          ...category,
          count
        };
      });
      console.log(result)
      return result;
}