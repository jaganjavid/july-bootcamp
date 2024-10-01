

document.querySelector("#button-1").addEventListener("click", getText);

document.querySelector("#button-2").addEventListener("click", getJson);

document.querySelector("#button-3").addEventListener("click", getExternalData);

function getText(){
    fetch("text.txt").then(function(res){
       return res.text();
    }).then(function(data){
        document.querySelector("#output").innerText = data;
    }).catch(function(err){
        console.log(err);
    })
}


function getJson(){
    fetch("posts.json").then(function(res){
        return res.json();
    }).then(function(data){
        let output = "";
        data.forEach(function(post){
            output += `<li>${post.title}</li>`
        })

        document.querySelector("#output").innerHTML = output;

    }).catch(function(err){
        console.log("Some thing went worng");
    })
}

function getExternalData(){
    fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
        return res.json();
    }).then(function(data){
        let output = "";
        data.forEach(function(post){
            output += `<li>${post.name}</li>`
        })

        document.querySelector("#output").innerHTML = output;

    }).catch(function(err){
        console.log("Some thing went worng");
    })
}