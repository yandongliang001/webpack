import foo from './math.js';
import bar from './aaa.js';
import data from '../data/test.json';
document.write('entry.js正在工作！<br/>');
document.write(foo(3)+'<br/>');
document.write(bar(3)+'<br/>');
document.write(JSON.stringify(data)+'<br/>');
