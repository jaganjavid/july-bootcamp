
const http = new OurHttp();

// Get User

http.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(err => console.log(err));

const user = {
    name:"jagan javid",
    username:"jagan_javid",
    email:"jj@gmail.com"
}

http.post("https://jsonplaceholder.typicode.com/users",user)
.then(data => console.log(data))
.catch(err => console.log(err));

http.put("https://jsonplaceholder.typicode.com/users/1",user)
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete("https://jsonplaceholder.typicode.com/users/5",user)
.then(data => console.log(data))
.catch(err => console.log(err));
