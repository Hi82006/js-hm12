window.onload = function(){
    // - створити функцію яка отримує аргумент будьякого типу в інпуті. В функції є перевірка в try catch. Якщо значення аргументу не числове значення створити throw з повідомленням що це не число. Якщо число більше 100 то повідомлення що число більше дозволеного якщо менше 10 то що число менше дозволеного.   Помилку з throw вивести на екран

function first(input){
    try {
        if(typeof input != 'number'){
            throw new SyntaxError("введенное значение не номер")
        }
        else if(input<10 || input>100){
            throw new SyntaxError(" введите значение от 10 до 100")
        }
        else{
            alert(`вы ввели: ${input}, верное значение`)
        }
    }
        catch(err){
            alert(err)
        }
}
first(99)

// - Створити форму яка отримує 2 значення ширину і висоту. Також є чекбокс ексліпс. Якщо всі данні введено і чекбокс чекнутий, розблоковується кнопка малювати і малюється еліпс, якщо чекбокс ненажатий то кнопка також розблоковується і малюється прямокутник 
let draw = document.querySelector('#draw');
let [...formElements] = drawForm.elements;
draw.disabled = true
let checkArr = ['','']
for(let t=0; t<formElements.length-2; t++){
    let element = formElements[t];
    element.onchange = function(){
        let pattern = /^\d{1,}$/g;
        if(pattern.test(element.value)){
            checkArr.splice([t],1,this.value)
            if(checkArr.every(elem => elem.length > 0)){
                draw.disabled = false 
            }
        }
        else{
            draw.disabled = true
        }
    }     
}
function createRect(width, heigth){
    let svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    let rect = document.createElementNS("http://www.w3.org/2000/svg",'rect');
    svg.setAttribute('width',width+'px');
    svg.setAttribute('heigth',heigth+'px');
    rect.setAttribute('cx', '50%');
    rect.setAttribute('cy', '50%');
    rect.setAttribute('width',width);
    rect.setAttribute('height',heigth);
    rect.setAttribute('fill','#red');
    rect.setAttribute('style', 'stroke-width:5; stroke:black')
    svg.appendChild(rect);
    document.body.appendChild(svg);
}
function createEllipse(width, heigth){
    let svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    let ellipse = document.createElementNS("http://www.w3.org/2000/svg",'ellipse');
    svg.setAttribute('width',width+'px');
    svg.setAttribute('heigth',heigth*0.75+'px');
    ellipse.setAttribute('cx', '50%');
    ellipse.setAttribute('cy', '50%');
    ellipse.setAttribute('rx',width/2.5)
    ellipse.setAttribute('ry',heigth/2.5)
    ellipse.setAttribute('fill','#red');
    ellipse.setAttribute('style', 'stroke-width:5; stroke:black')
    svg.appendChild(ellipse);
    document.body.appendChild(svg);
}
draw.onclick = function(event){
    event.preventDefault()
    if(document.querySelector('#checkbox').checked){
    createEllipse(checkArr[0], checkArr[1])
    }
    else{
        createRect(checkArr[0], checkArr[1])
    }
}
//  Створити куку з експерейшен таймом не більше 1 хв. Створити функцію перевірки яка читає данні з куки і виводить значення ця кука робоча чи вже втратила актуальність
let newCookie = new Date(Date.now()+15000)
document.cookie = `${encodeURIComponent('15secTime')}=${encodeURIComponent('is valid')}; expires = ${newCookie}`
function checkCookie(){
    return `Cookie is valid: ${new Date < newCookie}`
}
let btn = document.querySelector('.Cookie')
btn.onclick = ()=>{
    alert(checkCookie());
}
// Створити коло в канвасі і розмістити в середині кола текст 
function drawInCanvas(){
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    ctx.arc(150,150,100,0,180);
    ctx.fillStyle = '#00000';
    ctx.fill()
    ctx.font = '25px sant-serif';
    ctx.strokeStyle = 'white';
    ctx.strokeText('lorem', 125,163)
}
drawInCanvas()
}
