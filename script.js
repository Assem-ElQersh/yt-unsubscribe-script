//Old
var i = 0;



function myTimer () {

    var els = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");

    if (i < els.length) {
        

        els[i].querySelector("[aria-label^='Unsubscribe from']").click();


            var unSubBtn = document.getElementById("confirm-button")
        setTimeout(() => {
             unSubBtn.children[0].children[0].click()
        }, 1000)
           
    setTimeout(() => myTimer(), 3000)

    }


    console.log(i + " unsubscribed by Assem");
    i++;

}
myTimer()

//      ||
//      ||
//      ||
//      \/

/* Added Modifications
    1. Ensure Elements Exist Before Accessing Them: Before calling methods like click(), check if the elements actually exist to avoid runtime errors.
    2. Managing i Increment: Ensure i is incremented in the correct place to avoid unintentional skips or infinite loops.
    3. Handle Confirm Button More Safely: The access to the confirm button's children is very specific and could break if the DOM structure changes. It's safer to check if the elements exist.
    4. Clear Timeout If Needed: If you ever need to stop the execution, it’s good practice to clear timeouts.
*/

//      ||
//      ||
//      ||
//      \/

//New
var i = 0;

function myTimer() {
    var gridContainer = document.getElementById("grid-container");
    if (!gridContainer) {
        console.error("Grid container not found.");
        return;
    }

    var els = gridContainer.getElementsByClassName("ytd-expanded-shelf-contents-renderer");
    if (i >= els.length) {
        console.log("All possible channels have been processed.");
        return; // Stops the function when all elements are processed.
    }

    var unsubscribeButton = els[i].querySelector("[aria-label^='Unsubscribe from']");
    if (unsubscribeButton) {
        unsubscribeButton.click();

        setTimeout(() => {
            var confirmButton = document.getElementById("confirm-button");
            if (confirmButton) {
                if (confirmButton.children[0] && confirmButton.children[0].children[0]) {
                    confirmButton.children[0].children[0].click();
                } else {
                    console.error("Confirm button structure is not as expected.");
                }
            } else {
                console.error("Confirm button not found.");
            }
        }, 1000);

        console.log(i + 1 + " unsubscribed by Assem"); // Logging after the action for clarity.
        i++;
        setTimeout(myTimer, 3000); // Recursion inside timeout to wait for next click.
    } else {
        console.error("Unsubscribe button not found for channel index " + i);
        i++;
        setTimeout(myTimer, 1000); // Attempt next unsubscribe sooner if no button was found.
    }
}

myTimer();
