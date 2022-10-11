const formulario = document.querySelector('#formulario')
const inputNombre = document.querySelector('#input-name')
const inputNum = document.querySelector('#input-number')
const list = document.querySelector('#lista')
const inputs = document.querySelectorAll('.formulario-input')
const Btnsave = document.querySelector('#btn-guardar')
const delateBtn = document.querySelectorAll('.delate')
const element = document.querySelector('.elementos')
const errorMenssage = document.querySelector('.error')
const nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
const PHONE_REGEX = /^([0-9]){3}-[0-9]{7}$/;  
console.log(PHONE_REGEX);
console.log(nombre);
formulario.addEventListener('submit', e => {
    e.preventDefault();
    const name = inputNombre.value;
    console.log(name);
    const num = inputNum.value;
    console.log(num);
    const listItem = document.createElement('li');
    console.log(listItem);
    listItem.innerHTML = `
    ${name} ${num} 
    <button class="delete">X</button>`;
    listItem.classList.add('elemento')
    list.append (listItem)
    inputNombre.value = " ";
    inputNum.value =" ";
    localStorage.setItem('lista', list.innerHTML)
    

    Btnsave.setAttribute('disabled', 'true')
         
    });
    list.innerHTML = localStorage.getItem('lista');



    
    list.addEventListener('click', e => {
        console.log(e.target);
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
            localStorage.setItem('lista',list.innerHTML)
        };
        })

        list.innerHTML = localStorage.getItem('lista');



    


    // inputNum.addEventListener('input', e => {
    //     const Valido = PHONE_REGEX.test(e.target.value);
    //     console.log(Valido);
    // })

inputNum.addEventListener('input', e => {
    const isValid = PHONE_REGEX.test(e.target.value);
    console.log(e.target.value);
    // console.log(isValid);
    if (isValid) {
        Btnsave.removeAttribute('disabled', 'true');
        // console.log(1);
        errorMenssage.classList.remove('show');
        inputNum.classList.add('correcto');
        inputNum.classList.remove('wrong');
        
        
    } else {
        Btnsave.setAttribute('disabled', 'true')
        // console.log(2);
        errorMenssage.classList.add('show');
        inputNum.classList.remove('correcto');
        inputNum.classList.add('wrong');
        
    }
})
inputNombre.addEventListener('input', e => {
    const Valid = nombre.test(e.target.value);
    console.log(Valid);
    if (Valid) { 
        
        inputNombre.classList.add('correcto');
        inputNombre.classList.remove('wrong');
        
    } else {
        // console.log(3);
        Btnsave.setAttribute('disabled', 'true')
        inputNombre.classList.remove('correcto');
        inputNombre.classList.add('wrong');

    }
})

// const Valid = nombre.test(e.target.value);
// while (Valid === false) {
//     Btnsave.setAttribute('disabled', true)
// }

    
// const validarFormulario = (e => {
//     switch (e.target.name) {
//         case "Nombre":
//         if (expresiones.nombre.test(e.target.value)) {
//             document.querySelector('#input-name').classList.remove('formulario-input-incorrecto')
//             document.querySelector('#input-name').classList.add('formulario-input-correcto')

            
//         } else {
            
//             document.querySelector('#input-name').classList.add('formulario-input-incorrecto')
//             document.querySelector('#input-name').classList.remove('formulario-input-correcto')

           
//         }
//         break;

//         case "Numero":
//             if (expresiones.telefono.test(e.target.value)) {
//                 document.querySelector('#input-number').classList.remove('formulario-input-incorrecto')
//                 document.querySelector('#input-number').classList.add('formulario-input-correcto')
    
                
//             } else {
                
//                 document.querySelector('#input-name').classList.add('formulario-input-incorrecto')
//                 document.querySelector('#input-name').classList.remove('formulario-input-correcto')
    
               
//             }
            
//         break;

//     };

   
    

// })
// inputs.forEach(input => {
//     input.addEventListener('keyup', validarFormulario);
//     input.addEventListener('btur', validarFormulario);
// })
// formulario.addEventListener('submit', e => {
//     e.preventDefault();
    