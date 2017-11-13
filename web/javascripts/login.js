/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $("#but_reg").click(function () {
        var name = $("#name").val();
        var lastName = $("#lastName").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var user = $("#userReg").val();
        var pwd = $("#passReg").val();
        var obj = {
            nombre: name,
            apellido: lastName,
            telefono: phone,
            email: email,
            usuario: user,
            password: pwd
        };
        $.ajax({
            type: "POST",
            url: URL + "registrar",
            processData: false,
            contentType: 'application/json',
            data: JSON.stringify(obj),
            success: function (r) {
                if (r.cod === 1) {
                    alert("Registro correcto");
                    location.reload();
                } else {
                    alert("Ocurrió un error");
                }
            }
        });
    });

    $("#login").click(function () {
        var user = $("#userLog").val();
        var pwd = $("#passLog").val();
        console.log(user);
        console.log(pwd);
        var obj = {
            usuario: user,
            password: pwd
        };
        $.ajax({
            type: "POST",
            url: URL + "login",
            processData: false,
            contentType: 'application/json',
            data: JSON.stringify(obj),
            success: function (r) {
                if (r.cod === 1) {
                    localStorage.setItem("usuario", r.idUser);
                    window.location.href = "principal.html";
                } else if (r.cod === 2) {
                    alert("Credenciales incorrectas");
                } else {
                    alert("Ocurrió un error");
                }
            }
        });
    });
});