
let resName =localStorage.getItem("name");
window.addEventListener("load", () => {
   
    
    
    let resEmail=localStorage.getItem("email");
    let resPhone=localStorage.getItem("phone");
    let resAddress=localStorage.getItem("address");
    let resDegree=localStorage.getItem("degree");
    let resInstitute=localStorage.getItem("institution");
    let resGraduation=localStorage.getItem("graduation");
    let resJTitle=localStorage.getItem("jobTitle");
    let resCompany=localStorage.getItem("company");
    let resWFrom=localStorage.getItem("work-duration-from");
    let resWTo=localStorage.getItem("work-duration-to");
    let resJDescription=localStorage.getItem("job-description");
    let resAch1=localStorage.getItem("ach1");
    let resAch2=localStorage.getItem("ach2");
    let resAch3=localStorage.getItem("ach3");
    let resS1=localStorage.getItem("skill1");
    let resS2=localStorage.getItem("skill2");
    let resS3=localStorage.getItem("skill3");
    let resPic=localStorage.getItem("profilePic");

let cvName:any=document.getElementById("cv-name");
cvName.textContent=resName;

let cvEmail:any=document.getElementById("cv-email");
cvEmail.textContent=resEmail;

let cvPhone:any=document.getElementById("cv-phone");
cvPhone.textContent=resPhone;

let cvAddress:any=document.getElementById("cv-address");
cvAddress.textContent=resAddress;

let cvDegree:any=document.getElementById("cv-degree");
cvDegree.textContent=resDegree;

let cvInstitute:any=document.getElementById("cv-institution");
cvInstitute.textContent=resInstitute;

let cvGraduation:any=document.getElementById("cv-graduation-year");
cvGraduation.textContent=resGraduation;


let cvJobTitle:any=document.getElementById("cv-job-title");
cvJobTitle.textContent=resJTitle;

let cvCompany:any=document.getElementById("cv-company");
cvCompany.textContent=resCompany;



let cvWorkDuration:any=document.getElementById("cv-work-duration");
cvWorkDuration.textContent=resWFrom+" - "+resWTo;


let cvJobDiscription:any=document.getElementById("cv-job-description");
cvJobDiscription.textContent=resJDescription;

let cvAch1:any=document.getElementById("cv-ach1");
cvAch1.textContent=resAch1;

let cvAch2:any=document.getElementById("cv-ach2");
cvAch2.textContent=resAch2;

let cvAch3:any=document.getElementById("cv-ach3");
cvAch3.textContent=resAch3;

let cvS1:any=document.getElementById("cv-skill1");
cvS1.textContent=resS1;

let cvS2:any=document.getElementById("cv-skill2");
cvS2.textContent=resS2;

let cvS3:any=document.getElementById("cv-skill3");
cvS3.textContent=resS3;

let cvImage:any =document.getElementById("cv-image");
cvImage.src=resPic;


}
)

// Print button

let printBtn:any = document.getElementById("printBtn");
printBtn.addEventListener("click", () => {
    window.print();
});

// Edit button

let editBtn:any = document.getElementById("editBtn");
editBtn.addEventListener("click", () => {
        
        window.history.back();
});

// Shareable button

let shareBtn=document.getElementById("shareBtn");

let anchor:any = document.getElementById('anchor');

let userName;

if(resName){
  userName =  resName.toLowerCase().replace(/\s+/g, '-') ;
}
else{
userName = "user";
}

let baseUrl ="http://127.0.0.1:5500/resume.html";

let uniqueUrl = `${baseUrl}?/${userName}`;

shareBtn?.addEventListener("click", () => {
    anchor.setAttribute("href", uniqueUrl); // set href = uniqueUrl;
    anchor.click();
});

// copy button

let copyLinkBtn:any = document.getElementById("copyLinkBtn");
copyLinkBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert("Link copied to clipboard");
    })
});