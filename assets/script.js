const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];
//dichiariamo la variabile dove stamperemo le cards
let cards=document.getElementById('cards')
//con un ciclo for stampiamo le variabili
function cicloHTML(){
  cards.innerHTML=""
  for(let i=0; i<teamMembers.length; i++){
    cards.innerHTML+=`
    <div class="col-6 col-xl-4 col-md-6 col-sm-4 ">
        <div class="card m-2 bg-black text-white" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
                <div>
                  <img src="${teamMembers[i].img}" class="img-fluid rounded-start" alt="...">
                </div>  
            </div>
            <div class="col-md-8 p-3">
                <div class="card-body d-flex flex-column justify-content-between p-0 h-100">
                <h5 class="card-title">${teamMembers[i].name}</h5>
                <p class="card-text m-0">${teamMembers[i].role}</p>
                <p class="card-text text-info">${teamMembers[i].email}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    `
  }
}

cicloHTML();

//bonus
let newMembers
let memberBtn=document.getElementById('memberBtn')
let formValue=[]
let formInput=[]
for (let i = 0; i < 4; i++) {
  formValue[i]=document.getElementById(`form${i}`);
}
console.log(formValue);

memberBtn.addEventListener('click', function(){
  for (let i = 0; i < 4; i++) {
    formInput[i]=formValue[i].value;
    if(formInput[i]==''){
      alert('compila tutti i campi')
      throw new Error('dati incompleti')
    }
  }
  newMembers={
    name: formInput[0],
    role: formInput[1],
    email: formInput[2],
    img: formInput[3]
  }
  
  teamMembers.push(newMembers)
  console.log(teamMembers);
  cicloHTML()
})

