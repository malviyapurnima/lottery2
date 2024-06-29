export function formatdate(inputDate) {
    if (inputDate == null || inputDate == undefined || inputDate == '') {
        return null;
    } else {
        // Split the input date into day, month, and year
        const [day, month, year] = inputDate.split('/');

        // Create a new Date object with the extracted values
        const date = new Date(`${year}-${month}-${day}`);

        // Define an array of month names
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        // Get the month name
        const monthName = monthNames[date.getMonth()];

        // Format the date as "Month day, year"
        const formattedDate = `${monthName} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;

        return formattedDate;
    }
}

export function formatISODate(inputDate) {
    if (inputDate == null || inputDate == undefined || inputDate == '') {
        return null;
    } else {
        const splitData = inputDate.split('T');
        return formatdate(splitData[0]);
    }
}