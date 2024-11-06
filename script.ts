let myName:any=document.getElementById("name");
    

let myEmail:any=document.getElementById("email");


let myPhone:any=document.getElementById("phone");


let myAddress:any=document.getElementById("address");


let myDegree:any=document.getElementById("degree");


let myInstitute:any=document.getElementById("institution");


let myGraduation:any=document.getElementById("graduation-year");


let myJobTitle:any=document.getElementById("jobTitle");


let myCompany:any=document.getElementById("company");


let workFrom:any=document.getElementById("work-duration-from");


let  workTo:any=document.getElementById("work-duration-to");

let myDescription:any=document.getElementById("job-description");


let myAch1 :any= document.getElementById("ach1");


let myAch2 :any= document.getElementById("ach2");


let myAch3 :any= document.getElementById("ach3");


let mySkill1 :any= document.getElementById("skill1");


let  mySkill2 :any= document.getElementById("skill2");
  

let mySkill3 :any= document.getElementById("skill3");

let myPic :any= document.getElementById("pic");



let submitBtn :any= document.getElementById("submitBtn")

let form :any= document.getElementById("form");




form?.addEventListener("submit",(event:any)=>{

    event.preventDefault();

    localStorage.setItem("name",myName.value);
    localStorage.setItem("email",myEmail.value);
    localStorage.setItem("phone",myPhone.value);
    localStorage.setItem("address",myAddress.value);
    localStorage.setItem("degree",myDegree.value);
    localStorage.setItem("institution",myInstitute.value);
    localStorage.setItem("graduation",myGraduation.value);
    localStorage.setItem("jobTitle",myJobTitle.value);
    localStorage.setItem("company",myCompany.value);
    localStorage.setItem("work-duration-from",workFrom.value);
    localStorage.setItem("work-duration-to",workTo.value);
    localStorage.setItem("job-description",myDescription.value);
    localStorage.setItem("ach1",myAch1.value);
    localStorage.setItem("ach2",myAch2.value);
    localStorage.setItem("ach3",myAch3.value);
    localStorage.setItem("skill1",mySkill1.value);
    localStorage.setItem("skill2",mySkill2.value);
    localStorage.setItem("skill3",mySkill3.value);

if(myPic.files && myPic.files[0]){
    
    let reader = new FileReader();
    reader.addEventListener("load",() => {

        let textImage:any = reader.result;
        localStorage.setItem("profilePic",textImage);
        
    })
    reader.readAsDataURL(myPic.files[0]);
        
    window.location.href="resume.html";
    }

else{

    let defaultImage = "blankPic.jpg";
    localStorage.setItem("profilePic",defaultImage);
    window.location.href="resume.html";
}

})






