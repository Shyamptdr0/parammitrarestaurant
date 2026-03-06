"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "../../public/image2.webp"
import { Facebook, Instagram, Phone, MessageCircle, Leaf, Sprout, Home } from "lucide-react";

const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2
		}
	}
};

export default function HomePage() {
	return (
		<main className="bg-[#fffaf3]">
			{/* Header + Hero Section with Background */}
			<section
				className="relative min-h-screen bg-no-repeat bg-cover bg-center overflow-hidden"
				style={{ backgroundImage: "url('/bg-image3.jpg')" }}
			>
				{/* Refined gradient overlay for premium feel */}
				<div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-[#7a2e1d]/30"></div>
				
				<div className="relative z-10 min-h-screen flex flex-col">

					{/* Header */}
					<motion.header 
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="flex items-center gap-4 px-6 md:px-12 pt-8"
					>
						<Image
							src="/logo.png"
							alt="Param Mitra Restaurant Logo"
							width={88}
							height={88}
							className="w-16 h-16 md:w-[88px] md:h-[88px] drop-shadow-lg"
						/>
						<div>
							<h1 className="text-xl md:text-2xl font-bold text-white tracking-wide drop-shadow-md font-heading">
								परम मित्र
							</h1>
							<p className="text-xs md:text-sm tracking-widest uppercase text-[#f4c37a] font-medium drop-shadow-md">
								Family Restaurant
							</p>
						</div>
					</motion.header>

					{/* Hero */}
					<div className="relative flex-1 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 py-10 md:py-0">

						{/* Left Content */}
						<motion.div 
							variants={staggerContainer}
							initial="hidden"
							animate="visible"
							className="w-full md:w-1/2 text-center md:text-left mt-16 md:mt-0 z-10"
						>
							<motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm tracking-widest uppercase shadow-lg">
								<span className="text-[#f4c37a]">Est.</span> 2026
							</motion.div>
							
							<motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight font-heading drop-shadow-2xl">
								स्वाद जो <br /> <span className="text-[#f4c37a]">घर की याद</span> दिलाए
							</motion.h2>
							
							<motion.p variants={fadeInUp} className="mt-6 text-base md:text-xl text-gray-200 font-light max-w-lg mx-auto md:mx-0 drop-shadow-lg">
								शुद्ध शाकाहारी • पारंपरिक स्वाद • परिवार के लिए उत्तम
							</motion.p>
							
							<motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
								<button className="w-full sm:w-auto px-8 py-4 bg-[#7a2e1d] text-white rounded-full hover:bg-[#5e2216] transition shadow-[0_0_20px_rgba(122,46,29,0.4)] hover:shadow-[0_0_30px_rgba(122,46,29,0.6)] font-semibold text-lg transform hover:-translate-y-1">
									Explore Our Restaurant
								</button>
								<div className="flex gap-4 items-center">
									<a
										href="https://www.instagram.com/parammitra_family_restaurant/"
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-[#7a2e1d] transition border border-white/20 hover:border-transparent text-white hover:text-white"
									>
										<Instagram className="w-5 h-5" />
									</a>
									<a href="tel:+9108065487271" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-[#7a2e1d] transition border border-white/20 hover:border-transparent text-white hover:text-white">
										<Phone className="w-5 h-5" />
									</a>
									<a
										href="https://wa.me/9108065487271"
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-[#7a2e1d] transition border border-white/20 hover:border-transparent text-white hover:text-white"
									>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
											<path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.2-1.34-.82-.73-1.38-1.63-1.54-1.9-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.26s.98 2.61 1.11 2.79c.14.18 1.93 2.94 4.68 4.12.66.28 1.17.45 1.57.58.66.21 1.25.18 1.72.11.53-.08 1.6-.66 1.83-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32zM16 2.67C8.83 2.67 3 8.5 3 15.67c0 2.28.6 4.49 1.74 6.43L3 29l7.07-1.86a12.93 12.93 0 005.93 1.46h.01c7.17 0 13-5.83 13-13S23.17 2.67 16 2.67zm0 23.6c-1.93 0-3.82-.52-5.48-1.51l-.39-.23-4.2 1.11 1.12-4.08-.25-.4a10.84 10.84 0 01-1.65-5.79C5.15 9.42 9.42 5.15 16 5.15c6.58 0 10.85 4.27 10.85 10.52 0 6.26-4.27 10.6-10.85 10.6z" />
										</svg>
									</a>
								</div>
							</motion.div>
						</motion.div>

						{/* Right Image */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
							animate={{ opacity: 1, scale: 1, rotate: 0 }}
							transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
							className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 relative"
						>
							<div className="absolute inset-0 bg-[#f4c37a]/20 rounded-full blur-[100px] transform scale-75"></div>
							<Image
								src={heroImage}
								alt="Restaurant Food"
								priority
								className="w-[280px] sm:w-[380px] md:w-[600px] lg:w-[700px] h-auto drop-shadow-[0_40px_50px_rgba(0,0,0,0.5)] z-10 animate-[bounce_10s_infinite]"
							/>
						</motion.div>

					</div>
				</div>

				{/* Beautiful soft fade to the next section */}
				<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#fffaf3] to-transparent z-20 pointer-events-none"></div>
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
				<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
					<motion.div 
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
						className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 md:gap-16 shadow-2xl"
					>

						{/* Left Content */}
						<div className="md:w-1/2 text-white">
							<h3 className="text-sm tracking-widest text-[#f4c37a] uppercase font-semibold">
								About Us
							</h3>

							<h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight font-heading">
								परम मित्र <br /> Family Restaurant
							</h2>

							{/* Accent Divider */}
							<div className="mt-5 flex items-center gap-3">
								<span className="h-[2px] w-12 bg-[#7a2e1d]"></span>
								<span className="h-[2px] w-6 bg-[#f4c37a]"></span>
							</div>

							<p className="mt-8 text-lg text-gray-200 leading-relaxed font-light">
								At Param Mitra Restaurant, we serve pure vegetarian food crafted with
								traditional flavors and the warmth of home-style quality.
								Our mission is to offer every family a perfect blend of taste,
								hygiene, and heartfelt hospitality.
							</p>

							<p className="mt-4 text-gray-300 hidden">
								Dishes prepared with years of experience and love,
								bringing back the comforting taste of home every time you visit.
							</p>

							<button className="mt-9 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full transition shadow-lg backdrop-blur-sm group flex items-center gap-2 font-medium">
								Know More
								<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</button>
						</div>

						{/* Right Image */}
						<div className="md:w-1/2 flex justify-center relative">
							{/* Image Ring */}
							<motion.div 
								animate={{ rotate: 360 }}
								transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
								className="absolute inset-0 rounded-full border border-[dashed] border-[#f4c37a]/30 scale-110"
							></motion.div>

							{/* Image Glow */}
							<div className="absolute -inset-8 bg-[#7a2e1d]/40 blur-3xl rounded-full"></div>

							<motion.div 
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.4 }}
								className="relative z-10"
							>
								<Image
									src="/image3.webp"
									alt="About Param Mitra Restaurant"
									width={460}
									height={460}
									className="relative drop-shadow-[0_35px_55px_rgba(0,0,0,0.55)] rounded-2xl object-cover h-[400px] md:h-[460px]"
								/>
							</motion.div>
						</div>

					</motion.div>
				</div>
			</section>


			<section className="py-24 bg-[#fffaf3]">
				<div className="max-w-6xl mx-auto px-6 md:px-10 text-center">

					{/* Section Heading */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
					>
						<h3 className="text-sm tracking-widest text-[#7a2e1d] uppercase font-semibold">
							Our Specialty
						</h3>

						<h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#7a2e1d] font-heading">
							Why Choose Param Mitra
						</h2>

						<div className="mt-4 flex justify-center">
							<span className="h-1 w-16 bg-[#f4c37a] rounded-full"></span>
						</div>

						<p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg font-light">
							We focus on purity, freshness, and a family-friendly experience
							that makes every visit memorable.
						</p>
					</motion.div>

					{/* Cards */}
					<motion.div 
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
					>

						{/* Card 1 */}
						<motion.div 
							variants={fadeInUp}
							whileHover={{ y: -10 }}
							className="group bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(122,46,29,0.1)] transition-all duration-300 border border-transparent hover:border-[#f4c37a]/30"
						>
							<div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#fffaf3] group-hover:bg-[#7a2e1d] transition-colors duration-300 shadow-sm group-hover:shadow-md">
								<Leaf className="w-10 h-10 text-[#7a2e1d] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
							</div>

							<h3 className="mt-8 text-2xl font-bold text-[#7a2e1d] font-heading">
								100% Pure Veg
							</h3>

							<p className="mt-4 text-gray-600 leading-relaxed font-light">
								We maintain the highest standards of cleanliness and ethical
								cooking, serving only pure vegetarian food you can trust.
							</p>
						</motion.div>

						{/* Card 2 */}
						<motion.div 
							variants={fadeInUp}
							whileHover={{ y: -10 }}
							className="group bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(122,46,29,0.1)] transition-all duration-300 border border-transparent hover:border-[#f4c37a]/30"
						>
							<div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#fffaf3] group-hover:bg-[#7a2e1d] transition-colors duration-300 shadow-sm group-hover:shadow-md">
								<Sprout className="w-10 h-10 text-[#7a2e1d] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
							</div>

							<h3 className="mt-8 text-2xl font-bold text-[#7a2e1d] font-heading">
								Farm to Table
							</h3>

							<p className="mt-4 text-gray-600 leading-relaxed font-light">
								Fresh vegetables and locally sourced spices ensure authentic
								flavors and healthy meals in every dish we prepare.
							</p>
						</motion.div>

						{/* Card 3 */}
						<motion.div 
							variants={fadeInUp}
							whileHover={{ y: -10 }}
							className="group bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(122,46,29,0.1)] transition-all duration-300 border border-transparent hover:border-[#f4c37a]/30"
						>
							<div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#fffaf3] group-hover:bg-[#7a2e1d] transition-colors duration-300 shadow-sm group-hover:shadow-md">
								<Home className="w-10 h-10 text-[#7a2e1d] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
							</div>

							<h3 className="mt-8 text-2xl font-bold text-[#7a2e1d] font-heading">
								Family First
							</h3>

							<p className="mt-4 text-gray-600 leading-relaxed font-light">
								A calm, comfortable, and peaceful environment designed for
								families, kids, and elders to dine with ease.
							</p>
						</motion.div>

					</motion.div>
				</div>
			</section>
			


			{/* Menu Highlights Section */}
			<section className="py-32 bg-[#fff3eb]"
				style={{
					backgroundImage: "url('/bg-image7.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat"
				}}>
				<div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
					>
						<h3 className="text-sm tracking-widest text-[#7a2e1d] uppercase font-semibold">
							Menu Highlights
						</h3>
						<h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#7a2e1d] font-heading">
							Visual Menu
						</h2>
						<div className="mt-4 flex justify-center">
							<span className="h-1 w-16 bg-[#f4c37a] rounded-full"></span>
						</div>
						<p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg font-light">
							Beautiful categories with photos showcasing our best dishes
						</p>
					</motion.div>

					<motion.div 
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
					>
						<motion.div variants={fadeInUp} className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#f4c37a]/30">
							<div className="h-68 overflow-hidden relative">
								<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
								<Image
									src="/image9.png"
									alt="The Royal Thali"
									width={400}
									height={300}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
								/>
							</div>
							<div className="p-8 relative bg-white">
								<div className="absolute -top-6 right-8 bg-[#7a2e1d] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-20">
									<Leaf className="w-5 h-5" />
								</div>
								<h3 className="text-2xl font-bold text-[#7a2e1d] mb-4 font-heading group-hover:text-[#5e2216] transition-colors">
									The Royal Thali
								</h3>
								<p className="text-gray-600 font-light leading-relaxed">
									Complete meal with fresh vegetables, dal, rice, roti, pickle, and dessert
								</p>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#f4c37a]/30">
							<div className="h-68 overflow-hidden relative">
								<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
								<Image
									src="/image10.jpg"
									alt="Local Delights"
									width={400}
									height={300}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
								/>
							</div>
							<div className="p-8 relative bg-white">
								<div className="absolute -top-6 right-8 bg-[#7a2e1d] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-20">
									<Sprout className="w-5 h-5" />
								</div>
								<h3 className="text-2xl font-bold text-[#7a2e1d] mb-4 font-heading group-hover:text-[#5e2216] transition-colors">
									Local Delights
								</h3>
								<p className="text-gray-600 font-light leading-relaxed">
									Seasonal specials with local ingredients and traditional recipes
								</p>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#f4c37a]/30">
							<div className="h-68 overflow-hidden relative">
								<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
								<Image
									src="/image11.png"
									alt="Sweet Endings"
									width={400}
									height={300}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
								/>
							</div>
							<div className="p-8 relative bg-white">
								<div className="absolute -top-6 right-8 bg-[#7a2e1d] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-20">
									<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-[#7a2e1d] mb-4 font-heading group-hover:text-[#5e2216] transition-colors">
									Sweet Endings
								</h3>
								<p className="text-gray-600 font-light leading-relaxed">
									Traditional desserts made with authentic recipes and pure ingredients
								</p>
							</div>
						</motion.div>
					</motion.div>

					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="mt-16"
					>
						<button className="px-10 py-4 bg-[#7a2e1d] text-white rounded-full hover:bg-[#5e2216] transition shadow-[0_0_20px_rgba(122,46,29,0.3)] hover:shadow-[0_0_30px_rgba(122,46,29,0.5)] font-semibold text-lg transform hover:-translate-y-1">
							View Full PDF Menu
						</button>
					</motion.div>
				</div>
			</section>

			{/* The Atmosphere Gallery Section */}
			<section className="py-24 bg-[#fffaf3]">
				<div className="max-w-6xl mx-auto px-6 md:px-10">
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
						className="text-center mb-16"
					>
						<h3 className="text-sm tracking-widest text-[#7a2e1d] uppercase font-semibold">
							The Atmosphere
						</h3>
						<h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#7a2e1d] font-heading">
							Gallery
						</h2>
						<div className="mt-4 flex justify-center">
							<span className="h-1 w-16 bg-[#f4c37a] rounded-full"></span>
						</div>
						<p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg font-light">
							3-4 high-quality photos showing the seating area, the kitchen hygiene, and smiling families. This builds trust.
						</p>
					</motion.div>

					<motion.div 
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
					>
						<motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#f4c37a]/30">
							<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
							<Image
								src="/image1.png"
								alt="Cozy Seating Area"
								width={400}
								height={300}
								className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
							/>
						</motion.div>

						<motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#f4c37a]/30 relative h-64">
							<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
							<Image
								src="/image6.png"
								alt="Hygienic Kitchen"
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
							/>
						</motion.div>

						<motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#f4c37a]/30">
							<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
							<Image
								src="/image8.png"
								alt="Happy Families"
								width={400}
								height={300}
								className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
							/>
						</motion.div>

						<motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#f4c37a]/30 relative h-64">
							<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
							<Image
								src="/image7.png"
								alt="Restaurant Ambiance"
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
							/>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Location & Hours Section */}
			<section className="py-32 text-white relative overflow-hidden"
				style={{
					backgroundImage: "url('/bg-image5.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat"
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-br from-[#7a2e1d]/95 to-[#5e2216]/95 backdrop-blur-sm"></div>
				
				<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f4c37a]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
				<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"></div>

				<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
						className="text-center mb-16"
					>
						<h3 className="text-sm tracking-widest text-[#f4c37a] uppercase font-semibold mb-3">
							Location & Hours
						</h3>
						<h2 className="mt-3 text-4xl md:text-5xl font-bold mb-4 font-heading">
							Visit Us Today
						</h2>
						<div className="mt-4 flex justify-center mb-6">
							<span className="h-1 w-16 bg-[#f4c37a] rounded-full"></span>
						</div>
						<p className="text-lg text-gray-200 max-w-2xl mx-auto font-light">
							Experience authentic flavors in the heart of Khargone
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* Left Side - Interactive Map */}
						<motion.div 
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="glass p-2 h-[450px] rounded-3xl"
						>
							<iframe
								src="https://maps.google.com/maps?q=Param+Mitra+Family+Restaurant,+Main+Road+Mandleswar,+Dhargaon,+Khargone,+Madhya+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
							></iframe>
						</motion.div>

						{/* Right Side - Contact Info */}
						<motion.div 
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="space-y-6"
						>
							{/* Restaurant Logo */}
							<motion.div variants={fadeInUp} className="glass rounded-[2rem] p-8 flex items-center justify-center">
								<Image
									src="/logo.png"
									alt="Param Mitra Restaurant Logo"
									width={140}
									height={140}
									className="rounded-full shadow-2xl drop-shadow-[0_0_15px_rgba(244,195,122,0.3)]"
								/>
							</motion.div>

							<motion.div variants={fadeInUp} className="glass rounded-[2rem] p-8 hover:bg-white/15 transition-colors duration-300">
								<div className="flex items-center gap-4 mb-4">
									<div className="w-14 h-14 bg-[#f4c37a]/20 rounded-2xl flex items-center justify-center text-[#f4c37a]">
										<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
									</div>
									<h3 className="text-2xl font-bold text-[#f4c37a] font-heading">Address</h3>
								</div>
								<p className="text-lg leading-relaxed text-gray-200 font-light pl-[4.5rem]">
									Main Road Mandleswar, Dhargaon, Khargone, Madhya Pradesh
								</p>
							</motion.div>



							<motion.div variants={fadeInUp} className="glass rounded-[2rem] p-8 hover:bg-white/15 transition-colors duration-300">
								<div className="flex items-center gap-4 mb-5">
									<div className="w-14 h-14 bg-[#f4c37a]/20 rounded-2xl flex items-center justify-center text-[#f4c37a]">
										<Phone className="w-7 h-7" strokeWidth={1.5} />
									</div>
									<h3 className="text-2xl font-bold text-[#f4c37a] font-heading">Contact</h3>
								</div>
								<div className="space-y-4 pl-[4.5rem]">
									<a href="tel:+9108065487271" className="flex items-center gap-3 text-xl text-gray-200 hover:text-[#f4c37a] transition-colors group">
										<Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
										<span className="font-light">+91 8065487271</span>
									</a>
									<a
										href="https://wa.me/9108065487271"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3 text-xl text-gray-200 hover:text-[#f4c37a] transition-colors group"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 32 32"
											className="w-5 h-5 fill-current group-hover:scale-110 transition-transform"
										>
											<path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.2-1.34-.82-.73-1.38-1.63-1.54-1.9-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.26s.98 2.61 1.11 2.79c.14.18 1.93 2.94 4.68 4.12.66.28 1.17.45 1.57.58.66.21 1.25.18 1.72.11.53-.08 1.6-.66 1.83-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32zM16 2.67C8.83 2.67 3 8.5 3 15.67c0 2.28.6 4.49 1.74 6.43L3 29l7.07-1.86a12.93 12.93 0 005.93 1.46h.01c7.17 0 13-5.83 13-13S23.17 2.67 16 2.67zm0 23.6c-1.93 0-3.82-.52-5.48-1.51l-.39-.23-4.2 1.11 1.12-4.08-.25-.4a10.84 10.84 0 01-1.65-5.79C5.15 9.42 9.42 5.15 16 5.15c6.58 0 10.85 4.27 10.85 10.52 0 6.26-4.27 10.6-10.85 10.6z" />
										</svg>
										<span className="font-light">WhatsApp</span>
									</a>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>


			{/* Footer */}
			<footer className="bg-gradient-to-b from-[#7a2e1d] to-[#5e2216] text-white pt-12">
				<div className="max-w-6xl mx-auto px-6 md:px-10">

					{/* Divider */}
					<motion.div 
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="border-t border-[#8a3c29] pt-8 pb-6 flex flex-col md:flex-row justify-between items-center gap-4"
					>

						{/* Copyright */}
						<p className="text-sm md:text-base text-gray-300 font-light">
							© 2026 <span className="font-medium text-white tracking-wide">परम मित्र रेस्टोरेंट</span>. All rights reserved.
						</p>

						{/* Developer Credit */}
						<p className="text-sm md:text-base text-gray-400 font-light">
							Designed & Developed by{" "}
							<a
								href="https://shreemsoftwaresolutions.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#f5c16c] hover:text-white font-medium transition-colors"
							>
								Shreem Software Solutions
							</a>
						</p>

					</motion.div>
				</div>
			</footer>

		</main>
	);
}
