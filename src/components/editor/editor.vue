<template>
    <div>
        <div class="titleEditor">{{ title }}</div>
        <vue-editor v-model="htmlData"/>
    </div>
</template>

<script src="./editor.js" />

<style scoped lang="scss" src="./editor.scss"/>
