function change(){
    let btn=document.getElementById("btnFun");
    if(btn.textContent=="Don't Click!")
        btn.textContent="Click Here!";
    else
        btn.textContent="Don't Click!";
}

new Vue({
    el:'#vue',
    data:{
        card:0,
        activeColor:"white",
        colors:["white","cornflowerblue","lightpink","darkseagreen"]
    },
    methods:{
        cardClicked:function(no){
            console.log("Clicked "+ no)
            if(this.card==no){
                this.card=0;
                this.activeColor = this.colors[this.card];
            }
                
            else{
                this.card=no;
                this.activeColor = this.colors[this.card];
            }
                
            
        
        }
    }
})