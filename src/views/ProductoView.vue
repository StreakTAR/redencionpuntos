<template>
    <div>
        <HeaderWorld/>
        <div class="container izquierda">
            <button type="button" class= "btn btn-primary" v-on:click="salir()"> Clientes</button>
            <br> <br>
            <button type="button" class= "btn btn-primary" v-on:click="salir()"> Agregar Producto</button>
        </div>
        <br><br>

        <div class="container">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="productos in mostrarProducto" :key="productos.id" v-on:click="editar(productos.id)">
                  <th scope="row">{{productos.id}}</th>
                  <td>{{productos.nombre}}</td>
                  <td>{{productos.categoria}}</td>
                  <td>{{productos.valor}}</td>
                </tr>

              </tbody>
            </table>
        </div>

        <FooterWorld/>
    </div>

</template>
<script>
import HeaderWorld from '@/components/HeaderWorld.vue';
import FooterWorld from '@/components/FooterWorld.vue';
import axios from 'axios';
export default {
    name:"ProductoView",
    data(){
        return {
            mostrarProducto:null,
            pagina:1
        }
    },
    components:{
        HeaderWorld,
        FooterWorld
    },
    methods:{
            editar(id){
                this.$router.push('/editar/' + id);
        },
            salir(){
                    this.$router.push("/dashboard");
        }
    },
    mounted:function(){
        let direccion = "localhost:8080/productos/mostrartodos" + this.pagina;
        axios.get(direccion).then(data =>{
            this.mostrarProductos = data.data;
        })
    }
}
</script>
<style scoped>
    .izquierda{
        text-align:left;
    }
</style>