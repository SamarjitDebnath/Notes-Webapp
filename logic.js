function getAndUpdate() {
    let tit = document.getElementById("title").value;
    let kp = document.getElementById("takeNote").value;
    if (localStorage.getItem("itemJson") == null) {
        var itemArray = [];
        itemArray.push([tit, kp]);
        localStorage.setItem('itemJson', JSON.stringify(itemArray));
    }
    else {
        let itemArrayStr = localStorage.getItem("itemJson");
        itemArray = JSON.parse(itemArrayStr);
        itemArray.push([tit, kp]);
        localStorage.setItem('itemJson', JSON.stringify(itemArray));
    }
    update();
}
function update() {
    if (localStorage.getItem("itemJson") == null) {
        var itemArray = [];
        localStorage.setItem('itemJson', JSON.stringify(itemArray));
    }
    else {
        let itemArrayStr = localStorage.getItem("itemJson");
        itemArray = JSON.parse(itemArrayStr);
    }
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemArray.forEach((element, index) => {
        str += `                    
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td >
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-outline-danger" onclick="deleted(${index})">Delete</button></td>
            </tr>`;
    });
    tableBody.innerHTML = str;
}
let add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex) {
    let itemArrayStr = localStorage.getItem('itemJson');
    let itemArray = JSON.parse(itemArrayStr);
    itemArray.splice(itemIndex, 1);
    localStorage.setItem('itemJson', JSON.stringify(itemArray));
    update();
}

function clearAll() {
    if (confirm("This will remove all data")) {
        localStorage.clear();
        update();
    }

}


