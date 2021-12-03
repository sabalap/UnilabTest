const api_url = "https://jsonplaceholder.typicode.com/posts";
async function getapi(url) {
    const response = await fetch(url);
    const data = await response.json();
    if(response) {
        hideloader();
    }
    show(data);
}
getapi(api_url);
function hideloader()  {
    document.getElementById("loading").style.display = "none"
}
function show(data) {
    let title = 
        ``;
    
    for (let r of data) {
        title += r.title;
    }
    document.getElementById("title").innerHTML = title;
}