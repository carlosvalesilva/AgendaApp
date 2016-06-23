/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnLercodigo */
    $(document).on("click", "#btnLercodigo", function(evt)
    {
  
        //chama o metodo 'scan' do plugin barcodeScanner
        cordova.plugins.barcodeScanner.scan(
      function (result) {
          //Exibe a alerta com as funções capituradas
          alert("Código lido\n" +
                "Conteúdo: " + result.text + "\n" +
                "Formato: " + result.format + "\n" +
                "Cancelado: " + result.cancelled);
      }, 
      function (error) {
          alert("Leitura cancelada: " + error);
      }
     );   
          
    });
    
        /* button  #btnLercodigo */
    $(document).on("click", "#btnLercodigo", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  #btnLercodigo */
    $(document).on("click", "#btnLercodigo", function(evt)
    {
        /* your code goes here */ 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
