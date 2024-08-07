let insert = document.getElementById('insert');
window.addEventListener("keydown" , (event)=>{
 
    insert.innerHTML=`
    <div class="key">
      ${event.key== " "? "space": event.key}
      <small>event.key</small>
    </div>

    <div class="key">
      ${event.keyCode== " "? "space": event.keyCode}
      <small>event.keyCode</small>
    </div>

    <div class="key">
      ${event.code== " "? "space": event.code}
      <small>event.code</small>
    </div>
    `
    
})