
function validateForm(){
  console.log("this is in validateForm")
  var isValid = true;

  var elements = submissionForm.html.getElementById('ss-form').getElementsByTagName('input');

  for(var i=0; i < elements.length; i++){
    if(elements[i].value.length < 1){
      isValid = false;
    }
  }

  if(isValid){
    submissionForm.html.getElementById('ss-form').submit();
  }
  else {
    alert('Please fill all required fields');
  }
}

//declarations
var form = {
  name: "",
  lastName: "",
  phoneNumber: "",
  emaiLAddress: "",
  homeAddress: "",
  password: "",
  repeatPassword: "",
  enterHobbie: "",
}
var jsonForm;

function changeForm(n,lN,pN,e,hA,eP,rP,eH){
  console.log("this is connected")
  form.name=n
  form.lastName=lN
  form.phoneNumber=pN
  form.emaiLAddress=e
  form.homeAddress=hA
  form.password=eP
  form.repeatPassword=rP
  form.enterHobbie=eH
  jsonMaker()
  console.log(form)
};

function jsonMaker(){
  jsonForm=JSON.stringify(form);
}

//tests
//console.log(form)
changeForm("jin","robinson",665,"@gmail","sandiego","pokemon","pokemon","i like trains")
//console.log(form)
//jsonMaker();
//console.log(jsonForm)
