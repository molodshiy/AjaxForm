/**
 * Created by ivan.datsiv on 6/13/2016.
 */

window.onload = function () {

    var formData = {};

    var button = document.getElementById("button");
    button.addEventListener("click", sendData);


    function sendData () {
        var dataObj = getFormData();
        var dataJSON = JSON.stringify(dataObj);

        //Дописати куда відправляти JSON або прописати action в формі
        console.log(dataJSON);

        showSuccess();
    }

    function getFormData () {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var currentLink = window.location.href;

        formData.name = name;
        formData.phone = phone;
        formData.currentLink = currentLink;

        return formData;
    }

    function showSuccess () {
        document.getElementById("dataForm").classList.add("hide");
        document.getElementById("success").classList.remove("hide");
        document.getElementById("success").classList.add("show");
    }
}