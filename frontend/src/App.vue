<template>
	<q-layout view="lHh Lpr lFf" style="height: 100vh">
		<Header />
		<q-page-container style="min-height: inherit">
			<q-page>
				<router-view />
				<Footer />
			</q-page>
		</q-page-container>
	</q-layout>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const Header = defineAsyncComponent(() => import('./modules/Header/index.vue'));
const Footer = defineAsyncComponent(() => import('./modules/Footer/index.vue'));
</script>
