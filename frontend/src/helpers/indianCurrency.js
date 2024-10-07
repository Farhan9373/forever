const displayINRCurrency = (num) => {
    const amount = Number(num); // Ensure the input is a number
    if (isNaN(amount)) return "Invalid Amount"; // Handle invalid numbers
    
    const formatter = new Intl.NumberFormat('en-IN', {
        style: "currency",
        currency: 'INR',
        minimumFractionDigits: 2
    });

    return formatter.format(amount);
};

export default displayINRCurrency;
