import { useEffect, useState } from "react";
import SignIn from "./SignIn";
import Register from "./Register";
function Region({ onClose }) {

	const [openModalIng, setopenModalIng] = useState(
		localStorage.getItem('openModalIng') === 'true'
	)
	useEffect(() => {
		localStorage.setItem('openModalIng', openModalIng.toString());
	}, [openModalIng])

	const heandleOpen = () => {
		setopenModalIng(true)
	}

	const headndleCloseModal = () => {
		setopenModalIng(false)
	}

	return (
		<div>
			{
				openModalIng
					?
					<Register onClose={headndleCloseModal} />
					:
					<div className="fixed inset-0 bg-backgrounds flex items-center justify-center z-50">
						<div className="relative w-[1680px] m-auto bg-white rounded-[128px] p-[80px] ">
							<button onClick={onClose} className="absolute right-0 top-0 bg-[#1083E6] rounded-[80px] p-[24px]">
								<svg className="w-[32px] h-[32px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17 1L1 17M1 1L17 17" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</button>
							<div className="text-center">
								<h1 className="font-[700] text-[40px] leading-[44px] text-black ">Добро пожаловать</h1>
								<p className="font-[400] text-[20px] leading-[26px] mt-[24px] text-[#212121] opacity-[0.6]">Выберите свой регион</p>
							</div>

							<div className="mt-[40px] flex gap-[40px]">
								<div className="relative group">
									<img className="" src="./img/Frame 97.png" alt="Uzbekistan" />
									<div className="absolute top-0 left-0 bg-backgroundImg w-full h-full rounded-[32px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<button className="bg-[#1083E6] py-[14px] px-[24px] rounded-[24px] font-[400] text-[16px] leading-[20px] text-[#FFFFFF]">Узбекистан</button>
									</div>
								</div>
								<div className="relative group">
									<img className="" src="./img/Frame 44.png" alt="Kyrgyzstan" />
									<div className="absolute top-0 left-0 bg-backgroundImg w-full h-full rounded-[32px] flex items-center justify-center  group-hover:opacity-100 transition-opacity duration-300">
										<button className="bg-[#1083E6] py-[14px] px-[24px] rounded-[24px] font-[400] text-[16px] leading-[20px] text-[#FFFFFF]" onClick={heandleOpen}>Кыргызстан</button>
									</div>
								</div>
							</div>
						</div>
					</div>
			}
		</div >
	);
}

export default Region;
