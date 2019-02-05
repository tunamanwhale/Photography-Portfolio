<template>
    <div>
        <div class="works-common-holder fade-component">
            <!-- headline START -->
            <h1>Gallery</h1>
            <!-- headline END -->
            <!-- content START -->
            <div class="content">
                <p>Shot with passion on a Nikon D750.</p>
            </div>
            <!-- content END -->
        </div>
        <photos/>
    </div>
</template>

<script>
// gsap
import { TweenMax } from "gsap";
// scrollmagic
import ScrollMagic from "scrollmagic";
import Photos from "./Photos";
// jquery
import $ from "jquery";

export default {
    name: "Gallery",
    components: {
        Photos
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
html,
body {
    overflow-y: auto !important;
}
h1 {
    font-family: "Raleway", sans-serif !important;
    font-size: 40px !important;
    font-weight: 500 !important;
}
</style>
