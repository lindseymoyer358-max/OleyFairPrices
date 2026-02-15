// This script handles logic for display.html
document.addEventListener('DOMContentLoaded', () => {
    // Check if the current page is display.html
    if (window.location.pathname.includes('display.html')) {
        //FOOD
        const urlParams = new URLSearchParams(window.location.search);
        const small_fry = urlParams.get('small_fry');
        const Large_fry = urlParams.get('Large_fry');
        const Hamburger = urlParams.get('Hamburger');
        const Hamburger_cheese = urlParams.get('Hamburger_cheese');
        const Hot_Dog = urlParams.get('Hot_Dog');
        const Hot_Dog_Kraut = urlParams.get('Hot_Dog_Kraut');
        const Pork_Bar_B_Que = urlParams.get('Pork_Bar_B_Que');
        const Soup = urlParams.get("Soup");
        const Italian_Sandwich = urlParams.get("Italian_Sandwich");

        //DRINKS
        const Cold_Drinks = urlParams.get("Cold_Drinks");
        const Milk = urlParams.get("Milk");
        const Hot_Drinks_Small = urlParams.get("Hot_Drinks_Small");
        const Hot_Drinks_Large = urlParams.get("Hot_Drinks_Large");

        //FROZEN TREATS
        const Sno_Cone = urlParams.get("Sno_Cone");

        //SNACKS
        const Fruit_Tray_Small = urlParams.get('Fruit_Tray_Small');
        const Fruit_Tray_Large = urlParams.get('Fruit_Tray_Large');
        const Funnel_Cake = urlParams.get('Funnel_Cake');
        const Cotton_Candy = urlParams.get('Cotton_Candy');
        const Caramel_Apple = urlParams.get('Caramel_Apple');
        const Soft_Pretzel = urlParams.get('Soft_Pretzel');
        const Soft_Pretzel_Cheese = urlParams.get('Soft_Pretzel_Cheese');
        const Nachos = urlParams.get('Nachos');
        const small_milkeshake = urlParams.get('small_milkeshake');
        const Large_milkeshake = urlParams.get('Large_milkeshake');
        const Shoo_fly_Pie_Piece = urlParams.get('Shoo-fly_Pie_Piece');
        const Shoo_fly_Pie_Whole = urlParams.get('Shoo-fly_Pie_Whole');
        const Fruit_Pie_Piece = urlParams.get('Fruit_Pie_Piece');
        const Fruit_Pie_Whole = urlParams.get('Fruit_Pie_Whole');
        const Sticky_Buns_Single = urlParams.get('Sticky_Buns_Single');
        const Sticky_Buns_Nuts_Single = urlParams.get('Sticky_Buns_Nuts_Single');
        const Sticky_Buns_Pack = urlParams.get('Sticky_Buns_Pack');
        const Sticky_Buns_Nuts_Pack = urlParams.get('Sticky_Buns_Nuts_Pack');

        // Display the information if elements exist
        //FOOD
        const displaysmall_fry = document.getElementById('small_fry');
        const displayLarge_fry = document.getElementById('Large_fry');
        const displayHamburger = document.getElementById('Hamburger');
        const displayHamburger_cheese = document.getElementById('Hamburger_cheese');
        const displayHot_Dog = document.getElementById('Hot_Dog');
        const displayHot_Dog_Kraut = document.getElementById('Hot_Dog_Kraut');
        const displayPork_Bar_B_Que = document.getElementById('Pork_Bar_B_Que');
        const displaySoup = document.getElementById('Soup');
        const displayItalian_Sandwich = document.getElementById('Italian_Sandwich');

        //DRINKS
        const displayCold_Drinks = document.getElementById('Cold_Drinks');
        const displayMilk = document.getElementById('Milk');
        const displayHot_Drinks_Small = document.getElementById('Hot_Drinks_Small');
        const displayHot_Drinks_Large = document.getElementById('Hot_Drinks_Large');

        //FROZEN TREATS
        const displaySno_Cone = document.getElementById('Sno_Cone');

        //SNACKS
        const displayFruit_Tray_Small = document.getElementById('Fruit_Tray_Small');
        const displayFruit_Tray_Large = document.getElementById('Fruit_Tray_Large');
        const displayFunnel_Cake = document.getElementById('Funnel_Cake');
        const displayCotton_Candy = document.getElementById('Cotton_Candy');
        const displayCaramel_Apple = document.getElementById('Caramel_Apple');
        const displaySoft_Pretzel = document.getElementById('Soft_Pretzel');
        const displaySoft_Pretzel_Cheese = document.getElementById('Soft_Pretzel_Cheese');
        const displayNachos = document.getElementById('Nachos');
        const displaysmall_milkeshake = document.getElementById('small_milkeshake');
        const displayLarge_milkeshake = document.getElementById('Large_milkeshake');
        const displayShoo_fly_Pie_Piece = document.getElementById('Shoo-fly_Pie_Piece');
        const displayShoo_fly_Pie_Whole = document.getElementById('Shoo-fly_Pie_Whole');
        const displayFruit_Pie_Piece = document.getElementById('Fruit_Pie_Piece');
        const displayFruit_Pie_Whole = document.getElementById('Fruit_Pie_Whole');
        const displaySticky_Buns_Single = document.getElementById('Sticky_Buns_Single');
        const displaySticky_Buns_Nuts_Single = document.getElementById('Sticky_Buns_Nuts_Single');
        const displaySticky_Buns_Pack = document.getElementById('Sticky_Buns_Pack');
        const displaySticky_Buns_Nuts_Pack = document.getElementById('Sticky_Buns_Nuts_Pack');

        if (displaysmall_fry && displayLarge_fry && displayHamburger && displayHamburger_cheese 
            && displayHot_Dog && displayHot_Dog_Kraut && displayPork_Bar_B_Que && displaySoup &&
            displayItalian_Sandwich && displaysmall_milkeshake && displayLarge_milkeshake && 
            displayCold_Drinks && displayMilk && displayHot_Drinks_Small && displayHot_Drinks_Large && 
            displaySno_Cone && displayFruit_Tray_Small && displayFruit_Tray_Large && displayFunnel_Cake && 
            displayCotton_Candy && displayCaramel_Apple && displaySoft_Pretzel && displaySoft_Pretzel_Cheese && 
            displayNachos && displayShoo_fly_Pie_Piece && displayShoo_fly_Pie_Whole && displayFruit_Pie_Piece && 
            displayFruit_Pie_Whole && displaySticky_Buns_Single && displaySticky_Buns_Nuts_Single && 
            displaySticky_Buns_Pack && displaySticky_Buns_Nuts_Pack) {
            
            //FOOD
            displaysmall_fry.textContent = small_fry || 0;
            displayLarge_fry.textContent = Large_fry || 0;
            displayHamburger.textContent = Hamburger || 0;
            displayHamburger_cheese.textContent = Hamburger_cheese || 0;
            displayHot_Dog.textContent = Hot_Dog || 0;
            displayHot_Dog_Kraut.textContent = Hot_Dog_Kraut || 0;
            displayPork_Bar_B_Que.textContent = Pork_Bar_B_Que || 0;
            displaySoup.textContent = Soup || 0;
            displayItalian_Sandwich.textContent = Italian_Sandwich || 0;

            //DRINKS
            displayCold_Drinks.textContent = Cold_Drinks || 0;
            displayMilk.textContent = Milk || 0;
            displayHot_Drinks_Small.textContent = Hot_Drinks_Small || 0;
            displayHot_Drinks_Large.textContent = Hot_Drinks_Large || 0;

            //FROZEN TREATS
            displaySno_Cone.textContent = Sno_Cone ||0;

            //SNACKS
            displayFruit_Tray_Small.textContent = Fruit_Tray_Small || 0;
            displayFruit_Tray_Large.textContent = Fruit_Tray_Large || 0;
            displayFunnel_Cake.textContent = Funnel_Cake || 0;
            displayCotton_Candy.textContent = Cotton_Candy || 0;
            displayCaramel_Apple.textContent = Caramel_Apple || 0;
            displaySoft_Pretzel.textContent = Soft_Pretzel || 0;
            displaySoft_Pretzel_Cheese.textContent = Soft_Pretzel_Cheese || 0;
            displayNachos.textContent = Nachos || 0;
            displaysmall_milkeshake.textContent = small_milkeshake || 0;
            displayLarge_milkeshake.textContent = Large_milkeshake || 0;
            displayShoo_fly_Pie_Piece.textContent = Shoo_fly_Pie_Piece || 0;
            displayShoo_fly_Pie_Whole.textContent = Shoo_fly_Pie_Whole || 0;
            displayFruit_Pie_Piece.textContent = Fruit_Pie_Piece || 0;
            displayFruit_Pie_Whole.textContent = Fruit_Pie_Whole || 0;
            displaySticky_Buns_Single.textContent = Sticky_Buns_Single || 0;
            displaySticky_Buns_Nuts_Single.textContent = Sticky_Buns_Nuts_Single || 0;
            displaySticky_Buns_Pack.textContent = Sticky_Buns_Pack || 0;
            displaySticky_Buns_Nuts_Pack.textContent = Sticky_Buns_Nuts_Pack || 0;
        }

        const total = 
        //Food
        (parseFloat(small_fry) * 3.25 || 0) + (parseFloat(Large_fry) * 5.50 || 0) + 
        (parseFloat(Hamburger) * 3.25 || 0) + (parseFloat(Hamburger_cheese) * 3.50 || 0) + 
        (parseFloat(Hot_Dog) * 2.50 || 0) + (parseFloat(Hot_Dog_Kraut) * 2.75 || 0) + 
        (parseFloat(Pork_Bar_B_Que) * 4.50 || 0) + (parseFloat(Soup) * 4.00 || 0) + 
        (parseFloat(Italian_Sandwich) * 6.00 || 0) 

        //Drinks
        +(parseFloat(Cold_Drinks) * 2.25 || 0) + (parseFloat(Milk) * 1.75 || 0) + 
        (parseFloat(Hot_Drinks_Small) * 1.00 || 0) + (parseFloat(Hot_Drinks_Large) * 2.00 || 0)

        //Frozen Treats
        +(parseFloat(Sno_Cone) * 2.50 || 0) 

        //Snacks
        +(parseFloat(Fruit_Tray_Small) * 3.50 || 0) + (parseFloat(Fruit_Tray_Large) * 6.00 || 0)
        +(parseFloat(Funnel_Cake) * 5.00 || 0) + (parseFloat(Cotton_Candy) * 4.00 || 0) 
        +(parseFloat(Caramel_Apple) * 4.00 || 0) + (parseFloat(Soft_Pretzel) * 2.50 || 0)
        +(parseFloat(Soft_Pretzel_Cheese) * 2.75 || 0) + (parseFloat(Nachos) * 4.00 || 0)
        +(parseFloat(small_milkeshake) * 3.00 || 0) + (parseFloat(Large_milkeshake) * 4.50 || 0)
        +(parseFloat(Shoo_fly_Pie_Piece) * 1.50 || 0) + (parseFloat(Shoo_fly_Pie_Whole) * 6.00 || 0)
        +(parseFloat(Fruit_Pie_Piece) * 2.00 || 0) + (parseFloat(Fruit_Pie_Whole) * 9.00 || 0)
        +(parseFloat(Sticky_Buns_Single) * 3.50 || 0) + (parseFloat(Sticky_Buns_Nuts_Single) * 4.00 || 0)
        +(parseFloat(Sticky_Buns_Pack) * 7.00 || 0) + (parseFloat(Sticky_Buns_Nuts_Pack) * 7.50 || 0); 
        const totalElement = document.getElementById('total_price');  
        if (totalElement) {
            let total_string = total.toFixed(2)
            totalElement.textContent = total_string;
        }
    }
});
