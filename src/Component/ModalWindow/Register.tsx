import ModalFunction from '../FunctionModal/ModalFunction'

function Register({ onClose }) {
	return (
		<ModalFunction onClose={onClose}>
			<div className="w-[50%] flex flex-col items-center text-center">
				<h1 className="font-[700] text-[40px] leading-[44px] text-black">Добро пожаловать</h1>
				<p className="font-[400] text-[20px] leading-[26px] mt-[24px] text-[#212121] opacity-[0.6]">Продолжить с Google или введите данные<br />для входа</p>
				<form className='w-[480px] flex flex-col items-center mt-[44px] gap-[8px]'>
					<input className='w-full outline-none border-[1px] border-[#1083E666] py-[16px] px-[32px] rounded-[32px]' type="text" placeholder='ФИО*' />
					<input className='w-full outline-none border-[1px] border-[#1083E666] py-[16px] px-[32px] rounded-[32px]' type="email" name="" id="" placeholder='Почта*' />
					<input className='w-full outline-none border-[1px] border-[#1083E666] py-[16px] px-[32px] rounded-[32px]' type="text" placeholder='Город' />
					<input className='w-full outline-none border-[1px] border-[#1083E666] py-[16px] px-[32px] rounded-[32px]' type="password" name="" id="" placeholder='Пароль*' />
					<input className='w-full outline-none border-[1px] border-[#1083E666] py-[16px] px-[32px] rounded-[32px]' type="password" name="" id="" placeholder='Повторите пароль*' />
					<button className='w-full mt-[28px] bg-[#1083E61A] py-[16px] px-[32] rounded-[32px] font-[400] text-[16px] text-[#1083E6] leading-[22.4px]'>Зарегестрироватся</button>
				</form>
			</div>
		</ModalFunction>

	)
}

export default Register