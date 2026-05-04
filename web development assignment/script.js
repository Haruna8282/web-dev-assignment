
let balance = localStorage.getItem("balance") ||0;
document.addEventListener("DOMContentLoaded", () => {
    let bal = document.getElementById("balance");
    if (bal) bal.innerText = balance;
});

function registerUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("All fields required!");
        return false;
    }

    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    localStorage.setItem("balance", 0);

    alert("Account created!");
    return true;
}

function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("No account found!");
        return false;
    }

    if (email === user.email && password === user.password) {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid details!");
        return false;
    }
}

function deposit() {
    balance = parseInt(balance) + 1000;
    localStorage.setItem("balance", balance);
    document.getElementById("balance").innerText = balance;
}

function withdraw() {
    if (balance >= 500) {
        balance = parseInt(balance) - 500;
        localStorage.setItem("balance", balance);
        document.getElementById("balance").innerText = balance;
    } else {
        alert("Insufficient balance!");
    }
}