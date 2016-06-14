/**
 * Created by ivan.datsiv on 6/13/2016.
 */

window.onload = function () {

    var formData = {};

    var button = document.getElementById("button");
    button.addEventListener("click", sendData);
    // Phone mask. Cuz we need to validate phone
    // example return will be {"name":"Dmitriy","phone":" +3 (044) 595-7023","currentLink":"file:///Users/destis/Documents/AjaxForm/index.html"}
    $("#phone").mask(" +3 (099) 999-99-99");



    function sendData () {
        var dataObj = getFormData();
        var dataJSON = JSON.stringify(dataObj);

        //�������� ���� ����������� JSON ��� ��������� action � �����
        // Can't catch your comment, cuz it's cyrillic ;(
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
