const qrimg = document.getElementById('qrimg');
    const input = document.getElementById('inputtext');
    const container = document.getElementsByClassName('container');

window.onload = clear();
    function generateqr() {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        qrimg.onload = function () {
            qrimg.classList.add('qrimgshow');
            
        }
    }

    function clear(){
        input.value = '';
    }