import { motion } from 'framer-motion';
import { AnimateIn, StaggerContainer, StaggerItem } from '../ui/animations';

const testimonials = [
	{
		content:
			'Manifest has completely transformed my life. I\'ve manifested a new job, a loving relationship, and inner peace using the app\'s powerful tools.',
		author: 'Sarah J.',
		location: 'New York, NY',
	},
	{
		content:
			'The vision board feature helped me visualize my dream home, and within 8 months, I found and purchased the exact house I had been imagining.',
		author: 'Michael T.',
		location: 'Portland, OR',
	},
	{
		content:
			'Daily journaling with Manifest has given me clarity and purpose. My anxiety has decreased, and I\'m making consistent progress toward my goals.',
		author: 'Amara K.',
		location: 'Chicago, IL',
	},
];

const TestimonialSection = () => {
	return (
		<div className="mx-auto max-w-7xl sm:text-center py-36 relative">
			{/* Static background gradient - removed infinite animation */}
			<div
				className="absolute inset-0 opacity-20 -z-10"
				style={{
					background:
						'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1), transparent 70%)',
					filter: 'blur(60px)',
				}}
			/>

			<AnimateIn className="mb-16">
				<h2 className="text-lg/10 font-base text-zinc-500 uppercase tracking-wider font-medium mb-3">
					Success Stories
				</h2>
				<p className="text-center text-4xl font-medium tracking-tight text-pretty text-black sm:text-5xl sm:text-balance">
					Dreams Becoming{' '}
					<span className="text-gradient bg-gradient-to-r from-purple-600 to-indigo-600">
						Reality
					</span>
				</p>
			</AnimateIn>

			<StaggerContainer
				className="mt-16 grid gap-4 md:gap-8 md:grid-cols-3 px-4 md:px-6"
				delay={0.2}
			>
				{testimonials.map((testimonial, index) => (
					<StaggerItem key={index}>
						<motion.div
							className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-soft h-full flex flex-col"
							whileHover={{
								y: -10,
								boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
							}}
							transition={{ duration: 0.3 }}
						>
							<div className="mb-3 md:mb-4">
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 inline-block"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
							</div>

							<p className="text-zinc-700 text-sm md:text-lg flex-grow italic mb-4 md:mb-6 leading-relaxed">
								"{testimonial.content}"
							</p>

							<div className="mt-auto">
								<p className="font-semibold text-zinc-900 text-sm md:text-base">
									{testimonial.author}
								</p>
								<p className="text-zinc-500 text-xs md:text-sm">
									{testimonial.location}
								</p>
							</div>
						</motion.div>
					</StaggerItem>
				))}
			</StaggerContainer>

			<AnimateIn className="mt-16">
				<motion.a
					className="inline-flex items-center gap-x-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-md font-semibold text-white shadow-premium transition-all duration-300 hover:shadow-glow hover:scale-[102%]"
					whileHover={{ y: -3 }}
					whileTap={{ scale: 0.98 }}
					href="/stories"
				>
					Read More Success Stories
					<svg
						className="w-5 h-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</motion.a>
			</AnimateIn>
		</div>
	);
};

export default TestimonialSection;
