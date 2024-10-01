

class OurHttp {

    // Make an Get Request

    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("Some thing went worng"));
        })
    }

    // Make and Post Request

    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:"POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    // Make and Update Request

    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:"PUT",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

     // Make and Delete Request

     delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:"DELETE",
                headers:{
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
            .then(data => resolve("Resource Delete"))
            .catch(err => reject(err));
        })
    }

} 