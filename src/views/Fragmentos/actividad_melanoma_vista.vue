<template>
    <section class="container">
        <v-card>
            <v-row aling="center" no-gutters>
                <v-col align-self="center">
                    <h1>Encuentra el melanoma</h1>
                </v-col>
                <v-col align-self="center">
                    <v-btn v-if="btn_verificar" elevation="2" color="primary" @click="verificar_imagen()">Verficar
                    </v-btn>
                </v-col>
            </v-row>
            <v-row v-if="!resultado_mostrar">
                <v-col v-for="n in 6" :key="n" class="d-flex child-flex" cols="4">
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" class="mx-auto" height="350"
                            max-width="350" @click="imagen_opcion(n)">
                            <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1"
                                class="grey lighten-2">
                                <v-expand-transition>
                                    <div v-if="foco == n"
                                        class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal"
                                        style="height: 100%;">
                                        <h1>
                                            Seleccionado
                                        </h1>
                                    </div>
                                </v-expand-transition>
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-card>
                    </v-hover>

                </v-col>
            </v-row>
            <v-card v-if="resultado_mostrar">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Actividad completada</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Intento N° 1</v-list-item-title>
                        <v-list-item-subtitle>Respuesta erronea</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Intento N° 2</v-list-item-title>
                        <v-list-item-subtitle>Respuesta correcta</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-card>
    </section>
</template>

<script>
export default {
    name: "actividad_melanoma_vista",
    components: {
    },
    data: () => ({
        foco: null,
        btn_verificar: false,
        resultado_mostrar:false,
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
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
}
</style>
