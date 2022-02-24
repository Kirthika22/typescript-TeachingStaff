// Import stylesheets
import './style.css';

import { TeachingStaff } from './TeachingStaff';

let obj =new TeachingStaff('kiru',19,'physics','science');
console.log(obj);
obj.teach ( )

let objphysics= new TeachingStaff('kiru',19,'chemistry','science');
console.log(objphysics);
objphysics.teach ( ) 

let objphysicschemistry=new TeachingStaff('kiru',19,'physics','science');
console.log(objphysicschemistry);
objphysicschemistry.giveUsAssignment ( ) 

let objbiology=new TeachingStaff('kiru',19,'biology','science');
console.log(objbiology);
objbiology.attendance ( ) 


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;