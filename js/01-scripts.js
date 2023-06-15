//||

let recorrido;
// recorrido=document.head;
// recorrido=document.domain;
// console.log(recorrido);
// const sociales=document.getElementsByClassName('sociales');
// console.log(sociales);
// document.write('hola');
// recorrido=document.links;
// console.log(recorrido);s
// recorrido=document.links[24];
// console.log(recorrido);
// recorrido=document.images;
// console.log(recorrido);
//clasname{{{{{}}}}}
// const encabezado=document.getElementsByClassName('contenedor');
// console.log(encabezado);
//id----------------------
// const encabezado=document.getElementById('footer0');
// console.log(encabezado);
//query
// const ola =document.querySelector('.contenido-hero h1').textContent='Camilo Estevan Tacue Salazar';
// console.log(ola.textContent );
// console.log(ola.innerHTML );
// //all=todo

// let usuario=parseInt(prompt('1.motero 2.motoposada 3.usuario'));
//  const traves=document.querySelector('.navegacion');

// while(usuario!==1 || usuario!==2 || usuario!==3){
//     switch(usuario){
//         case 1:
//             const motero='Bienvenido motero';
//                 document.querySelector('.contenido-hero h1').textContent=motero;
//             traves.firstElementChild.textContent='Rutas '
//             traves.children[1].textContent=' garaje'
//             traves.children[2].textContent=''
//             traves.lastElementChild.textContent='Presupuesto'
//             break;
//             case 2:
//                 const motoposada='Bienvenido motoposada';
//                 document.querySelector('.contenido-hero h1').textContent=motoposada;
//                 traves.firstElementChild.textContent='Ubicacion'
//                 traves.children[1].textContent='calificacion'
//                 traves.children[2].textContent=''
//                 traves.lastElementChild.textContent=''
//                 break;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
//                 case 3:
//                     const usuario='Bienvenido al mundo de rpm';
//                     document.querySelector('.contenido-hero h1').textContent=usuario;
//                     break;
//                     default:
//                         alert('usuario incorrecto');
//                         usuario=parseInt(prompt('1.motero 2.motoposada 3.usuario'));
//      }
// const children=document.querySelector('.navegacion');
// console.log(children.children[2]);
// // -------------------------------------------------------------------------------------------
// const ola =document.querySelector('.contenido-hero h1').textContent='Camilo Estevan Tacue Salazar';
// console.log(ola.textContent );
// console.log(ola.innerHTML );
// // ------------------------------------------------------------
// const tarjeta=document.querySelector('.contenedor-cards');
// console.log(tarjeta.children[1].children[0]);
// tarjeta.children[1].children[0].src='img/hacer4.jpg';
// //----------------------------------------------------
// const primerenlace=document.querySelector('a')
// console.log(primerenlace);
// primerenlace.remove();
// //--------------------------------------------------
// const borrar=document.querySelector('.navegacion');
// borrar.removeChild(borrar.children[2]);
//------------------------------------------
const enlace=document.createElement('a');
enlace.textContent='Camilo Tacue';
enlace.href='https://www.youtube.com/watch?v=-KdGmnEcC4k';
enlace.target='_blank';
console.log(enlace);
const add=document.querySelector('.navegacion');
add.appendChild(enlace);
//---------------------------------------------
function alerta(){
    alert("Hola bienvenido a clasiquitos de los 80'/90'");
}
enlace.onclick=alerta;
//---------------------------
const parrafo1=document.createElement('p');
parrafo1.textContent='Camilo Estevan';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');
//---------------------------
const parrafo2=document.createElement('p');
parrafo2.textContent='Tacue Salazar';
parrafo2.classList.add('titulo');
//---------------------------------------------
const parrafo3=document.createElement('p');
parrafo3.textContent='ADSO 2556678';
parrafo3.classList.add('precio');
//------------------------------------------
const info=document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
//-------------------
const imagen=document.createElement('img');
imagen.src='img/hacer1.jpg';    
//--------------------------------------
const card =document.createElement('div');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);
//------------------------------
const contenedor=document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
//----------------------------------------------------
//listener
const btnflotante=document.querySelector('.btn-flotante');
const footer=document.querySelector('.footer');
btnflotante.addEventListener('click',()=>{
    alert('Hola');
})












































































































































































































































































































































































































































































