/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    var param = window.location.search.substr(1);
    var val = param.split("=");
    var id = val[1];
    var jqxhr = $.get(URL + "getMyBooks?idusuario=" + id).done(function (data) {
        if (data.cod === 1) {
            var arr = data.data;
            arr.forEach(function (item, index) {
                $("#books").append("<tr>" +
                        "<th>" + item.titulo + "</th>" +
                        "<td>" + item.genero + "</td>" +
                        "<td>" + item.numpag + "</td>" +
                        "<td>" + item.editorial + "</td>" +
                        "<td>" + item.autor + "</td>" +
                        "</tr>");
            });
        }
    }).fail(function () {
        console.log("nel");
    });
});