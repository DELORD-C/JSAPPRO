let time;

document.getElementById('search').oninput = function () {
    let value = this.value;
    if (value.length > 0) {
        clearTimeout(time);
        document.getElementById("load").style.display = "block";
        document.getElementById("list").innerHTML = "";
        time = setTimeout(function(){
            let result = API.search(value);
            result.then((apiRes) => {
                document.getElementById("load").style.display = "none";
                for (let item of apiRes) {
                    let li = document.createElement('li');
                    li.innerHTML = "<a href='" + item.link + "'>" + item.Link + "</a>";
                    document.getElementById("list").append(li);
                }
            });
        }, 1000);
    }
};

class API {
    static url = "https://api.publicapis.org/entries";
    
    static async search (string) {
        return new Promise((resolve) => {
            fetch(this.url).then(function(result) {
                result.json().then(function(json){
                    resolve(json.entries.filter(entrie => entrie.API.toLowerCase().includes(string.toLowerCase())));
                });
            })
        })
    }
}