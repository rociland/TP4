<template>
  <section class="src-componentes-usuariosAxios">
    <div class="jumbotron mt-3">
      <h1>Axios</h1>
      <br>
      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-success">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo Electronico</th>
            <th>Telefono</th>
          </tr>
          <tr v-for="(usuario, i) in usuarios" :key="i">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.mail }}</td>
            <td>{{ usuario.telefono }}</td>
          </tr>
        </table>
      </div>
    </div> 
  </section> 
</template>

<script>

  export default  {
    name: 'src-componentes-usuarios',
    props: [],
    data () {
      return {
          url: 'https://617b1a28d842cf001711bd9e.mockapi.io/datos',
          usuarios: [],
          peticion: false
      }
    },
    mounted() {
      this.buscarDatos()
    },
    methods: {
      async buscarDatos() {
        this.peticion = true
        this.usuarios = []
        try {
          let respuesta = await this.axios(this.url)
          let data = respuesta.data
         this.usuarios = data
         this.peticion = false
        }
        catch(err) {
              console.error(err)
         }
      }
     
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-usuarios {

  }
   .jumbotron{
    background-color: rgb(194, 228, 248);
    
  }
</style>
