$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / Div');
        comp_comp1.code = '<section id="cb-content-1-14">\
  <div class="cb-content14">\
    <div class="row">\
      <div class="nopaddingnomargin col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">\
        <div class="content h-100">\
          <h3>Serviço de Convivência e Fortalecimento de Vinculo</h3>\
          <p class="pt-2 pb-2">O Serviço de Convivência e Fortalecimento de Vínculos (SCFV) realiza atendimentos em grupo. São atividades artísticas, culturais, de lazer e esportivas, dentre outras, de acordo com a idade dos usuários.</p>\
          <a class="btn border border-primary" href="projects.html" target="_self">Saiba Mais</a>\
        </div>\
      </div>\
      <div class="col-lg-6 nopaddingnomargin col-xl-6 col-md-6 col-sm-6 col-12">\
        <div class="image" style="background-image: url(\'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjIwOTIyfQ&s=16e7a0ef9c5c392170f125974ea18eaf\');">\
</div>\
      </div>\
    </div>\
  </div>\
</section>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'Comp 2 / Div');
        comp_comp2.code = '<section id="cb-content-1-15">\
  <div class="cb-content15">\
    <div class="row">\
      <div class="col-lg-6 nopaddingnomargin col-xl-6 col-md-6 col-sm-6 col-12">\
        <div class="image" style="background-image:url(\'https://images.unsplash.com/photo-1506583477066-8a064a7700f3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ&s=fa12f71f51d3c70223dd072991bcc982\');">\
</div>\
      </div>\
      <div class="nopaddingnomargin col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">\
        <div class="content h-100">\
          <h3>Projetos Sociais</h3>\
          <p class="pt-2 pb-2">Os Projetos sociais desenvolvidos pela Instituição AMAVTRON, é o métodos encontrado para envolver os adolescentes as atividades da Instituição. O qual o propósito é único de contribuir com a comunidade na diminuição\
              de jovens envolvidos em atividades que possam corromper a sua liberdade de cidadania. Por sua vez, a Instituição, apresenta as oficinas através de projetos.</p>\
          <a class="btn border border-primary" href="projects.html" target="_self">Saiba Mais</a>\
        </div>\
      </div>\
    </div>\
  </div>\
</section>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2]);

        f.addLibSection(section);
   });
});