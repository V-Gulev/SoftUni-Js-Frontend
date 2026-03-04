function solve(groupSize, typeOfGroup, dayOfWeek) {
    let price = 0;
    let totalPrice = 0;

    switch (typeOfGroup) {
        case "Students":
            if (dayOfWeek === "Friday") {
                price = 8.45;
            } else if (dayOfWeek === "Saturday") {
                price = 9.80;
            } else if (dayOfWeek === "Sunday") {
                price = 10.46;
            }
            totalPrice = groupSize * price;
            if (groupSize >= 30) {
                totalPrice *= 0.85;
            }
            break;

        case "Business":
            if (dayOfWeek === "Friday") {
                price = 10.90;
            } else if (dayOfWeek === "Saturday") {
                price = 15.60;
            } else if (dayOfWeek === "Sunday") {
                price = 16;
            }
            if (groupSize >= 100) {
                totalPrice = (groupSize - 10) * price;
            } else {
                totalPrice = groupSize * price;
            }
            break;

        case "Regular":
            if (dayOfWeek === "Friday") {
                price = 15;
            } else if (dayOfWeek === "Saturday") {
                price = 20;
            } else if (dayOfWeek === "Sunday") {
                price = 22.50;
            }
            totalPrice = groupSize * price;
            if (groupSize >= 10 && groupSize <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }


    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
solve(100, "Business", "Friday");