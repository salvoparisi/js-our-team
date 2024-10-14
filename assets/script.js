const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let nomehtml=[]
let rolehtml=[]
let emailhtml=[]
let imghtml=[]

for(let i=0; i<teamMembers.length; i++){
  nomehtml[i]=document.getElementById(`card-name-${i}`)
  rolehtml[i]=document.getElementById(`card-role-${i}`)
  emailhtml[i]=document.getElementById(`card-email-${i}`)
  imghtml[i]=document.getElementById(`img-${i}`)
}

console.log(nomehtml, rolehtml, emailhtml, imghtml);

for(let i=0; i<teamMembers.length; i++){
  nomehtml[i].innerHTML=teamMembers[i].name
  rolehtml[i].innerHTML=teamMembers[i].role
  emailhtml[i].innerHTML=teamMembers[i].email
  imghtml[i].innerHTML=`<img src="./assets/${teamMembers[i].img}" class="img-fluid rounded-start" alt="...">`
}
