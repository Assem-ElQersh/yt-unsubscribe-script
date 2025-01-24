# Youtube Unsubscriber Script

- Access the link: `https://www.youtube.com/feed/channels`
- Scroll to the bottom of the page to populate all items on the screen.
- Press **F12**
- Insert the code below in your console

```javascript
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

        console.log(i + 1 + " unsubscribed by Assem");
        i++;
        setTimeout(myTimer, 3000);
    } else {
        console.error("Unsubscribe button not found for channel index " + i);
        i++;
        setTimeout(myTimer, 1000);
    }
}

myTimer();

```
