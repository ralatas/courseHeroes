<template>
    <div class="menu">
        <v-navigation-drawer
            v-model="drawer"
            :expand-on-hover="expandOnHover"
            :permanent="permanent"
            color="primary"
            absolute
            dark
        >
            <v-list
                dense
                nav
                class="py-4"
            >
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.route"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<style src="./left-menu.scss" lang="scss" scoped></style>
<script src='./left-menu.js'></script>
