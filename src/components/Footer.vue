<template>
    <div>
        <div class="footer fade-component" v-if="$route.name !== 'Home'">
            <h2 class="divider" v-if="$route.name !== 'Photography' && $route.name !== 'Gallery'">
                <span></span>
            </h2>
            <div class="footer-inner">
                <div class="extra">
                    <ul>
                        <li>
                            <a href="mailto:dailis.ian@gmail.com" class="green">dailis.ian@gmail.com</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <router-link :to="'/photography'" exact>PHOTOGRAPHY</router-link>
                        </li>
                        <li>
                            <router-link :to="'/about'" exact>ABOUT</router-link>
                        </li>
                        <li>
                            <router-link :to="'/contact'" exact>CONTACT</router-link>
                        </li>
                    </ul>
                </div>
                <div class="copyright">
                    &copy; {{year}} - Designed by
                    <a
                        href="https://github.com/kadinzhang"
                        target="_blank"
                    >Kadin Zhang</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppFooter",
    data() {
        return {
            year: new Date().getFullYear()
        };
    }
};
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
    display: block;
    width: 100%;
    .footer-inner {
        position: relative;
        display: block;
        width: 100%;
        height: auto;
        padding: 32px 0;
        overflow: hidden;
        font-size: 30px;
        color: #cccccc;
        text-align: center;
        .copyright {
            font-size: 14px;
        }
        ul {
            padding: 0;
            margin: 0;
            list-style-type: none;
            li {
                display: inline-block;
                padding-right: 0.75rem;
                a {
                    font-family: "Raleway", sans-serif;
                    font-size: 18px;
                    font-weight: 300;
                    &.green {
                        color: #9fc5a4 !important;
                    }
                }
            }
        }
    }
}
</style>
