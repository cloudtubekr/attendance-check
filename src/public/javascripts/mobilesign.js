const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    //action="/sign"
    if(e.target.nick.value === '') {
        e.preventDefault();
        alert("아이디를 입력하세요");
    } else if(e.target.password.value === '') {
        e.preventDefault();
        alert("비밀번호를 입력하세요");
    } else if(e.target.repassword.value === '') {
        e.preventDefault();
        alert("비밀번호를 입력하세요");
    } else if(e.target.name.value === '') {
        e.preventDefault();
        alert("이름을 입력하세요");
    } else if(e.target.subject.value === '') {
        e.preventDefault();
        alert("담당과목을 입력하세요");
    } else if(e.target.class.value === '') {
        e.preventDefault();
        alert("담당학년을 입력하세요");
    } else if (e.target.password.value !==  e.target.repassword.value) {
        e.preventDefault();
        alert("비밀번호 확인을 해주세요");
    } else if(e.target.repassword.value.length < 7) {
        e.preventDefault();
        alert("비밀번호를 7글자 이상 입력해주세요");
    }
    // else {
    //     const body = {
    //         id: e.target.id.value,
    //         password: e.target.password.value,
    //         repassword: e.target.repassword.value,
    //         name: e.target.name.value,
    //         subject: e.target.subject.value,
    //         class: e.target.class.value,
    //     };

    //     const xhr = new XMLHttpRequest();
    //     xhr.onload = function() {
    //         const HTMLbody = document.querySelector("html");
    //         HTMLbody.innerHTML = '';
    //         HTMLbody.innerHTML = xhr.responseText;  
    //         //form.action = "/mobileloginafter.html";
    //     };

    //     xhr.open("POST", "/sign");
    //     xhr.setRequestHeader("Content-Type", "application/json");
    //     xhr.send(JSON.stringify(body));
    // }
});