
 




var app=new Vue({
el:"#app",
data:{
share:"https://autumnfish.cn/",
sname:"",
list:[],
songsrc:"",
show:1,
lrc:''


},
methods:{


Search:function(){
    var that=this;
axios.get(that.share+"search",{
   params:{
       keywords:that.sname,
       limit:20
   }
}).then((res)=>{
    that.show=1
  that.list=res.data.result.songs
    console.log(that.list)
    
      
      
    })



},



play:function(id){
console.log("id: "+id)
var that=this
axios.get(this.share+"song/url",{
    params:{
        id:id,
    }
 }).then((res)=>{
    that.show=0
    that.songsrc=res.data.data[0].url

   
 })


 axios.get(this.share+"lyric",{
  params:{id:id}
 }).then(res=>{
  that.lrc=res.data.lrc.lyric
  


 })
},
 
change:function(){
    this.show=!this.show;
}




},











})