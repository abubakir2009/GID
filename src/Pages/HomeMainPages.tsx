import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import SignIn from '../Component/ModalWindow/SignIn';

function HomeMainPages() {
	const [LoginUsersModalOpen, setLoginUsersModalOpen] = useState(
		localStorage.getItem('LoginUsersModalOpen') === 'true'
	);

	useEffect(() => {
		localStorage.setItem('LoginUsersModalOpen', LoginUsersModalOpen.toString());
	}, [LoginUsersModalOpen]);

	const handleOpenLoginUsersModal = () => {
		setLoginUsersModalOpen(true);
	};

	const handleCloseLoginUsersModal = () => {
		setLoginUsersModalOpen(false);
	};

	return (
		<div className="relative">
			<div className="relative z-10 w-[1680px] m-auto">
				<div className="flex justify-between items-center py-7">
					<div className="flex items-center gap-[154px]">
						<img src="./img/GID.png" alt="GID" />
						<div className="flex gap-[40px] items-center">
							<ul className="flex items-center gap-10">
								<li className="font-normal text-base leading-5 text-[#212121]">Главная</li>
								<li className="font-normal text-base leading-5 text-[#72787c]">Туры</li>
								<li className="font-normal text-base leading-5 text-[#72787c]">Огранизации</li>
							</ul>
							<div className="flex items-center gap-[10px] bg-[#FFFFFF] py-[14px] px-6 rounded-3xl w-[210px]">
								<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M13 12.5L10.1 9.6M6.33333 2.5C8.17428 2.5 9.66667 3.99238 9.66667 5.83333M11.6667 5.83333C11.6667 8.77885 9.27885 11.1667 6.33333 11.1667C3.38781 11.1667 1 8.77885 1 5.83333C1 2.88781 3.38781 0.5 6.33333 0.5C9.27885 0.5 11.6667 2.88781 11.6667 5.83333Z" stroke="#1083E6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<input className="w-full outline-none font-light text-base leading-5 text-[#212121]" type="text" placeholder="Поиск" />
							</div>
						</div>
					</div>
					<div className="flex gap-[20px] items-center">
						<div className="flex gap-2 items-center py-[14px] px-6 bg-white rounded-3xl">
							<h5><span className="font-light text-base leading-[19px] text-[#1083E6]">Kg</span> / <span className="font-light text-base leading-[19px] text-[#212121]">Ru</span> / <span className="font-light text-base leading-[19px] text-[#212121]">En</span> / <span className="font-light text-base leading-[19px] text-[#212121]">Uz</span></h5>
						</div>
						<div onClick={handleOpenLoginUsersModal} className="py-[14px] px-6 bg-white rounded-3xl text-lg text-[#212121] leading-[22px] font-normal not-italic">
							<span className="cursor-pointer">Регистрация</span> / <span className="cursor-pointer">Войти</span>
						</div>
					</div>
				</div>
				<div className="p-20 w-[1050px] bg-custom-gradient rounded-[64px] mt-[104px]">
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						loop={true}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						modules={[Autoplay, Pagination]}
						className="mySwiper"
					>
						<SwiperSlide>
							<p className="font-[400] text-[20px] leading-[26px] text-[#FFFFFF]">Бронируйте свой тур прямо сейчас!</p>
							<h2 className="font-[700] text-[64px] leading-[70.4px] mt-[18px] text-white">Туры по горним ущельям с 20% скидкой только на этих выходных</h2>
							<p className="font-[400] text-[20px] leading-[26px] text-[#FFFFFF] opacity-[0.6] lead">Не упустите возможность окунуться в атмосферу приключений по самым выгодным ценам! Бронируйте свой тур прямо сейчас!</p>
							<button className="mt-[97px] font-[500] text-[20] leading-[24px] text-white py-[12px] px-[24px] rounded-[24px] bg-[#1083E6]">Смотреть</button>
						</SwiperSlide>
						<SwiperSlide>
							<p className="font-[400] text-[20px] leading-[26px] text-[#FFFFFF]">Бронируйте свой тур прямо сейчас!</p>
							<h2 className="font-[700] text-[64px] leading-[70.4px] mt-[18px] text-white">Туры по горним ущельям с 20% скидкой только на этих выходных</h2>
							<p className="font-[400] text-[20px] leading-[26px] text-[#FFFFFF] opacity-[0.6] lead">Не упустите возможность окунуться в атмосферу приключений по самым выгодным ценам! Бронируйте свой тур прямо сейчас!</p>
							<button className="mt-[97px] font-[500] text-[20] leading-[24px] text-white py-[12px] px-[24px] rounded-[24px] bg-[#1083E6]">Смотреть</button>
						</SwiperSlide>
						<SwiperSlide>
							<p className="font-[400] text-[20px] leading-[26px] text-[#FFFFFF]">Бронируйте свой тур прямо сейчас!</p>
							<h2 className="font-[700] text-[64px] leading-[70.4px] mt-[18px] text-white">Туры по горним ущельям с 20% скидкой только на этих выходных</h2>
							<p className="font-[400] text-[20px] leading-[26px] text-[#FFFFFF] opacity-[0.6] lead">Не упустите возможность окунуться в атмосферу приключений по самым выгодным ценам! Бронируйте свой тур прямо сейчас!</p>
							<button className="mt-[97px] font-[500] text-[20] leading-[24px] text-white py-[12px] px-[24px] rounded-[24px] bg-[#1083E6]">Смотреть</button>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			<img className="absolute top-0 left-0 w-full z-0" src="./img/Photo.png" alt="Photo" />
			{LoginUsersModalOpen && <SignIn onClose={handleCloseLoginUsersModal} />}
		</div>
	);
}

export default HomeMainPages;
