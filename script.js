// Banner input ontype active
const inputClicks = document.querySelectorAll(".input-click");
inputClicks.forEach(function (inputClick) {
    inputClick.addEventListener('focus', function () {
        const parentDiv = this.parentElement;
        parentDiv.classList.add('active');
    })

    inputClick.addEventListener('blur', function () {
        const parentDiv = this.parentElement;
        parentDiv.classList.remove('active');
    })
});

// Navbar button click
const navBtnClick = document.querySelectorAll(".navbar-button");
navBtnClick.forEach((btnClick) => {
    btnClick.addEventListener('click', function () {
        // Page active
        const divPage = document.querySelectorAll(".banner");
        divPage.forEach(div => div.classList.remove("active"));
        const divPageId = this.id.replace("Button", '');
        const targetDiv = document.getElementById('banner-' + divPageId);
        targetDiv.classList.add("active");

        // Button active
        navBtnClick.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        if (divPageId == "Question") {
            sendBtnId.disabled = false;
        }else{
            sendBtnId.disabled = true;
        }
        
    })
})

// Responses table
const sendBtnId = document.getElementById('send-id');

const userArray = [];

// response, click send button
sendBtnId.addEventListener('click', function () {
    const formData = document.getElementById('formID');
    const inputs = formData.querySelectorAll('input');
    let values = [];
    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            values.push(input.value.trim())
        }
    })
    userArray.push({
        fullname: values[0],
        company: values[1],
        phone: values[2],
        email: values[3],
    })
    formData.reset();
    responses();

});

responses();

// response function
function responses() {
    document.getElementById('count-users').innerHTML = userArray.length;
    let no = 1;
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    userArray.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <tr>
                <td>${no}</td>
                <td>${item.fullname}</td>
                <td>${item.company}</td>
                <td>${item.phone}</td>
                <td>${item.email}</td>
            </tr>
        `;
        tableBody.appendChild(row);
        no++;
    });
}