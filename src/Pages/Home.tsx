
import { useState, useEffect } from 'react';
import HomeMainPages from './HomeMainPages';

function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);

	const [selectedRating, setSelectedRating] = useState(null);
	const [selectedRating2, setSelectedRating2] = useState(null);

	const ratings = ['Рейтинг 1', 'Рейтинг 2', 'Рейтинг 3'];
	const ratings2 = [
		{
			text: 'Акции и скидки',
			icon: (
				<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="5" cy="5" r="5" fill="#1083E6" />
				</svg>
			),
		},
		{ text: 'Рейтинг 2', icon: null },
		{ text: 'Рейтинг 3', icon: null },
	];

	useEffect(() => {
		const savedRating = localStorage.getItem('selectedRating');
		if (savedRating) {
			setSelectedRating(savedRating);
		}

		const savedRating2 = localStorage.getItem('selectedRating2');
		if (savedRating2) {
			setSelectedRating2(savedRating2);
		}
	}, []);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const selectRating = (rating) => {
		setSelectedRating(rating);
		localStorage.setItem('selectedRating', rating);
		setIsOpen(false);
	};

	const toggleDropdown2 = () => {
		setIsOpen2(!isOpen2);
	};

	const selectRating2 = (rating) => {
		setSelectedRating2(rating);
		localStorage.setItem('selectedRating2', rating);
		setIsOpen2(false);
	};

	return (
		<>
			<HomeMainPages />
			<div className="w-[1680px] m-auto">
				<div className="flex items-center justify-between mt-[200px]">
					<div className="flex items-center gap-[40px]">
						<h1 className="font-[700] text-[64px] text-[#212121]">Туры</h1>
						<div className="flex gap-[8px]">
							<button className="font-[400] text-[16px] leading-[20px] text-[#1083E6] py-[14px] px-[24px] rounded-[24px] bg-[#1083E61A]">На 1 день</button>
							<button className="font-[400] text-[16px] leading-[20px] text-[#1083E6] py-[14px] px-[24px] rounded-[24px] bg-[#1083E61A]">Пеший</button>
							<button className="font-[400] text-[16px] leading-[20px] text-white py-[14px] px-[24px] rounded-[24px] bg-[#1083E6]">На транспорте</button>
							<button className="font-[400] text-[16px] leading-[20px] text-[#1083E6] py-[14px] px-[24px] rounded-[24px] bg-[#1083E61A]">В моем городе</button>
						</div>
					</div>
					<div className="flex gap-[12px]">
						<div className="flex items-center gap-[10px] bg-[#FFFFFF] py-[14px] px-6 rounded-3xl w-[210px]">
							<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13 12.5L10.1 9.6M6.33333 2.5C8.17428 2.5 9.66667 3.99238 9.66667 5.83333M11.6667 5.83333C11.6667 8.77885 9.27885 11.1667 6.33333 11.1667C3.38781 11.1667 1 8.77885 1 5.83333C1 2.88781 3.38781 0.5 6.33333 0.5C9.27885 0.5 11.6667 2.88781 11.6667 5.83333Z" stroke="#1083E6" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<input className="w-full outline-none font-light text-base leading-5 text-[#212121]" type="text" placeholder="Поиск" />
						</div>
						<div className="relative">
							<div
								className="flex gap-[12px] items-center bg-[#FFFFFF] py-[14px] px-[32px] rounded-[32px] cursor-pointer"
								onClick={toggleDropdown}
							>
								<p className='font-[400] text-[16px] leading-[22.4px] text-[#212121CC]'>{selectedRating ? selectedRating : 'Рейтинг'}</p>
								<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 1L5 5L9 1" stroke="#1083E6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							{isOpen && (
								<div className="w-full text-center absolute bg-[#FFFFFF] mt-[6px] py-[10px] px-[18px] rounded-[32px] shadow-lg">
									{ratings.map((rating) => (
										<div
											key={rating}
											className="w-full mb-[8px] font-[400] text-[16px] leading-[22.4px] text-[#212121CC] transition duration-200 hover:bg-[#1083E61A] cursor-pointer rounded-md px-[5px] py-[5px]"
											onClick={() => selectRating(rating)}
										>
											{rating}
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<iframe className='rounded-[64px] border-[1px] border-[#1083E6]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97055.12742972856!2d72.72559515318916!3d40.52009378440169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac017f5a2e85%3A0xe0a3c61dc6f47b95!2z0J7RiA!5e0!3m2!1sru!2skg!4v1720953014087!5m2!1sru!2skg" width="100%" height="700px">de</iframe>
					<button className="mt-[40px] font-[400] text-[16px] leading-[22.4px] text-[#1083E6] border-[1px] border-[#1083E6] py-[16px] px-[32px] rounded-[32px]">Все туры</button>
				</div>
				<div className="">
					<div className="">
						<h1>Турагенции</h1>
						<div className="relative">
							<div
								className="flex gap-[12px] items-center bg-[#FFFFFF] py-[14px] px-[32px] rounded-[32px] cursor-pointer"
								onClick={toggleDropdown2}
							>
								<p className='font-[400] text-[16px] leading-[22.4px] text-[#212121CC]'>{selectedRating2 ? selectedRating2 : 'Рейтинг'}</p>
								<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 1L5 5L9 1" stroke="#1083E6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							{isOpen2 && (
								<div className="w-full text-center absolute bg-[#FFFFFF] mt-[6px] py-[10px] px-[18px] rounded-[32px] shadow-lg">
									{ratings2.map((rating) => (
										<div
											key={rating.text}
											className="w-full mb-[8px] font-[400] text-[16px] leading-[22.4px] text-[#212121CC] transition duration-200 hover:bg-[#1083E61A] cursor-pointer rounded-md px-[5px] py-[5px] flex items-center gap-[8px]"
											onClick={() => selectRating2(rating.text)}
										>
											{rating.icon}
											{rating.text}
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
