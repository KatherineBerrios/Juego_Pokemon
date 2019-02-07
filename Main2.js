/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener('load',function(){
    
    document.getElementById('btnRegistrar').addEventListener('click', function(){
        var nombre=document.getElementById('txtNombre').value;
        var contraseña=document.getElementById('passwordPass').value;
        var email=document.getElementById('emailEmail').value;        
        var telefono=document.getElementById('telTelefono').value;        
            
        var bandera=false;
        
        if(nombre.length >0 && contraseña.length >0 && email.length >0 && telefono.length >0){
            bandera=true;
        }
        
        if(bandera){
            document.getElementById('formInicio').submit();
        }else{
            alert('Faltan campos por rellenar.');
        }
    });

});

