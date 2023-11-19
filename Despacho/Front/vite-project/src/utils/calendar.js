import dayjs from "dayjs";

export const generateDate = (
	month = dayjs().month(),
	year = dayjs().year(),
	busyDates = [],
	myDates	= [],
) => {
	const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
	const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
	const arrayOfDate = [];

	// create prefix date
	for (let i = 0; i < firstDateOfMonth.day(); i++) {
		const date = firstDateOfMonth.day(i);

		arrayOfDate.push({
			currentMonth: false,
			date,
			busy: busyDates.indexOf(firstDateOfMonth.day(i).format("DD/MM/YYYY")) > -1,
			mine: myDates.indexOf(firstDateOfMonth.day(i).format("DD/MM/YYYY")) > -1,
		});

	}


	// generate current date
	for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
		arrayOfDate.push({
			currentMonth: true,
			date: firstDateOfMonth.date(i),
			today:
				firstDateOfMonth.date(i).toDate().toDateString() ===
				dayjs().toDate().toDateString(),
			busy: busyDates.indexOf(firstDateOfMonth.date(i).format("DD/MM/YYYY")) > -1,
			mine: myDates.indexOf(firstDateOfMonth.date(i).format("DD/MM/YYYY")) > -1,

		});
	}

	const remaining = 42 - arrayOfDate.length;

	for (
		let i = lastDateOfMonth.date() + 1;
		i <= lastDateOfMonth.date() + remaining;
		i++
	) {
		arrayOfDate.push({
			currentMonth: false,
			date: lastDateOfMonth.date(i),
			busy: busyDates.indexOf(firstDateOfMonth.date(i).format("DD/MM/YYYY")) > -1,
			mine: myDates.indexOf(firstDateOfMonth.date(i).format("DD/MM/YYYY")) > -1,
		});
		
	}
	return arrayOfDate;
};

export const months = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Dicembre",
];
