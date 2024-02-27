const formEls=document.querySelector(".create-account");
const form=document.querySelector(".form-background");
const edit=document.querySelector(".edit");
const signin=document.querySelector(".form-signin")
const signinlink=document.querySelector(".signin-link")
const createaccountlink=document.querySelector(".create-account-link")
const createaccount=document.querySelector(".form")
const createaccountmobile=document.querySelector(".create-account-mobile-link")
const signinmobile=document.querySelector(".signin-mobile-link")
   

    const openform = ()=> {

      form.style.display="grid";
  
  }
  
  const closeform=(e)=>{
      if(e.target.classList.contains("form-background") || e.target.classList.contains("cross"))
     form.style.display="none"
  }
  const opensigninform=()=>{
    signin.style.display="block"
createaccount.style.display="none"
  }
  
  const opencreateaccountform=()=>{
    createaccount.style.display="block"
    signin.style.display="none"
  }
  
  
  form.addEventListener("click",closeform);
  edit.addEventListener("click",openform);
  formEls.addEventListener("click",openform);
9
  signinlink.addEventListener("click",opensigninform)
  createaccountlink.addEventListener("click",opencreateaccountform)
  signinmobile.addEventListener("click",opensigninform)
  createaccountmobile.addEventListener("click",opencreateaccountform)