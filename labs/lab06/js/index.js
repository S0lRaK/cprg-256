function addToList() {
    
    let urlList = [];
    let url = document.getElementById('url');

    if (url.value != null)
        urlList.push(url.value);

    displayList(urlList);
    url.value = '';
}

function displayList(list) {
    const listElement = document.getElementById('list');

    list.forEach(function (url) {
        let prefix = 'http://www.';
        let link = document.createElement('a');
        link.href = prefix + url;
        link.target = "_blank";

        let linkText = url;
        link.innerHTML = linkText;

        let listItem = document.createElement('li');
        listItem.className = 'list-inline-item';
        listItem.append(link);

        listElement.append(listItem);
    });
}