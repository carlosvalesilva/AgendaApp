/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #botao_informacao */
    
    
        /* button  #botao_informacao */
    $(document).on("click", "#botao_informacao", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pagina_informacao"); 
    });
    
        /* button  #botao_principal */
    $(document).on("click", "#botao_principal", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_12_17"); 
    });
    
        /* button  #botao_modalidade */
    $(document).on("click", "#botao_modalidade", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pagina_modalidade"); 
    });
    
        /* listitem  Musculação */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pagina_mod_musculacao"); 
    });
    
        /* listitem  Dança Aerobica */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pagina_mod_dancaaerobica"); 
    });
    
        /* listitem  Box */
    $(document).on("click", ".uib_w_13", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pagina_mod_box"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
