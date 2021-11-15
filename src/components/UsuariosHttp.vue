<template>
  <section class="src-componentes-usuarioshttp">
    <div class="jumbotron mt-3">
      <h1> XMLHttpRequest</h1>
      <br>
        <div v-if="usuarios.length" class="table-responsive">
          <table class="table table-danger">
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
    name: 'src-componentes-usuarioshttp',
    props: [],
    data () {
      return {
          url      : 'https://617b1a28d842cf001711bd9e.mockapi.io/datos',
          usuarios : [],
          peticion : false
      }
    },
    mounted() {
      this.getPostPromise()
    },
    methods: {
      postPromise() {
        return new Promise((resolve, reject) => {
          /* Creo la comunicación*/
          let xhr = new XMLHttpRequest()
          xhr.open( 'get', this.url )
          
          xhr.addEventListener('load', () => {
             /* Comunicación exitosa */
            if( xhr.status == 200 ) {
              let resp = JSON.parse(xhr.response)
              resolve(resp)
            } else {
              let error = {
                title: 'Error de status',
                status: xhr.status
              }
              reject(error)
            }
          })
          /* Error de comunicacion*/
          xhr.addEventListener('error', e => {
            let error = {
              title: 'Error event XHR',
              info: e
            }
            reject(error)
          })
          xhr.send()
        })
    },
    async getPostPromise() {
      try {
        let resp = await this.postPromise()
        this.usuarios = resp
        this.peticion = false
      }
      catch(e) {
        console.error(e)
      }
    },
    computed: {

    }
  }
}

</script>

<style scoped lang="css">
  .src-componentes-usuarioshttp {

  }
  .jumbotron{
    background-color: rgb(194, 228, 248);
    
  }
</style>
