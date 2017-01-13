<!-- Block Information -->
<div id="informations"></div>
<div id="information" class="block-container">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <h4>Solicita</h4>
        <h2>INFORMACIÓN</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 col-md-8 col-sm-12">
        <p>SENATI, reconocido como la institución superior tecnológica de mayor prestigio a nivel nacional, inicia su programa de verano 2017, en el que los niños, jóvenes y adultos podrán disfrutar de diversos cursos y/o talleres tecnológicos.<br>Ven a SENATI y pasa un verano divertido.</p>
        <img src="img/information-image.png" />
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="block-form clearfix">
          <h3><span>Sé un</span> Senatino</h3>
          <p>Solicita información de curso o taller</p>
          <form id="block-form" action="send-form.php" method="post">
            <div class="form-group">
              <input type="text" class="form-control required" name="firstname" placeholder="Nombres" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control required" name="lastname" placeholder="Apellidos" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control required" name="dni" placeholder="DNI" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="age" placeholder="Edad" />
            </div>
            <div class="form-group">
              <input type="email" class="form-control required" name="email" placeholder="Correo Electrónico" />
            </div>
            <div class="form-group">
              <input type="tel" class="form-control required" name="phone" placeholder="Teléfono fijo o celular" />
            </div>
            <div class="form-group">
              <select class="form-control required" id="field-department" name="department">
                <option selected="selected" value>Departamento o región</option>
                <option myTag="optiond1">Lima</option>
                <option myTag="optiond2">Ancash</option>
                <option myTag="optiond3">Arequipa - Puno</option>
                <option myTag="optiond4">Cajamarca - Amazonas</option>
                <option myTag="optiond5">Ica - Ayacucho</option>
                <option myTag="optiond6">Junín - Pasco - Huancavelica</option>
                <option myTag="optiond7">Loreto</option>
                <option myTag="optiond8">La Libertad</option>
                <option myTag="optiond9">Cusco - Apurimac - Madre de Dios</option>
                <option myTag="optiond10">Lambayeque</option>
                <option myTag="optiond11">Moquegua - Tacna</option>
                <option myTag="optiond12">San Martín</option>
                <option myTag="optiond13">Piura - Tumbes</option>
                <option myTag="optiond14">Ucayali - Huánuco</option>
              </select>
            </div>
            <div class="form-group">
              <select class="form-control required" id="field-sedes" name="sede">
                <option selected="selected" value>Sede</option>
              </select>
            </div>
            <div class="form-group">
              <select class="form-control required" id="field-workshops" name="workshop">
                <option selected="selected" value>Curso o taller de interes</option>
              </select>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <label>
                  <input type="checkbox" name="terms"> He leído y acepto las condiciones en el documento
                </label>
              </div>
            </div>
            <div class="form-group">
              <p><a href="http://cusu.senati.edu.pe/callcenter/formuetiv2ind/autorizacion_de_registro_de_datos.pdf" target="_blank">Ver la autorización de Registro de Datos</a></p>
            </div>
            <div class="form-group form-actions">
              <input type="submit" class="btn" value="Enviar">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>