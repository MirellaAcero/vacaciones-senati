 $(document).ready(function() {

  $('#myNavbar ul li a').click(function() {
    $('#myNavbar ul li a').removeClass('active');
    $(this).addClass('active');
    var link = $(this);
    var anchor  = link.attr('href');
    if ($('html').width() < 767) {
      var top = 60;
    }
    else {
      var top = 80;
    }
    $('html, body').stop().animate({
      scrollTop: jQuery(anchor).offset().top + -top
    }, 2000);
    return false;
  });
 
  $('#accordion').accordion({
    heightStyle: "content", 
    collapsible: true,
    active: false
  });

  $('#accordion .accordion-container').each(function(i) {
    var content = $(this).find('.accordion-options > h2 > div:first').html();
    $(this).find('.accordion-content').html(content).addClass('active');
    $(this).find('.accordion-options > h2:first').addClass('active');
  });

  $('#accordion .accordion-container .accordion-options > h2').click(function() {
    var content = $(this).find('div').html();
    $(this).parent().parent().find('.accordion-content').html(content);
    $(this).parent().find('h2').removeClass('active');
    $(this).addClass('active');
  });

  $('input[type="checkbox"]').click(function() {
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
    }
    else {
      $(this).parent().addClass('active');
    }
  });

  $('#block-form').validate({
    messages: {
      firstname: "El nombre es requerido",
      lastname: "El apellido es requerido",
      dni: "El DNI es requerido",
      age: "La edad es requerida",
      email: {
        required: "El correo es requerido", 
        email: "Por favor ingrese un correo válido"
      },
      phone: "El teléfono es requerido",
      department: "El departamento es requerido",
      sede: "La sede es requerido",
      workshop: "El taller es requerido",
      terms: "Debe aceptar los términos y condiciones"
    }
  });

  $("#field-department").change(function() {
    var element = $(this).find('option:selected'); 
    var myTag = element.attr("myTag");
    var optionsSede = '<option selected="selected" value="">Sede</option>' + eval(myTag);
    var optionsWorkshop = '<option selected="selected" value="">Curso o taller de interes</option>';
    $('#field-sedes').html(optionsSede);
    $('#field-workshops').html(optionsWorkshop);
  });

  $("#field-sedes").change(function() {
    var element = $(this).find('option:selected');
    var myTag = element.attr("myTag");
    var optionsWorkshop = '<option selected="selected" value="">Curso o taller de interes</option>' + eval(myTag);
    $('#field-workshops').html(optionsWorkshop);
  });

  // Sedes

// LIMA
  var optiond1 = 
    '<option myTag="optiond1s1">Lima Norte (Independencia)</option>' + 
    '<option myTag="optiond1s2">Cercado de Lima</option>' + 
    '<option myTag="optiond1s3">Surquillo</option>' + 
    '<option myTag="optiond1s4">San Juan de Miraflores</option>' + 
    '<option myTag="optiond1s5">Ventanilla</option>' + 
    '<option myTag="optiond1s6">Villa El Salvador</option>';

// ANCASH
  var optiond2 = 
    '<option myTag="optiond2s1">Chimbote</option>' + 
    '<option myTag="optiond2s2">Huarmey</option>' + 
    '<option myTag="optiond2s3">Casma</option>' + 
    '<option myTag="optiond2s4">Huaraz</option>';

// AREQUIPA

  var optiond3 = 
    '<option myTag="optiond3s1">Arequipa</option>' + 
    '<option myTag="optiond3s2">Juliaca</option>';

// CAJAMARCA

  var optiond4 = 
    '<option myTag="optiond4s1">Cajamarca</option>';

// ICA

  var optiond5 = 
    '<option myTag="optiond5s1">Ica</option>' + 
    '<option myTag="optiond5s2">Ayacucho</option>' + 
    '<option myTag="optiond5s3">Chincha</option>' + 
    '<option myTag="optiond5s4">Pisco</option>';


  // JUNIN

  var optiond6 = 
    '<option myTag="optiond6s1">Huancayo</option>' + 
  	'<option myTag="optiond6s2">La Oroya</option>' + 
  	'<option myTag="optiond6s3">Cerro de Pasco</option>' + 
  	'<option myTag="optiond6s4">La Merced</option>' + 
  	'<option myTag="optiond6s5">Satipo</option>';

  // LORETO

  var optiond7 = 
    '<option myTag="optiond7s1">Iquitos</option>' + 
    '<option myTag="optiond7s2">Yurimaguas</option>';

  // LA LIBERTAD

  var optiond8 = 
    '<option myTag="optiond8s1">Trujillo</option>' + 
    '<option myTag="optiond8s2">Trujillo - Húsares</option>' + 
    '<option myTag="optiond8s3">Chepén</option>' + 
    '<option myTag="optiond8s4">Laredo</option>' + 
    '<option myTag="optiond8s5">Virú</option>';

  // CUSCO

  var optiond9 = 
    '<option myTag="optiond9s1">Cusco</option>' + 
    '<option myTag="optiond9s2">Abancay</option>' + 
    '<option myTag="optiond9s3">Madre de Dios</option>';

  // LAMBAYEQUE

  var optiond10 = 
    '<option myTag="optiond10s1">Chiclayo</option>';

  // MOQUEGUA - TACNA

  var optiond11 = 
    '<option myTag="optiond11s1">Tacana</option>' + 
    '<option myTag="optiond11s2">Ilo</option>';

  // SAN MARTIN

  var optiond12 = 
    '<option myTag="optiond12s1">Moyobamba</option>' + 
    '<option myTag="optiond12s2">Tarapoto</option>';


  // PIURA - TUMBES

  var optiond13 = 
	'<option myTag="optiond13s1">Piura</option>' + 
    '<option myTag="optiond13s2">Tumbes</option>' + 
    '<option myTag="optiond13s3">Paita</option>' + 
    '<option myTag="optiond13s4">Sechura</option>' + 
    '<option myTag="optiond13s5">Talara</option>' + 
    '<option myTag="optiond13s6">Sullana</option>';

  // UCAYALI - HUANUCO

  var optiond14 = 
    '<option myTag="optiond14s1">Huánuco</option>' + 
	'<option myTag="optiond14s2">Pucallpa</option>' + 
    '<option myTag="optiond14s3">Tingo María</option>';

  // Workshops

  // LIMA - CALLAO

  var optiond1s1 = 
    '<option myTag="optiond1s1w1">Arduino y Domótica Junior</option>' + 
    '<option myTag="optiond1s1w2">Robótica con Lego</option>' + 
    '<option myTag="optiond1s1w3">Diseño Web Junior</option>' + 
    '<option myTag="optiond1s1w4">Diseño y Animación 3D</option>' + 
    '<option myTag="optiond1s1w5">Edición de Fotografía y Video</option>'+
    '<option myTag="optiond1s1w6">Ensamblaje Junior</option>' +
    '<option myTag="optiond1s1w7">Programación Junior con Scratch</option>' +
    '<option myTag="optiond1s1w8">Android Kids</option>' +
    '<option myTag="optiond1s1w9">Jóvenes Emprendedores</option>' +
    '<option myTag="optiond1s1w10">Inglés para niños</option>' +
    '<option myTag="optiond1s1w11">Inglés para jóvenes</option>' +
    '<option myTag="optiond1s1w12">Inglés para adultos</option>' +
    '<option myTag="optiond1s1w13">Portugués para niños</option>' +
    '<option myTag="optiond1s1w14">Preparación para Examenes Internacionales YLE</option>' +
    '<option myTag="optiond1s1w15">Preparación para Examenes Internacionales PET</option>' +
    '<option myTag="optiond1s1w16">Preparación para Examenes Internacionales FCE</option>' +
    '<option myTag="optiond1s1w17">Bijouterïa contemporánea</option>' +
    '<option myTag="optiond1s1w18">Mokume</option>' +
    '<option myTag="optiond1s1w19">Kum boo y reticulado</option>' +
    '<option myTag="optiond1s1w20">Engastado</option>' +
    '<option myTag="optiond1s1w21">Dibujo técnico aplicado a la joyería</option>' +
    '<option myTag="optiond1s1w22">Manejo, programación y mantenimiento de robots industriales</option>' +
    '<option myTag="optiond1s1w23">Control de movimiento: servomecanismos</option>' +
    '<option myTag="optiond1s1w24">Programación avanzada de controladores de automatización (PAC)</option>';
  var optiond1s2 = 
    '<option myTag="optiond1s2w1">Arduino y Domótica Junior</option>' + 
    '<option myTag="optiond1s2w2">Robótica con Lego</option>' + 
    '<option myTag="optiond1s2w3">Diseño Web Junior</option>' +
    '<option myTag="optiond1s2w4">Diseño y Animación 3D</option>' +
    '<option myTag="optiond1s2w5">Ensamblaje Junior</option>' +
    '<option myTag="optiond1s2w6">Android Kids</option>' +
    '<option myTag="optiond1s2w7">Jóvenes Emprendedores</option>' +
    '<option myTag="optiond1s2w8">Inglés para niños</option>' +
    '<option myTag="optiond1s2w9">Inglés para jóvenes y adultos</option>' +
    '<option myTag="optiond1s2w10">Portugués para niños</option>' +
    '<option myTag="optiond1s2w11">Preparación para Examenes Internacionales YLE</option>' +
    '<option myTag="optiond1s2w12">Preparación para Examenes Internacionales PET</option>' +
    '<option myTag="optiond1s2w13">Preparación para Examenes Internacionales FCE</option>';
  var optiond1s3 = 
    '<option myTag="optiond1s3w1">Arduino y Domótica Junior</option>' + 
    '<option myTag="optiond1s3w2">Robótica con Lego</option>' + 
    '<option myTag="optiond1s3w3">Diseño Web Junior</option>' + 
    '<option myTag="optiond1s3w4">Diseño y Animación 3D</option>' + 
    '<option myTag="optiond1s3w5">Edición de Fotografía y Video</option>' +
    '<option myTag="optiond1s3w6">Programación Junior con Scratch</option>' +
    '<option myTag="optiond1s3w7">Android Kids</option>';
  var optiond1s4 = 
    '<option myTag="optiond1s4w1">Arduino y Domótica Junior</option>' + 
    '<option myTag="optiond1s4w2">Robótica con Lego</option>' + 
    '<option myTag="optiond1s4w3">Ensamblaje Junior</option>' + 
    '<option myTag="optiond1s4w4">Diseño y Animación 3D</option>';
  var optiond1s5 = 
    '<option myTag="optiond1s5w1">Arduino y Domótica Junior</option>' + 
    '<option myTag="optiond1s5w2">Robótica con Lego</option>' + 
    '<option myTag="optiond1s5w3">Ensamblaje Junior</option>' + 
    '<option myTag="optiond1s5w4">Diseño y Animación 3D</option>' + 
    '<option myTag="optiond1s5w5">Inglés para niños</option>' + 
    '<option myTag="optiond1s5w6">Inglés para jóvenes y adultos</option>' + 
    '<option myTag="optiond1s5w7">Preparación para Examenes Internacionales</option>';
  var optiond1s6 = 
    '<option myTag="optiond1s6w1">Inglés para niños</option>' + 
    '<option myTag="optiond1s6w2">Inglés para jóvenes y adultos</option>' + 
    '<option myTag="optiond1s6w3">Portugués para jóvenes y adultos</option>';
	
	//ANCASH
	
	var optiond2s1 = 
    '<option myTag="optiond2s1w1">Robótica con Lego</option>' + 
    '<option myTag="optiond2s1w2">Ensamblaje Junior</option>' + 
    '<option myTag="optiond2s1w3">Diseño y animación 3D</option>' + 
    '<option myTag="optiond2s1w4">Diseño de modas Junior</option>' + 
    '<option myTag="optiond2s1w5">Estadística Aplicada a la administración</option>' + 
    '<option myTag="optiond2s1w6">Matemática aplicada</option>' + 
    '<option myTag="optiond2s1w7">Inglés para niños</option>' + 
    '<option myTag="optiond2s1w8">Inglés para jóvenes y adultos</option>' + 
    '<option myTag="optiond2s1w9">Calderería</option>' + 
    '<option myTag="optiond2s1w10">Matemática aplicada a la mecánica automotriz</option>' + 
    '<option myTag="optiond2s1w11">Hidráulica básica</option>' + 
    '<option myTag="optiond2s1w12">Instalaciones eléctricas domiciliarias</option>' + 
    '<option myTag="optiond2s1w13">Matemática aplicada a la electricidad</option>' + 
    '<option myTag="optiond2s1w14">Dibujo técnico</option>' + 
    '<option myTag="optiond2s1w15">Matemática aplicada a la mecánica de mantenimiento</option>';
	var optiond2s2 = 
    '<option myTag="optiond2s2w1">Diseño y animación 3D</option>' + 
    '<option myTag="optiond2s2w2">Jovenes emprendedores</option>' + 
    '<option myTag="optiond2s2w3">Programación junior con Scratch</option>' + 
    '<option myTag="optiond2s2w4">Robótica con Lego</option>' + 
    '<option myTag="optiond2s2w5">Metrología</option>';
	var optiond2s3 = 
    '<option myTag="optiond2s3w1">Diseño y animación 3D</option>';
	var optiond2s4 = 
    '<option myTag="optiond2s4w1">Ensamblaje Junior</option>' + 
    '<option myTag="optiond2s4w2">Android kids</option>' + 
    '<option myTag="optiond2s4w3">Diseño web junior</option>' + 
    '<option myTag="optiond2s4w4">Inglés para niños</option>' + 
    '<option myTag="optiond2s4w5">Inglés para jóvenes y adultos</option>' + 
    '<option myTag="optiond2s4w6">Matemática aplicada a la mecánica</option>';
	
	//AREQUIPA - PUNO
	
	var optiond3s1 = 
    '<option myTag="optiond3s1w1">Diseño y Animación 3D</option>' + 
    '<option myTag="optiond3s1w2">Inglés para niños</option>' + 
    '<option myTag="optiond3s1w3">Taller de fluidez</option>' + 
    '<option myTag="optiond3s1w4">Confeccion de gorros sport</option>' + 
    '<option myTag="optiond3s1w5">Confección de sacos para dama</option>' + 
    '<option myTag="optiond3s1w6">Procesador industrial de productos snacks</option>' + 
    '<option myTag="optiond3s1w7">Auxiliar en confitería</option>' + 
    '<option myTag="optiond3s1w8">Elaboración de salteñas comerciales</option>' + 
    '<option myTag="optiond3s1w9">Elaboración de empañanas comerciales</option>';

	var optiond3s2 = 
    '<option myTag="optiond3s2w1">Ensamblaje Junior</option>' + 
    '<option myTag="optiond3s2w2">Jóvenes emprendedores</option>' + 
    '<option myTag="optiond3s2w3">Torno CNC - básico</option>' + 
    '<option myTag="optiond3s2w4">Reparación de motores torito</option>' + 
    '<option myTag="optiond3s2w5">Operador de cargador frontal</option>';
	
	//CAJAMARCA - AMAZONAS
	
	var optiond4s1 = 
    '<option myTag="optiond4s1w1">Robótica con Lego</option>' + 
    '<option myTag="optiond4s1w2">Ensamblaje Junior</option>' + 
    '<option myTag="optiond4s1w3">Programación con Scratch</option>' + 
  	'<option myTag="optiond4s1w4">Androids Kids</option>' + 
	'<option myTag="optiond4s1w4">Herramientas Digitales para la Docencia</option>' + 
	'<option myTag="optiond4s1w4">Inglés para niños</option>' + 
  	'<option myTag="optiond4s1w5">Inglés para jóvenes y adultos</option>';
	
	//ICA - AYACUCHO
	
	var optiond5s1 = 
    '<option myTag="optiond5s1w1">Inglés para niños</option>' + 
    '<option myTag="optiond5s1w2">Inglés para jóvenes y adultos</option>' + 
    '<option myTag="optiond5s1w3">Mecánica automotriz básica</option>' + 
  	'<option myTag="optiond5s1w4">Física y Química</option>' + 
  	'<option myTag="optiond5s1w5">Matemáticas</option>' + 
  	'<option myTag="optiond5s1w6">Dibujo técnico</option>' + 
  	'<option myTag="optiond5s1w7">Microsoft office básico</option>' + 
  	'<option myTag="optiond5s1w8">Corel Draw básico</option>';

	var optiond5s2 = 
    '<option myTag="optiond5s2w1">Inglés para niños</option>' + 
    '<option myTag="optiond5s2w2">Inglés para jóvenes y adultos</option>' + 
    '<option myTag="optiond5s2w3">Mecánica automotriz básica</option>' + 
  	'<option myTag="optiond5s2w4">Física y Química</option>' + 
  	'<option myTag="optiond5s2w5">Matemáticas</option>' + 
  	'<option myTag="optiond5s2w6">Dibujo técnico</option>' + 
  	'<option myTag="optiond5s2w7">Ensamblaje Junior</option>' +
  	'<option myTag="optiond5s2w8">Diseño y Animación 3D</option>';

	var optiond5s3 = 
    '<option myTag="optiond5s3w1">Inglés para niños</option>' + 
    '<option myTag="optiond5s3w2">Inglés para jóvenes y adultos</option>' + 
    '<option myTag="optiond5s3w3">Robótica con Lego</option>' + 
  	'<option myTag="optiond5s3w4">Edición y fotografía y video kids</option>' + 
  	'<option myTag="optiond5s3w5">Diseño y Animación 3D</option>' + 
  	'<option myTag="optiond5s3w6">Metrología I</option>' + 
  	'<option myTag="optiond5s3w7">Instlación eléctrica de interiores</option>' +
  	'<option myTag="optiond5s3w8">Física y Química</option>' +
  	'<option myTag="optiond5s3w9">Matemáticas</option>' +
  	'<option myTag="optiond5s3w10">Dibujo técnico</option>';

	var optiond5s4 = 
    '<option myTag="optiond5s4w1">Inglés para niños</option>' + 
    '<option myTag="optiond5s4w2">Inglés para jóvenes y adultos</option>' + 
    '<option myTag="optiond5s4w3">Mecánica automotriz básica</option>' + 
  	'<option myTag="optiond5s4w4">Física y Química</option>' + 
  	'<option myTag="optiond5s4w5">Matemáticas</option>' + 
  	'<option myTag="optiond5s4w6">Dibujo técnico</option>' +
  	'<option myTag="optiond5s4w7">Diseño y Animación 3D</option>' +
  	'<option myTag="optiond5s4w8">Robótica con Lego</option>' +
  	'<option myTag="optiond5s4w9">Ensamblaje Junior</option>';
  
	
	//JUNIN - PASCO - HUANCAVELICA
	
	var optiond6s1 = 
    '<option myTag="optiond6s1w1">Arduino y Domótica Junior</option>' + 
    '<option myTag="optiond6s1w2">Robótica con Lego</option>' + 
    '<option myTag="optiond6s1w3">Diseñador Web Junior</option>' + 
  	'<option myTag="optiond6s1w4">Ensamblaje Junior</option>' + 
  	'<option myTag="optiond6s1w5">Programación con Scratch</option>' + 
  	'<option myTag="optiond6s1w6">Android Kids</option>' +
  	'<option myTag="optiond6s1w7">Herramientas Digitales para la Docencia</option>';

	var optiond6s2 = 
    '<option myTag="optiond6s2w1">Arduino y Domótica Junior</option>' + 
    '<option myTag="optiond6s2w2">Edición de Fotografía y Video Kids</option>' + 
    '<option myTag="optiond6s2w3">Diseñador Web Junior</option>';

	var optiond6s3 = 
    '<option myTag="optiond6s3w1">Arduino y Domótica Junior</option>' + 
    '<option myTag="optiond6s3w2">Autocad</option>' + 
    '<option myTag="optiond6s3w3">Experto en Ms Excel</option>' + 
  	'<option myTag="optiond6s3w4">Técnico en Ofimática</option>' + 
	'<option myTag="optiond6s3w4">S10 - Project</option>' + 
	'<option myTag="optiond6s3w4">Inglés para niños </option>' + 
	'<option myTag="optiond6s3w4">Inglés para jóvenes y adultos</option>';

	var optiond7s4 = 
    '<option myTag="optiond6s4w1">Robótica con Lego</option>';

	var optiond7s5 = 
    '<option myTag="optiond6s5w1">Arduino y Domótica Junior</option>';


  //LORETO
  
  var optiond7s1 = 
    '<option myTag="optiond7s1w1">Robótica con Lego</option>' +
    '<option myTag="optiond7s1w2">Ensamblaje Junior</option>' +
    '<option myTag="optiond7s1w3">Edición de Fotografía y Video Kids</option>' +
    '<option myTag="optiond7s1w4">Inglés para niños</option>' +
    '<option myTag="optiond7s1w5">Inglés para jóvenes y adultos</option>';

  var optiond7s2 = 
    '<option myTag="optiond7s2w1">Ensambaje Junior</option>' +
    '<option myTag="optiond7s2w2">Diseño Web Junior</option>' +
    '<option myTag="optiond7s2w3">Diseño y Animación 3D</option>' +
    '<option myTag="optiond7s2w4">Herramientas Digitales para la Docencia</option>';
	
	//LA LIBERTAD
	
	var optiond8s1 = 
    '<option myTag="optiond8s1w1">Inglés para niños</option>' +
  	'<option myTag="optiond8s1w2">Inglés para jóvenes y adultos</option>' +
  	'<option myTag="optiond8s1w3">Inglés técnico</option>' +
  	'<option myTag="optiond8s1w4">Diseño con Autocad</option>' +
  	'<option myTag="optiond8s1w5">Calculando con Microsoft Excel</option>' + 
  	'<option myTag="optiond8s1w6">Automatización por contactores</option>' + 
  	'<option myTag="optiond8s1w7">Neumática y Electroneumática</option>' + 
  	'<option myTag="optiond8s1w8">Redes y Comunicaciones Industriales</option>' + 
  	'<option myTag="optiond8s1w9">Operación y Sintonía de Sistemas de Control</option>' + 
  	'<option myTag="optiond8s1w10">Control de Procesos Industriales con PLC</option>' + 
  	'<option myTag="optiond8s1w11">Hidraulica Proporcional</option>' + 
    '<option myTag="optiond8s1w12">Identificación de peligros y Riesgos</option>';
	var optiond8s2 = 
    '<option myTag="optiond8s2w1">Robótica con Lego</option>' +
  	'<option myTag="optiond8s2w2">Diseño y animación 3D </option>' +
  	'<option myTag="optiond8s2w3">Android Kids</option>' +
  	'<option myTag="optiond8s2w4">Ensamblaje Junior</option>' +
  	'<option myTag="optiond8s2w5">Programación Junior con Scratch</option>' + 
  	'<option myTag="optiond8s2w6">Edición de fotografía y video Kids</option>' + 
  	'<option myTag="optiond8s2w7">Arduino y Domótica Junior</option>' + 
  	'<option myTag="optiond8s2w8">Presentaciones de Alto Impacto con Prezzi</option>' + 
  	'<option myTag="optiond8s2w9">Herramientas Digitales para la Docencia</option>';
	var optiond8s3 = 
    '<option myTag="optiond8s3w1">Inglés para niños</option>' +
  	'<option myTag="optiond8s3w2">Inglés para jóvenes y adultos</option>' +
  	'<option myTag="optiond8s3w3">ETI- Robotica con Lego I y II</option>' +
  	'<option myTag="optiond8s3w4">ETI- Diseño y Animación 3D</option>' +
  	'<option myTag="optiond8s3w5">Ensamblaje Junior</option>' + 
  	'<option myTag="optiond8s3w6">Herramientas Digitales para la Docencia</option>';
	var optiond8s4 = 
    '<option myTag="optiond8s4w1">Soldadura al arco electrico</option>' +
  	'<option myTag="optiond8s4w2">Inglés para niños</option>' +
  	'<option myTag="optiond8s4w3">Inglés para jóvenes y adultos</option>' +
  	'<option myTag="optiond8s4w4">Seguridad y Salud en el trabajo</option>' + 
  	'<option myTag="optiond8s4w7">Electricidad de interiores</option>';
	var optiond8s5 = 
    '<option myTag="optiond8s5w1">Office</option>' +
  	'<option myTag="optiond8s5w2">Oratoria</option>' +
  	'<option myTag="optiond8s5w3">Soporte y Mantenimiento de Pcs</option>' +
  	'<option myTag="optiond8s5w4">Robótica con Lego</option>' + 
  	'<option myTag="optiond8s5w5">Diseño Publicitario</option>' + 
  	'<option myTag="optiond8s5w6">Inglés para niños</option>' + 
  	'<option myTag="optiond8s5w7">Inglés para jóvenes y adultos</option>' + 
  	'<option myTag="optiond8s5w8">Variadores de frecuencia</option>' + 
  	'<option myTag="optiond8s5w9">Seguridad y Salud en el trabajo</option>';
	
  //CUSCO - APURIMAC - MADRE DE DIOS

	var optiond9s1 = 
    '<option myTag="optiond9s1w1">Android Kids</option>' +
  	'<option myTag="optiond9s1w2">Diseño y Animación 3D</option>' +
  	'<option myTag="optiond9s1w3">Ensamblaje Junior</option>' +
  	'<option myTag="optiond9s1w4">Mantenimiento de motocicletas</option>' + 
  	'<option myTag="optiond9s1w5">Chocolatería y caramelos blandos para niños</option>' + 
  	'<option myTag="optiond9s1w6">Neumática básica</option>' + 
  	'<option myTag="optiond9s1w7">Módulo de ropa deportiva</option>' + 
  	'<option myTag="optiond9s1w8">Módulo de uniformes escolares</option>' + 
  	'<option myTag="optiond9s1w9">Jugando con la electrónica</option>' + 
  	'<option myTag="optiond9s1w10">Inglés para niños</option>' + 
  	'<option myTag="optiond9s1w11">"Inglés para jóvenes y adultos</option>';
	var optiond9s2 = 
    '<option myTag="optiond9s2w1">Arduino y Domótica Junior</option>' +
  	'<option myTag="optiond9s2w2">Ensamblaje Junior</option>' +
  	'<option myTag="optiond9s2w3">Android Kids</option>' +
  	'<option myTag="optiond9s2w4">Word </option>' + 
  	'<option myTag="optiond9s2w5">Excel aplicado a los negocios</option>' + 
  	'<option myTag="optiond9s2w6">Procesamiento de frutas y hortalizas</option>' + 
  	'<option myTag="optiond9s2w7">Derivados lácteos</option>' + 
  	'<option myTag="optiond9s2w8">Confección industrial - Casacas</option>';
	var optiond9s3 = 
    '<option myTag="optiond9s3w1">Excel aplicado a los negocios</option>' +
  	'<option myTag="optiond9s3w2">Ensamblaje Junior</option>' +
  	'<option myTag="optiond9s3w3">Word </option>' +
  	'<option myTag="optiond9s3w4">Mantenimiento de motores menores</option>' +
	'<option myTag="optiond9s3w4">Guiado y Campismo</option>' + 
  	'<option myTag="optiond9s3w5">Inglés para niños</option>';
	
	//LAMBAYEQUE
	
	var optiond10s1 = 
    '<option myTag="optiond10s1w1">Robótica con Lego</option>' +
  	'<option myTag="optiond10s1w2">Ensamblaje Junior</option>' +
  	'<option myTag="optiond10s1w3">Diseño y Animación 3D</option>' +
  	'<option myTag="optiond10s1w4">Edición de fotografía y video Kids</option>' +
  	'<option myTag="optiond10s1w5">Informática básica</option>' +
  	'<option myTag="optiond10s1w6">Informática aplicada</option>' +
  	'<option myTag="optiond10s1w7">Autocad</option>' +
  	'<option myTag="optiond10s1w8">Matemática</option>' +
  	'<option myTag="optiond10s1w9">Física y Química</option>' +
  	'<option myTag="optiond10s1w10">Dibujo Técnico</option>' +
  	'<option myTag="optiond10s1w11">Lenguaje y Comunicación</option>' +
	'<option myTag="optiond10s1w11">Dibujo Mecánico</option>' +
	'<option myTag="optiond10s1w11">Matemática aplicada</option>' +
	'<option myTag="optiond10s1w11">Electricidad de Interiores</option>' +
	'<option myTag="optiond10s1w11">Inglés para niños</option>' +
	'<option myTag="optiond10s1w11">Inglés para jóvenes y adultos</option>' + 
  	'<option myTag="optiond10s1w12">Talleres de fluidez</option>';
	
	//MOQUEGUA - TACNA
	
	var optiond11s1 = 
    '<option myTag="optiond11s1w1">Arduino y domótica Junior</option>' +
  	'<option myTag="optiond11s1w2">Diseño y Animación 3D</option>' +
	'<option myTag="optiond11s1w2">Edición de Fotografía y Video Kids</option>' +
	'<option myTag="optiond11s1w2">Inglés para niños</option>' +
  	'<option myTag="optiond11s1w3">Inglés para jóvenes y adultos</option>';
	var optiond11s2 = 
    '<option myTag="optiond11s2w1">Diseño y Animación 3D</option>' +
	'<option myTag="optiond11s2w1">Edición de Fotografía y Video Kids</option>' +
	'<option myTag="optiond11s2w1">Inglés para niños</option>' +
    '<option myTag="optiond11s2w2">Inglés para jóvenes y adultos</option>';


	//SAN MARTIN
  
  var optiond12s1 = 
    '<option myTag="optiond12s1w1">Robótica con Lego</option>' +
    '<option myTag="optiond12s1w2">Ensamblaje Junior</option>' +
	'<option myTag="optiond12s1w2">Herramientas para la docencia</option>' +
	'<option myTag="optiond12s1w2">Inglés para niños</option>' +
	'<option myTag="optiond12s1w2">Inglés para jóvenes y adultos</option>' +
	'<option myTag="optiond12s1w2">Portugués para niños</option>' +
    '<option myTag="optiond12s1w3">Portugués para jóvenes y adultos</option>';
  var optiond12s2 = 
    '<option myTag="optiond12s2w1">Robótica con Lego</option>' +
    '<option myTag="optiond12s2w2">Android Kids</option>' +
	'<option myTag="optiond12s2w2">Inglés para niños</option>' +
    '<option myTag="optiond12s2w3">Inglés para jóvenes y adultos</option>';
	
	//PIURA - TUMBES
  
  var optiond13s1 = 
    '<option myTag="optiond13s1w1">Arduino y Domótica Junior</option>' +
    '<option myTag="optiond13s1w2">Ensamblaje Junior</option>' +
    '<option myTag="optiond13s1w3">Diseño Web Junior</option>' +
    '<option myTag="optiond13s1w4">Diseño y Animación 3D</option>' +
    '<option myTag="optiond13s1w5">Edición de Fotografía y Video Kids</option>' +
    '<option myTag="optiond13s1w6">Jóvenes Emprendedores </option>' +
    '<option myTag="optiond13s1w7">Taller de Proyectos Empresariales con Project</option>' +
    '<option myTag="optiond13s1w8">Herramientas Digitales para la Docencia</option>' +
    '<option myTag="optiond13s1w9">Robótica con Lego</option>' +
	'<option myTag="optiond13s1w9">Android Kids</option>' +
	'<option myTag="optiond13s1w9">Inglés para niños</option>' +
    '<option myTag="optiond13s1w10">Inglés para jóvenes y adultos</option>';
  var optiond13s2 = 
    '<option myTag="optiond13s2w1">Ensamblaje Junior</option>' +
    '<option myTag="optiond13s2w2">Diseño y Animación 3D</option>' +
    '<option myTag="optiond13s2w3">Android Kids</option>' +
    '<option myTag="optiond13s2w4">Autocad Junior</option>';
  var optiond13s3 = 
    '<option myTag="optiond13s3w1">Ensamblaje Junior</option>' +
    '<option myTag="optiond13s3w2">Diseño y Animación 3D</option>' +
    '<option myTag="optiond13s3w3">Android Kids</option>' +
    '<option myTag="optiond13s3w4">Autocad Junior</option>';
  var optiond13s4 = 
    '<option myTag="optiond13s4w1">Ensamblaje Junior</option>' +
    '<option myTag="optiond13s4w2">Diseño y Animación 3D</option>' +
    '<option myTag="optiond13s4w3">Android Kids</option>' +
    '<option myTag="optiond13s4w4">Edición de Fotografía y Video Kids</option>';
  var optiond13s5 = 
    '<option myTag="optiond13s5w1">Arduino y Domótica Junior</option>' +
    '<option myTag="optiond13s5w2">Ensamblaje Junior</option>' +
    '<option myTag="optiond13s5w3">Diseño Web Junior</option>' +
    '<option myTag="optiond13s5w4">Diseño y Animación 3D</option>' +
    '<option myTag="optiond13s5w5">Edición de Fotografía y Video Kids</option>' +
    '<option myTag="optiond13s5w6">Jóvenes Emprendedores</option>' +
    '<option myTag="optiond13s5w7">Taller de Proyectos Empresariales con Project</option>' +
    '<option myTag="optiond13s5w8">Herramientas Digitales para la Docencia</option>' +
    '<option myTag="optiond13s5w9">Robótica con Lego</option>' +
    '<option myTag="optiond13s5w10">El bar: El arte de preparar licores y cocteles</option>' +
    '<option myTag="optiond13s5w11">Elaboración de bocaditos para buffet</option>' +
    '<option myTag="optiond13s5w12">Elaboración y decoración de tortas</option>';
  var optiond13s6 = 
    '<option myTag="optiond13s6w1">Ensamblaje Junior</option>' +
    '<option myTag="optiond13s6w2">Diseño y Animación 3D</option>' +
    '<option myTag="optiond13s6w3">Android Kids</option>' +
    '<option myTag="optiond13s6w4">Autocad Junior</option>' +
    '<option myTag="optiond13s6w5">Herramientas Digitales para la Docencia</option>';
	
	
	//UCAYALI - HUANUCO
	
	var optiond14s1 = 
    '<option myTag="optiond14s1w1">Diseño y Animación 3D</option>' +
  	'<option myTag="optiond14s1w2">Edición de Fotografía y Video Kids</option>' +
  	'<option myTag="optiond14s1w3">Jóvenes Emprendedores</option>' +
  	'<option myTag="optiond14s1w4">Excel profesional</option>' +
  	'<option myTag="optiond14s1w5">Inglés para niños</option>' +
  	'<option myTag="optiond14s1w6">Inglés para jóvenes y adultos</option>' +
  	'<option myTag="optiond14s1w7">Talleres de fluidez</option>' +
  	'<option myTag="optiond14s1w8">Diseño de modas</option>' +
  	'<option myTag="optiond14s1w9">Elaboración de helados</option>' +
  	'<option myTag="optiond14s1w10">Elaboración de chocolates </option>' +
  	'<option myTag="optiond14s1w11">Fondos, salsas y ensaladas</option>';
	var optiond14s2 = 
    '<option myTag="optiond14s2w1">Inglés para niños</option>' +
  	'<option myTag="optiond14s2w2">Inglés para jóvenes y adultos</option>';
	var optiond14s3 = 
    '<option myTag="optiond14s3w1">Diseño y Animación 3D</option>' +
	'<option myTag="optiond14s3w2">Arduino y Domótica Junior</option>' +
	'<option myTag="optiond14s3w3">Informática básica</option>' +
	'<option myTag="optiond14s3w4">Herramientas Digitales para la Docencia</option>' +
  	'<option myTag="optiond14s3w5">Jugando con la Electrónica</option>';

});