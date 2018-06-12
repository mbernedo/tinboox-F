/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var id = localStorage.getItem("usuario");

$(document).ready(function () {

    $("#libros").attr("href", "./libros.html?idUsuario=" + id);

    var jqxhr = $.get(URL + "kmean").done(function (data) {
        var jqxhr = $.get(URL + "getClusters?tipo=kmedoid&idUser=" + id).done(function (data) {
            if (data.cod === 1) {
                var arr = data.data;
                arr.forEach(function (item, index) {
                    $("#cluster").append("<tr>" +
                            "<th><a href='libros.html?idUsuario=" + item.idusuario + "' target='_blank'>Ver</a></th>" +
                            "<th>" + item.nombre + "</th>" +
                            "<td>" + item.apellido + "</td>" +
                            "</tr>");
                });
            }
        }).fail(function () {
            console.log("nel");
        });
    }).fail(function () {
        console.log("nel");
    });
});