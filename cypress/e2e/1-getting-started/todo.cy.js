/* /// <reference types="cypress" /> */

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

// describe('example to-do app', () => {

  //USUARIO
  
  
  // it('1 Verificar que se puedan ver juegos en la pantalla principal', () => {
  //   cy.visit('https://localhost:44396/')
    
  
  // })
  
  // })

  // it('2 Verificar que se vea todos los detalles del juego seleccionado', () => {
  //   cy.visit('https://localhost:44396/Acceso')
  //   cy.get('input[name="correo"]').type('tamayoalexisg.16@gmail.com');
  //   cy.get('input[name="clave"]').type('123456');
  //   cy.contains('button', 'Ingresar').click();
  //   cy.get('a.btn.btn-dark.mt-auto').eq(0).click();
   
  // })


  // it('3 Verificar que los juegos se agrupen por categorias', () => {
  //   cy.visit('https://localhost:44396/')
  //   cy.get('#c0').click();
  //   cy.wait(2000)
  //   cy.get('#btnaplicarfiltro').click();
    
  // })

  // it('6 Visualizar los juegos disponibles que se encuentran en la pantalla prinicipal ingresando como cliente', () => {
  //   cy.visit('https://localhost:44396/Acceso')
  //   cy.get('input[name="correo"]').type('tamayoalexisg.16@gmail.com');
  //   cy.get('input[name="clave"]').type('123456');
  //   cy.contains('button', 'Ingresar').click();
    
  // })

  // it('8 El cliente puede navegar y explorar los juegos disponibles dentro de una categoría específica.', () => {
  //   cy.visit('https://localhost:44396/Acceso')
  //   cy.get('input[name="correo"]').type('tamayoalexisg.16@gmail.com');
  //   cy.get('input[name="clave"]').type('123456');
  //   cy.contains('button', 'Ingresar').click();
  //   cy.wait(2000)
  //   cy.get('#m0').click();
  //   cy.wait(2000)
  //   cy.get('#btnaplicarfiltro').click();
    
  // })

  // it('8 El cliente puede navegar y explorar los juegos disponibles dentro de una categoría específica.', () => {
  //   cy.visit('https://localhost:44396/Acceso')
  //   cy.wait(2000)
  //   cy.contains('¿No tienes una cuenta? Registrate!').click();
  //   cy.wait(2000)
  //   cy.get('#txtnombre').type('Luis');
  //   cy.get('#txtapellidos').type('Marin');
  //   cy.get('#txtcorreo').type('luism@gmail.com');
  //   cy.get('#txtclave').type('123456');
  //   cy.get('#txtconfirmaclave').type('123456');
  //   //cy.contains('button', 'Crear Cuenta').click();

  // })

  // it('  24 Verificar que un cliente puede registrarse exitosamente en el sistema para realizar compras.  ', () => {
  //   cy.visit('https://localhost:44396/Acceso')
  //   cy.wait(2000)
  //   cy.contains('¿No tienes una cuenta? Registrate!').click();
  //   cy.wait(2000)
  //   cy.get('#txtnombre').type('Luis');
  //   cy.get('#txtapellidos').type('Quispe');
  //   cy.get('#txtcorreo').type('luim@gmail.com');
  //   cy.get('#txtclave').type('123456');
  //   cy.get('#txtconfirmaclave').type('123456');
  //   //cy.contains('button', 'Crear Cuenta').click();

  // })


  

  // it('25 cliente puede agregar un producto al carrito de compras.', () => {
  //   cy.visit('https://localhost:44396/Acceso')
  //   cy.get('input[name="correo"]').type('tamayoalexisg.16@gmail.com');
  //   cy.get('input[name="clave"]').type('123456');
  //   cy.contains('button', 'Ingresar').click();
  //   cy.get('button.btn.btn-warning.mt-auto.agregarcarrito').eq(1).click();
  //   cy.contains('a', 'Cart').click();
  //   cy.get('button.btn.btn-outline-danger.btn-eliminar').eq(0).click();
  // })

  // it('26 Ver el contenido del carrito de compras.', () => {
  //   cy.visit('https://localhost:44396/Acceso')
  //    cy.get('input[name="correo"]').type('tamayoalexisg.16@gmail.com');
  //    cy.get('input[name="clave"]').type('123456');
  //    cy.contains('button', 'Ingresar').click();
  //    cy.get('button.btn.btn-warning.mt-auto.agregarcarrito').eq(1).click();
  //    cy.contains('a', 'Cart').click();
  //  })


  //  it('28 Visualización y agrupación de juegos por marca. mediante cliente', () => {
  //   cy.visit('https://localhost:44396/')
  //   cy.get('#c0').click();
  //   cy.wait(2000)
  //   cy.get('#btnaplicarfiltro').click();
    
  // })
//   // MODO ADMIN
// describe('example to-do app', () => {
//   it('9 Se crea un nuevo usuario en el sistema con la información proporcionada por el usuario.', () => {
//     cy.visit('https://localhost:44355/Home/Usuarios');
//     cy.get('input[name="correo"]').type('vargassalcedoa33@gmail.com').should('have.value', 'vargassalcedoa33@gmail.com');
//     cy.get('input[name="clave"]').type('123456').should('have.value', '123456');
//     cy.contains('button', 'Iniciar Sesión').click();
//     cy.contains('a.nav-link', 'Usuarios').click();
//     cy.get('button.btn-success[onclick="abrirModal(null)"]').click();
//     cy.get('#txtnombres').type('Jhoel').should('have.value', 'Jhoel');
//     cy.wait(500);
//     cy.get('#txtapellidos').type('Malca').should('have.value', 'Malca');
//     cy.wait(500);
//     cy.get('#txtcorreo').type('jhoelmalca@gmail.com').should('have.value', 'jhoelmalca@gmail.com');
//     cy.wait(500);
//     cy.get('#cboactivo').select('1').should('have.value', '1');
//     cy.contains('button', 'Guardar').click();
//     cy.wait(500);
//     cy.reload();
//     cy.get('button.btn-danger.btn-sm.ms-2.btn-eliminar').eq(3).click();
//     cy.wait(500);
//     cy.contains('button.btn.btn-lg.btn-primary', 'Si').click();
//     cy.wait(500);
//     cy.reload();
//   });

//   it('11 El administrador puede ver una lista de usuarios registrados en el sistema.', () => {
//     cy.visit('https://localhost:44355/Home/Usuarios');
//     cy.get('input[name="correo"]').type('vargassalcedoa33@gmail.com').should('have.value', 'vargassalcedoa33@gmail.com');
//     cy.get('input[name="clave"]').type('123456').should('have.value', '123456');
//     cy.contains('button', 'Iniciar Sesión').click();
//     cy.contains('a.nav-link', 'Usuarios').click();
//     cy.get('table').should('be.visible');
//   });

//   it('12 El administrador puede encontrar y ver detalles específicos de un usuario buscando por su nombre de usuario o dirección de correo electrónico.', () => {
//     cy.visit('https://localhost:44355/Home/Usuarios');
//     cy.get('input[name="correo"]').type('vargassalcedoa33@gmail.com').should('have.value', 'vargassalcedoa33@gmail.com');
//     cy.get('input[name="clave"]').type('123456').should('have.value', '123456');
//     cy.contains('button', 'Iniciar Sesión').click();
//     cy.contains('a.nav-link', 'Usuarios').click();
//     cy.get('input[type="search"][aria-controls="tabla"]').type('Admin').should('have.value', 'Admin');
//     cy.contains('td', 'Admin').click().should('have.text', 'Admin');
//   });

//   it('13 La información del usuario se actualiza según las modificaciones realizadas por el administrador.', () => {
//     cy.visit('https://localhost:44355/Home/Usuarios');
//     cy.get('input[name="correo"]').type('vargassalcedoa33@gmail.com').should('have.value', 'vargassalcedoa33@gmail.com');
//     cy.get('input[name="clave"]').type('123456').should('have.value', '123456');
//     cy.contains('button', 'Iniciar Sesión').click();
//     cy.contains('a.nav-link', 'Usuarios').click();
//     cy.get('button.btn.btn-primary.btn-sm.btn-editar').eq(3).click();
//     cy.wait(3000);
//     cy.get('input#txtnombres.form-control').clear();
//     cy.get('#txtnombres').type('Anderson').should('have.value', 'Anderson');
//     cy.wait(3000);
//     cy.contains('button', 'Guardar').click();
//     cy.wait(3000);
//     cy.reload();
//     cy.contains('td', 'Anderson').click().should('have.text', 'Anderson');
//     cy.reload();
//   });

//   it('15 La contraseña de la cuenta del usuario se establece de acuerdo como se genera.', () => {
//     cy.visit('https://localhost:44355/Home/Usuarios');
//     cy.get('input[name="correo"]').type('tamayoalexisg.16@gmail.com').should('have.value', 'tamayoalexisg.16@gmail.com');
//     cy.get('input[name="clave"]').type('95ab87').should('have.value', '95ab87');
//     cy.contains('button', 'Iniciar Sesión').click();
//   });

//   it('16 La contraseña de la cuenta del usuario se actualiza cuando ingresas a loguearte y este aparecerá un apartado para cambiarla.', () => {
//     cy.visit('https://localhost:44355/Home/Usuarios');
//     cy.get('input[name="correo"]').type('tamayoalexisg.16@gmail.com').should('have.value', 'tamayoalexisg.16@gmail.com');
//     cy.get('input[name="clave"]').type('95ab87').should('have.value', '95ab87');
//     cy.contains('button', 'Iniciar Sesión').click();
//     cy.get('input[name="claveactual"]').type('95ab87').should('have.value', '95ab87');
//     cy.get('input[name="nuevaclave"]').type('123456').should('have.value', '123456');
//     cy.get('input[name="confirmarclave"]').type('123456').should('have.value', '123456');
//   });

//   it('19 Verificar que un administrador pueda agregar una nueva marca o categoria al catálogo.', () => {
//     cy.visit('https://localhost:44355/Home/Usuarios');
//     cy.get('input[name="correo"]').type('vargassalcedoa33@gmail.com').should('have.value', 'vargassalcedoa33@gmail.com');
//     cy.get('input[name="clave"]').type('123456').should('have.value', '123456');
//     cy.contains('button', 'Iniciar Sesión').click();
//     cy.contains('a.nav-link', 'Marcas').click();
//     cy.get('button.btn-success[onclick="abrirModal(null)"]').click();
//     cy.get('#txtdescripcion').type('Quiz').should('have.value', 'Quiz');
//     cy.contains('button.btn.btn-primary', 'Guardar').click();
//     cy.get('input[type="search"][aria-controls="tabla"]').type('quiz').should('have.value', 'quiz');
//     cy.contains('td', 'Quiz').click().should('have.text', 'Quiz');
//   });

//   it('21 Verificar que el administrador pueda modificar y eliminar la información de una marca o categoria del catálogo.', () => {
//     cy.visit('https://localhost:44355/Mantenedor/Marca');
//     cy.get('input[name="correo"]').type('vargassalcedoa33@gmail.com').should('have.value', 'vargassalcedoa33@gmail.com');
//     cy.get('input[name="clave"]').type('123456').should('have.value', '123456');
//     cy.contains('button', 'Iniciar Sesión').click();
//     cy.contains('a.nav-link', 'Marcas').click();
//     cy.get('button.btn-danger.btn-sm.ms-2.btn-eliminar').eq(5).click();
//     cy.wait(3000);
//     cy.contains('button.btn.btn-lg.btn-primary', 'Si').click();
//     cy.wait(3000);
//     cy.reload();
//     cy.get('input[type="search"][aria-controls="tabla"]').type('elementoInexistente').should('have.value', 'elementoInexistente');
//     cy.contains('td', 'elementoInexistente').should('not.exist');
//   });

//   it('22 El administrador cancela la eliminación en la ventana de confirmación.', () => {
//     cy.visit('https://localhost:44355/Mantenedor/Marca');
//     cy.get('input[name="correo"]').type('vargassalcedoa33@gmail.com').should('have.value', 'vargassalcedoa33@gmail.com');
//     cy.get('input[name="clave"]').type('123456').should('have.value', '123456');
//     cy.contains('button', 'Iniciar Sesión').click();
//     cy.contains('a.nav-link', 'Marcas').click();
//     cy.get('button.btn-danger.btn-sm.ms-2.btn-eliminar').eq(1).click();
//     cy.contains('button', 'No').click();
//     cy.wait(3000);
//     cy.get('button.btn-danger.btn-sm.ms-2.btn-eliminar').eq(1).should('be.visible');
//   });

//   it('23 Agregar un nuevo producto desde el panel de administración', () => {
//     cy.visit('https://localhost:44355/Mantenedor/Marca');
//     cy.get('input[name="correo"]').type('vargassalcedoa33@gmail.com').should('have.value', 'vargassalcedoa33@gmail.com');
//     cy.get('input[name="clave"]').type('123456').should('have.value', '123456');
//     cy.contains('button', 'Iniciar Sesión').click();
//     cy.contains('a.nav-link', 'Productos').click();
//     cy.get('button.btn-success[onclick="abrirModal(null)"]').click();
//     cy.get('#txtnombre').type('FREE FIRE').should('have.value', ('FREE FIRE'));
//     cy.get('#txtdescripcion').type('Juego de supervivencia').should('have.value', 'Juego de supervivencia');
//     cy.get('#cbomarca').select('1').should('have.value', '1');
//     cy.get('#cbocategoria').select('5').should('have.value', '5');
//     cy.get('#txtprecio').type('123.45').should('have.value', '123.45');
//     cy.get('#txtstock').type('100').should('have.value', '100');
//     cy.contains('button', 'Guardar').click();

//     cy.get('button.btn-eliminar').eq(3).click();
//     cy.contains('button', 'Si').click();
//   });
// });

  describe('final', ()=>{
    it('Verificar historial de compras',()=>{
      cy.visit('https://localhost:44396/Tienda/MisCompras')
      cy.get('input[name="correo"]').type('tamayoalexisg.16@gmail.com');
      cy.get('input[name="clave"]').type('123456');
      cy.contains('button', 'Ingresar').click();
      cy.get('#navbarDropdown').click();
      //cy.contains('Mis Compras').click();


    })
    


  })
    // it('6 Visualizar los juegos disponibles que se encuentran en la pantalla prinicipal ingresando como cliente', () => {
  //   cy.visit('https://localhost:44396/Acceso')
  //   cy.get('input[name="correo"]').type('tamayoalexisg.16@gmail.com');
  //   cy.get('input[name="clave"]').type('123456');
  //   cy.contains('button', 'Ingresar').click();
    
  // })