<template>
    <v-app>
        <v-navigation-drawer app v-model="drawer">
            <v-layout align-center>
                <v-flex md12>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="text-h6">
                                Marcus Obrien
                            </v-list-item-title>
                            <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-list dense nav>
                <v-list-item-group v-model="group" color="primary">
                    <v-list-item v-for="item in menu" :key="item.title" link :to="item.to">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="item.title" style="text-align: left !important">
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app dark elevation="0" color="primary">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <h1>CIS-UNL</h1>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-main>
            <v-container fluid>

                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>

export default {
    name: "principal_vista",
    components: {

    },
    data: () => ({
        drawer: true,
        loading: true,
        menu: [
            { title: "Inicio", icon: "mdi-view-dashboard", to: { name: "Inicio" } },
            { title: "Actividades", icon: "mdi-account-box", to:{name:"Actividad"} },
            { title: "Resultados", icon: "mdi-gavel",to:{name:"Resultado"}  },
        ],
    }),
    methods: {},
    watch: {
        loading(val) {
            if (!val) return;

            setTimeout(() => (this.loading = false), 3000);
        },
    },
};
</script>
