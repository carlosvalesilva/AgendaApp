/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn_voltar */
    
    
        /* button  #btn_voltar */
    
    
        /* button  #btn_voltar */
    $(document).on("click", "#btn_voltar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_92_9"); 
    });
    
        /* listitem  #list_emissora1 */
    $(document).on("click", "#list_emissora1", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_emissora1"); 
    });
    
        /* listitem  #list_emissora2 */
    
    
        /* button  #btn_voltar3 */
    $(document).on("click", "#btn_voltar3", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_92_9"); 
    });
    
        /* listitem  #list_emissora3 */
    $(document).on("click", "#list_emissora3", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_emissora3"); 
    });
    
        /* listitem  #list_emissora2 */
    $(document).on("click", "#list_emissora2", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_emissora2"); 
    });
    
        /* button  #btn_voltar2 */
    $(document).on("click", "#btn_voltar2", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_92_9"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
