import { Injectable} from '@angular/core';
import { Task } from '../models/Tasks';

@Injectable()
export class Filtering
{
    public filter(taskList: Task[], filterBy:string) : Task[]
    {
        
        console.log("We are filtering by: " +filterBy);
        var result = taskList.filter((task) => (task.description.includes(filterBy) || task.taskName.includes(filterBy)));
        console.log("result is: "+result);
        return result;
    }

    public debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};    



}//end  class