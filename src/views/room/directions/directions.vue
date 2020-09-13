<template>
    <div class="directions">
        <v-container fluid>
            <div v-if="loading" class="d-flex align-center justify-center loading">
                <v-progress-circular
                    :size="50"
                    color="primary"
                    indeterminate
                />
            </div>
            <v-row v-else dense>
                <v-col
                    v-for="item in directions"
                    :key="item.id"
                    :cols="6"
                >
                    <v-card :class="{ primary: user.speciality && item.id === user.speciality.id }">
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title
                                    class="headline"
                                    v-text="item.name"
                                />
                                <v-card-subtitle v-text="item.topic"/>
                                <v-btn
                                    v-if="user.role === 'admin'"
                                    @click="remove"
                                >Удалить</v-btn>
                                <v-btn
                                    v-if="user.role === 'student'"
                                    @click="openView(item)"
                                >Ознакомиться</v-btn>
                            </div>

                            <v-avatar
                                class="ma-3"
                                size="125"
                                tile
                            >
                                <v-img :src="item.image"/>
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <detail-direction
            v-if="previewData"
            :data="previewData"
            @close="closeView"
        />

        <div class="d-flex align-center justify-center">
            <v-btn
                color="primary"
                @click.stop="showCreate = true"
            >
                Создать направление
            </v-btn>
            <create-direction v-if="showCreate" @close="close" />
        </div>
    </div>
</template>

<script src="./directions.js"></script>
<style lang="scss" scoped src="./directions.scss"></style>
