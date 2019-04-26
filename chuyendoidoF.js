function chuyendoi() {
    let a=document.getElementById('soA').value;
    let b=document.getElementById('soB').value;
    if (!a){
        document.getElementById('soB').value='không được để trống';
    }
    else {
        b=(9*a)/5+32;
        document.getElementById('soB').value=b;
    }
}