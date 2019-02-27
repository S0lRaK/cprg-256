function addToList() {
    let urlList = [];
    let url = document.getElementById('input-url').value;
    
    if (url)
        urlList.push(url);

    displayList(urlList);
}

function displayList(list) {
    const listElement = document.getElementById('list');

    list.forEach(function (url) {
        
    });
}