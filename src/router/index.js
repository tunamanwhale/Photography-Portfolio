import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Photography from '@/components/Photography';
import Contact from '@/components/Contact';
import Gallery from '@/components/Gallery';

Vue.use(Router);

export default new Router({
	// base: '/demos/mh-portfolio-vuejs-and-gsap-template/', // --> IF WEBAPP IN SUBFOLDER THEN path/to/subfolder
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: { disableScroll: true },
		},

		{
			path: '/photography',
			name: 'Photography',
			component: Photography,
		},
		{
			path: '/about',
			name: 'About',
			component: About,
		},
		{
			path: '/contact',
			name: 'Contact',
			component: Contact,
		},
		{
			path: '/gallery',
			name: 'Gallery',
			component: Gallery,
		},
	],
});
