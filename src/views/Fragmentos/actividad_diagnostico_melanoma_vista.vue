<template>
    <section class="container">
        <v-card>
            <h1>Verifica el melanoma</h1>

            <v-card-text class="text-center">
                <center>
                    <v-img src="https://cdn-icons-png.flaticon.com/512/13/13752.png" max-height="380" max-width="380"
                    class="file-upload-image"></v-img>
                </center>
                <br>
                <v-file-input v-model="imagen" :rules="rules" accept="image/png, image/jpeg, image/jpg"
                    placeholder="Carge una imagen......" persistent-placeholder solo required @change="onFileChange"
                    flat prepend-icon="" outlined :clearable="false" height="5">
                    <template v-slot:selection="{ text }">
                        <v-chip small label color="primary">
                            {{ text }}
                        </v-chip>
                    </template>
                </v-file-input>
                <v-btn color="info" class="mr-2"  width="47%">
                    Verificar Resultado
                </v-btn>
                <v-btn color="error" class="mr-2" width="47%">
                    Guardar Resultado
                </v-btn>
            </v-card-text>

        </v-card>
    </section>
</template>

<script>
export default {
    name: "actividad_diagnostico_melanoma_vista",
    components: {
    },
    data: () => ({
        foco: null,
        btn_verificar: false,
        resultado_mostrar: false,
    }),
    methods: {
        imagen_opcion(numero) {
            this.foco = numero;
            this.btn_verificar = true;
        },
        verificar_imagen() {
            this.foco = null;
            this.btn_verificar = false;
            this.resultado_mostrar = true;
        },
    }
};
</script>
<style scoped>

</style>
