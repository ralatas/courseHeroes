<template>
    <div class="teachers">
        <v-container fluid>
            <v-row dense>
                <v-col
                    v-for="card in teachers"
                    :key="card.title"
                    :cols="card.flex"
                >
                    <v-card/>
                </v-col>
            </v-row>
        </v-container>
        <div class="d-flex align-center justify-center">
            <v-btn
                color="primary"
                @click.stop="showCreate = true"
            >
                Создать преподавателя
            </v-btn>
            <create-user
                v-if="showCreate"
                user-type="teacher"
                @close="showCreate = false"
            />
        </div>
    </div>
</template>

<script src="./teachers.js"></script>
<style lang="scss" scoped src="./teachers.scss"></style>
