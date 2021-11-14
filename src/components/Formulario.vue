<template>
  <section class="src-componentes-formulario">
    <div class="jumbotron mt-3">
      <h1>Ingrese sus datos</h1>
      <hr class="hr">
      <vue-form :state="formstate" @submit.prevent="enviar()">
       
       <!-- NOMBRE -->
        <validate tag="div">
          <label for = "nombre">Nombre </label>  
          <input type="text" id="nombre" v-model="formData.nombre" required name="nombre" autocomplete="off" :minlength="nombreMinLength" :maxlength="nombreMaxLength" class="form-control" />
      
          <field-messages name="nombre" show ="$dirty">
            <div slot="required" class="alert alert-danger mt-2">Campo Obligatorio</div>
              <div slot="minlength" class="alert alert-warning mt-1">
                Este campo requiere como mínimo {{nombreMinLength}} caracteres.
              </div>
              <div v-if="formData.nombre.length== nombreMaxLength" class="alert alert-warning mt-1">
                Este campo debe poseer como máximo {{nombreMaxLength}} caracteres.
              </div>
          </field-messages>

        </validate>
        <br>

        <!-- EDAD -->
        <validate tag="div">
          <label for = "edad">Edad </label>  
          <input type="number" id ="edad" v-model.number="formData.edad" :min="minEdad" :max="maxEdad" required name="edad" autocomplete="off" class ="form-control" />
       
          <field-messages name="edad" show ="$dirty">
              <div slot="required" class="alert alert-danger mt-2">Campo Obligatorio</div>
              <div slot="min" class="alert alert-warning mt-1">
                La edad mínima permitida es de {{ minEdad }} años.
              </div>
              <div slot="max" class="alert alert-warning mt-1">
                La edad máxima permitida es de {{ maxEdad }} años.
              </div>
            </field-messages>
        </validate>
        <br>

        <!-- MAIL -->
        <validate tag="div">
          <label for = "mail">E-mail </label>  
          <input type="email" id ="mail" v-model="formData.mail" required name="mail" autocomplete="off" class ="form-control" />
      
          <field-messages name="mail" show ="$dirty">
              <div slot="required" class="alert alert-danger mt-2">Campo Obligatorio</div>
              <div slot="email" class="alert alert-warning mt-1">
                Ingrese un e-mail válido
              </div>
          </field-messages>
        </validate>
        <button class="btn btn-success my-3" :disabled="formstate.$invalid" type="submit">Enviar</button>
      </vue-form>


      <br>
      <h2>Datos Ingresados</h2>
      <hr>
      <div v-if="datos.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>E-mail</th>
          </tr>
          <tr v-for="(dato, i) in datos" :key="i">
            <td>{{dato.nombre}}</td>
            <td>{{dato.edad}}</td>
            <td>{{dato.mail}}</td>
          </tr>
        </table>
      </div>
      <div v-else>
        <h4 style="background-color: #40D0E0; padding: 15px">No hay datos a mostrar</h4>
      </div>

    </div>
  </section>
</template>


<script>

  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate: {},
        formData : this.getInitialData(),
        datos : [],
         nombreMinLength : 5,
          nombreMaxLength : 15,
          minEdad : 18,
          maxEdad : 120
      }
    },
    methods: {
      getInitialData(){
        return {
          nombre: '',
          edad: null,
          mail: null,
        }
      },

      enviar(){
        console.log(this.formData)
        this.datos.push(this.formData)
        this.formData =this.getInitialData()
        this.formstate._reset()
      },
        
    },
    computed: {
      
    }
}


</script>

<style scoped lang="css">
  .src-componentes-formulario {
   
  }
   .jumbotron {
      background-color: rgb(194, 228, 248);
    }
    .hr{
      background-color: black;
    }
  
</style>
