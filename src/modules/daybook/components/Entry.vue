<template>
    <div
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 10 } })"
    >
        <!-- TITLE -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, Jueves</span>
        </div>

        <div class="entry-description">
            Pariatur deserunt ipsum excepteur magna excepteur id ea. Non consequat laborum minim nisi deserunt enim labore. Veniam id minim quis consequat labore sint mollit amet consequat deserunt velit.
        </div>
    </div>
</template>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
    }

    .entry-description{
        font-size: 12px;
    }
}


</style>