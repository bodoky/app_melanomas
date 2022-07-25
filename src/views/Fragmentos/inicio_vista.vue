<template>
    <section>
        <v-row>
            <v-col>               
                <v-card class="mx-auto" max-width="400">
                    <v-img class="white--text align-end" height="200px"
                        src="https://cdn-icons-png.flaticon.com/512/13/13752.png">
                        <v-card-title>Encuentra el melanoma</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                        Descripción
                    </v-card-subtitle>

                    <v-card-text class="text--primary text-keft">
                        <div>La actividad consiste en seleccionar la imagen correcta con respecto a un melanoma</div>

                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="orange" text :to="{name:'Actividad Melanoma'}">
                            Ver actividad
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
             <v-col>
                <v-card class="mx-auto" max-width="400">
                    <v-img class="white--text align-end" height="200px"
                        src="https://cdn-icons-png.flaticon.com/512/13/13752.png">
                        <v-card-title>Verifica el melanoma</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                        Descripción
                    </v-card-subtitle>

                    <v-card-text class="text--primary text-keft">
                        <div>La actividad consiste en subir una imagen de un melanoma, para obtener un diagnostico</div>

                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="orange" text :to="{name:'Verifica El Melanoma'}">
                            Ver actividad
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: "inicio_vista",
    components: {
    },
    data: () => ({
    }),
};
</script>
