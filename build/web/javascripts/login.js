/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $("#but_reg").click(function () {
        ocultar("load", true);
        var name = $("#name").val();
        var lastName = $("#lastName").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var user = $("#userReg").val();
        var pwd = $("#passReg").val();
        if (name === "" || lastName === "" || phone === "" || email === "" || user === "" || pwd === "") {
            alert("Completar datos");
            ocultar("load", false);
        } else {
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
                        ocultar("load", false);
                        location.reload();
                    } else {
                        alert("Ocurrió un error");
                        ocultar("load", false);
                    }
                }
            });
        }
    });
    $("#login").click(function () {
        ocultar("load", true);
        var user = $("#userLog").val();
        var pwd = $("#passLog").val();
        if (user === "" || pwd === "") {
            alert("Completa datos");
            ocultar("load", false);
        } else {
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
                        ocultar("load", false);
                        window.location.href = "principal.html";
                    } else if (r.cod === 2) {
                        alert("Credenciales incorrectas");
                        ocultar("load", false);
                    } else {
                        alert("Ocurrió un error");
                        ocultar("load", false);
                    }
                }
            });
        }
    });
});
function ocultar(loader, valor) {
    if (valor) {
        $("#" + loader).removeClass("ocultar");
    } else {
        $("#" + loader).addClass("ocultar");
    }
}