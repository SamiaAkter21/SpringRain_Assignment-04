//fetch data by async/await
async function getDataByAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return users;
}


//fetch data by Promise
function getDataByPromise() {
    return new Promise((resolve, reject)=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if(!response.ok){
                    throw new Error(error);
                }
            return response.json();         
        })
        .then((users) =>{
            resolve(users);
        });
    });
}
 

//Display data

let dataFetched = false;


function display(users){
    const button = document.querySelector('show');
    const tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];

    if(dataFetched) 
    { 
        tableBody.innerHTML = "";
        dataFetched = false;
        //button.innerText = 'Show Users Information';
    } 
    else 
    {
        tableBody.innerHTML = "";

        tableBody.innerHTML=`<thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
        </thead>`
        
        users.map((user) => {
        tableBody.innerHTML+= `<tbody
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
        </tr>
        </tbody>`
        });

        dataFetched = true;

        //button.innerText = 'Hide Information';
    }
}
