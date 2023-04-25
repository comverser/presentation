<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiOutlineExclamationCircle from 'svelte-icons-pack/ai/AiOutlineExclamationCircle';

	import { DateInput } from 'date-picker-svelte';
	import SvelteTooltip from 'svelte-tooltip';

	let currentDate = new Date();
	let resultDate: string;
	let hourlyInterval = 3;
	const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	$: {
		currentDate;
		let expireDate = new Date(currentDate);
		expireDate.setDate(expireDate.getDate() + 7);

		let hourlyData =
			expireDate.getHours() + hourlyInterval - (expireDate.getHours() % hourlyInterval);

		expireDate.setMinutes(0);

		let hh: string | number = hourlyData;
		hh = hh >= 10 ? hh : '0' + hh;
		let mm: string | number = expireDate.getMinutes();
		mm = mm >= 10 ? mm : '0' + mm;

		resultDate = `${expireDate.getFullYear()}-${
			expireDate.getMonth() + 1
		}-${expireDate.getDate()} ${weekday[expireDate.getDay()]} ${hh}:${mm}`;
	}
</script>

<div class="flex flex-col gap-4 m-8 justify-center items-center">
	<div class="flex items-center gap-x-4">
		<p>현재 시간?</p>
		<p>
			<DateInput bind:value={currentDate} />
		</p>
	</div>

	<div class="border-solid border-2 border-red-500 p-4">
		<div class="w-[750px] flex flex-col gap-y-1">
			<div class="flex justify-between items-center text-[#1A1A1A]">
				<p class="text-[14px] font-pretendard leading-[22px]">Expires In</p>
				<SvelteTooltip tip={resultDate} left bottom>
					<div class="flex items-center gap-[4px] font-roboto">
						<p class="font-bold text-[16px]">7</p>
						<div class="flex gap-x-0">
							<p class="text-xs">Days</p>
							<Icon src={AiOutlineExclamationCircle} />
						</div>
					</div>
				</SvelteTooltip>
			</div>
			<div class="h-[18px] flex items-center">
				<p class="text-xs text-[#A6A6A6]">
					해당 기간이 지난 후 수락되지 않은 Offer는 자동으로 취소됩니다. 취소된 Offer 금액은 환불
					절차를 통해 돌려받을 수 있습니다.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	h1 {
		font-size: 36px;
	}
</style>
