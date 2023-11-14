const input = document.querySelector("#item");
const to_do_box = document.querySelector("#to-do-box");


input.addEventListener(
    "keyup",
    function(event){
       if(event.key === "Enter"){
         add_to_do(this.value)
         this.value = ""
        //  {
        //     this.value.map((val)=>{
        //         localStorage.setItem("item",{val})
        //         localStorage.getItem("item")
        //     })
        //  }
       }
    }
)

const add_to_do = (to_do)=>{
    const item = document.createElement("li");
    item.innerHTML = `
      ${to_do}
      <i class="fa fa-times" aria-hidden="true"></i>
    `
    
    item.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )
    item.querySelector("i").addEventListener(
        "click",
        function(){
           item.remove()
        }
    )
    to_do_box.appendChild(item)

   
   

}

localStorage.setItem("item","")

localStorage.getItem("name")

