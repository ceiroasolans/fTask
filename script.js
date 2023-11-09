// Double Task; comment things out to choose one or the other 

//Constants
const mainContainer = document.getElementById("mainContainer");
const videoPlayer = document.getElementById("videoPlayer");
const fixationCross = document.getElementById("fixationCross");
const message = document.getElementById("message");
const buttonsContainer = document.getElementById("buttonsContainer");



 //                                                 PREP 

 let startTime; 
 let predictedPoints = []; // Initialize an empty array to store predicted points
const videos = [
    {id: 1, src: "0074.mp4", type: "Amusement" },
   {id: 2, src: "0574.mp4", type: "Amusement" },
//     {id: 3, src: "0656.mp4", type: "Amusement" },
//     {id: 4, src: "1043.mp4", type: "Amusement" },
//     {id: 45, src: "1145.mp4", type: "Amusement" }, //this should've started on 45? now does
//     {id: 46, src: "1411.mp4", type: "Amusement" },
//     {id: 67, src: "1564.mp4", type: "Amusement" },
//     {id: 68, src: "1606.mp4", type: "Amusement" },
//     {id: 69, src: "2072.mp4", type: "Amusement" },
//     {id: 70, src: "2083.mp4", type: "Amusement" },
//     {id: 5, src: "0124.mp4", type: "Anger" },
//     {id: 6, src: "0252.mp4", type: "Anger" },
//     {id: 7, src: "0414.mp4", type: "Anger" },
//     {id: 8, src: "0595.mp4", type: "Anger" },
//     {id: 47, src: "0681.mp4", type: "Anger" },
//     {id: 48, src: "0948.mp4", type: "Anger" },
//     {id: 71, src: "1229.mp4", type: "Anger" },
//     {id: 72, src: "1844.mp4", type: "Anger" },
//     {id: 73, src: "2049.mp4", type: "Anger" },
//     {id: 74, src: "2066.mp4", type: "Anger" },
//     {id: 9, src: "0090.mp4", type: "Calmness" },
//     {id: 10, src: "0339.mp4", type: "Calmness" },
//     {id: 11, src: "0493.mp4", type: "Calmness" },
//     {id: 12, src: "0553.mp4", type: "Calmness" },
//     {id: 49, src: "0580.mp4", type: "Calmness" },
//     {id: 50, src: "0645.mp4", type: "Calmness" },
//     {id: 75, src: "0671.mp4", type: "Calmness" },
//     {id: 76, src: "1216.mp4", type: "Calmness" },
//     {id: 77, src: "1760.mp4", type: "Calmness" },
//     {id: 78, src: "1835.mp4", type: "Calmness" },
//     {id: 13, src: "0110.mp4", type: "Craving" },
//     {id: 14, src: "0458.mp4", type: "Craving" },
//     {id: 15, src: "0780.mp4", type: "Craving" },
//     {id: 16, src: "0883.mp4", type: "Craving" },
//     {id: 51, src: "0898.mp4", type: "Craving" },
//     {id: 52, src: "0919.mp4", type: "Craving" },
//     {id: 79, src: "1449.mp4", type: "Craving" },
//     {id: 80, src: "1498.mp4", type: "Craving" },
//     {id: 81,  src: "1740.mp4", type: "Craving" },
//     {id: 82, src: "1826.mp4", type: "Craving" },
//     {id: 17, src: "0187.mp4", type: "Disgust" },
//     {id: 18,  src: "0235.mp4", type: "Disgust" },
//     {id: 19, src: "0355.mp4", type: "Disgust" },
//     {id: 20, src: "0713.mp4", type: "Disgust" },
//     {id: 53, src: "0876.mp4", type: "Disgust" },
//     {id: 54, src: "0929.mp4", type: "Disgust" },
//     {id: 83, src: "1194.mp4", type: "Disgust" },
//     {id: 84, src: "1423.mp4", type: "Disgust" },
//     {id: 85, src: "1907.mp4", type: "Disgust" },
//     {id: 86, src: "2018.mp4", type: "Disgust" },
//     {id: 21, src: "0202.mp4", type: "Excitement" },
//     {id: 22, src: "0402.mp4", type: "Excitement" },
//     {id: 23, src: "0546.mp4", type: "Excitement" },
//     {id: 24, src: "0550.mp4", type: "Excitement" },
//     {id: 55, src: "0701.mp4", type: "Excitement" },
//     {id: 56, src: "0970.mp4", type: "Excitement" },
//     {id: 87, src: "1297.mp4", type: "Excitement" },
//     {id: 88, src: "1537.mp4", type: "Excitement" },
//     {id: 89,  src: "1717.mp4", type: "Excitement" },
//     {id: 90, src: "2021.mp4", type: "Excitement" },
//     {id: 25, src: "0379.mp4", type: "Fear" },
//     {id: 26,  src: "0489.mp4", type: "Fear" },
//     {id: 27, src: "0706.mp4", type: "Fear" },
//     {id: 28, src: "1202.mp4", type: "Fear" },
//     {id: 57, src: "1375.mp4", type: "Fear" },
//     {id: 58, src: "1726.mp4", type: "Fear" },
//     {id: 91, src: "1780.mp4", type: "Fear" },
//     {id: 92, src: "1832.mp4", type: "Fear" },
//     {id: 93, src: "1964.mp4", type: "Fear" },
//     {id: 94, src: "2091.mp4", type: "Fear" },
//     {id: 29, src: "0723.mp4", type: "Interest" },
//     {id: 30, src: "0735.mp4", type: "Interest" },
//     {id: 31, src: "1066.mp4", type: "Interest" },
//     {id: 32, src: "1068.mp4", type: "Interest" },
//     {id: 59, src: "1301.mp4", type: "Interest" },
//     {id: 60, src: "1619.mp4", type: "Interest" },
//     {id: 95, src: "1624.mp4", type: "Interest" },
//     {id: 96, src: "1641.mp4", type: "Interest" },
//     {id: 97, src: "1664.mp4", type: "Interest" },
//     {id: 98, src: "1945.mp4", type: "Interest" },
//     {id: 33, src: "0035.mp4", type: "Joy" },
//     {id: 34,src: "0087.mp4", type: "Joy" },
//     {id: 35, src: "0126.mp4", type: "Joy" },
//     {id: 36, src: "0597.mp4", type: "Joy" },
//     {id: 61, src: "0605.mp4", type: "Joy" },
//     {id: 62, src: "0666.mp4", type: "Joy" },
//     {id: 99, src: "1032.mp4", type: "Joy" },
//     {id: 100, src: "1034.mp4", type: "Joy" },
//     {id: 101, src: "1093.mp4", type: "Joy" },
//     {id: 102, src: "2013.mp4", type: "Joy" },
//     {id: 37, src: "0204.mp4", type: "Romance" },
//     {id: 38, src: "0369.mp4", type: "Romance" },
//     {id: 39, src: "0773.mp4", type: "Romance" },
//     {id: 40, src: "1074.mp4", type: "Romance" },
//     {id: 63, src: "1295.mp4", type: "Romance" },
//     {id: 64, src: "1407.mp4", type: "Romance" },
//     {id: 103, src: "1424.mp4", type: "Romance" },
//     {id: 104, src: "1551.mp4", type: "Romance" },
//     {id: 105, src: "1911.mp4", type: "Romance" },
//     {id: 106, src: "1978.mp4", type: "Romance" },
//     {id: 41, src: "0226.mp4", type: "Sadness" },
//     {id: 42, src: "0299.mp4", type: "Sadness" },
//     {id: 43, src: "0611.mp4", type: "Sadness" },
//     {id: 44, src: "0756.mp4", type: "Sadness" }, //previously fucked -- not any more
//     {id: 65, src: "0803.mp4", type: "Sadness" },
//     {id: 66, src: "0860.mp4", type: "Sadness" }, // now this could've been fucked but it's not! Line 133 (starts with 67)
//     {id: 107, src: "0975.mp4", type: "Sadness" },
//     {id: 108, src: "1164.mp4", type: "Sadness" },
//     {id: 109, src: "1485.mp4", type: "Sadness" },
//     {id: 110, src: "1959.mp4", type: "Sadness" }
];

// Now script as normal
for(let i = 0; i < videos.length; i++) {
    videos[i].id = i.toString();
}

function startTimer() {  // Function to start the timer when buttons appear
    startTime = performance.now();
}




//                                                  RATINGS


//Forecasting
let currentForecast = {}; 
function Forecasting(videoId, onSubmit) {
    feedbackContainer.innerHTML = '';

    const questions = [
        { id: "valenceForecast", text: "How do you think this video will make you feel?", scale: ["Very unpleasant, negative", "Neutral", "Very pleasant, positive"] },
        { id: "arousalForecast", text: " ", scale: ["Not activated / aroused at all", "Somewhat activated / aroused", "Very activated / aroused"] },
        { id: "interestForecast", text: "How interesting do you find this video?", scale: ["Not interested at all", "Somewhat interested", "Very interested"] }
    ];

    const forecast = {};

    questions.forEach((questionObj, index) => {
        const question = document.createElement("p");
        question.style.fontWeight = 'bold'; 
        question.style.textAlign = 'center';
        question.textContent = questionObj.text;

        const likertContainer = document.createElement("div");
        likertContainer.classList.add("likert-container");

        for(let i = 0; i <= 6; i++) {
            const likertBox = document.createElement("div");
            likertBox.classList.add("likert-box");

            const number = document.createElement("div");
            number.textContent = i;
            number.classList.add("likert-number");
            likertBox.appendChild(number);

            const label = document.createElement("div");
            label.classList.add("likert-label");
            likertBox.appendChild(label);

            if (i === 0) label.textContent += questionObj.scale[0];
            else if (i === 3) label.textContent += questionObj.scale[1];
            else if (i === 6) label.textContent += questionObj.scale[2];

            likertBox.onclick = function() {
                likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");

                forecast[questionObj.id] = i.toString();

                likertBox.style.backgroundColor = "#d8d8d8";
            };

            likertContainer.appendChild(likertBox);
        }

        feedbackContainer.appendChild(question);
        feedbackContainer.appendChild(likertContainer);

        // Insert space after the second question
        if (index === 1) {
            const spacer = document.createElement("div");
            spacer.style.height = "20px";
            feedbackContainer.appendChild(spacer);
        }
    });

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.onclick = () => {
        if (forecast['valenceForecast'] && forecast['arousalForecast'] && forecast['interestForecast']) {
            onSubmit(forecast);
            feedbackContainer.style.display = "none"; 
        } else {
            alert("Please answer all questions.");
        }
    };

    feedbackContainer.appendChild(submitButton);
    feedbackContainer.style.display = "block";
}





// Valence and arousal
function ValenceArousal(videoId, onSubmit) {
    feedbackContainer.innerHTML = '';

    const questions = [
        { text: "How do you feel right now?", scale: ["Very unpleasant, negative", "Neutral", "Very pleasant, positive"] },
        { text: " ", scale: ["Not activated / aroused at all", "Somewhat activated / aroused", "Very activated / aroused"] }
    ];

    const responses = {};

    questions.forEach((questionObj, index) => {
        const question = document.createElement("p");
        question.style.fontWeight = 'bold'; // Add bold font-weight
        question.style.textAlign = 'center';
        question.textContent = questionObj.text;

        const likertContainer = document.createElement("div");
        likertContainer.classList.add("likert-container");

        for(let i = 0; i <= 6; i++){ // Update from 1-7 to 0-6
            const likertBox = document.createElement("div");
            likertBox.classList.add("likert-box");

            const number = document.createElement("div");
            number.textContent = i;
            number.classList.add("likert-number");
            likertBox.appendChild(number);

            const label = document.createElement("div");
            label.classList.add("likert-label");
            likertBox.appendChild(label);

            // Add labels on the edges and in the middle
            if (i === 0) label.textContent += questionObj.scale[0]; // Update from 1 to 0
            else if (i === 3) label.textContent += questionObj.scale[1];
            else if (i === 6) label.textContent += questionObj.scale[2]; // Update from 7 to 6

            likertBox.onclick = function() {
                likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");

                // Depending on the index, save to valence or arousal
                if(index === 0) {
                    responses['valence'] = i.toString(); // Convert to string
                } else if(index === 1) {
                    responses['arousal'] = i.toString(); // Convert to string
                }
                
                likertBox.style.backgroundColor = "#d8d8d8";  // Change color to indicate selection
            };

            likertContainer.appendChild(likertBox);
        }

        feedbackContainer.appendChild(question);
        feedbackContainer.appendChild(likertContainer);
    });

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.onclick = () => {
        if (Object.keys(responses).length === questions.length) {
            onSubmit(responses);
        } else {
            alert("Please answer all questions.");
        }
    };

    feedbackContainer.appendChild(submitButton);
    feedbackContainer.style.display = "block";
}

// Relevant emotions 
function RelevantEmotions(videoId, onSubmit) {
    
    document.body.classList.add('instructions-body-align');
    // An object to store the rating types for each video type
    const videoTypeRatings = {
        "Excitement": ["excited", "interested", "amused", "happy"],
        "Amusement": ["happy", "amused", "excited", "interested"],
        "Joy": ["amused", "loving", "happy", "peaceful"],
        "Romance": ["excited", "peaceful", "happy", "loving"],
        "Craving": ["hungry", "interested", "happy", "excited"],
        "Calmness": ["interested", "calm", "happy", "peaceful"],
        "Interest": ["peaceful", "excited", "interested", "happy"],
        "Disgust": ["disgusted", "afraid", "angry", "sad"],
        "Anger": ["sad", "angry", "afraid", "disgusted"],
        "Sadness": ["afraid", "disgusted", "sad", "angry"],
        "Fear": ["angry", "sad", "disgusted", "afraid"]
    };

    const video = videos.find(v => v.id === videoId);

    if (!video) {
        console.error(`Video with id ${videoId} not found.`);
        return;
    }

    // Get the appropriate ratings for this video type
    const ratings = videoTypeRatings[video.type];

    if (!ratings) {
        console.error(`No ratings found for video type ${video.type}`);
        return;
    }

    feedbackContainer.innerHTML = '';

    // Add the header "How do you feel?"
    let header = document.createElement('h3');
    header.style.fontWeight = 'bold';
    header.style.textAlign = 'center';
    header.innerText = 'How do you feel right now?';
    feedbackContainer.appendChild(header);


    function RelevantEmotions0(min, max, minLabel, maxLabel, midLabel, emotion) {
        let mainContainer = document.createElement('div');
        mainContainer.className = 'main-container';
        mainContainer.style.flexDirection = 'row'; 
        mainContainer.style.justifyContent = 'flex-start'; 
    
        let emotionLabel = document.createElement('div');
        emotionLabel.textContent = emotion;
        emotionLabel.style.fontWeight = 'bold';
        emotionLabel.className = 'emotion-label';
        emotionLabel.style.alignSelf = 'center'; 
        emotionLabel.style.marginRight = '5px'; 
    
        // Set a fixed width for the emotion label
        emotionLabel.style.width = '150px'; // CHANGED: set a fixed width
        emotionLabel.style.overflow = 'hidden'; // Ensure long text does not overflow
        emotionLabel.style.textOverflow = 'ellipsis'; // Truncate with ellipsis if overflow
    
        mainContainer.appendChild(emotionLabel);
    
        let container = document.createElement('div');
        container.className = 'likert-container';
        container.style.width = '60%';
    
        for (let i = min; i <= max; i++) {
            let box = document.createElement('div');
            box.className = 'likert-box';
            box.style.flex = '1';
            box.addEventListener('click', function () {
                // If this box was already selected, deselect it
                if (this.classList.contains('selected')) {
                    this.classList.remove('selected');
                    this.style.backgroundColor = ""; // Remove background color
                    return;
                }
                
                // Remove 'selected' class from all boxes in the container
                let boxes = container.getElementsByClassName('likert-box');
                for (let j = 0; j < boxes.length; j++) {
                    boxes[j].classList.remove('selected');
                    boxes[j].style.backgroundColor = ""; // Remove previous background color
                }
                
                // Add 'selected' class to the clicked box
                this.classList.add('selected');
                this.style.backgroundColor = "#ccc"; // Set background color to darker shade
            });
            
            let number = document.createElement('div');
            number.className = 'likert-number';
            number.textContent = i;
            box.appendChild(number);
    
            let label = document.createElement('div');
            label.className = 'likert-label';
            if (i === min) {
                label.textContent = minLabel;
            } else if (i === max) {
                label.textContent = maxLabel;
            } else if (i === 3) {
                label.textContent = midLabel;
            }
            box.appendChild(label);
            
            container.appendChild(box);
        }
       
        mainContainer.appendChild(container);
        return mainContainer;
    }







    ratings.forEach((rating, index) => {
        let likertContainer = RelevantEmotions0(0, 6, `not ${rating} at all`, `very ${rating}`, `somewhat ${rating}`, rating);
        likertContainer.id = `likert-${index + 1}`;
        likertContainer.style.marginBottom = '20px'; // Add spacing between the ratings
        feedbackContainer.appendChild(likertContainer);
    });

    let submitButton = createButton("Submit", () => {
        let userRatings = [];
    
        for (let i = 1; i <= 4; i++) {
            let likertContainer = document.getElementById(`likert-${i}`);
            let selectedBox = likertContainer.querySelector('.likert-box.selected');
    
            if (!selectedBox) {
                alert('Please answer all the questions before submitting.');
                return;
            }
    
            let emoScore = selectedBox.textContent.trim();
            const regex = /^(\d+)/;
            const match = emoScore.match(regex);
            if (match) {
                emoScore = match[1];
            }
    
            userRatings.push({
                videoType: video.type,
                EmoRated: ratings[i - 1], // get the rating type from the ratings array
                EmoScore: emoScore,
                vID: video.src
            });
        }
    
        feedbackContainer.innerHTML = ''; // Clear the feedback container after successful submission
        onSubmit(userRatings);
    });
    

    feedbackContainer.appendChild(submitButton); // Append the button directly to the feedbackContainer
    feedbackContainer.style.display = 'block';

    submitButton.addEventListener('click', () => {
        document.body.classList.remove('instructions-body-align'); // Remove the class when the submit button is clicked
    });
}

// Watch Again
function WatchAgain(onSubmit) {
    feedbackContainer.innerHTML = '';

    const questionObj = {
        text: "Would you watch this video in the future?",
        scale: ["No, never!", "Maybe", "Yes, anytime!"]
    };

    const WatchAgainResponse = {};

    const question = document.createElement("p");
    question.style.fontWeight = 'bold'; 
    question.style.textAlign = 'center';
    question.textContent = questionObj.text;

    const likertContainer = document.createElement("div");
    likertContainer.classList.add("likert-container");

    for (let i = 0; i <= 6; i++) {
        const likertBox = document.createElement("div");
        likertBox.classList.add("likert-box");

        const number = document.createElement("div");
        number.textContent = i === 0 ? "0" : i.toString(); 
        number.classList.add("likert-number");
        likertBox.appendChild(number);

        const label = document.createElement("div");
        label.classList.add("likert-label");
        likertBox.appendChild(label);

        if (i === 0) label.textContent += questionObj.scale[0];
        else if (i === 3) label.textContent += questionObj.scale[1];
        else if (i === 6) label.textContent += questionObj.scale[2];

        // IIFE to correctly capture the value of i
        (function(currentIndex) {
            likertBox.onclick = function () {
                console.log("Clicked value:", currentIndex); // Check the value when clicked
                likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                WatchAgainResponse[questionObj.text] = currentIndex;
                likertBox.style.backgroundColor = "#d8d8d8";
                console.log("Updated WatchAgain:", WatchAgainResponse); // Check the updated object
            };
        })(i);
        

        likertContainer.appendChild(likertBox);
    }

    feedbackContainer.appendChild(question);
    feedbackContainer.appendChild(likertContainer);

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.onclick = () => {
        if (typeof WatchAgainResponse[questionObj.text] !== 'undefined') {
            WatchAgainResponse[questionObj.text] = WatchAgainResponse[questionObj.text].toString();
            onSubmit(WatchAgainResponse);
        } else {
            alert("Please answer the question.");
        }
    };

    feedbackContainer.appendChild(submitButton);
    feedbackContainer.style.display = "block";

    console.log("WatchAgain:", WatchAgainResponse);
}



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  


function generateVideoSequence(videosByType, order) {
    // Generate the sequence based on the specified order
    let sequence = [];
    for (let type of order) {
      if (videosByType[type] && videosByType[type].length > 0) {
        sequence.push(videosByType[type].shift());  // Select and remove the first video from the shuffled array
      } else {
        console.warn(`No more videos available for type: ${type}`);
      }
    }
  
    return { sequence, videosByType };
  }
  
  const order1 = ["Joy", "Fear", "Interest", "Craving", "Anger", "Romance", "Sadness", "Excitement", "Amusement", "Disgust", "Calmness"];
  const order2 = ["Romance", "Fear", "Craving", "Sadness", "Calmness", "Amusement", "Anger", "Interest", "Joy", "Disgust", "Excitement"];


// Global variable to store the SID number
let participantSID;
let participantName;
function generateUniqueKey() {
    const length = 16;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
const participantUniqueKey = generateUniqueKey();


// Validate the SID to be 10 digits
function isValidSID(sid) {
    return /^\d{10}$/.test(sid);
}

let participantChoices = [];
participantChoices.push({
    windowSizeHeight: window.innerHeight,
    windowSizeWidth: window.innerWidth,
    screenSizeHeight: window.screen.height,
    screenSizeWidth: window.screen.width
});





//                                          EXPERIMENTAL PRESENTATION

// Demographics
let age, racialIdentity, genderIdentity, fatherEducation, motherEducation, familyIncome, yearInSchool, timestamp1, PSID;

function demographics() {
    timestamp1 = new Date();
    //Anchor to top 
    document.body.classList.add('instructions-body-align');

    // Prompt the user to enter their SID number
    participantSID = prompt("Please enter your SID number:", "");
    PSID = participantSID;

    // Keep prompting the user until they provide a valid 10-digit SID
    while (!isValidSID(participantSID)) {
        participantSID = prompt("Invalid SID. Please enter a 10-digit SID number:", "");
    }

    participantName = prompt("What is your full name?", "")

    // Main wrapper
    let wrapper = document.createElement('div');
    wrapper.id = "demographicsContainer";
    wrapper.style.marginTop = '0rem'; // before 20rem
    wrapper.style.paddingBottom = '5rem';
    wrapper.style.fontFamily = "'Arial', sans-serif";

    // Adding a header
    let header = document.createElement('h2');
    header.textContent = "Please respond to the following questions";
    header.style.textAlign = 'center';
    header.style.marginBottom = '2rem';
    wrapper.appendChild(header);

    // Helper function to generate a styled label
    function createStyledLabel(content) {
        let label = document.createElement('label');
        label.textContent = content;
        label.style.fontWeight = 'bold';
        label.style.display = 'block';
        label.style.marginTop = '2rem';
        return label;
    }

    // Track sliders' interactions
    let slidersInteracted = {
        ageSlider: false,
        incomeSlider: false
    };

    // Helper function to create and style a slider
    function createStyledSlider(min, max, sliderName) {
        let div = document.createElement('div');

        noUiSlider.create(div, {
            start: [(min + max) / 2],
            range: {
                'min': [min],
                'max': [max]
            },
            format: {
                to: function (value) {
                    return parseInt(value);
                },
                from: function (value) {
                    return parseInt(value);
                }
            },
            tooltips: true
        });

        div.noUiSlider.on('change', () => {
            slidersInteracted[sliderName] = true;
            checkAllAnswered();
        });

        let minMaxLabel = document.createElement('div');
        minMaxLabel.style.display = 'flex';
        minMaxLabel.style.justifyContent = 'space-between';
        minMaxLabel.appendChild(document.createTextNode(min.toString()));
        let spacer = document.createElement('span');
        spacer.style.flexGrow = '1';
        minMaxLabel.appendChild(spacer);
        minMaxLabel.appendChild(document.createTextNode(max.toString()));

        let container = document.createElement('div');
        container.appendChild(div);
        container.appendChild(minMaxLabel);
        return container;
    }

    // Helper function to generate radio buttons
    function createRadioButtons(name, options) {
        let div = document.createElement('div');
        div.style.marginTop = '0.5rem';
        for (let option of options) {
            let label = document.createElement('label');
            label.style.display = 'block';
            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = name;
            radio.value = option;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            div.appendChild(label);
        }
        return div;
    }
    // Append and style each question and input
    wrapper.appendChild(createStyledLabel('What is your age?'));
    wrapper.appendChild(createStyledSlider(18, 80, 'ageSlider'));
    let ageSlider = wrapper.querySelector("#demographicsContainer div.noUi-target");
    if (ageSlider) {
     ageSlider.noUiSlider.set(80);
    }

    wrapper.appendChild(createStyledLabel('What is your racial identity?'));
    wrapper.appendChild(createRadioButtons('racialIdentity', ['Asian', 'Black', 'Latino', 'Native American', 'White']));

    wrapper.appendChild(createStyledLabel('What is your gender identity?'));
    wrapper.appendChild(createRadioButtons('genderIdentity', ['Female', 'Male', 'Non-binary']));

    wrapper.appendChild(createStyledLabel('What is the highest level of education obtained by your father?'));
    wrapper.appendChild(createRadioButtons('fatherEducation', ['Some high school', 'High school diploma', 'Associate degree', 'Bachelor\'s degree', 'Master\'s degree', 'Ph.D., M.D., J.D., Psy.D., or other']));

    wrapper.appendChild(createStyledLabel('What is the highest level of education obtained by your mother?'));
    wrapper.appendChild(createRadioButtons('motherEducation', ['Some high school', 'High school diploma', 'Associate degree', 'Bachelor\'s degree', 'Master\'s degree', 'Ph.D., M.D., J.D., Psy.D., or other']));

    wrapper.appendChild(createStyledLabel('What is your family income, in thousands of dollars?'));
    wrapper.appendChild(createStyledSlider(0, 200, 'incomeSlider'));
    let incomeSlider = wrapper.querySelectorAll("#demographicsContainer div.noUi-target")[1];
    if (incomeSlider) {
        incomeSlider.noUiSlider.set(0);
    }

    wrapper.appendChild(createStyledLabel('What year are you in?'));
    wrapper.appendChild(createRadioButtons('yearInSchool', ['Freshman', 'Sophomore', 'Junior', 'Senior']));

    // Create the button
    let nextButton = document.createElement('button');
    nextButton.textContent = "Next";
    nextButton.style.display = "none";  
nextButton.onclick = function() {
    // Extract data from the UI elements before hiding the demographics container
    age = document.querySelector('.noUi-tooltip').textContent;  // Gets the value from the age slider's tooltip
    racialIdentity = document.querySelector('input[name="racialIdentity"]:checked').value;
    genderIdentity = document.querySelector('input[name="genderIdentity"]:checked').value;
    fatherEducation = document.querySelector('input[name="fatherEducation"]:checked').value;
    motherEducation = document.querySelector('input[name="motherEducation"]:checked').value;
    familyIncome = document.querySelectorAll('.noUi-tooltip')[1].textContent;  // Gets the value from the income slider's tooltip
    yearInSchool = document.querySelector('input[name="yearInSchool"]:checked').value;

    let demoContainer = document.getElementById('demographicsContainer');
    demoContainer.parentNode.removeChild(demoContainer);  // Remove the demographics container from the DOM
        
    document.body.classList.remove('instructions-body-align');

    baselineEmo();  // Then display the baseline survey

};
    

    wrapper.appendChild(nextButton);
    // Check if all questions are answered
    function checkAllAnswered() {
        let allRadios = wrapper.querySelectorAll('input[type="radio"]');
        let answeredQuestions = new Set();
        allRadios.forEach(radio => {
            if (radio.checked) {
                answeredQuestions.add(radio.name);
            }
        });

        // Also check sliders
        let allSlidersAnswered = Object.values(slidersInteracted).every(val => val === true);

        if (answeredQuestions.size === 5 && allSlidersAnswered) {
            nextButton.style.display = "block";
        } else {
            nextButton.style.display = "none";
        }
    }

    // Add event listeners to radio buttons
    let allRadios = wrapper.querySelectorAll('input[type="radio"]');
    allRadios.forEach(radio => {
        radio.addEventListener('change', checkAllAnswered);
    });

    // Append to main container
    document.getElementById('mainContainer').appendChild(wrapper);
}

//Baseline Emo
let baselineEmoResponses = {};

function baselineEmo() {
    // Top-anchor
    document.body.classList.add('instructions-body-align');
    //document.body.style.alignItems = 'flex-start';
    window.scrollTo(0, 0);
  feedbackContainer.style.marginTop = '150px'; 
    
  feedbackContainer.innerHTML = '';

        

    const emotions = ["Active", "Afraid", "Amused", "Angry", "Aroused", "Calm", "Disgusted", "Excited", "Happy", "Hungry", "Inactive", "Loving", "Negative", "Peaceful", "Pleasant", "Positive", "Sad", "Still (quiet)", "Unpleasant"]; //
    const scaleLabels = ["Not at all", "", "", "Somewhat", "", "", "Very"];
    const emotionResponses = {};

    // Add header
    const header = document.createElement("p");
    header.style.fontWeight = 'bold';
    header.style.textAlign = 'center';
    header.style.padding = '20px 0';
    header.textContent = "Please rate the extent to which you feel right now:";
    feedbackContainer.appendChild(header);

    emotions.forEach(emotion => {
        const emotionContainer = document.createElement("div");
        emotionContainer.style.display = "flex";
        emotionContainer.style.justifyContent = "space-between";
        emotionContainer.style.alignItems = "center";
        emotionContainer.style.paddingBottom = "10px";  // Reduced padding

        const question = document.createElement("p");
        question.style.fontWeight = 'bold';
        question.style.flex = "1";
        question.style.marginRight = "10px"; // Reduced padding to the right of the emotion text
        question.textContent = emotion;

        emotionContainer.appendChild(question);

        const likertContainer = document.createElement("div");
        likertContainer.classList.add("likert-container");
        likertContainer.style.flex = "2"; 

        for (let i = 0; i <= 6; i++) {
            const likertBox = document.createElement("div");
            likertBox.classList.add("likert-box");
            likertBox.style.width = "60px";  // Increased width
            likertBox.style.height = "35px";  // Reduced height

            const number = document.createElement("div");
            number.textContent = i.toString();
            number.classList.add("likert-number");
            number.style.lineHeight = "20px";  // Adjust to match the height

            likertBox.appendChild(number);

            const label = document.createElement("div");
            label.classList.add("likert-label");
            label.textContent = scaleLabels[i];
            likertBox.appendChild(label);

            (function(currentIndex, currentEmotion) {
                likertBox.onclick = function() {
                    likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                    emotionResponses[currentEmotion] = currentIndex;
                    likertBox.style.backgroundColor = "#d8d8d8";
                };
            })(i, emotion);

            likertContainer.appendChild(likertBox);
        }

        emotionContainer.appendChild(likertContainer);
        feedbackContainer.appendChild(emotionContainer);
    });

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.style.marginTop = "20px"; 
    submitButton.onclick = () => {
        if (emotions.every(emotion => emotion in emotionResponses)) {
            baselineEmoResponses = Object.keys(emotionResponses).reduce((acc, key) => {
                acc[key] = emotionResponses[key].toString();
                return acc;
            }, {});
            feedbackContainer.style.display = "none";
            document.body.classList.remove('instructions-body-align'); 
            feedbackContainer.style.marginTop = '0px';  
            //document.body.style.alignItems = '';
            instructions();
        } else {
            alert("Please answer all the questions.");
        }
    };

    feedbackContainer.appendChild(submitButton);
    feedbackContainer.style.display = "block";
}




//Instructions with WebGazer
timeOut = false;

function instructions() {
    let message = document.getElementById("message");
    message.innerHTML = `
        <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
            <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">Welcome!</strong>
            <p style="margin-top: 20px;">In this experiment you will be deciding whether to watch a series of videos and reporting how you feel. Every trial, you will:</p>
            <ol style="padding-left: 30px; margin-top: 20px;">
                <li style="margin-bottom: 10px;"><u>See a screenshot</u> from a video for 3 seconds</li>
                <li style="margin-bottom: 10px;"><u>Rate how </u>you <u>expect to feel</u> if you watch it, and <u>how interested</u> you are in watching it.</li>
                <li style="margin-bottom: 10px;"><u>Decide whether to watch the video</u>. If you decide to not watch it, you will see a fixation cross for the duration of the video. If you don't decide within 7 seconds, something will be decided for you at random.</li>
                <li style="margin-bottom: 10px;"><u>Watch the video</u>.</li>
                <li style="margin-bottom: 10px;"><u>Report how you feel</u>!</li>
            </ol>
        </div>
    `;
    message.style.display = 'block';  // Make sure the message is visible

    clearButtons();
    addButton(createButton("Next", () => {
        // Display the new inserted message
        message.innerHTML = `
            <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
                <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">Eye-tracking Calibration</strong>
                <p style="margin-top: 20px;">Now we will calibrate the eye-tracking functionality. We will <strong>NOT record any video footage</strong>. The camera will <u>only</u> be used to detect your gaze, and we will <u>only</u> store your predicted gaze point in the screen.</p>
            </div>
        `;
        message.style.display = 'block';  // Make sure the message is visible



    clearButtons();
    addButton(createButton("Next", () => {
        message.style.display = 'none';  // Make sure the message is visible
        let videoPage = document.getElementById("video");
        message.innerHTML = `
            <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
                <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">Eye-tracking Calibration</strong>
                <p> To help with the calibration, please sit up with your face inside of the green square. When you are ready, and you see your face being correctly captured by the grids, click on next to move to calibration section!</p>
            </div>
        `;
        message.style.display = 'block';  // Make sure the message is visible

        // Initialize Webgazer and start gaze tracking
        let lastRecordingTime = null;
        let dataPoints = [];

        webgazer.setGazeListener(function(data, elapsedTime) {
            if (data == null) {
                console.log("data=null")
                return;
            }

                // Add the data to dataPoints array
                dataPoints.push({
                    x: data.x,
                    y: data.y
                });

            // Check if at least 500 milliseconds have passed since the last recording. Draw average. 
            const currentTime = new Date().getTime();
            if (!lastRecordingTime || currentTime - lastRecordingTime >= 500) {
                // Calculate the average of x and y coordinates
                if (dataPoints.length > 0) {
                    let avgX = dataPoints.reduce((sum, point) => sum + point.x, 0) / dataPoints.length;
                    let avgY = dataPoints.reduce((sum, point) => sum + point.y, 0) / dataPoints.length;

                    console.log(`Average for last 500ms: (${avgX}, ${avgY})`);

                    participantChoices.push({
                        gazingPointX: avgX,
                        gazingPointY: avgY
                    });

                    // Clear the dataPoints array for the next interval
                    dataPoints = [];
                }

                lastRecordingTime = currentTime;
            }
        }).begin();

        webgazer.setTracker("TFFacemesh"); //set a tracker module
        webgazer.setRegression("ridge"); //set a regression module

        webgazer.showPredictionPoints(false); // Show gaze prediction points on the screen

        // Start tracking gaze
        webgazer.showVideo(true); // Show webcam video feed
        webgazer.showFaceOverlay(true); // Hide face overlay (optional)

        clearButtons();


        setTimeout(function () {
        addButton(createButton("Next", () => {
        clearButtons();
        message.style.display = 'none';  // Make sure the message is visible

        message.innerHTML = `
            <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
                <p style="margin-top: 20px;">Look at the calibration point and click the point 5 times. After finishing clicking on all points, they will automatically disappear, and you will be provided with a score of accuracy!</p>
            </div>
        `;
        message.style.display = 'block';  // Make sure the message is visible

        function calibration() {
            document.body.classList.add('no-select');
            clearButtons();

            webgazer.showPredictionPoints(true);
            // Array of calibration points (x, y) screen coordinates
            const calibrationPoints = [
              { x: window.innerWidth / 3, y: 30 }, // UpperLeft-middle
              { x: window.innerWidth / 3 + window.innerWidth / 2, y: 30 }, // UpperRight-middle
              { x: window.innerWidth - 50, y: 50 }, // Top-right corner
              { x: window.innerWidth - 200, y: window.innerHeight / 2 }, // Right-middle corner
              { x: window.innerWidth - 50, y: window.innerHeight - 50 }, // Right-down corner
              { x: window.innerWidth / 2, y: window.innerHeight - 50 }, // Down-middle corner
              { x: 50, y: window.innerHeight - 50 }, // Left-down corner
              { x: window.innerWidth / 2, y: window.innerHeight / 2 }, // Middle
              // Add more calibration points as needed
            ];

            // Counter to track the number of clicks for each calibration point
            const clickCounts = new Array(calibrationPoints.length).fill(0);

            // Function to create a calibration button
            function createCalibrationButton(pointIndex) {
              const button = document.createElement('button');
              button.textContent = 'Click Me';
              button.className = 'calibration-button';
              button.style.position = 'absolute';
              button.style.left = `${calibrationPoints[pointIndex].x}px`;
              button.style.top = `${calibrationPoints[pointIndex].y}px`;

              button.addEventListener('click', () => {
                if (clickCounts[pointIndex] < 6) {
                  // Increment click count
                  clickCounts[pointIndex]++;
                  if (clickCounts[pointIndex] === 5) {
                    // Once clicked 5 times, move to the next calibration point
                    moveToNextCalibrationPoint();
                  }
                }
              });

              return button;
            }

            // Initialize an array to store distances from the center point
            const distancesFromCenter = [];
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Create the red fixation point for accuracy calculation
            const fixationPoint = document.createElement("div");

                fixationPoint.style.width = "10px"; // Adjust the size as needed
                fixationPoint.style.height = "10px"; // Adjust the size as needed
                fixationPoint.style.backgroundColor = "red";
                fixationPoint.style.borderRadius = "50%"; // Makes it a circle
                fixationPoint.style.position = "absolute";
                fixationPoint.style.top = "50%"; // Position it vertically at the middle
                fixationPoint.style.left = "50%"; // Position it horizontally at the middle
                fixationPoint.style.transform = "translate(-50%, -50%)"; // Center it precisely

            var storedArray = [[], []];

            function collectingPrediction() {
                    console.log("Collecting testing points")
                    var prediction = webgazer.getCurrentPrediction();
                    console.log("prediction: ",prediction);
                    prediction.then(function(value) {
                        console.log("value", value)
                        var pointX = value.x;
                        console.log("Stored pointX: ", pointX)
                        storedArray[0].push(pointX);
                        var pointY = value.y;
                        console.log("Stored pointY: ", pointY)
                        storedArray[1].push(pointY);
                    })
            }

            function precisionCalculation() {
                // Hide fixation point
                fixationPoint.style.display = 'none';
                console.log("Stored array: ", storedArray)

                var x = storedArray[0];
                var y = storedArray[1];
                console.log("Stored array:  - X array:",x)

                for (n=0; n < x.length; n++) {
                    console.log("storedPoints - xn:",x[n])
                    xDiff = x[n] - centerX
                    yDiff = y[n] - centerY
                    // Calculate the Euclidean distance between the gaze point and the center point
                    const distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
                    console.log("distance - xn", distance)
                    // Add the distance to the distancesFromCenter array
                    distancesFromCenter.push(distance);
                }

                console.log("total distance array:", distancesFromCenter)

                // Now you have an array distancesFromCenter with distances for each gaze point

                // Calculate accuracy metrics based on the distances, e.g., average distance
                const averageDistance = distancesFromCenter.reduce((acc, curr) => acc + curr, 0) / distancesFromCenter.length;
                // You can define a threshold to determine if a gaze point is accurate or not
                const accuracyThreshold = Math.sqrt(Math.pow(window.innerHeight / 3 - window.innerHeight / 2, 2) + Math.pow(window.innerWidth / 3 - window.innerWidth / 2, 2));
                // Count the number of accurate gaze points based on the threshold
                const accurateGazePoints = distancesFromCenter.filter(distance => distance <= accuracyThreshold).length;
                // Calculate the accuracy percentage

                // Stricter method with threshold
                const accuracyPercentage2 = (accurateGazePoints / distancesFromCenter.length) * 100;
                accuracyPercentage = (100 - (averageDistance/window.innerHeight / 2 * 100)).toFixed(2);



                // Now you have the accuracy metrics, such as average distance and accuracy percentage
                console.log("Average Distance:", averageDistance);
                console.log("Accuracy Percentage:", accuracyPercentage);
                console.log("Accuracy Percentage2:", accuracyPercentage2)
                console.log("accuracyThreshold:", accuracyThreshold)
                participantChoices.push({
                    GazingAccuracyStrict: accuracyPercentage2,
                    GazingAccuracy: accuracyPercentage
                });

                message.style.display = 'none';  // Make sure the message is visible
                let videoPage = document.getElementById("video");
                webgazer.showPredictionPoints(false);

                //Accuracy % message
                message.innerHTML = `
                   <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
                       <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">The accuracy score is:</strong>
                       <p style="text-align: center;">${accuracyPercentage}%</p>
                       </div>
               `;

                message.style.display = 'block';  // Make sure the message is visible
                //message.innerHTML += accuracyPercentage
//                message.innerHTML += accuracyPercentage2

                // Provide options to recalibrate or move to next
                clearButtons();
                let recalibrateButton = createButton("Recalibrate", () => {
                    message.style.display = 'none';  
                    webgazer.showPredictionPoints(true);
                    calibration();
                });
                recalibrateButton.style.marginTop = '10px';  
                addButton(recalibrateButton);

                let nextButton = createButton("Next", () => {
                    message.style.display = 'none';  
                    webgazer.showVideo(false); // Show webcam video feed
                    experimentalSet();
                });
                nextButton.style.marginTop = '30px';
                addButton(nextButton);
            }
           
                


            // Function to move to the next calibration point
            function moveToNextCalibrationPoint() {
              currentCalibrationPointIndex++;
              if (currentCalibrationPointIndex < calibrationPoints.length) {
                // Create and add the next calibration button
                const nextButton = createCalibrationButton(currentCalibrationPointIndex);

                // Replace the current button with the next button
                document.body.replaceChild(nextButton, currentButton);

                // Update the reference to the current button
                currentButton = nextButton;
              } else {
                // Calibration is complete
                console.log('Calibration completed.');
                currentButton.remove(); // Remove the last button

                message.style.display = 'none';  // Make sure the message is visible
                  webgazer.showPredictionPoints(false);
                  let videoPage = document.getElementById("video");
                  message.innerHTML = `
                    <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
                        <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">Please stare at the center of the screen without moving your mouse. The accuracy calculation will automatically start in 7 seconds. </strong>
                    </div>
                  `;
                message.style.display = 'block';  // Make sure the message is visible

                setTimeout(function() {
                  // Hide the elements after the initial 7 seconds
                  message.style.display = 'none';
                  webgazer.showPredictionPoints(true);
                  // Append the fixation point to the body element (or any other container you prefer)
                  document.body.appendChild(fixationPoint);

                  // Collect prediction points for 1000 times
                    function count(times) {
                      var n = 0
                      console.log("Now start collecting prediction points")
                      collectingPrediction();
                      while (n < times) {
                        // collect points for n times
                        n += 1;

                      }
                    }
                    count(1000);
                  setTimeout(function() {
                    // After collecting prediction, start calculating precision
                    precisionCalculation();
                  }, 1000);
                }, 7000); // Initial 7 seconds delay
              }
            }

            // Start calibration by creating the first button
            let currentCalibrationPointIndex = 0;
            let currentButton = createCalibrationButton(currentCalibrationPointIndex);
            document.body.appendChild(currentButton);

        }

        setTimeout(function () {
            calibration(); // call calibration function
            message.style.display = 'none';
        }, 5000);


        clearButtons();
        document.body.classList.remove('no-select');

        }))
        }, 7000);

    }));
}));
}




//Full experiment
function experimentalSet() {
    participantChoices.push({
        part: "Experiment_Start"
    });
    clearButtons();

    let currentVideoIndex = 0;
    let videosByType = {};

    // Start tracking gaze
    webgazer.showPredictionPoints(false);
    webgazer.showVideo(false); // Show webcam video feed
    webgazer.showFaceOverlay(false); // Hide face overlay (optional)



    // Group the videos by type
    for (let video of videos) {
        if (!videosByType[video.type]) {
          videosByType[video.type] = [];
        }
        videosByType[video.type].push(video);
    }

    // Shuffle videos in each category
    for (let type in videosByType) {
        shuffleArray(videosByType[type]);
    }
  
    let sequenceData = generateVideoSequence(videosByType, order1);
    let shuffledVideos = sequenceData.sequence;
    videosByType = sequenceData.videosByType;
      
    let roundNumber = 1; // for random video order 

    function playVideoUntil3Seconds(onComplete) {
        let startTime = Date.now();
        let cumulativeTime = 0;
        videoPlayer.style.display = "block";
        videoPlayer.play();
        webgazer.resume();
        console.log("resumed")
        document.body.focus();


        videoPlayer.onended = videoPlayer.onpause = () => {
            cumulativeTime += Date.now() - startTime; // add time of current play to cumulativeTime
            if (cumulativeTime < 6000) {
                // check if cumulativeTime is less than 3 seconds
                startTime = Date.now(); // reset startTime for the next play
                videoPlayer.play(); // immediately replay video
                webgazer.resume();
                console.log("resumed")

            } else {
                webgazer.pause()
                console.log("paused")
                videoPlayer.onended = videoPlayer.onpause = null; // remove the listeners once done
                onComplete();
            }
        };
    };

    function playNoVideoUntil3Seconds(onComplete) {
        let fixationCross = document.getElementById("fixationCross");
        let startTime = Date.now();
        let cumulativeTime = 0;
    
        videoPlayer.style.display = "none";
        fixationCross.style.display = "block"; // Show the fixation cross
    
        videoPlayer.play();
        webgazer.resume();
        console.log("resumed");
        document.body.focus();
    
        videoPlayer.onended = videoPlayer.onpause = () => {
            cumulativeTime += Date.now() - startTime;
    
            if (cumulativeTime < 6000) {
                startTime = Date.now();
                videoPlayer.play();
                webgazer.resume();
            } else {
                webgazer.pause()
                videoPlayer.onended = videoPlayer.onpause = null; 
                fixationCross.style.display = "none"; // Hide the fixation cross
                onComplete();
            }
        };
    }
    


function playNextVideo() {
    if (currentVideoIndex < shuffledVideos.length) {
        const video = shuffledVideos[currentVideoIndex];
        videoPlayer.src = video.src;
        
        videoPlayer.onloadedmetadata = () => {
            videoPlayer.currentTime = videoPlayer.duration * 0.6; // Seek to 60% of the video's duration
            videoPlayer.onseeked = () => {
                videoPlayer.onseeked = null;
                videoPlayer.pause(); // Pause the video after seeking
                webgazer.resume();
                console.log("resumed")
                videoPlayer.style.display = "block"; // Show the video still 

                participantChoices.push({
                    part: "Still frame"
                });

                // Show the video still for 3 seconds
                setTimeout(() => {
                    videoPlayer.style.display = "none"; 
                    webgazer.pause();
                    console.log("paused")
                    participantChoices.push({
                        part: "End still frame"
                    });
    
                    Forecasting(video.id, (forecastData) => {
                        currentForecast = forecastData;
                    videoPlayer.style.display = "block"; 
                    let watchButton;
                    let skipButton;

                const buttonTimeout = setTimeout(() => {
                    const randomButton = Math.random() < 0.5 ? watchButton : skipButton;
                    randomButton.click();
                }, 7000); // decide automatically if no response in 7 seconds

                watchButton = createButton("Choose", (reactionTime) => {
                    clearTimeout(buttonTimeout);
                    watchButton.style.display = "none";
                    skipButton.style.display = "none";
                    videoPlayer.currentTime = 0; // Reset the video to the start
                    
                    playVideoUntil3Seconds(() => {
                        videoPlayer.style.display = "none";
                        clearButtons();
                        let ratingData = {};
                        ValenceArousal(video.id, (responses) => {
                            feedbackContainer.style.display = "none";
                            RelevantEmotions(video.id, (userRatings) => {
                                console.log('Ratings submitted:', userRatings);
                                feedbackContainer.style.display = "none";
                                WatchAgain(WatchAgainResponse => {
                                    feedbackContainer.style.display = "none";
                                    userRatings.forEach((rating) => {
                                        participantChoices.push({
                                         vID: rating.vID,
                                         reactionTime: reactionTime,
                                         valenceForecast: currentForecast['valenceForecast'],
                                         arousalForecast: currentForecast['arousalForecast'],
                                         interestForecast: currentForecast['interestForecast'],
                                         valence: responses['valence'],
                                         arousal: responses['arousal'],
                                         videoType: rating['videoType'],
                                         EmoRated: rating['EmoRated'],
                                         EmoScore: rating['EmoScore'],
                                         watchAgain: WatchAgainResponse["Would you watch this video again?"],
                                         SID: participantSID,
                                         name: participantName,
                                         uniqueKey: participantUniqueKey,
                                         startTime: timestamp1,
                                         age: age,
                                         racialIdentity: racialIdentity,
                                         genderIdentity: genderIdentity,
                                         fatherEducation: fatherEducation,
                                         motherEducation: motherEducation,
                                         familyIncome: familyIncome,
                                         yearInSchool: yearInSchool,
                                         B_Active: baselineEmoResponses["Active"],
                                         B_Afraid: baselineEmoResponses["Afraid"],
                                         B_Amused: baselineEmoResponses["Amused"],
                                         B_Angry: baselineEmoResponses["Angry"],
                                         B_Aroused: baselineEmoResponses["Aroused"],
                                         B_Calm: baselineEmoResponses["Calm"],
                                         B_Disgusted: baselineEmoResponses["Disgusted"],
                                         B_Excited: baselineEmoResponses["Excited"],
                                         B_Happy: baselineEmoResponses["Happy"],
                                         B_Hungry: baselineEmoResponses["Hungry"],
                                         B_Inactive: baselineEmoResponses["Inactive"],
                                         B_Loving: baselineEmoResponses["Loving"],
                                         B_Negative: baselineEmoResponses["Negative"],
                                         B_Peaceful: baselineEmoResponses["Peaceful"],
                                         B_Pleasant: baselineEmoResponses["Pleasant"],
                                         B_Positive: baselineEmoResponses["Positive"],
                                         B_Sad: baselineEmoResponses["Sad"],
                                         B_Still: baselineEmoResponses["Still (quiet)"],
                                         B_Unpleasant: baselineEmoResponses["Unpleasant"]
                                        });
                                    });
                                    generateAndUploadCSV(participantChoices);
                                    showFixationCross(playNextVideo);
                                });
                            });
                        });
                    });
                });

                skipButton = createButton("Avoid", (reactionTime) => {
                    clearTimeout(buttonTimeout);
                    watchButton.style.display = "none";
                    skipButton.style.display = "none";
                    videoPlayer.currentTime = 0; // Reset the video to the start
                    playNoVideoUntil3Seconds(() => {
                        videoPlayer.style.display = "none";
                        clearButtons();
                        let ratingData = {};
                        ValenceArousal(video.id, (responses) => {
                            feedbackContainer.style.display = "none";
                            RelevantEmotions(video.id, (userRatings) => {
                                console.log('Ratings submitted:', userRatings);
                                feedbackContainer.style.display = "none";
                                WatchAgain(WatchAgainResponse => {
                                    feedbackContainer.style.display = "none";
                                    userRatings.forEach((rating) => {
                                        participantChoices.push({
                                         vID: rating.vID,
                                         reactionTime: reactionTime,
                                         valenceForecast: currentForecast['valenceForecast'],
                                         arousalForecast: currentForecast['arousalForecast'],
                                         interestForecast: currentForecast['interestForecast'],
                                         valence: responses['valence'],
                                         arousal: responses['arousal'],
                                         videoType: rating['videoType'],
                                         EmoRated: rating['EmoRated'],
                                         EmoScore: rating['EmoScore'],
                                         watchAgain: WatchAgainResponse["Would you watch this video again?"],
                                         SID: participantSID,
                                         name: participantName,
                                         uniqueKey: participantUniqueKey,
                                         startTime: timestamp1,
                                         age: age,
                                         racialIdentity: racialIdentity,
                                         genderIdentity: genderIdentity,
                                         fatherEducation: fatherEducation,
                                         motherEducation: motherEducation,
                                         familyIncome: familyIncome,
                                         yearInSchool: yearInSchool,
                                         B_Active: baselineEmoResponses["Active"],
                                         B_Afraid: baselineEmoResponses["Afraid"],
                                         B_Amused: baselineEmoResponses["Amused"],
                                         B_Angry: baselineEmoResponses["Angry"],
                                         B_Aroused: baselineEmoResponses["Aroused"],
                                         B_Calm: baselineEmoResponses["Calm"],
                                         B_Disgusted: baselineEmoResponses["Disgusted"],
                                         B_Excited: baselineEmoResponses["Excited"],
                                         B_Happy: baselineEmoResponses["Happy"],
                                         B_Hungry: baselineEmoResponses["Hungry"],
                                         B_Inactive: baselineEmoResponses["Inactive"],
                                         B_Loving: baselineEmoResponses["Loving"],
                                         B_Negative: baselineEmoResponses["Negative"],
                                         B_Peaceful: baselineEmoResponses["Peaceful"],
                                         B_Pleasant: baselineEmoResponses["Pleasant"],
                                         B_Positive: baselineEmoResponses["Positive"],
                                         B_Sad: baselineEmoResponses["Sad"],
                                         B_Still: baselineEmoResponses["Still (quiet)"],
                                         B_Unpleasant: baselineEmoResponses["Unpleasant"]
                                        });
                                    });
                                    generateAndUploadCSV(participantChoices);
                                    showFixationCross(playNextVideo);
                                });
                            });
                        });
                    });
                });
                watchButton.style.marginRight = "20px";  
                watchButton.style.marginLeft = "40%";  
                watchButton.style.display = "inline-block";
                skipButton.style.display = "inline-block";

                currentVideoIndex++;
                clearButtons();
                addButton(watchButton);
                addButton(skipButton);
                    }); // end of the forecasting callback
                }, 3000); // 3 second delay for still
            };
        };
    } else {
        roundNumber++;
        let nextOrder = roundNumber % 2 === 0 ? order2 : order1;
        sequenceData = generateVideoSequence(videosByType, nextOrder);
        shuffledVideos = sequenceData.sequence;
        videosByType = sequenceData.videosByType;
        currentVideoIndex = 0;
        if (shuffledVideos.length > 0) {
            playNextVideo();
        } else {
            console.log("Calling BFI2");
            Questionnaire(participantChoices);
        }
    }
}


    playNextVideo();
};



const populationMeans = {
    "Amusement": {valence: 5.50},
    "Anger": {valence: 1.97},
    "Calmness": {valence: 5.29},
    "Craving": {valence: 5.74},
    "Disgust": {valence: 1.34},
    "Excitement": {valence: 4.71},
    "Fear": {valence: 2.18},
    "Joy": {valence: 6.04},
    "Sadness": {valence: 2.09},
    "Romance": {valence: 5.54}
};


function calculateMean(numbers) {
    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

function calculateMeanRatings(participantChoices) {
    let videoTypes = ["Joy", "Fear", "Craving", "Anger", "Sadness", "Excitement", "Disgust", "Calmness", "Amusement"];
    let meanRatings = {};

    for (let type of videoTypes) {
        let choicesOfType = participantChoices.filter(choice => choice.videoType === type);
        if (choicesOfType.length > 0) {
            let meanValence = calculateMean(choicesOfType.map(choice => Number(choice.valence)));
            meanRatings[type] = { meanValence };
        }
    }

    return meanRatings;
}



// BFI, SS/SM, ERQ
function Questionnaire(participantChoices) {
    feedbackContainer.innerHTML = '';
    document.body.classList.add('instructions-body-align');
    window.scrollTo(0, 0);
    feedbackContainer.style.marginTop = '25px';
    feedbackContainer.style.display = "block";

    const BFI = {
             "bfi_1": "Is outgoing, sociable.", //
            "bfi_2": "Is compassionate, has a soft heart.",
            "bfi_3": "Tends to be disorganized.",
            "bfi_4": "Is relaxed, handles stress well.",
            "bfi_5": "Has few artistic interests.",
            "bfi_6": "Has an assertive personality.",
            "bfi_7": "Is respectful, treats others with respect.",
            "bfi_8": "Tends to be lazy.",
            "bfi_9": "Stays optimistic after experiencing a setback.",
            "bfi_10": "Is curious about many different things.",
            "bfi_11": "Rarely feels excited or eager.",
            "bfi_12": "Tends to find fault with others.",
            "bfi_13": "Is dependable, steady.",
            "bfi_14": "Is moody, has up and down mood swings.",
            "bfi_15": "Is inventive, finds clever ways to do things.",
            "bfi_16": "Tends to be quiet.",
            "bfi_17": "Feels little sympathy for others.",
            "AC1": "Can pay attention and select agree strongly",
            "bfi_18": "Is systematic, likes to keep things in order.",
            "bfi_19": "Can be tense.",
            "bfi_20": "Is fascinated by art, music, or literature.",
            "bfi_21": "Is dominant, acts as a leader.",
            "bfi_22": "Starts arguments with others.",
            "bfi_23": "Has difficulty getting started on tasks.",
            "bfi_24": "Feels secure, comfortable with self.",
            "bfi_25": "Avoids intellectual, philosophical discussions.",
            "bfi_26": "Is less active than other people.",
            "bfi_27": "Has a forgiving nature.",
            "bfi_28": "Can be somewhat careless.",
            "bfi_29": "Is emotionally stable, not easily upset.",
            "bfi_30": "Has little creativity.",
            "bfi_31": "Is sometimes shy, introverted.",
            "bfi_32": "Is helpful and unselfish with others.",
            "bfi_33": "Keeps things neat and tidy.",
            "bfi_34": "Worries a lot.",
            "bfi_35": "Values art and beauty.",
            "bfi_36": "Finds it hard to influence people.",
            "bfi_37": "Is sometimes rude to others.",
            "bfi_38": "Is efficient, gets things done.",
            "bfi_39": "Often feels sad.",
            "bfi_40": "Is complex, a deep thinker.",
            "bfi_41": "Is full of energy.",
            "bfi_42": "Is suspicious of others intentions.",
            "bfi_43": "Is reliable, can always be counted on.",
            "bfi_44": "Keeps their emotions under control.",
            "bfi_45": "Has difficulty imagining things.",
            "bfi_46": "Is talkative.",
            "bfi_47": "Can be cold and uncaring.",
            "bfi_48": "Leaves a mess, does not clean up.", 
            "bfi_49": "Rarely feels anxious or afraid.",
            "bfi_50": "Thinks poetry and plays are boring.",
            "bfi_51": "Prefers to have others take charge.",
            "bfi_52": "Is polite, courteous to others.",
            "bfi_53": "Is persistent, works until the task is finished.",
            "bfi_54": "Tends to feel depressed, blue.",
            "bfi_55": "Has little interest in abstract ideas.",
            "bfi_56": "Shows a lot of enthusiasm.",
            "bfi_57": "Assumes the best about people.",
            "bfi_58": "Sometimes behaves irresponsibly.",
            "bfi_59": "Is temperamental, gets emotional easily.",
            "bfi_60": "Is original, comes up with new ideas."
    };

    const Situational = {
         "SS_Gen1": "When I choose how to spend my time, I place a lot of importance on how the people involved will make me feel.", //
        "SM1": "When I am upset, I make a plan of action to deal with the problem that is making me upset",
        "SS_Av1": "I am careful to avoid people or situations that make me have negative feelings.",
        "SS_Ap1": "I regulate my emotions by choosing to spend time with people that I think will probably make me feel good.",
        "SM2": "I control my emotions by changing the particular situation I happen to be in. ",
        "SS_Gen2": "How a situation will make me feel is of little concern to me.",
        "SS_Ap2": "I control my emotions by approaching situations and activities that I expect will put me in a good mood.",
        "SS_AvR": "I do not manage my emotions by avoiding situations and people that I expect will make me feel bad",
        "SM3": "When I am in a stressful situation I take steps to turn the situation around, so it becomes more positive. ",
        "SS_Gen_3": "I control my emotions by carefully choosing the situations I get myself into.",
        "SS_Av3": "I control my emotions by avoiding situations and activities that I expect will put me in a bad mood.",
        "AC2": "Can pay attention and select agree strongly",
        "SM4": "When I am in an emotionally challenging situation, I take action to deal with the problem.",
        "SS_ApR": "I do not manage my emotions by seeking out situations and people that I expect will make me feel good. ",
        "SS_Gen4": "When I choose friends or activities, I do not think much about how they will make me feel.",
        "SM5": "When I am stressed, I engage with the situation to neutralize the stressor, so it becomes less negative.",
        "SS_Ap3": "I am careful to seek out people or situations that make me have positive feelings.",
        "SS_Av3": "I regulate my emotions by avoiding spending time with people that I think will probably make me feel bad.",
    };

    const ERQ = {
        "ERQ1": "When I want to feel more positive emotion (such as joy or amusement), I change what I’m thinking about.", 
        "ERQ2": "I keep my emotions to myself.",
        "ERQ3": "When I want to feel less negative emotion (such as sadness or anger), I change what I’m thinking about.",
        "ERQ4": "When I am feeling positive emotions, I am careful not to express them.",
        "ERQ5": "When I’m faced with a stressful situation, I make myself think about it in a way that helps me stay calm.",
        "ERQ6": "I control my emotions by not expressing them.",
        "ERQ7": "When I want to feel more positive emotion, I change the way I’m thinking about the situation.",
        "ERQ8": "I control my emotions by changing the way I think about the situation I’m in.",
        "ERQ9": "When I am feeling negative emotions, I make sure not to express them.",
        "ERQ10": "When I want to feel less negative emotion, I change the way I’m thinking about the situation.",
   };

    const scaleLabels = ["Disagree strongly", "Disagree a little", "Neutral; no opinion", "Agree a little", "Agree strongly"];
    let questionnaireResponses = {};
    let currentRound = 0;

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.style.marginTop = "20px";

    function renderQuestions(questions, headerText) {
        feedbackContainer.innerHTML = '';

        const header = document.createElement("p");
        header.style.fontWeight = 'bold';
        header.style.textAlign = 'center';
        header.style.padding = '20px 0';
        header.textContent = headerText;
        feedbackContainer.appendChild(header);

        Object.entries(questions).forEach(([key, item]) => {
            const itemContainer = document.createElement("div");
            itemContainer.style.display = "flex";
            itemContainer.style.justifyContent = "space-between";
            itemContainer.style.alignItems = "center"; //maybe flex-start
            itemContainer.style.paddingBottom = "10px";

            const question = document.createElement("p");
            question.style.fontWeight = 'normal';
            question.style.flex = "1";
            question.style.marginRight = "10px";
            question.textContent = item;
            question.style.maxWidth = '350px'; // Added maximum width to the question
            
            itemContainer.appendChild(question);

            const likertContainer = document.createElement("div");
            likertContainer.classList.add("likert-container");
            likertContainer.style.flex = "2";

            for (let i = 1; i <= 5; i++) {
                const likertBox = document.createElement("div");
                likertBox.classList.add("likert-box");
                likertBox.style.width = "60px";
                likertBox.style.height = "45px";

                const number = document.createElement("div");
                number.textContent = i.toString();
                number.classList.add("likert-number");
                number.style.lineHeight = "20px";
                likertBox.appendChild(number);

                const label = document.createElement("div");
                label.classList.add("likert-label");
                label.textContent = scaleLabels[i - 1];
                likertBox.appendChild(label);

                (function(currentIndex, currentKey) {
                    likertBox.onclick = function() {
                        likertContainer.querySelectorAll(".likert-box").forEach(box => box.style.backgroundColor = "");
                        questionnaireResponses[currentKey] = currentIndex;
                        likertBox.style.backgroundColor = "#d8d8d8";
                    };
                })(i, key);

                likertContainer.appendChild(likertBox);
            }

            itemContainer.appendChild(likertContainer);
            feedbackContainer.appendChild(itemContainer);
        });

        feedbackContainer.appendChild(submitButton);
    }

    submitButton.onclick = () => {
        let currentQuestions;
        switch (currentRound) {
            case 0:
                currentQuestions = Situational;
                break;
            case 1:
                currentQuestions = ERQ;
                break;
            case 2:
                currentQuestions = BFI;
                break;
            default:
                // Handle an unexpected case
                console.error('Unexpected round number: ' + currentRound);
                return;
        }

        if (Object.keys(currentQuestions).every(key => key in questionnaireResponses)) {


            if (currentRound === 2) { // If it's the third round, finalize.
                //participantChoices.push(questionnaireResponses); 
    // For each object within participantChoices, merge it with questionnaireResponses
    const timestamp2 = new Date();
    questionnaireResponses["finishTime"] = timestamp2;
    participantChoices = participantChoices.map(choice => {
        if (typeof choice === 'object' && !Array.isArray(choice)) {
            return { ...choice, ...questionnaireResponses }; // Merge the objects
        } else {
            console.error('Choice is not an object:', choice); // Log an error if the choice is not an object
            return choice;
        }
    });

                feedbackContainer.style.display = "none";
                document.body.classList.remove('instructions-body-align');
                feedbackContainer.style.marginTop = '0px';
                generateAndUploadCSV(participantChoices);
                instructions3();
            } else {
                currentRound++;
                const headerText = currentRound === 1
                    ? "Please rate the extent to which you agree with the following questions:"
                    : "I am someone who..."; 
                const nextRoundQuestions = currentRound === 1 ? ERQ : BFI;
                renderQuestions(nextRoundQuestions, headerText);
            }
        } else {
            alert("Please answer all the questions.");
        }
    };
    
    renderQuestions(Situational, "Please rate the extent to which you agree with the following questions:");
}



function instructions3() {
    let resultTableContainer = document.getElementById("resultTableContainer");

    // Only include the unique key at the end of the feedback for the participant
    resultTableContainer.innerHTML = `
    <br>
    <div class="content-text">
        <h2 style="text-align:center;">Completion Key:</h2><br>
        <p style="text-align:center;">
            <strong><u id="uniqueKey">${participantUniqueKey}</strong></u>
            <br><br>
            <button onclick="copyToClipboard()">Click to Copy</button>
            <br><br><br><br>
            Please save this key as proof of completion until you receive your RPP credits!  
        </p>
    </div>`;
//// Please copy this key and send it to "ceiroasolans@berkeley.edu" to prove you have completed this exercise
    // Add the copy function to the page (or it can be added elsewhere if desired)
    let script = document.createElement('script');
    script.textContent = `
    function copyToClipboard() {
        const textToCopy = document.getElementById("uniqueKey").textContent;
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Key copied to clipboard!");
    }`;
    document.body.appendChild(script);
}






  //                                          AUXILIARY FUNCTIONS

function showMessage(text) {
    message.innerText = text;
    message.style.display = "block";
}

function createButton(text, onClick) {
    const button = document.createElement("button");
    button.innerText = text;
    button.onclick = () => {
        const reactionTime = performance.now() - startTime;
        onClick(reactionTime);
    };
    return button;
}

function addButton(button) {
    buttonsContainer.appendChild(button);
    startTimer(); 
}

function clearButtons() {
    buttonsContainer.innerHTML = "";
}

function showFixationCross(callback) {
    console.log("showFixationCross called, calling callback function");
    fixationCross.style.display = "block";
    setTimeout(() => {
        fixationCross.style.display = "none";
        console.log('showFixationCross completed, calling callback');
        callback();
    }, 1500);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}





//                                              GENERATE DATA

function generateAndUploadCSV(participantChoices) {
    const header = ["part","vID", "reactionTime","valenceForecast", "arousalForecast", "interestForecast", "valence", "arousal", "videoType", "EmoRated", "EmoScore", "WatchAgain", "SID", "name", "uniqueKey", "startTime", "age", "racialIdentity", "genderIdentity", "fatherEducation", "motherEducation", "familyIncome", "yearInSchool", "B_Active", "B_Afraid", "B_Amused", "B_Angry", "B_Aroused", "B_Calm", "B_Disgusted", "B_Excited", "B_Happy", "B_Hungry", "B_Inactive", "B_Loving", "B_Negative", "B_Peaceful", "B_Pleasant", "B_Positive", "B_Sad", "B_Still", "B_Unpleasant", "bfi_1", "bfi_2", "bfi_3", "bfi_4", "bfi_5", "bfi_6", "bfi_7", "bfi_8", "bfi_9", "bfi_10", "bfi_11", "bfi_12", "bfi_13", "bfi_14", "bfi_15", "bfi_16", "bfi_17", "AC1", "bfi_18", "bfi_19", "bfi_20", "bfi_21", "bfi_22", "bfi_23", "bfi_24", "bfi_25", "bfi_26", "bfi_27", "bfi_28", "bfi_29", "bfi_30", "bfi_31", "bfi_32", "bfi_33", "bfi_34", "bfi_35", "bfi_36", "bfi_37", "bfi_38", "bfi_39", "bfi_40", "bfi_41", "bfi_42", "bfi_43", "bfi_44", "bfi_45", "bfi_46", "bfi_47", "bfi_48", "bfi_49", "bfi_50", "bfi_51", "bfi_52", "bfi_53", "bfi_54", "bfi_55", "bfi_56", "bfi_57", "bfi_58", "bfi_59", "bfi_60", "SS_Gen1", "SM1", "SS_Av1", "SS_Ap1", "SM2", "SS_Gen2", "SS_Ap2", "SS_AvR", "SM3", "SS_Gen_3", "SS_Av3", "AC2", "SM4", "SS_ApR", "SS_Gen4", "SM5", "SS_Ap3", "SS_Av3", "ERQ1", "ERQ2", "ERQ3", "ERQ4", "ERQ5", "ERQ6", "ERQ7", "ERQ8", "ERQ9", "ERQ10", "finishTime", "windowSizeHeight","windowSizeWidth", "screenSizeHeight", "screenSizeWidth", "gazingPointX", "gazingPointY"];
    const csvRows = [header];
  
    for (const row of participantChoices) {
      const rowData = [
        row.part,
        row.vID,
        row.reactionTime,
        row.valenceForecast || "",
        row.arousalForecast || "",
        row.interestForecast || "",
        row.valence || "",
        row.arousal || "",
        row.videoType || "",
        row.EmoRated || "",
        row.EmoScore || "",
        row.watchAgain || "",
        row.SID || "",
        row.name || "",
        row.uniqueKey || "",
        row.startTime || "",
        row.age || "",
        row.racialIdentity || "",
        row.genderIdentity || "",
        row.fatherEducation || "",
        row.motherEducation || "",
        row.familyIncome || "",
        row.yearInSchool || "",
        row.B_Active || "",
        row.B_Afraid || "",
        row.B_Amused || "",
        row.B_Angry || "",
        row.B_Aroused || "",
        row.B_Calm || "",
        row.B_Disgusted || "",
        row.B_Excited || "",
        row.B_Happy || "",
        row.B_Hungry || "",
        row.B_Inactive || "",
        row.B_Loving || "",
        row.B_Negative || "",
        row.B_Peaceful || "",
        row.B_Pleasant || "",
        row.B_Positive || "",
        row.B_Sad || "",
        row.B_Still || "",
        row.B_Unpleasant || "", 
        row.bfi_1 || "", row.bfi_2 || "", row.bfi_3 || "", row.bfi_4 || "", row.bfi_5 || "", row.bfi_6 || "", row.bfi_7 || "", row.bfi_8 || "", row.bfi_9 || "", row.bfi_10 || "", row.bfi_11 || "", row.bfi_12 || "", row.bfi_13 || "", row.bfi_14 || "", row.bfi_15 || "", row.bfi_16 || "", row.bfi_17 || "",row.AC1 || "", row.bfi_18 || "", row.bfi_19 || "", row.bfi_20 || "", row.bfi_21 || "", row.bfi_22 || "", row.bfi_23 || "", row.bfi_24 || "", row.bfi_25 || "", row.bfi_26 || "", row.bfi_27 || "", row.bfi_28 || "", row.bfi_29 || "", row.bfi_30 || "", row.bfi_31 || "", row.bfi_32 || "", row.bfi_33 || "", row.bfi_34 || "", row.bfi_35 || "", row.bfi_36 || "", row.bfi_37 || "", row.bfi_38 || "", row.bfi_39 || "", row.bfi_40 || "", row.bfi_41 || "", row.bfi_42 || "", row.bfi_43 || "", row.bfi_44 || "", row.bfi_45 || "", row.bfi_46 || "", row.bfi_47 || "", row.bfi_48 || "", row.bfi_49 || "", row.bfi_50 || "", row.bfi_51 || "", row.bfi_52 || "", row.bfi_53 || "", row.bfi_54 || "", row.bfi_55 || "", row.bfi_56 || "", row.bfi_57 || "", row.bfi_58 || "", row.bfi_59 || "", row.bfi_60 || "",
        row.SS_Gen1 || "",
        row.SM1 || "",
        row.SS_Av1 || "",
        row.SS_Ap1 || "",
        row.SM2 || "",
        row.SS_Gen2 || "",
        row.SS_Ap2 || "",
        row.SS_AvR || "",
        row.SM3 || "",
        row.SS_Gen_3 || "",
        row.SS_Av3 || "",
        row.AC2 || "",
        row.SM4 || "",
        row.SS_ApR || "",
        row.SS_Gen4 || "",
        row.SM5 || "",
        row.SS_Ap3 || "",
        row.SS_Av3 || "",
        row.ERQ1 || "",
        row.ERQ2 || "",
        row.ERQ3 || "",
        row.ERQ4 || "",
        row.ERQ5 || "",
        row.ERQ6 || "",
        row.ERQ7 || "",
        row.ERQ8 || "",
        row.ERQ9 || "",
        row.ERQ10 || "",
        row.finishTime || "",
        row.windowSizeHeight,
        row.windowSizeWidth,
        row.screenSizeHeight,
        row.screenSizeWidth,
        row.gazingPointX,
        row.gazingPointY,
    ];

      csvRows.push(rowData);
    }
  
    const csvContent = csvRows.map(e => e.join(",")).join("\n");
    console.log(csvContent); 
    // Upload to serverless function
    const uploadUrl = '/.netlify/functions/upload-csv'; 
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', uploadUrl, true);
    //xhr.setRequestHeader('Content-Type', 'text/csv;charset=utf-8');

        
    // Retrieve SID value for filename
    const filename = participantChoices[0].SID + '.csv';
    xhr.setRequestHeader('X-Filename', filename);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log('File uploaded successfully:');
        } else {
          console.error('Error uploading file:');
        }
      }
    };
  
    xhr.send(csvContent);

  // Generate a physical CSV for download
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;  // Using the same filename variable as above

  document.body.appendChild(a);
  a.click();

  // Cleanup: remove the anchor link and revoke the Blob URL
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
  


// START                                               
//demographics();
instructions(); // for testing


 


//CHEAT CODE (to update):
// <navigate to folder first>
// git status
// git add .                               (preparing all new changes to be added)
// git commit -m "Your commit message"     (commiting changes)
// git push
// npx netlify deploy --prod               (deploy to website)
// to check new files, go to AWS S3 (amazon), buckets, emotionregulation

// or in short:         git add . && git commit -m "update" && git push && npx netlify deploy --prod

// data: https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1#  --> console home --> S3 service --> emotionregulation bucket --> same name folder --> files 




