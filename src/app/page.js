import Image from "next/image";
import heroImage from "../../public/image2.webp"
import { Facebook, Instagram, Phone, MessageCircle, Leaf, Sprout, Home } from "lucide-react";


export default function HomePage() {
	return (
		<main className="bg-[#fffaf3]">
			{/* Header + Hero Section with Background */}
			<section
				className="relative min-h-screen bg-no-repeat bg-cover bg-center"
				style={{ backgroundImage: "url('/bg-image3.jpg')" }}
			>
				<div className="relative z-10 min-h-screen bg-black/20">

					{/* Header */}
					<header className="flex items-center gap-4 px-4 md:px-10 pt-6">
						<Image
							src="/logo.png"
							alt="Param Mitra Restaurant Logo"
							width={88}
							height={88}
							className="w-16 h-16 md:w-[88px] md:h-[88px]"
						/>
						<div>
							<h1 className="text-xl md:text-2xl font-bold text-[#7a2e1d]">
								परम मित्र
							</h1>
							<p className="text-xs md:text-sm tracking-wide text-gray-900">
								Family Restaurant
							</p>
						</div>
					</header>

					{/* Hero */}
					<div className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-[80vh] px-4 md:px-10  ">

						{/* Social Icons */}
						<div className="absolute top-4 left-4 md:absolute md:left-6 md:top-auto md:flex md:flex-col flex-row gap-2 md:gap-4 z-20 hidden">

							

							<a
								href="https://www.instagram.com/parammitra_family_restaurant/"
								target="_blank"
								rel="noopener noreferrer"
								className="group p-2 bg-white/80 rounded-full hover:bg-[#7a2e1d] transition"
							>
								<Instagram className="w-4 h-4 md:w-5 md:h-5 text-[#7a2e1d] group-hover:text-white transition" />
							</a>

							<a href="tel:+918085902662" className="group p-2 bg-white/80 rounded-full hover:bg-[#7a2e1d] transition">
								<Phone className="w-4 h-4 md:w-5 md:h-5 text-[#7a2e1d] group-hover:text-white transition" />
							</a>

							<a
								href="https://wa.me/918085902662"
								target="_blank"
								rel="noopener noreferrer"
								className="group p-2 bg-white/80 rounded-full hover:bg-[#7a2e1d] transition"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 32 32"
									className="w-5 h-5 fill-[#7a2e1d] group-hover:fill-white transition"
								>
									<path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.2-1.34-.82-.73-1.38-1.63-1.54-1.9-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.26s.98 2.61 1.11 2.79c.14.18 1.93 2.94 4.68 4.12.66.28 1.17.45 1.57.58.66.21 1.25.18 1.72.11.53-.08 1.6-.66 1.83-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32zM16 2.67C8.83 2.67 3 8.5 3 15.67c0 2.28.6 4.49 1.74 6.43L3 29l7.07-1.86a12.93 12.93 0 005.93 1.46h.01c7.17 0 13-5.83 13-13S23.17 2.67 16 2.67zm0 23.6c-1.93 0-3.82-.52-5.48-1.51l-.39-.23-4.2 1.11 1.12-4.08-.25-.4a10.84 10.84 0 01-1.65-5.79C5.15 9.42 9.42 5.15 16 5.15c6.58 0 10.85 4.27 10.85 10.52 0 6.26-4.27 10.6-10.85 10.6z" />
								</svg>
							</a>

						</div>

						{/* Left Content */}
						<div className="w-full md:w-1/3 md:pl-20 text-center md:text-left mt-20 md:mt-0">
							<h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#7a2e1d] leading-tight">
								स्वाद जो <br /> घर की याद दिलाए
							</h2>
							<p className="mt-4 text-base md:text-lg text-gray-700">
								शुद्ध शाकाहारी • पारंपरिक स्वाद • परिवार के लिए उत्तम
							</p>
							<button className="mt-6 px-6 py-3 bg-[#7a2e1d] text-white rounded-full hover:bg-[#5e2216] transition">
								Explore Our Restaurant
							</button>
						</div>

						{/* Right Image */}
						<div className="w-full md:w-2/3 flex justify-center md:justify-start mt-10 md:mt-0">
							<Image
								src={heroImage}
								alt="Restaurant Food"
								className="w-[280px] sm:w-[380px] md:w-[650px] h-auto drop-shadow-[0_30px_45px_rgba(0,0,0,0.35)]"
							/>
						</div>

					</div>
				</div>

				<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fffaf3] to-transparent"></div>
			</section>



			{/* About Section */}
			<section
				className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-32"
				style={{ backgroundImage: "url('/bg-image5.png')" }}
			>
				{/* Smooth Section Merge Fade */}
				<div className="pointer-events-none absolute -top-24 left-0 w-full h-48
                bg-gradient-to-b from-[#fffaf3] via-[#fffaf3]/70 to-transparent blur-sm">
				</div>

				{/* Dark + Warm Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-[#7a2e1d]/50"></div>

		
				{/* Decorative Shapes */}
				<div className="absolute top-20 -left-20 w-[420px] h-[420px] bg-[#7a2e1d]/30 rounded-full blur-3xl"></div>
				<div className="absolute bottom-10 -right-20 w-[420px] h-[420px] bg-[#f4c37a]/20 rounded-full blur-3xl"></div>

				{/* Content Wrapper (Glass Card Effect) */}
				<div className="relative z-10 max-w-6xl mx-auto px-10">
					<div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-16 shadow-2xl">

						{/* Left Content */}
						<div className="md:w-1/2 text-white">
							<h3 className="text-sm tracking-widest text-[#f4c37a] uppercase">
								About Us
							</h3>

							<h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
								परम मित्र <br /> Family Restaurant
							</h2>

							{/* Accent Divider */}
							<div className="mt-5 flex items-center gap-3">
								<span className="h-[2px] w-10 bg-[#7a2e1d]"></span>
								<span className="h-[2px] w-6 bg-[#f4c37a]"></span>
							</div>

							<p className="mt-6 text-lg text-gray-200 leading-relaxed">
								At Param Mitra Restaurant, we serve pure vegetarian food crafted with
								traditional flavors and the warmth of home-style quality.
								Our mission is to offer every family a perfect blend of taste,
								hygiene, and heartfelt hospitality.
							</p>

							<p className="mt-4 text-gray-300 hidden">
								Dishes prepared with years of experience and love,
								bringing back the comforting taste of home every time you visit.
							</p>


							<button className="mt-9 px-8 py-3 bg-[#7a2e1d] text-white rounded-full hover:bg-[#5e2216] transition shadow-lg hover:shadow-2xl">
								Know More
							</button>
						</div>

						{/* Right Image */}
						<div className="md:w-1/2 flex justify-center relative">
							{/* Image Ring */}
							<div className="absolute inset-0 rounded-full border border-[#f4c37a]/30 scale-110"></div>

							{/* Image Glow */}
							<div className="absolute -inset-8 bg-[#7a2e1d]/40 blur-3xl rounded-full"></div>

							<div className="relative">
								<Image
									src="/image3.webp"
									alt="About Param Mitra Restaurant"
									width={460}
									height={460}
									className="relative drop-shadow-[0_35px_55px_rgba(0,0,0,0.55)] rounded-2xl"
								/>


							</div>
						</div>

					</div>
				</div>
			</section>


			<section className="py-24 bg-[#fffaf3]">
				<div className="max-w-6xl mx-auto px-10 text-center">

					{/* Section Heading */}
					<h3 className="text-sm tracking-widest text-[#7a2e1d] uppercase">
						Our Specialty
					</h3>

					<h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#7a2e1d]">
						Why Choose Param Mitra
					</h2>

					<p className="mt-4 max-w-2xl mx-auto text-gray-600">
						We focus on purity, freshness, and a family-friendly experience
						that makes every visit memorable.
					</p>

					{/* Cards */}
					<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

						{/* Card 1 */}
						<div className="group bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition">
							<div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#7a2e1d]/10 group-hover:bg-[#7a2e1d] transition">
								<Leaf className="w-8 h-8 text-[#7a2e1d] group-hover:text-white transition" />
							</div>

							<h3 className="mt-6 text-2xl font-bold text-[#7a2e1d]">
								100% Pure Veg
							</h3>

							<p className="mt-4 text-gray-600 leading-relaxed">
								We maintain the highest standards of cleanliness and ethical
								cooking, serving only pure vegetarian food you can trust.
							</p>
						</div>

						{/* Card 2 */}
						<div className="group bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition">
							<div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#7a2e1d]/10 group-hover:bg-[#7a2e1d] transition">
								<Sprout className="w-8 h-8 text-[#7a2e1d] group-hover:text-white transition" />
							</div>

							<h3 className="mt-6 text-2xl font-bold text-[#7a2e1d]">
								Farm to Table
							</h3>

							<p className="mt-4 text-gray-600 leading-relaxed">
								Fresh vegetables and locally sourced spices ensure authentic
								flavors and healthy meals in every dish we prepare.
							</p>
						</div>

						{/* Card 3 */}
						<div className="group bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition">
							<div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#7a2e1d]/10 group-hover:bg-[#7a2e1d] transition">
								<Home className="w-8 h-8 text-[#7a2e1d] group-hover:text-white transition" />
							</div>

							<h3 className="mt-6 text-2xl font-bold text-[#7a2e1d]">
								Family First
							</h3>

							<p className="mt-4 text-gray-600 leading-relaxed">
								A calm, comfortable, and peaceful environment designed for
								families, kids, and elders to dine with ease.
							</p>
						</div>

					</div>
				</div>
			</section>
			


			{/* Menu Highlights Section */}
			<section className="py-35 bg-[#fff3eb]"
				style={{
					backgroundImage: "url('/bg-image7.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat"
				}}>
				<div className="max-w-6xl mx-auto px-10 text-center">
					<h3 className="text-sm tracking-widest text-[#7a2e1d] uppercase">
						Menu Highlights
					</h3>
					<h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#7a2e1d]">
						Visual Menu
					</h2>
					<p className="mt-4 max-w-2xl mx-auto text-gray-600">
						Beautiful categories with photos showcasing our best dishes
					</p>

					<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
						<div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition">
							<div className="h-68 overflow-hidden">
								<Image
									src="/image9.png"
									alt="The Royal Thali"
									width={200}
									height={200}
									className="w-auto h-auto object-cover group-hover:scale-105 transition duration-300"
								/>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-bold text-[#7a2e1d] mb-4">
									The Royal Thali
								</h3>
								<p className="text-gray-600">
									Complete meal with fresh vegetables, dal, rice, roti, pickle, and dessert
								</p>
							</div>
						</div>
						<div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition">
							<div className="h-68 overflow-hidden">
								<Image
									src="/image10.jpg"
									alt="Local Delights"
									width={400}
									height={200}
									className="w-auto h-auto  object-cover group-hover:scale-105 transition duration-300"
								/>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-bold text-[#7a2e1d] mb-4">
									Local Delights
								</h3>
								<p className="text-gray-600">
									Seasonal specials with local ingredients and traditional recipes
								</p>
							</div>
						</div>
						<div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition">
							<div className="h-68 overflow-hidden">
								<Image
									src="/image11.png"
									alt="Sweet Endings"
									width={400}
									height={200}
									className="w-auto h-auto  object-cover group-hover:scale-105 transition duration-300"
								/>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-bold text-[#7a2e1d] mb-4">
									Sweet Endings
								</h3>
								<p className="text-gray-600">
									Traditional desserts made with authentic recipes and pure ingredients
								</p>
							</div>
						</div>
					</div>

					<div className="mt-12">
						<button className="px-8 py-4 bg-[#7a2e1d] text-white rounded-full hover:bg-[#5e2216] transition">
							View Full PDF Menu
						</button>
					</div>
				</div>
			</section>

			{/* The Atmosphere Gallery Section */}
			<section className="py-24 bg-[#fffaf3]">
				<div className="max-w-6xl mx-auto px-10">
					<div className="text-center mb-16">
						<h3 className="text-sm tracking-widest text-[#7a2e1d] uppercase">
							The Atmosphere
						</h3>
						<h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#7a2e1d]">
							Gallery
						</h2>
						<p className="mt-4 max-w-2xl mx-auto text-gray-600">
							3-4 high-quality photos showing the seating area, the kitchen hygiene, and smiling families. This builds trust.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
							<Image
								src="/image1.png"
								alt="Cozy Seating Area"
								width={400}
								height={300}
								className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
							/>

						</div>

						<div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
							<Image
								src="/image6.png"
								alt="Hygienic Kitchen"
								width={400}
								height={300}
								className=" object-cover group-hover:scale-105 transition duration-300"
							/>

						</div>

						<div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
							<Image
								src="/image8.png"
								alt="Happy Families"
								width={400}
								height={300}
								className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
							/>

						</div>

						<div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
							<Image
								src="/image7.png"
								alt="Restaurant Ambiance"
								width={300}
								height={300}
								className="w-auto object-cover group-hover:scale-105 transition duration-300"
							/>

						</div>
					</div>
				</div>
			</section>

			{/* Location & Hours Section */}
			<section className="py-20 text-white relative overflow-hidden"
				style={{
					backgroundImage: "url('/bg-image5.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat"
				}}
			>
				<div className="absolute inset-0 bg-[#7a2e1d]/85"></div>
				<div className="relative z-10 max-w-6xl mx-auto px-10">
					<div className="text-center mb-16">
						<h3 className="text-sm tracking-widest text-[#f4c37a] uppercase mb-3">
							Location & Hours
						</h3>
						<h2 className="mt-3 text-4xl md:text-5xl font-bold mb-4">
							Visit Us Today
						</h2>
						<p className="text-lg text-gray-200 max-w-2xl mx-auto">
							Experience authentic flavors in the heart of Khargone
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Left Side - Interactive Map */}
						<div className="bg-white/10 backdrop-blur-md rounded-3xl p-2 h-96 border border-white/20">
							<iframe
								src="https://maps.google.com/maps?q=Param+Mitra+Family+Restaurant,+Main+Road+Mandleswar,+Dhargaon,+Khargone,+Madhya+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="rounded-2xl"
							></iframe>
						</div>

						{/* Right Side - Contact Info */}
						<div className="space-y-8">
							{/* Restaurant Logo */}
							<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex items-center justify-center">
								<Image
									src="/logo.png"
									alt="Param Mitra Restaurant Logo"
									width={120}
									height={120}
									className="rounded-full shadow-lg"
								/>
							</div>

							<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
								<div className="flex items-center gap-3 mb-4">
									<div className="w-12 h-12 bg-[#f4c37a]/20 rounded-full flex items-center justify-center">
										<svg className="w-6 h-6 text-[#f4c37a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
									</div>
									<h3 className="text-xl font-bold text-[#f4c37a]">Address</h3>
								</div>
								<p className="text-lg leading-relaxed text-white">
									Main Road Mandleswar, Dhargaon, Khargone, Madhya Pradesh
								</p>
							</div>



							<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
								<div className="flex items-center gap-3 mb-4">
									<div className="w-12 h-12 bg-[#f4c37a]/20 rounded-full flex items-center justify-center">
										<Phone className="w-6 h-6 text-[#f4c37a]" />
									</div>
									<h3 className="text-xl font-bold text-[#f4c37a]">Contact</h3>
								</div>
								<div className="space-y-3">
									<a href="tel:+918085902662" className="flex items-center gap-3 text-lg text-white hover:text-[#f4c37a] transition">
										<Phone className="w-5 h-5" />
										+91 80859 02662
									</a>
									<a
										href="https://wa.me/918085902662"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3 text-lg text-white hover:text-[#f4c37a] transition"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 32 32"
											className="w-5 h-5 fill-white transition"
										>
											<path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.2-1.34-.82-.73-1.38-1.63-1.54-1.9-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.26s.98 2.61 1.11 2.79c.14.18 1.93 2.94 4.68 4.12.66.28 1.17.45 1.57.58.66.21 1.25.18 1.72.11.53-.08 1.6-.66 1.83-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32zM16 2.67C8.83 2.67 3 8.5 3 15.67c0 2.28.6 4.49 1.74 6.43L3 29l7.07-1.86a12.93 12.93 0 005.93 1.46h.01c7.17 0 13-5.83 13-13S23.17 2.67 16 2.67zm0 23.6c-1.93 0-3.82-.52-5.48-1.51l-.39-.23-4.2 1.11 1.12-4.08-.25-.4a10.84 10.84 0 01-1.65-5.79C5.15 9.42 9.42 5.15 16 5.15c6.58 0 10.85 4.27 10.85 10.52 0 6.26-4.27 10.6-10.85 10.6z" />
										</svg>
										WhatsApp
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			{/* Footer */}
			<footer className="bg-[#7a2e1d] text-white">
				<div className="max-w-6xl mx-auto px-6 py-6">

					{/* Divider */}
					<div className="border-t border-[#8a3c29] pt-6 text-center space-y-2">

						{/* Copyright */}
						<p className="text-sm text-gray-300">
							© 2026 <span className="font-medium">परम मित्र रेस्टोरेंट</span>. All rights reserved.
						</p>

						{/* Developer Credit */}
						<p className="text-sm text-gray-400">
							Designed & Developed by{" "}
							<a
								href="https://shreemsoftwaresolutions.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#f5c16c] hover:text-[#ffd27d] font-semibold transition"
							>
								Shreem Software Solutions
							</a>
						</p>

					</div>
				</div>
			</footer>

		</main>
	);
}
