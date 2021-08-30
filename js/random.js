const localBuddies = ()=> {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data =>displayBudies(data) );
}
localBuddies();

const displayBudies = data =>{
const buddies = data.results;
const divBuddies = document.getElementById('buddies');

for (const buddy of buddies){
  console.log(buddy);
//   console.log(buddy.email);
const p = document.createElement('p');
// p.innerText = buddy.email;
// dynamicallty dekhar jonno
p.innerText = `Name : ${buddy.name.title}  ${buddy.name.first}  ${buddy.name.last}
Age : ${buddy.dob.age}
Gender : ${buddy.gender}
 Email: ${buddy.email}
 Country : ${buddy.location.country}
 Phone No : ${buddy.phone}`
divBuddies.appendChild(p);
}
}