/**
 * Created by ivan.datsiv on 6/13/2016.
 */

window.onload = function () {

    document.getElementById("success").style.display = "none";

    var formData = [];

    var button = document.getElementById("button");

    button.addEventListener("click", sendData);


    function sendData () {

        console.log(getFormData());
        showSuccess();
    }

    function getFormData () {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;

        formData.push(name);
        formData.push(phone);

        return formData;
    }

    function showSuccess () {
        document.getElementById("dataForm").style.display = "none";
        document.getElementById("success").style.display = "block";
    }
}