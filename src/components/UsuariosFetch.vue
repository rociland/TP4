<template>
  <section class="src-componentes-usuariosfetch">
    <div class="jumbotron mt-3">
      <h1>Fetch</h1>
      <br>
      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-warning">
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
    name: 'src-componentes-usuariosfetch',
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
        this.usuarios = []
        this.peticion = true
        try {
          var respuesta = await fetch( this.url)
          var datos = await respuesta.json()
          this.usuarios = datos
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
  .src-componentes-usuariosfetch {

  }
  .jumbotron{
    background-color: rgb(194, 228, 248);
    
  }
</style>

