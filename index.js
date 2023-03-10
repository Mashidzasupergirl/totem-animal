
    // Selects the color buttons
    const orangeColor = document.getElementById('orange');
    const greyColor = document.getElementById('grey');
    const brownColor = document.getElementById('brown');
    const yellowColor = document.getElementById('yellow');

    let selectedColor = null;
    let selectedAge = null;

    const STATES = {
        under30: {
            yellow: './images/giraffe1.jpg',
            grey: './images/gorilla1.jpg',
            brown: './images/monkey1.jpg',
            orange: './images/kenguru1.jpg',
        },
        above30: {
            yellow: './images/lion1.jpg',
            grey: './images/koala1.jpg',
            brown: './images/sloth1.jpg',
            orange: './images/tiger1.jpg',
        }
    }

    // Create a function to reuse this code for every color button
    const setAllButtonsBorderToNone = () => {
        const allColorButtons = document.querySelectorAll('.color');

        let index = 0;
        while (index < allColorButtons.length) {
            // Repeat the code for all elements in an array
            allColorButtons[index].style.border = 'none';
            index = index + 1;
        }
    }

    const setAgeBordersToNone = () => {
        const allAgeButtons = document.querySelectorAll('.age');
        let index = 0;
        while (index < allAgeButtons.length) {
            //Repeat a code for all the elements in the array
            allAgeButtons[index].style.border = 'none';
            index = index + 1;
        }
    }

    orangeColor.addEventListener('click', () => {
        selectedColor = 'orange'
        setAllButtonsBorderToNone()
        orangeColor.style.border = '5px solid red';
    })
    greyColor.addEventListener('click', () => {
        selectedColor = 'grey'
        setAllButtonsBorderToNone();
        greyColor.style.border = '5px solid grey';
    })
    brownColor.addEventListener('click', () => {
        selectedColor = 'brown'
        setAllButtonsBorderToNone()
        brownColor.style.border = '5px solid brown';
    })
    yellowColor.addEventListener('click', () => {
        selectedColor = 'yellow'
        setAllButtonsBorderToNone()
        yellowColor.style.border = '5px solid yellow';
    })

    // Selects the age buttons
   const less = document.getElementById('less-then-30')
   const more = document.getElementById('more-then-30')

   less.addEventListener('click', () => {
       selectedAge = 'under30';
       setAgeBordersToNone();
       less.style.border = '5px solid green';
   })

   more.addEventListener('click', () => {
        selectedAge = 'above30';
        setAgeBordersToNone();
        more.style.border = '5px solid green';
   })

             
    const submitButton = document.querySelector('#submit');


    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent any strange browser default behaviour (needed for submit buttons)
        console.log('clicked submit button')

        // !selectedColor is similar to selectedColor === null
        if (!selectedColor || !selectedAge) {
            alert('Select age and color ????');
            // Stops this function if some values hasn't been selected yet
            return ;
        }

        const totemMessageElement = document.querySelector('#answer-message');
    
        totemMessageElement.innerHTML = `Congratulations!
        <br /> This is your totem animal!`
        // On submit button clicked it updated the final messsage from 'Nothing to' to Congrat...

        const createdAnimal = document.createElement('img');
        // It creates an empty html element, but hasn't yet insert it into the HTML tree

        // STATES.under30.grey
        createdAnimal.src = STATES[selectedAge][selectedColor];

        const pictureHolderElement = document.querySelector('#totem');

        // Remove all the children (pictures) from our #totem element
        pictureHolderElement.innerHTML = '';
    
        // It adds the img element into the #totem
        pictureHolderElement.appendChild(createdAnimal);
    })


        