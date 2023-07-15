console.log("Script Connected..")

const qr_input = document.querySelector('.text_input')
const qr_form = document.querySelector('#qr_form')

let qr_code

function generate_qr_code(qr_content) {
    return new QRCode("display_qr", {
        text: qr_content,
        width: 256,
        height: 256,
        colorLight: '#ffffff',
        colorDark: '#000000',
        correctLevel: QRCode.CorrectLevel.H,
    })
}

qr_form.addEventListener('submit', function (e) {
    e.preventDefault()
    let qr_content = qr_input.value
    // console.log(qr_content)
    if (qr_code == null) {
        qr_code = generate_qr_code(qr_content)
    }
    else {
        qr_code.makeCode(qr_content)
    }
})