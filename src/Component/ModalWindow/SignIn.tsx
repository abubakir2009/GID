// import { useEffect, useState } from "react";
// import ModalFunction from "../FunctionModal/ModalFunction";
// import Register from "./Register";

// function SignIn({ onClose }) {
// 	const [openModalRegisters, setOpenModalRegisters] = useState(
// 		localStorage.getItem('openModalRegisters') === 'true'
// 	);
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [isValid, setIsValid] = useState(true);
// 	const [buttonColor, setButtonColor] = useState('#1083E6'); // Default blue color

// 	useEffect(() => {
// 		localStorage.setItem('openModalRegisters', openModalRegisters.toString());
// 	}, [openModalRegisters]);

// 	const handleOpenModalRegister = () => {
// 		setOpenModalRegisters(true);
// 	};

// 	const handleCloseModalRegister = () => {
// 		setOpenModalRegisters(false);
// 	};

// 	const handleEmailChange = (e) => {
// 		setEmail(e.target.value);
// 	};

// 	const handlePasswordChange = (e) => {
// 		setPassword(e.target.value);
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const response = await fetch('http://gitkg.prolabagency.com/api/v1/accounts/login/', {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify({ email, password }),
// 			});

// 			if (response.ok) {
// 				// Login successful, reset button color to blue
// 				setButtonColor('#1083E6');
// 			} else {
// 				// Login failed, change button color to red
// 				setIsValid(false);
// 				setButtonColor('#FF0000');
// 			}
// 		} catch (error) {
// 			console.error('Login error:', error);
// 			setIsValid(false);
// 			setButtonColor('#FF0000');
// 		}
// 	};

// 	return (
// 		<>
// 			{openModalRegisters ? (
// 				<Register onClose={handleCloseModalRegister} />
// 			) : (
// 				<ModalFunction onClose={onClose}>
// 					<div className="w-[50%] flex flex-col items-center text-center">
// 						<svg width="122" height="55" viewBox="0 0 122 55" fill="none" xmlns="http://www.w3.org/2000/svg">
// 							{/* SVG content */}
// 						</svg>
// 						<h1 className="mt-[44px] font-[700] text-[38px] leading-[44px] text-black">Добро пожаловать</h1>
// 						<p className="font-[400] text-[20px] leading-[26px] mt-[12px] text-[#212121] opacity-[0.6]">
// 							Продолжить с Google или введите данные<br />для входа
// 						</p>
// 						<form className="w-[480px] flex flex-col items-center mt-[28px] gap-[8px]" onSubmit={handleSubmit}>
// 							<input
// 								className="outline-none py-[16px] px-[32px] border-[1px] rounded-[32px] border-[#1083E666] w-full"
// 								type="email"
// 								placeholder="Email"
// 								value={email}
// 								onChange={handleEmailChange}
// 								required
// 							/>
// 							<div className="py-[16px] px-[32px] border-[1px] rounded-[32px] border-[#1083E666] w-full flex items-center justify-between">
// 								<input
// 									className="outline-none"
// 									type="password"
// 									placeholder="password"
// 									value={password}
// 									onChange={handlePasswordChange}
// 									required
// 								/>
// 								<svg className="cursor-pointer" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
// 									{/* SVG content */}
// 								</svg>
// 							</div>
// 							<div className="w-full flex justify-end mt-[12px]">
// 								<p className="cursor-pointer text-[#1083E6] font-[400] text-[14px] leading-[18.2px] border-b-[1px] border-[#1083E6]">Забыли пароль</p>
// 							</div>
// 							<button
// 								className="w-full mt-[28px] py-[16px] px-[32] rounded-[32px] font-[400] text-[16px] leading-[22.4px]"
// 								style={{ backgroundColor: buttonColor, color: 'white' }}
// 								type="submit"
// 							>
// 								Войти
// 							</button>
// 							<div className="w-full flex justify-between items-center mt-[12px]">
// 								<p className="font-[400] text-[14px] leading-[18.2px] text-[#212121] opacity-[0.6]">Вы еще не зарегистрировались?</p>
// 								<p className="cursor-pointer text-[#1083E6] font-[400] text-[14px] leading-[18.2px] border-b-[1px] border-[#1083E6]" onClick={handleOpenModalRegister}>Создать аккаунт</p>
// 							</div>
// 							<div className="mt-[18px] w-full flex justify-between items-center">
// 								<hr className="border-[1px] w-[42%] text-[#21212133]" />
// 								<p className="font-[400] text-[14px] leading-[18.2px] opacity-[0.6] text-[#212121]">или</p>
// 								<hr className="border-[1px] w-[42%] text-[#21212133]" />
// 							</div>
// 						</form>
// 						<div className="mt-[18px] w-[480px] flex gap-[8px] justify-between">
// 							<button className="w-[50%] border-[1px] border-[#1083E6] py-[17px] rounded-[32px] flex justify-center items-center gap-[10px] font-[400] text-[16px] text-[#1083E6] leading-[19.36px] transition duration-200 hover:bg-[#1083E633]">
// 								<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
// 									{/* SVG content */}
// 								</svg>
// 								Google
// 							</button>
// 							<button className="w-[50%] border-[1px] border-[#1083E6] py-[17px] rounded-[32px] flex justify-center items-center gap-[10px]  font-[400] text-[16px] text-[#1083E6] leading-[19.36px] transition duration-200 hover:bg-[#1083E633]">
// 								<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
// 									{/* SVG content */}
// 								</svg>
// 								Facebook
// 							</button>
// 						</div>
// 					</div>
// 				</ModalFunction>
// 			)}
// 		</>
// 	);
// }

// export default SignIn;



import { useEffect, useState } from "react"
import ModalFunction from "../FunctionModal/ModalFunction"
import Register from "./Register";

function SignIn({ onClose }) {
	const [openModalRegisters, setOpenModalRegisters] = useState(
		localStorage.getItem('openModalRegisters') === 'true'
	)

	useEffect(() => {
		localStorage.setItem('openModalRegisters', openModalRegisters.toString());
	}, [openModalRegisters]);

	const heandleOpenModalRegister = () => {
		setOpenModalRegisters(true)
	}


	const heandleCloseModalRegister = () => {
		setOpenModalRegisters(false)
	}

	return (
		<>
			{
				openModalRegisters
					?
					<Register onClose={heandleCloseModalRegister} />
					:
					<>
						<ModalFunction onClose={onClose}>
							<div className="w-[50%] flex flex-col items-center text-center">
								<svg width="122" height="55" viewBox="0 0 122 55" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M36.5859 18.1013C36.2274 16.8537 35.7237 15.7513 35.0749 14.7942C34.4262 13.82 33.6323 12.9997 32.6933 12.3331C31.7714 11.6495 30.7129 11.1282 29.5178 10.7693C28.3397 10.4104 27.0337 10.2309 25.5996 10.2309C22.9191 10.2309 20.5631 10.8975 18.5314 12.2306C16.5168 13.5637 14.9461 15.5035 13.8193 18.0501C12.6925 20.5795 12.1291 23.673 12.1291 27.3305C12.1291 30.988 12.684 34.0985 13.7937 36.6622C14.9035 39.2258 16.4742 41.1828 18.5058 42.533C20.5375 43.8661 22.9362 44.5326 25.702 44.5326C28.2117 44.5326 30.3543 44.0882 32.1299 43.1995C33.9225 42.2937 35.2884 41.0204 36.2274 39.3797C37.1834 37.7389 37.6615 35.7991 37.6615 33.5602L39.9151 33.8934H26.3934V25.5359H48.3405V32.1502C48.3405 36.7647 47.3673 40.7299 45.421 44.0455C43.4747 47.3441 40.7943 49.8906 37.3798 51.6852C33.9652 53.4627 30.0555 54.3514 25.6508 54.3514C20.7338 54.3514 16.4144 53.2661 12.6925 51.0956C8.97068 48.9079 6.0683 45.8059 3.98543 41.7895C1.91962 37.756 0.886719 32.9705 0.886719 27.433C0.886719 23.1774 1.50134 19.3832 2.73058 16.0504C3.97689 12.7006 5.71831 9.86345 7.95485 7.53907C10.1914 5.21469 12.795 3.44577 15.7656 2.2323C18.7363 1.01884 21.9545 0.412109 25.4203 0.412109C28.391 0.412109 31.1567 0.847931 33.7177 1.71957C36.2786 2.57413 38.5493 3.78759 40.5297 5.35996C42.5272 6.93234 44.1577 8.8038 45.421 10.9744C46.6844 13.1278 47.4954 15.5035 47.8539 18.1013H36.5859Z" fill="#212121" />
									<path d="M67.7586 1.12993V53.6336H56.6699V1.12993H67.7586Z" fill="#212121" />
									<path d="M95.4741 53.6336H76.8819V1.12993H95.6278C100.903 1.12993 105.445 2.18103 109.252 4.28323C113.059 6.36833 115.987 9.36781 118.036 13.2817C120.102 17.1955 121.135 21.8784 121.135 27.3305C121.135 32.7996 120.102 37.4996 118.036 41.4306C115.987 45.3615 113.042 48.3781 109.201 50.4803C105.376 52.5825 100.801 53.6336 95.4741 53.6336ZM87.9707 44.1224H95.0132C98.2911 44.1224 101.048 43.5413 103.285 42.3791C105.539 41.1999 107.229 39.3797 108.356 36.9186C109.499 34.4404 110.071 31.2443 110.071 27.3305C110.071 23.4508 109.499 20.2804 108.356 17.8193C107.229 15.3582 105.547 13.5466 103.311 12.3844C101.074 11.2222 98.3168 10.6411 95.0388 10.6411H87.9707V44.1224Z" fill="#212121" />
								</svg>
								<h1 className="mt-[44px] font-[700] text-[38px] leading-[44px] text-black">Добро пожаловать</h1>
								<p className="font-[400] text-[20px] leading-[26px] mt-[12px] text-[#212121] opacity-[0.6]">Продолжить с Google или введите данные<br />для входа</p>
								<form className='w-[480px] flex flex-col items-center mt-[28px] gap-[8px]'>
									<input className="outline-none py-[16px] px-[32px] border-[1px] rounded-[32px] border-[#1083E666] w-full" name="" type="email" placeholder="Email" />
									<div className="py-[16px] px-[32px] border-[1px] rounded-[32px] border-[#1083E666] w-full flex items-center justify-between">
										<input className="outline-none" type="password" placeholder="password" />
										<svg className="cursor-pointer" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g opacity="0.8">
												<path d="M1.61342 8.97513C1.52262 8.83137 1.47723 8.75949 1.45182 8.64862C1.43273 8.56534 1.43273 8.43401 1.45182 8.35073C1.47723 8.23986 1.52262 8.16798 1.61341 8.02422C2.36369 6.83624 4.59693 3.83301 8.00027 3.83301C11.4036 3.83301 13.6369 6.83623 14.3871 8.02422C14.4779 8.16798 14.5233 8.23986 14.5487 8.35073C14.5678 8.43401 14.5678 8.56534 14.5487 8.64862C14.5233 8.75949 14.4779 8.83137 14.3871 8.97513C13.6369 10.1631 11.4036 13.1663 8.00027 13.1663C4.59693 13.1663 2.36369 10.1631 1.61342 8.97513Z" stroke="#1083E6" stroke-linecap="round" stroke-linejoin="round" />
												<path d="M8.00027 10.4997C9.10484 10.4997 10.0003 9.60424 10.0003 8.49967C10.0003 7.39511 9.10484 6.49967 8.00027 6.49967C6.8957 6.49967 6.00027 7.39511 6.00027 8.49967C6.00027 9.60424 6.8957 10.4997 8.00027 10.4997Z" stroke="#1083E6" stroke-linecap="round" stroke-linejoin="round" />
											</g>
										</svg>
									</div>
									<div className="w-full flex justify-end mt-[12px]">
										<p className="cursor-pointer text-[#1083E6] font-[400] text-[14px] leading-[18.2px] border-b-[1px] border-[#1083E6]">Забыли пароль</p>
									</div>
									<button className={`w-full mt-[28px] bg-[#1083E61A] py-[16px] px-[32] rounded-[32px] font-[400] text-[16px] text-[#1083E6] leading-[22.4px] {error}`}>Зарегестрироватся</button>
									<div className="w-full flex justify-between items-center mt-[12px]">
										<p className="font-[400] text-[14px] leading-[18.2px] text-[#212121] opacity-[0.6]">Вы еще не зарегистрировались?</p>
										<>
											<p className="cursor-pointer text-[#1083E6] font-[400] text-[14px] leading-[18.2px] border-b-[1px] border-[#1083E6]" onClick={heandleOpenModalRegister}>Создать аккаунт</p>
										</>
									</div>
									<div className="mt-[18px] w-full flex justify-between items-center">
										<hr className="border-[1px] w-[42%] text-[#21212133]" />
										<p className="font-[400] text-[14px] leading-[18.2px] opacity-[0.6] text-[#212121]">или</p>
										<hr className="border-[1px] w-[42%] text-[#21212133]" />
									</div>
								</form>
								<div className="mt-[18px] w-[480px] flex gap-[8px] justify-between">
									<button className="w-[50%] border-[1px] border-[#1083E6] py-[17px] rounded-[32px] flex justify-center items-center gap-[10px] font-[400] text-[16px] text-[#1083E6] leading-[19.36px] transition duration-200 hover:bg-[#1083E633]">
										<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clip-path="url(#clip0_2054_30528)">
												<path d="M20 10.5026C20 9.7008 20.1474 9.44271 20 8.83594H10V12.1693H15.8333C15.7199 13.0686 14.6949 14.5925 13.3333 15.5026L16.6667 18.0026C18.5955 16.3014 20 13.4715 20 10.5026Z" fill="#4285F4" />
												<path d="M9.9987 20.4974C12.7469 20.4974 14.9802 19.5901 16.6654 17.9974L13.332 15.4974C12.4725 16.1091 11.5141 16.3307 9.9987 16.3307C7.30705 16.3307 4.97973 14.6687 4.16536 12.1641L0.832031 14.6641C2.50582 18.0574 6.01771 20.4974 9.9987 20.4974Z" fill="#34A853" />
												<path d="M4.16667 13.0026C3.96263 12.3707 4.16667 12.0355 4.16667 11.3359C4.16667 10.6363 3.97337 9.46782 4.16667 8.83594L0.833333 6.33594C0.178287 7.71257 0 9.6998 0 11.3359C0 12.9721 0.178287 14.126 0.833333 15.5026L4.16667 13.0026Z" fill="#FBBC05" />
												<path d="M9.9987 4.66667C11.9018 4.66667 13.4334 5.62922 14.1654 6.33333L16.6654 3C14.9087 1.32641 12.7351 0.5 9.9987 0.5C6.0347 0.5 2.49868 2.94 0.832031 6.33333L4.16536 8.83333C4.98751 6.32872 7.31853 4.66667 9.9987 4.66667Z" fill="#EB4335" />
											</g>
											<defs>
												<clipPath id="clip0_2054_30528">
													<rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
												</clipPath>
											</defs>
										</svg>

										Google
									</button>
									<button className="w-[50%] border-[1px] border-[#1083E6] py-[17px] rounded-[32px] flex justify-center items-center gap-[10px]  font-[400] text-[16px] text-[#1083E6] leading-[19.36px] transition duration-200 hover:bg-[#1083E633]">
										<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M7.41227 5.94815V7.09565H6.57227V8.49815H7.41227V12.6673H9.13893V8.49815H10.2973C10.2973 8.49815 10.4064 7.82565 10.4589 7.08982H9.1456V6.13148C9.1456 5.98732 9.33393 5.79482 9.5206 5.79482H10.4606V4.33398H9.18143C7.36977 4.33398 7.41227 5.73815 7.41227 5.94815Z" fill="#1083E6" />
											<path d="M3.50033 1.83366C3.0583 1.83366 2.63437 2.00925 2.32181 2.32181C2.00925 2.63437 1.83366 3.0583 1.83366 3.50033V13.5003C1.83366 13.9424 2.00925 14.3663 2.32181 14.6788C2.63437 14.9914 3.0583 15.167 3.50033 15.167H13.5003C13.9424 15.167 14.3663 14.9914 14.6788 14.6788C14.9914 14.3663 15.167 13.9424 15.167 13.5003V3.50033C15.167 3.0583 14.9914 2.63437 14.6788 2.32181C14.3663 2.00925 13.9424 1.83366 13.5003 1.83366H3.50033ZM3.50033 0.166992H13.5003C14.3844 0.166992 15.2322 0.518182 15.8573 1.1433C16.4825 1.76842 16.8337 2.61627 16.8337 3.50033V13.5003C16.8337 14.3844 16.4825 15.2322 15.8573 15.8573C15.2322 16.4825 14.3844 16.8337 13.5003 16.8337H3.50033C2.61627 16.8337 1.76842 16.4825 1.1433 15.8573C0.518182 15.2322 0.166992 14.3844 0.166992 13.5003V3.50033C0.166992 2.61627 0.518182 1.76842 1.1433 1.1433C1.76842 0.518182 2.61627 0.166992 3.50033 0.166992Z" fill="#1083E6" />
										</svg>

										Facebook
									</button>
								</div>
							</div>
						</ModalFunction >
					</>
			}
		</>
	)
}

export default SignIn