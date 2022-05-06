import { Injectable } from '@angular/core';

//Main interface for the steps of the solution
export interface Step {
  x:number,
  y:number,
  explanation:string,
  father?:Step
}

@Injectable({
  providedIn: 'root'
})
export class WaterjugsolutionService {

  constructor() { }

  //Main algorithm
  solveWaterJug(x:number, y:number, z:number):Step[]{
    if(x + y <= z) {
      return [];
    };

    //total: temporal variable to check the neighbors nodes
    let total:any = {};

    //options: the different options it can take for operations
    const options:number[] = [1,2,3,4,5,6];

    //queue: the main queue for the algorithm
    const queue:Step[] = [];

    //current: the current visited node
    let current:any;

    //pushing the root node in the queue
    queue.push({x:0, y:0, explanation:"initial state", father:undefined});

    //array to save the visited nodes
    const visited:Step[] = [];

    //pushing the root node to the visited
    visited.push(queue[0]);

    //main loop for searching
    while(queue.length > 0) {
        current = {...queue.shift()};

        //loop break if solution is found
        if(current.x === z || current.y === z) {
          break;
        };

        //secondary loop for looping all the posibilities
        for(let option of options) {

          //option 5 and 6 are conditional to the contents of the other bucket
          if(option === 5 && current.x === x) continue;

          if(option === 6 && current.y === y) continue;

          //setting the neighbor node
          total = this.operations({...current}, option, x, y);

          total.father = {...current};

          //filtering only the viable nodes (no negative values or too high)
          if(total.x < 0 || total.x > x + y || total.y < 0 || total.y > x + y) continue;

          //if the neighbor has not been visited, pushing to the queue
          if(visited.filter(element => element.x === total.x && element.y === total.y).length == 0) {
              visited.push(total);
              queue.push(total);
          }
        }
    }

    //order: the array used for saving the order
    const order:Step[] = [];

    //backtracking the father of the solution node until it reaches the root
    while(current.father) {
      order.push(current)
      current = {...current.father};
    }

    //reversing the order so it becomes root to solution
    order.reverse();

    //checking if the final node has the solution for safe measures
    if(order[order.length-1].x !== z && order[order.length-1].y !== z) {
      return [];
    }
    else {
      return order;
    }
  }

  operations(step:Step, direction:number, x:number, y:number):Step{

    //switch for the different decisions

    switch(direction) {

      //case 1: dumping bucket x
        case 1:
            step.x = 0;

            step.explanation = "Dump bucket x";
            break;

      //case 2: dumping bucket y
        case 2:
            step.y = 0;

            step.explanation = "Dump bucket y";
            break;

      //case 3: fill bucket x
        case 3:
            step.x = x;

            step.explanation = "Fill bucket x";
            break;

      //case 4: fill bucket y
        case 4:
            step.y = y;

            step.explanation = "Fill bucket y";
            break;

      //case 5: transfer bucket y to bucket x
        case 5:

            if(step.x + step.y > x) {
                step.x = x;
                step.y = step.y - x;
            }

            else {
                step.x = step.x + step.y;
                step.y = 0;
            }

            step.explanation = "Transfer bucket y to bucket x";
            break;

      //case 6: transfer bucket x to bucket y
        case 6:
            if(step.y + step.x > y) {
                step.y = y;
                step.x = step.x - y;
            }

            else {
                step.y = step.x + step.y;
                step.x = 0;
            }

            step.explanation = "Transfer bucket x to bucket y";
            break;
    }

    return step;
  }
}
