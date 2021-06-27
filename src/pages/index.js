import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Gebeta Delivery"
				content="Get your food and drinks at your doorsteps using Gebeta platforms. Available via "
				illustration={HeroIllustration}
			/>
		</Layout>
	);
}
