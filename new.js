const container = document.querySelector(".container")
window.addEventListener("load",async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();
    console.log(data)
    data.forEach((user) => {
        createuser(user);
    });
});
const Idh=document.createElement("td")
Idh.innerHTML="id";
Idh.className="d"
container.appendChild(Idh)
const nameh=document.createElement("td")
nameh.innerHTML="name";
nameh.className="d"
container.appendChild(nameh);
const unameh=document.createElement("td")
unameh.className="d"
unameh.innerHTML="username";
container.appendChild(unameh);
const emailh=document.createElement("td")
emailh.innerHTML="Email";
emailh.className="d"
container.appendChild(emailh);
const adh=document.createElement("td")
adh.innerHTML="Address";
adh.className="d"
container.appendChild(adh);
const phn=document.createElement("td")
phn.innerHTML="Phone No.";
phn.className="d"

container.appendChild(phn);
const opt=document.createElement("td")
opt.innerHTML="Option";
opt.className="d"
container.appendChild(opt)


function createuser(user) {
    const {  id,name,username,email,address,phone} = user;
    const userDiv = document.createElement("tr")
    userDiv.className = "user"
     
    const Id= document.createElement("td")
    Id.className="main"
    Id.innerHTML = id;
    const nameDiv = document.createElement("td")
    nameDiv.className="main1";
    nameDiv.innerHTML = name;
    const usernameDiv=document.createElement("td");
    usernameDiv.className="main"
    usernameDiv.innerHTML=username;
    const emailDiv=document.createElement("td")
    emailDiv.className="main1"
    emailDiv.innerHTML=email
    const adDiv=document.createElement("td")     
    adDiv.className="main"
    adDiv.innerHTML=address.street;
    const pDiv=document.createElement("td")     
    pDiv.innerHTML=phone;
    pDiv.className="main1"
    const button=document.createElement("td")
   button.className="c"

    const link1=document.createElement("a")
    const link2=document.createElement("a")
    link1.href="weektask1.html?userId="+id
    link1.innerHTML="TODO" 
    link2.innerHTML="Album"
    link2.href="grid.html"
    button.appendChild(link1)
    button.appendChild(link2)

    userDiv.appendChild(Id)
    userDiv.appendChild(nameDiv)
    userDiv.appendChild(usernameDiv)
    userDiv.appendChild(emailDiv)
    userDiv.appendChild(adDiv)
    userDiv.append(pDiv)
    userDiv.append(button)
    container.appendChild(userDiv)
} 