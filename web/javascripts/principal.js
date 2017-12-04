/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var id = localStorage.getItem("usuario");

$(document).ready(function () {

    $("#libros").attr("href", "./libros.html?idUsuario=" + id);

    var jqxhr = $.get(URL + "getBooks?idUser=" + id).done(function (data) {
        if (data.cod === 1) {
            var arr = data.data;
            arr.forEach(function (item, index) {
                $("#books").append("<tr>" +
                        "<td>" + item.titulo + "</td>" +
                        "<td>" + item.genero + "</td>" +
                        "<td>" +item.numpag + "</td>"+
                        "<td>" +item.editorial + "</td>"+
                        "<td>" +item.autor + "</td>"+
                        "<td><button class='btn validar btn-success' id='" + item.idBook + "'>Like</button></td>" +
                        "</tr>");
            });
            $(".validar").bind("click", function () {
                var libro = $(this).attr("id");
                var obj = {
                    usuario: id,
                    libro: libro
                };
                $.ajax({
                    type: "POST",
                    url: URL + "valorar",
                    processData: false,
                    contentType: 'application/json',
                    data: JSON.stringify(obj),
                    success: function (r) {
                        if (r.cod === 1) {
                            alert("Correcto");
                            location.reload();
                        } else {
                            alert("Ocurrió un error");
                        }
                    }
                });
            });
        }
    }).fail(function () {
        console.log("nel");
    });


});