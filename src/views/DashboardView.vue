<template>
    <div>
        <HeaderWorld/>
        <div class="container izquierda">
            <button type="button" class= "btn btn-primary" v-on:click="producto()"> Productos</button>
            <br> <br>
            <button type="button" class= "btn btn-primary" v-on:click="nuevo()"> Agregar Cliente</button>
        </div>
        <br><br>
        <div class="container">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Cedula</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Puntos</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="clientes in mostrarClientes" :key="clientes.cedula" v-on:click="editar(clientes.cedula)">
                  <th scope="row">{{clientes.cedula}}</th>
                  <td>{{clientes.nombre}}</td>
                  <td>{{clientes.apellido}}</td>
                  <td>{{clientes.puntos}}</td>
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
    name:"DashboardView",
    data(){
        return {
            mostrarClientes:null,
            pagina:1
        }
    },
    components:{
        HeaderWorld,
        FooterWorld
    },
    methods:{
            editar(cedula){
                this.$router.push('/editar/' + cedula);
        },
            producto(){
                this.$router.push("/producto");
        },
            nuevo(){

        }
    },
    mounted:function(){
        let direccion = "localhost:8080/cliente/mostrartodos" + this.pagina;
        axios.get(direccion).then(data =>{
            this.mostrarClientes = data.data;
        })
    }
}
</script>
<style scoped>
    .izquierda{
        text-align:left;
    }
</style>

