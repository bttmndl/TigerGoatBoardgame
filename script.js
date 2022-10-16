const dragablecells = document.querySelectorAll('.cell');
const ball = document.querySelector('.ball');
ball.addEventListener('dragstart',(e)=>{
    setTimeout(()=>{
        e.target.className = 'hide';
    },0)
})
ball.addEventListener('dragend',(e)=>{
    e.target.className = 'ball';
})
dragablecells.forEach(draggble =>{
    draggble.addEventListener('dragover',(e)=>{
        e.preventDefault();
        
    })
    draggble.addEventListener('dragenter',(e)=>{
        e.preventDefault();
        
    })
    draggble.addEventListener('dragleave',(e)=>{
        e.preventDefault();
        
    })
    draggble.addEventListener('drop',(e)=>{
        e.preventDefault();
        e.target.append(ball);
        
    })
})