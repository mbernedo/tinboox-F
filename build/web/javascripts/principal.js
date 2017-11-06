/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var id = localStorage.getItem("usuario");

$(document).ready(function () {

    var jqxhr = $.get(URL + "getBooks?idUser=" + id).done(function (data) {
        if (data.cod === 1) {
            var arr = data.data;
            arr.forEach(function (item, index) {
                $("#books").append("<tr>" +
                        "<th>" + item.idBook + "</th>" +
                        "<td>" + item.titulo + "</td>" +
                        "<td>" + item.genero + "</td>" +
                        "<td><button class='btn btn-success'>Si</button><button class='btn btn-danger'>No</button></td>" +
                        "</tr>");
            });
        }
    }).fail(function () {
        console.log("nel");
    });
});