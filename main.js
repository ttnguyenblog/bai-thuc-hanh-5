function thuchien() {
    var txtChuoi = document.getElementById("txtChuoi").value.trim();

    if (txtChuoi == "") {
        alert("Vui lòng nhập nội dung");
        document.getElementById("txtChuoi").focus();
        return;
    }

    var array = txtChuoi.split(",");
    var select = document.getElementById("ddlDanhsach");
    var length = select.options.length;
    for (var i = 0; i < length; i++) {
           select.remove(select.options[0]);
    }
    array.forEach(function (op) {
           op = op.trim();
           if (op != "") {
                   var option = document.createElement("option");
                   option.text = op;
                   select.add(option);
           }
    });
}

function change() {
    var selectBox = document.getElementById('ddlDanhsach');
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    alert("Bạn đã chọn mục: " + selectedValue);
}

function huy() {
    document.getElementById("txtChuoi").value = "";
}
