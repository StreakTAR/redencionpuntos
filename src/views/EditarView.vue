<template>
    <div>
        <HeaderWorld/>
        <div class="container">
            <form action = "" class="form-horizontal">
                <div class="form-group left">
                    <label for="" class="control-label col-sm-2"> Cedula </label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" name="cedula" id="cedula" v-model="form.cedula">
                    </div>
                </div>
                <div class="form-group left">
                    <label for="" class="control-label col-sm-2"> Nombre </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">
                    </div>
                </div>
                <div class="form-group left">
                    <label for="" class="control-label col-sm-2"> Apellido </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name="apellido" id="apellido" v-model="form.apellido">
                    </div>
                </div>
                <div class="form-group left">
                    <label for="" class="control-label col-sm-2"> Puntos </label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" name="puntos" id="puntos" v-model="form.puntos">
                    </div>
                </div>

                <div class="form-group">
                    <button type="button" class= "btn btn-primary" v-on:click="editar()"> Editar</button>
                    <button type="button" class= "btn btn-dark margen" v-on:click="salir()"> Salir</button>
                    <button type="button" class= "btn btn-primary"> Compras</button>
                </div>
            </form>
        </div>
        <FooterWorld/>
    </div>
</template>
<script>
import HeaderWorld from '@/components/HeaderWorld.vue';
import FooterWorld from '@/components/FooterWorld.vue';
import axios from 'axios'
export default{
    name:"EditarView",
    components:{
        HeaderWorld,
        FooterWorld
    },
    data:function(){
        return{
            form:{
                "cedula":"",
                "nombre":"",
                "apellido":"",
                "puntos":"",
            }
        }
    },
    methods:{
        editar(){
            axios.put("localhost:8080/cliente/actualizarpuntos/{cedula}/{nuevosPuntos}", this.form)
            .then(data =>{
                console.log(data);
            })
        },
        salir(){
            this.$router.push("/dashboard");
        }
    },
    mounted:function(){
        this.form.cedula = this.$route.params.cedula;
        axios.get("localhost:8080/cliente/mostrartodos/" + this.form.cedula)
        .then( datos =>{
            this.form.cedula = datos.data[0].cedula;
            this.form.nombre = datos.data[0].nombre;
            this.form.apellido = datos.data[0].apellido;
            this.form.puntos = datos.data[0].puntos;

        })
    }
}
</script>
<style scoped>
.left{
    text-align: left;
}

</style>