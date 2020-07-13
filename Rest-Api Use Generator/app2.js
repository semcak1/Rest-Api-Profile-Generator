// XmlHttpRequest ile Promise ı bir arada kullanmak.

const myObj=
{
    method:"GET",
    url: 'https://randomuser.me/api/?results=5'

}

let request= obj=>{
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET",obj.url,true)

        xhr.onload=function(){
            if(this.status>=200 && this.status<=300){
                let response=JSON.parse(this.responseText)
                console.log(response)
                resolve(response)

            }
            else{
                reject("bağlanamadı")
            }
        }

        xhr.send()
    })
    
}





const showProfile=function (data){
   var profiles=document.getElementById('profiles');
   var html="";
    data.results.forEach((profile) => {     
                       
        profiles.innerHTML+= 
        `
        <div id="profile">
        <div class="inner-profile">
                <img class="photo" src="${profile.picture.medium}">
                <div>
                <div><label>Name : ${profile.name.first}</label></div>
                <div><label>Surname : ${profile.name.last}</label></div>
                <div><label>Age : ${profile.dob.age}</label></div>    
            </div>    
        </div>
        
       
        ` 
        
        
        
    });    
   
   
    
}

request(myObj)
.then(showProfile)
.catch((err)=>{
    console.log("Hata !!!")
});