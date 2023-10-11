// Double Task; comment things out to choose one or the other

//Constants
const mainContainer = document.getElementById("mainContainer");
const videoPlayer = document.getElementById("videoPlayer");
const fixationCross = document.getElementById("fixationCross");
const message = document.getElementById("message");
const buttonsContainer = document.getElementById("buttonsContainer");

const strategiesList = ["Stimulus selection", "Stimulus modification", "Reappraisal", "Distraction", "Acceptance", "Suppression"]

let predictedPoints = []; // Initialize an empty array to store predicted points

// Videos
const videos = [
    { src: "0074.mp4", type: "Amusement" },
//    { src: "0574.mp4", type: "Amusement" },
//    { src: "0656.mp4", type: "Amusement" },
//    { src: "1043.mp4", type: "Amusement" },
//    { src: "1145.mp4", type: "Amusement" },
//    { src: "1411.mp4", type: "Amusement" },
//    { src: "1564.mp4", type: "Amusement" },
//    { src: "1606.mp4", type: "Amusement" },
//    { src: "2072.mp4", type: "Amusement" },
//    { src: "2083.mp4", type: "Amusement" },
//    { src: "0124.mp4", type: "Anger" },
//    { src: "0252.mp4", type: "Anger" },
//    { src: "0414.mp4", type: "Anger" },
//    { src: "0595.mp4", type: "Anger" },
//    { src: "0681.mp4", type: "Anger" },
//    { src: "0948.mp4", type: "Anger" },
//    { src: "1229.mp4", type: "Anger" },
//    { src: "1844.mp4", type: "Anger" },
//    { src: "2049.mp4", type: "Anger" },
//    { src: "2066.mp4", type: "Anger" },
    { src: "0090.mp4", type: "Calmness" },
//    { src: "0339.mp4", type: "Calmness" },
//    { src: "0493.mp4", type: "Calmness" },
//    { src: "0553.mp4", type: "Calmness" },
//    { src: "0580.mp4", type: "Calmness" },
//    { src: "0645.mp4", type: "Calmness" },
//    { src: "0671.mp4", type: "Calmness" },
//    { src: "1216.mp4", type: "Calmness" },
//    { src: "1760.mp4", type: "Calmness" },
//    { src: "1835.mp4", type: "Calmness" },
//    { src: "0110.mp4", type: "Craving" },
//    { src: "0458.mp4", type: "Craving" },
//    { src: "0780.mp4", type: "Craving" },
//    { src: "0883.mp4", type: "Craving" },
//    { src: "0898.mp4", type: "Craving" },
//    { src: "0919.mp4", type: "Craving" },
//    { src: "1449.mp4", type: "Craving" },
//    { src: "1498.mp4", type: "Craving" },
//    { src: "1740.mp4", type: "Craving" },
//    { src: "1826.mp4", type: "Craving" },
    { src: "0187.mp4", type: "Disgust" },
//    { src: "0235.mp4", type: "Disgust" },
//    { src: "0355.mp4", type: "Disgust" },
//    { src: "0713.mp4", type: "Disgust" },
//    { src: "0876.mp4", type: "Disgust" },
//    { src: "0929.mp4", type: "Disgust" },
//    { src: "1194.mp4", type: "Disgust" },
//    { src: "1423.mp4", type: "Disgust" },
//    { src: "1907.mp4", type: "Disgust" },
//    { src: "2018.mp4", type: "Disgust" },
    { src: "0041.mp4", type: "Excitement" },
//    { src: "0202.mp4", type: "Excitement" },
//    { src: "0402.mp4", type: "Excitement" },
//    { src: "0546.mp4", type: "Excitement" },
//    { src: "0550.mp4", type: "Excitement" },
//    { src: "0701.mp4", type: "Excitement" },
//    { src: "0970.mp4", type: "Excitement" },
//    { src: "1297.mp4", type: "Excitement" },
//    { src: "1537.mp4", type: "Excitement" },
//    { src: "1717.mp4", type: "Excitement" },
//    { src: "2021.mp4", type: "Excitement" },
//    { src: "0379.mp4", type: "Fear" },
//    { src: "0489.mp4", type: "Fear" },
//    { src: "0706.mp4", type: "Fear" },
//    { src: "1202.mp4", type: "Fear" },
//    { src: "1361.mp4", type: "Fear" },
//    { src: "1375.mp4", type: "Fear" },
//    { src: "1726.mp4", type: "Fear" },
//    { src: "1780.mp4", type: "Fear" },
//    { src: "1832.mp4", type: "Fear" },
//    { src: "1964.mp4", type: "Fear" },
//    { src: "2091.mp4", type: "Fear" },
    { src: "0723.mp4", type: "Interest" },
//    { src: "0735.mp4", type: "Interest" },
//    { src: "1066.mp4", type: "Interest" },
//    { src: "1068.mp4", type: "Interest" },
//    { src: "1265.mp4", type: "Interest" },
//    { src: "1301.mp4", type: "Interest" },
//    { src: "1619.mp4", type: "Interest" },
//    { src: "1624.mp4", type: "Interest" },
//    { src: "1641.mp4", type: "Interest" },
//    { src: "1664.mp4", type: "Interest" },
//    { src: "1945.mp4", type: "Interest" },
    { src: "0035.mp4", type: "Joy" },
//    { src: "0087.mp4", type: "Joy" },
//    { src: "0126.mp4", type: "Joy" },
//    { src: "0597.mp4", type: "Joy" },
//    { src: "0605.mp4", type: "Joy" },
//    { src: "0666.mp4", type: "Joy" },
//    { src: "0915.mp4", type: "Joy" },
//    { src: "1032.mp4", type: "Joy" },
//    { src: "1034.mp4", type: "Joy" },
//    { src: "1093.mp4", type: "Joy" },
//    { src: "1245.mp4", type: "Joy" },
//    { src: "2013.mp4", type: "Joy" },
    { src: "0204.mp4", type: "Romance" },
//    { src: "0369.mp4", type: "Romance" },
//    { src: "0773.mp4", type: "Romance" },
//    { src: "1074.mp4", type: "Romance" },
//    { src: "1295.mp4", type: "Romance" },
//    { src: "1407.mp4", type: "Romance" },
//    { src: "1424.mp4", type: "Romance" },
//    { src: "1551.mp4", type: "Romance" },
//    { src: "1911.mp4", type: "Romance" },
//    { src: "1978.mp4", type: "Romance" },
//    { src: "0226.mp4", type: "Sadness" },
//    { src: "0299.mp4", type: "Sadness" },
//    { src: "0611.mp4", type: "Sadness" },
//    { src: "0756.mp4", type: "Sadness" },
//    { src: "0803.mp4", type: "Sadness" },
//    { src: "0860.mp4", type: "Sadness" },
//    { src: "0975.mp4", type: "Sadness" },
//    { src: "1164.mp4", type: "Sadness" },
//    { src: "1485.mp4", type: "Sadness" },
//    { src: "1959.mp4", type: "Sadness" },
];


  for(let i = 0; i < videos.length; i++) {
    videos[i].id = i.toString();
}


let participantChoices = [];

let startTime;

function startTimer() {  // Function to start the timer when buttons appear
    startTime = performance.now();
}


//Function for Stimulus Modification
window.addEventListener('resize', function() {
    // Set the size and position of dimOverlay to match videoPlayer
    dimOverlay.style.width = videoPlayer.offsetWidth + 'px';
    dimOverlay.style.height = videoPlayer.offsetHeight + 'px';
});




// Response variable 1: Interest
function createFeedbackForm(videoId, onSubmit) {
    feedbackContainer.innerHTML = '';

    const question = document.createElement("p");
    question.textContent = "How interesting is this?";

    feedbackContainer.slider = document.createElement("input");
    feedbackContainer.slider.type = "range";
    feedbackContainer.slider.min = 0;
    feedbackContainer.slider.max = 7;
    feedbackContainer.slider.value = 3;
    feedbackContainer.slider.addEventListener('change', function(){
        feedbackContainer.button.disabled = false;
    });

    feedbackContainer.button = document.createElement("button");
    feedbackContainer.button.innerText = "Submit";
    feedbackContainer.button.disabled = true;
    feedbackContainer.button.onclick = () => {
        const rating = feedbackContainer.slider.value;
        feedbackContainer.button.disabled = true;
        onSubmit(rating);
    };

    feedbackContainer.appendChild(question);
    feedbackContainer.appendChild(feedbackContainer.slider);
    feedbackContainer.appendChild(feedbackContainer.button);
    feedbackContainer.style.display = "block";
}

//  Response variable 2: Emotion circumplex
function createEmotionGraph(videoId, onSubmit) {
    const emotionGraphContainer = document.getElementById('emotionGraphContainer');
    const emotionSubmit = document.getElementById('emotionSubmit');
    const emotionGraph = document.getElementById('emotionGraph');

    emotionSubmit.disabled = true; // Disable the submit button initially

    // Clear any existing dots from the graph
    const existingDots = emotionGraph.getElementsByClassName('emotion-dot');
    while (existingDots[0]) {
        existingDots[0].parentNode.removeChild(existingDots[0]);
    }

    // Create the x-axis line and add it to the SVG
    const xAxisLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xAxisLine.setAttribute("x1", 30);
    xAxisLine.setAttribute("y1", 200);
    xAxisLine.setAttribute("x2", 370);
    xAxisLine.setAttribute("y2", 200);
    xAxisLine.setAttribute("stroke", "black");
    xAxisLine.setAttribute("stroke-width", 1);
    emotionGraph.appendChild(xAxisLine);

    // Create the y-axis line and add it to the SVG
    const yAxisLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    yAxisLine.setAttribute("x1", 200);
    yAxisLine.setAttribute("y1", 30);
    yAxisLine.setAttribute("x2", 200);
    yAxisLine.setAttribute("y2", 370);
    yAxisLine.setAttribute("stroke", "black");
    yAxisLine.setAttribute("stroke-width", 1);
    emotionGraph.appendChild(yAxisLine);




    // Create a function for creating text elements
    function createText(x, y, text) {
        const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textElement.setAttribute("x", x);
        textElement.setAttribute("y", y);
        textElement.textContent = text;
        textElement.style.fontSize = "12px";
        textElement.style.fontStyle = "italic";
        textElement.setAttribute("fill", "#808080");
        return textElement;
    }

    // Function to create line
    function createLine(x1, y1, x2, y2) {
        const lineElement = document.createElementNS("http://www.w3.org/2000/svg", "line");
        lineElement.setAttribute("x1", x1);
        lineElement.setAttribute("y1", y1);
        lineElement.setAttribute("x2", x2);
        lineElement.setAttribute("y2", y2);
        lineElement.setAttribute("stroke", "#D3D3D3"); // Light Grey Color
        lineElement.setAttribute("stroke-width", 1);
        return lineElement;
    }

    // Mapping of emotions to coordinates
    const emotions = {
        "Anger": [25, 90],
        "Fear": [10, 83],
       // "Horrified": [10, 73], //don't include??
        "Disgust": [10, 62],
        "Sadness": [10, 30],
        //"Fatigued": [35, 10],
        "Calmness": [63, 10],
        //"Content": [75, 40],
        "Joy": [90, 65],
        "Affection": [85, 55], // Love and affection? or just Affection?
        "Awe": [70, 30],
        "Excitement": [85, 80],
        //"Elated": [85, 80],
        "Amusement": [60, 90]
    };


    //Adoration, Amusement, Excitement, Joy, Romance, Craving, Calmness, Awe, Interest, Anger, Sadness, Disgust, Fear, Horror



    // Add the emotions to the SVG
    for (let emotion in emotions) {
        const [xPercent, yPercent] = emotions[emotion];
        const x = 4 * xPercent;
        const y = 400 - (4 * yPercent);

        // Create and add the line to the SVG before the text
        const lineElement = createLine(x, y, 200, 200);
        emotionGraph.appendChild(lineElement);

        const textElement = createText(x, y, emotion);
        emotionGraph.appendChild(textElement);
    }

            // Add "neutral" label to the midpoint (200, 200)
            function createText2(x, y, text) {
                const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
                textElement.setAttribute("x", x);
                textElement.setAttribute("y", y);
                textElement.textContent = text;
                textElement.style.fontSize = "20px";
                textElement.style.fontWeight = "bold";
                textElement.setAttribute("fill", "#000000");
                return textElement;
            }


            const neutralLabel = createText2(173, 205, "Neutral");
            emotionGraph.appendChild(neutralLabel);


    let dot; // Declare the dot variable

    const createDot = (e) => {
        // Create the dot and add it to the SVG
        dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("cx", e.offsetX);
        dot.setAttribute("cy", e.offsetY);
        dot.setAttribute("r", 10);
        dot.setAttribute("fill", "red");
        dot.setAttribute("class", "emotion-dot");
        emotionGraph.appendChild(dot);

        // Remove the click event listener after the first click
        emotionGraph.removeEventListener('click', createDot);
        emotionSubmit.disabled = false; // Enable the submit button as the dot has been created
    }

    emotionGraph.addEventListener('click', createDot);

    // Dragging state
    let dragging = false;
    let dotMoved = false;

    const startDragging = (e) => {
        // Ensure the drag only begins if the mouse is over the dot
        if (e.target === dot) {
            dragging = true;
        }
    };

    const stopDragging = (e) => {
        dragging = false;
    };

    const dragDot = (e) => {
        if (dragging && dot) {
            dotMoved = true;
            let x = e.offsetX;
            let y = e.offsetY;

            // Boundaries for SVG (400 x 400)
            if (x < 30) x = 30;
            if (x > 370) x = 370;
            if (y < 30) y = 30;
            if (y > 370) y = 370;

            dot.setAttribute("cx", x);
            dot.setAttribute("cy", y);
        }
    };


    emotionGraph.addEventListener('mousedown', startDragging);
    emotionGraph.addEventListener('mousemove', dragDot);
    emotionGraph.addEventListener('mouseup', stopDragging);
    emotionGraph.addEventListener('mouseleave', stopDragging);

    // Handle submit button click
    emotionSubmit.onclick = () => {
        emotionGraphContainer.style.display = "none";
        const valence = dot.getAttribute("cx");
        const arousal = 400 - dot.getAttribute("cy");

        onSubmit(valence, arousal);
    };

    emotionGraphContainer.style.display = "block";
}

// Response variable 2: List of emotions (erase "2" in name and mute previous to work)
function createEmotionGraph2(videoId, onSubmit) {
    const emotionGraphContainer = document.getElementById('emotionGraphContainer');
    emotionGraphContainer.style.display = "flex";  // Change layout to Flexbox
    emotionGraphContainer.style.flexDirection = "row";
    emotionGraphContainer.style.justifyContent = "space-around";

    const emotionSubmit = document.createElement("button");
    emotionSubmit.id = 'emotionSubmit';
    emotionSubmit.textContent = 'Submit';
    emotionSubmit.disabled = true; // Disable the submit button initially

    // Mapping of emotions to valence categories
    const emotions = {
        "Positive": ["Adoration", "Amusement", "Excitement", "Joy", "Romance"],
        "Other": ["Craving", "Calmness", "Awe", "Interest"],
        "Negative": ["Anger", "Sadness", "Disgust", "Fear", "Horror"]
    };

    // Function to create an emotion item in the list
    function createEmotionItem(emotion) {
        const emotionItem = document.createElement("li");
        emotionItem.textContent = emotion;
        emotionItem.style.cursor = "pointer"; // Change cursor to pointer when hovering over the item

        // Add a click event listener to the item
        emotionItem.addEventListener("click", function() {
            if (emotionItem.classList.contains("selected")) {
                emotionItem.classList.remove("selected"); // Deselect the item if it was already selected
            } else {
                emotionItem.classList.add("selected"); // Select the item if it wasn't selected
            }

            // Check if any emotions are selected and enable/disable the submit button accordingly
            const selectedEmotions = document.getElementsByClassName('selected');
            emotionSubmit.disabled = selectedEmotions.length === 0;
        });

        return emotionItem;
    }

    // Clear any existing emotions from the container
    while (emotionGraphContainer.firstChild) {
        emotionGraphContainer.firstChild.remove();
    }

    // Create the list of emotions
    for (let valence in emotions) {
        const valenceContainer = document.createElement("div");  // Container for each valence category
        valenceContainer.style.flex = "1";  // Distribute space equally between the categories
        valenceContainer.style.margin = "10px";  // Add some margin around each category
        valenceContainer.style.display = "flex";  // Use Flexbox for the layout
        valenceContainer.style.flexDirection = "column";  // Stack the items vertically
        valenceContainer.style.alignItems = "center";  // Center the items

        const valenceHeader = document.createElement("h3");
        valenceHeader.textContent = valence;
        valenceContainer.appendChild(valenceHeader);

        const emotionList = document.createElement("ul");
        for (let emotion of emotions[valence]) {
            const emotionItem = createEmotionItem(emotion);
            emotionList.appendChild(emotionItem);
        }
        valenceContainer.appendChild(emotionList);
        emotionGraphContainer.appendChild(valenceContainer);
    }

    emotionGraphContainer.appendChild(emotionSubmit); // Add submit button to container

    // Handle submit button click
    emotionSubmit.onclick = () => {
        const selectedEmotions = document.getElementsByClassName('selected');
        let emotionsArray = [];
        for (let i = 0; i < selectedEmotions.length; i++) {
            emotionsArray.push(selectedEmotions[i].textContent);
        }
        emotionGraphContainer.style.display = "none";
        onSubmit(emotionsArray);
    };

    emotionGraphContainer.style.display = "block";
}






// Instructions
function instructions() {
    let message = document.getElementById("message");
    message.innerHTML = `
        <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
            <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">Welcome!</strong>
            <p style="margin-top: 20px;">In this experiment you will be watching a series of videos and reporting how you feel. Please regulate your emotions in whatever way you see fit. Every trial, you will:</p>
            <ol style="padding-left: 30px; margin-top: 20px;">
                <li style="margin-bottom: 10px;"><u>Watch a screenshot</u> from a video for 3 seconds</li>
                <li style="margin-bottom: 10px;"><u>Rate how </u>you <u>expect to feel</u> if you watch it, and <u>how interested</u> you are in watching it.</li>
                <li style="margin-bottom: 10px;"><u>Decide whether to watch the video</u>. If you decide to skip it, you will be shown another video at random. If you don't decide within 7 seconds, something will be decided for you at random.</li>
                <li style="margin-bottom: 10px;"><u>Watch the video</u>. You may <u>regulate your emotions</u> by changing the intensity of the video (press "f" to dim it, or "j" to make it more vivid), or by using internal strategies (i.e. reappraisal, distraction, acceptance, suppression).</li>
                <li style="margin-bottom: 10px;"><u>Report the strategies you used</u> and how you feel.</li>
            </ol>
        </div>
    `;
    message.style.display = 'block';  // Make sure the message is visible

    clearButtons();
    addButton(createButton("Next", () => {
        message.style.display = 'none';  // Make sure the message is visible
        let videoPage = document.getElementById("video");
        message.innerHTML = `
            <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
                <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">Calibration the eye tracking functionality!</strong>
                <p style="margin-top: 20px;">Now please sit up in front of the web camera, wait until a video view appears at the top left. And make sure that your head is within the green square, and the face is captured correctly by the grids. When you are ready, click on next to move to calibration section!</p>
            </div>
        `;
        message.style.display = 'block';  // Make sure the message is visible

        // Initialize Webgazer and start gaze tracking
        let lastRecordingTime = null;
        webgazer.setGazeListener(function(data, elapsedTime) {
            if (data == null) {
                console.log("data=null")
                return;
            }

            // Check if at least 500 milliseconds have passed since the last recording
            const currentTime = new Date().getTime();
            if (!lastRecordingTime || currentTime - lastRecordingTime >= 500) {
                // This function will be called when the gaze data is updated
                const x = data.x; // X-coordinate of gaze point on the screen
                const y = data.y; // Y-coordinate of gaze point on the screen
                console.log(data); // Use gaze data as per your requirements
                participantChoices.push({
                    gazingPointX: x,
                    gazingPointY: y
                });
                // Update the last recording time
                lastRecordingTime = currentTime;
            }
        }).begin();

        webgazer.setTracker("TFFacemesh"); //set a tracker module
        webgazer.setRegression("ridge"); //set a regression module

        webgazer.showPredictionPoints(true); // Show gaze prediction points on the screen

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
            clearButtons();

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

                if (averageDistance <= window.innerHeight / 2) {
                    accuracyPercentage = (100 - (averageDistance/window.innerHeight / 2 * 100)).toFixed(2);
                }
                else {accuracyPercentage = 0}

                // Now you have the accuracy metrics, such as average distance and accuracy percentage
                console.log("Average Distance:", averageDistance);
                console.log("Accuracy Percentage:", accuracyPercentage);
                console.log("Accuracy Percentage2:", accuracyPercentage2)

                console.log("accuracyThreshold:", accuracyThreshold)

                // Now you have the accuracy metrics, such as average distance and accuracy percentage
                console.log("Average Distance:", averageDistance);
                console.log("Accuracy Percentage:", accuracyPercentage);
                participantChoices.push({
                    GazingAccuracyStrict: accuracyPercentage2,
                    GazingAccuracy: accuracyPercentage
                });

                message.style.display = 'none';  // Make sure the message is visible
                let videoPage = document.getElementById("video");
                message.innerHTML = `
                    <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
                        <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">The accuracy score is:</strong>
                    </div>
                `;
                message.style.display = 'block';  // Make sure the message is visible
                message.innerHTML += accuracyPercentage
//                message.innerHTML += accuracyPercentage2

                // Provide options to recalibrate or move to next
                clearButtons();
                addButton(createButton("Recalibrate", () => {
                    message.style.display = 'none';  // Make sure the message is visible
                    calibration();
                }));
                addButton(createButton("Next", () => {
                    message.style.display = 'none';  // Make sure the message is visible
                    experimentalSet();
                }));
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

                // Append the fixation point to the body element (or any other container you prefer)
                document.body.appendChild(fixationPoint);

                message.style.display = 'none';  // Make sure the message is visible
                  let videoPage = document.getElementById("video");
                  message.innerHTML = `
                    <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; text-align: left; color: #333;">
                        <strong style="font-size: 1.3em; display: block; text-align: center; margin-bottom: 20px;">Please staring at the middle red point without moving or clicking mouse. The accuracy calculation will automatically start in 7 seconds. </strong>
                    </div>
                  `;
                message.style.display = 'block';  // Make sure the message is visible

                setTimeout(function() {
                  // Hide the elements after the initial 7 seconds
                  message.style.display = 'none';

                  // Collect prediction points for 1000 times
                    function count(times) {
                      var n = 0
                      console.log("Now start collecting prediction points")
//                      webgazer.params.storingPoints = true;
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

        }))
        }, 7000);

    }));
}

//Draw random video
function playRandomVideo(excludeVideoId, videos) {
    let remainingVideos = videos.filter(video => video.id !== excludeVideoId);
    let randomVideoIndex = Math.floor(Math.random() * remainingVideos.length);
    return remainingVideos[randomVideoIndex];
}

//Strategy Selection task

var pKeyPressed = false;
var currentVideoIndex = 0;
var fPressed = 0;
var jPressed = 0;
var rPressed = 0;
var pPressed = 0;
var jkeyTimestamp = [];
var fkeyTimestamp = [];
var rkeyTimestamp = [];
var pkeyTimestamp = [];

function experimentalSet() {
    participantChoices.push({
        part: "Experiment_Start"
    });
    webgazer.showPredictionPoints(true);

    // Start tracking gaze
    webgazer.showVideo(true); // Show webcam video feed
    webgazer.showFaceOverlay(true); // Hide face overlay (optional)

    let count = 0; // count strategy
    let tempCount = 1; // count video

    clearButtons();
    const shuffledVideos = shuffleArray([...videos]);
    let videosLength = shuffledVideos.length // to record total count of videos
//    let currentVideoIndex = 0;
    const dimOverlay = document.getElementById('dimOverlay');
    let dimnessLevel = 0.7;  // initial dimness level

    function setDimness(level) {
        dimOverlay.style.backgroundColor = `rgba(0, 0, 0, ${level})`;
    }

    function playVideoUntil3Seconds(onComplete) {
        let startTime = Date.now();
        let cumulativeTime = 0;
        videoPlayer.play();
        webgazer.resume();
        console.log("resumed")

//        const adjustDimness = (event) => {
//            if (event.key === 'f') {
//                dimnessLevel = Math.min(1, dimnessLevel + 0.15);
//            } else if (event.key === 'j') {
//                dimnessLevel = Math.max(0, dimnessLevel - 0.15);
//            }
//            setDimness(dimnessLevel);
//        };

        document.body.focus();

//        // Attach the event listener
//        document.addEventListener('keyup', adjustDimness);

        videoPlayer.onended = videoPlayer.onpause = () => {
            cumulativeTime += Date.now() - startTime; // add time of current play to cumulativeTime
            if (cumulativeTime < 3000) {
                // check if cumulativeTime is less than 3 seconds
                startTime = Date.now(); // reset startTime for the next play
                videoPlayer.play(); // immediately replay video
                webgazer.resume();
                console.log("resumed")
            } else {
                webgazer.pause()
                videoPlayer.onended = videoPlayer.onpause = null; // remove the listeners once done
//                document.removeEventListener('keyup', adjustDimness); // Remove the event listener when done
                dimOverlay.style.display = 'none'; // hide dimOverlay when video stops
                onComplete();
            }
        };
    }

    // Define the event handler function
    function handleKeyDown(event) {
      // Check if the 'F' key is pressed
      if (event.key === 'f') {
        fPressed++;
        fkeyTimestamp.push(videoPlayer.currentTime);
        adjustVideoOpacity(-0.15); // Reduce opacity by 0.15
      }

      // Check if the 'J' key is pressed
      if (event.key === 'j') {
        jPressed++;
        jkeyTimestamp.push(videoPlayer.currentTime);
        adjustVideoOpacity(0.15); // Increase opacity by 0.15
      }

      // Check if the 'R' key is pressed
      if (event.key === 'r') {
        rPressed++;
        rkeyTimestamp.push(videoPlayer.currentTime);
        replayVideo();
      }

      // Check if the 'P' key is pressed
      if (event.key === 'p') {
        pPressed++;
        pkeyTimestamp.push(videoPlayer.currentTime);
        console.log('p');
            //            // Check if 'P' was pressed and replace the next video
    //                    const currentVideo = shuffledVideos[currentVideoIndex];
    //                    shuffledVideos[currentVideoIndex + 1] = currentVideo
    //                    console.log(shuffledVideos)
    //                    // If pressed P, replace the next video with the video when the "p" is pressed
      }
    }

    function playNextVideo() {
        // randomly select a strategy to show on screen
        let strategy = getRandomStrategy();
        if (strategy == strategiesList[1]) {
        // strategy modification: key functionalities
            document.addEventListener('keydown', handleKeyDown);
        }
        else {
            // Other strategies: remove key functionalities
            document.removeEventListener('keydown', handleKeyDown);
        }

        console.log(tempCount, count, videosLength)
        if (currentVideoIndex < shuffledVideos.length && tempCount == count + 1 && count <= videosLength) {
            showStrategyMessage(strategy);
            console.log(strategy)
            count ++ // count + 1 when a strategy shows up
        }

        videoPlayer.style.opacity = "0.7"

        if (strategy == strategiesList[0]) {
            // stimulus selection
            setTimeout(() => {
                if (currentVideoIndex < shuffledVideos.length) {
                    tempCount ++ // temptCount + 1 when a video shows up
//                    dimnessLevel = 0.7;  // Reset dimness level
//                    setDimness(dimnessLevel);  // Set initial dimness
                    const video = shuffledVideos[currentVideoIndex];
                    videoPlayer.src = video.src;
                    videoPlayer.onloadedmetadata = () => {
                        videoPlayer.currentTime = videoPlayer.duration * 0.6; // Seek to 60% of the video's duration
                        videoPlayer.onseeked = () => {
                            videoPlayer.onseeked = null;
                            videoPlayer.pause(); // Pause the video after seeking
                            videoPlayer.style.display = "block"; // Show the video still for 3 seconds
                            console.log(videoPlayer.style.opacity)

//                            dimOverlay.style.width = videoPlayer.offsetWidth + 'px';
//                            dimOverlay.style.height = videoPlayer.offsetHeight + 'px';
//                            dimOverlay.style.display = 'block'; // Display dimOverlay
//                            setDimness(dimnessLevel);  // Set initial dimness

                            setTimeout(() => {
                                videoPlayer.style.display = "none"; // Hide the video for emotion graph
                                webgazer.pause()
//                                dimOverlay.style.display = 'none';

                                // Change the text "How do you feel?" to "How do you think this video will make you feel?"
                                const emotionGraphContainer = document.getElementById("emotionGraphContainer");
                                const emotionGraphTitle = emotionGraphContainer.querySelector("h2");
                                emotionGraphTitle.textContent = "What do you think this video will make you feel?";

                                createEmotionGraph(video.id, (initialValence, initialArousal) => {
                                    createFeedbackForm(video.id, (rating) => {
                                        feedbackContainer.style.display = "none";
                                        // Show the video again for choice
                                        videoPlayer.style.display = "block";
//                                        dimOverlay.style.display = 'block';
                                        let watchButton;
                                        let skipButton;


                                    const buttonTimeout = setTimeout(() => {
                                        const randomButton = Math.random() < 0.5 ? watchButton : skipButton;
                                        randomButton.click();
                                    }, 7000);

                                    watchButton = createButton("Choose", (reactionTime) => {
                                        console.log(videoPlayer.style.opacity)
                                        clearTimeout(buttonTimeout);
                                        watchButton.style.display = "none";
                                        skipButton.style.display = "none";

                                        videoPlayer.currentTime = 0; // Reset the video to the start

                                        playVideoUntil3Seconds(() => {
                                            videoPlayer.style.display = "none";
                                            clearButtons();

                                            // Change the text "How do you feel?" to "How do you feel now?"
                                            const emotionGraphContainer = document.getElementById("emotionGraphContainer");
                                            const emotionGraphTitle = emotionGraphContainer.querySelector("h2");
                                            emotionGraphTitle.textContent = "What do you feel now?";

                                            createEmotionGraph(video.id, (valence, arousal) => {
//                                                strategies((selectedStrategies) => {
                                                    showFixationCross(playNextVideo);

                                                    participantChoices.push({
                                                        part: "Experimental_Choice",
                                                        decision: "watch",
                                                        videoId: video.id,
                                                        reactionTime: reactionTime / 1000,
                                                        // convert reactionTime from milisecond to second
                                                        timeKeyJPressed: jkeyTimestamp.join(" "),
                                                        timeKeyFPressed: fkeyTimestamp.join(" "),
                                                        currentDimness: document.getElementById('videoPlayer').style.opacity,
                                                        rating: rating,
                                                        initialValence: initialValence,
                                                        initialArousal: initialArousal,
                                                        valence: valence,
                                                        arousal: arousal,
                                                        strategies: strategy
                                                    });
//                                                });
                                            });
                                            currentVideoIndex++;
                                        });
                                    });

                                    skipButton = createButton("Avoid", (reactionTime) => {
                                        clearTimeout(buttonTimeout);
                                        watchButton.style.display = "none";
                                        skipButton.style.display = "none";

                                        const randomVideo = playRandomVideo(video.id, videos);

                                        videoPlayer.src = randomVideo.src;
                                        videoPlayer.onloadedmetadata = () => {
                                            videoPlayer.currentTime = 0; // Reset the video to the start
                                            videoPlayer.oncanplay = () => {
                                                videoPlayer.oncanplay = null;
                                                playVideoUntil3Seconds(() => {
                                                    videoPlayer.style.display = "none";
                                                    clearButtons();

                                                    // Change the text "How do you feel?" to "How do you feel now?"
                                                    const emotionGraphContainer = document.getElementById("emotionGraphContainer");
                                                    const emotionGraphTitle = emotionGraphContainer.querySelector("h2");
                                                    emotionGraphTitle.textContent = "What do you feel now?";

                                                    createEmotionGraph(video.id, (valence, arousal) => {
//                                                        strategies((selectedStrategies) => {
                                                            showFixationCross(playNextVideo);

                                                            participantChoices.push({
                                                                part: "Experimental_Choice",
                                                                decision: "skip",
                                                                videoId: video.id,
                                                                reactionTime: reactionTime / 1000,
                                                                // convert reactionTime from milisecond to second
                                                                timeKeyJPressed: jkeyTimestamp.join(" "),
                                                                timeKeyFPressed: fkeyTimestamp.join(" "),
                                                                currentDimness: document.getElementById('videoPlayer').style.opacity,
                                                                forcedVideoId: randomVideo.id,
                                                                rating: rating,
                                                                initialValence: initialValence,
                                                                initialArousal: initialArousal,
                                                                valence: valence,
                                                                arousal: arousal,
                                                                strategies: strategy
                                                            });
//                                                        });
                                                    });
                                                });
                                            };
//                                            setTimeout(() => {
//                                                dimOverlay.style.width = videoPlayer.offsetWidth + 'px';
//                                                dimOverlay.style.height = videoPlayer.offsetHeight + 'px';
//                                                setDimness(dimnessLevel);  // Set initial dimness
//                                            }, 100);
                                        };
                                        currentVideoIndex++;
                                    });

                                    clearButtons();
                                    addButton(watchButton);
                                    addButton(skipButton);
                                });
                            });
                        }, 3000);
                    };
                };
            } else {
                instructions3();
            }
            }, 3000);
        }
        else {
            // internal strategy and stimulus modification
            setTimeout(() => {
                if (currentVideoIndex < shuffledVideos.length) {
                    tempCount ++ // temptCount + 1 when a video shows up
//                    dimnessLevel = 0.7;  // Reset dimness level
//                    setDimness(dimnessLevel);  // Set initial dimness
                    const video = shuffledVideos[currentVideoIndex];
                    videoPlayer.src = video.src;
                    videoPlayer.onloadedmetadata = () => {
                        videoPlayer.currentTime = videoPlayer.duration * 0.6; // Seek to 60% of the video's duration
                        videoPlayer.onseeked = () => {
                            videoPlayer.onseeked = null;
//                            videoPlayer.pause(); // Pause the video after seeking
//                            videoPlayer.style.display = "block"; // Show the video still for 3 seconds

//                            dimOverlay.style.width = videoPlayer.offsetWidth + 'px';
//                            dimOverlay.style.height = videoPlayer.offsetHeight + 'px';
//                            dimOverlay.style.display = 'block'; // Display dimOverlay
//                            setDimness(dimnessLevel);  // Set initial dimness

                            setTimeout(() => {
//                                videoPlayer.style.display = "none"; // Hide the video for emotion graph
//                                dimOverlay.style.display = 'none';

//                                // Change the text "How do you feel?" to "How do you think this video will make you feel?"
//                                const emotionGraphContainer = document.getElementById("emotionGraphContainer");
//                                const emotionGraphTitle = emotionGraphContainer.querySelector("h2");
//                                emotionGraphTitle.textContent = "What do you think this video will make you feel?";

//                                createEmotionGraph(video.id, (initialValence, initialArousal) => {
//                                    createFeedbackForm(video.id, (rating) => {
                                        feedbackContainer.style.display = "none";
                                        // Show the video again for choice
                                        videoPlayer.style.display = "block";
                                        console.log(videoPlayer.style.opacity)
//                                        dimOverlay.style.display = 'block';
//                                        let watchButton;
//                                        let skipButton;


//                                    const buttonTimeout = setTimeout(() => {
//                                        watchButton.click();
//                                    }, 7000);

//                                    watchButton = createButton("Play", (reactionTime) => {
//                                        clearTimeout(buttonTimeout);
//                                        watchButton.style.display = "none";
//                                        skipButton.style.display = "none";

                                        videoPlayer.currentTime = 0; // Reset the video to the start

                                        playVideoUntil3Seconds(() => {
                                            videoPlayer.style.display = "none";
                                            clearButtons();

                                            // Change the text "How do you feel?" to "How do you feel now?"
                                            const emotionGraphContainer = document.getElementById("emotionGraphContainer");
                                            const emotionGraphTitle = emotionGraphContainer.querySelector("h2");
                                            emotionGraphTitle.textContent = "What do you feel now?";

                                            createEmotionGraph(video.id, (valence, arousal) => {
//                                                strategies((selectedStrategies) => {
                                                    showFixationCross(playNextVideo);

                                                    participantChoices.push({
                                                        part: "Experimental_Choice",
                                                        decision: "watch",
                                                        videoId: video.id,
                                                        reactionTime: 0,
                                                        timeKeyJPressed: jkeyTimestamp.join(" "),
                                                        timeKeyFPressed: fkeyTimestamp.join(" "),
                                                        currentDimness: document.getElementById('videoPlayer').style.opacity,
//                                                        fKeyPressed: fPressed,
//                                                        jKeyPressed: jPressed,
//                                                        rKeyPressed: rPressed,
//                                                        pKeyPressed: pPressed,
//                                                        initialValence: initialValence,
//                                                        initialArousal: initialArousal,
                                                        valence: valence,
                                                        arousal: arousal,
                                                        strategies: strategy
                                                    });
//                                                });
                                            });

                                            currentVideoIndex++;
                                        });
//                                    });

                                    clearButtons();
//                                    addButton(watchButton);
//                                    addButton(skipButton);
//                                });
//                            });
                        }, 3000);
                    };
                };
            } else {
                instructions3();
            }
            }, 3000);
            fPressed = 0;
            jPressed = 0;
            rPressed = 0;
            pPressed = 0;
            jkeyTimestamp = [];
            fkeyTimestamp = [];
            pkeyTimestamp = [];
            rkeyTimestamp = [];
        }

}

setDimness(dimnessLevel);  // Set initial dimness
playNextVideo();
} //Strategy Selection task


// Byebye
function instructions3() {
    showMessage("Congratulations! You have completed this study :)");
    clearButtons();
	generateAndUploadCSV(participantChoices);

}



// Functionality of pressing keys

// starts at 0.5 opacity
var videoOpacity = 0.7;

function adjustVideoOpacity(delta) {
    // "f" -> fainter by 0.15 each time pressed till 0.10
    // "j" -> increase opacity by 0.15
    var videoPlayer = document.getElementById('videoPlayer');
    videoOpacity += delta;
    videoOpacity = Math.max(0.1, Math.min(1, videoOpacity)); // Ensure opacity stays within the range of 0.1 to 1
    videoPlayer.style.opacity = videoOpacity.toString();
}

function replayVideo() {
        var videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.currentTime = 0;
        videoPlayer.play();
}



// Auxiliary functions

function showStrategyMessage(strategy) {
//        isStrategyDisplayed = true;
        const strategyContainer = document.getElementById("strategyContainer");
        strategyContainer.textContent = "Strategy: " + strategy;
        strategyContainer.style.display = "block";

        setTimeout(() => {
          strategyContainer.style.display = "none";
//          isStrategyDisplayed = false;
//          playNextVideo();
        }, 3000);
}

// Define an array to store the used strategies
let usedStrategies = [];

function getRandomStrategy() {
    console.log(usedStrategies)
  // Check if all strategies have been used
  if (usedStrategies.length === strategiesList.length) {
    // If all strategies have been used, reset the usedStrategies array
    usedStrategies = [];
  }

  // Get a random strategy index that hasn't been used
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * strategiesList.length);
  } while (usedStrategies.includes(randomIndex));

  // Store the used strategy index
  usedStrategies.push(randomIndex);

  // Return the randomly selected strategy
  return strategiesList[randomIndex];
}


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



// Generate data
function generateAndUploadCSV(participantChoices) {
    const header = ["part", "GazingAccuracyStrict", "GazingAccuracy", "gazingPointX", "gazingPointY", "decision", "videoId", "reactionTime", "forcedVideoId", "currentDimness", "timeKeyFPressed",
    "timeKeyJPressed", "rating", "valence", "arousal", "initialValence", "initialArousal", "strategies"]; //initialValence and initialArousal if new flow
    const csvRows = [header];

    for (const row of participantChoices) {
      const rowData = [
        row.part,
        row.GazingAccuracyStrict,
        row.GazingAccuracy,
        row.gazingPointX,
        row.gazingPointY,
        row.decision,
        row.videoId,
        row.reactionTime,
        row.forcedVideoId || "",
        row.currentDimness,
        row.timeKeyFPressed,
        row.timeKeyJPressed,
        row.rating || "",
        row.valence || "",
        row.arousal || "",
        row.initialValence || "",
        row.initialArousal || "",
        row.strategies
      ];
      csvRows.push(rowData);
    }

    const csvContent = csvRows.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "participant_choices.csv");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Upload to serverless function
//    const uploadUrl = '/.netlify/functions/upload-csv';
//
//    const xhr = new XMLHttpRequest();
//    xhr.open('POST', uploadUrl, true);
//    xhr.setRequestHeader('Content-Type', 'text/csv;charset=utf-8');
//    xhr.onreadystatechange = function() {
//      if (xhr.readyState === XMLHttpRequest.DONE) {
//        if (xhr.status === 200) {
//          console.log('File uploaded successfully:');
//        } else {
//          console.error('Error uploading file:');
//        }
//      }
//    };
//
//    xhr.send(csvContent);
  }



  //START
  instructions();




//CHEAT CODE (to update):
// git status
// git add .                               (preparing all new changes to be added)
// git commit -m "Your commit message"     (commiting changes)
// git push
// npx netlify deploy --prod               (deploy to website)
// to check new files, go to AWS S3 (amazon), buckets, emotionregulation

// or in short:         git add . && git commit -m "update" && git push

// data: https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1#  --> console home --> S3 service --> emotionregulation bucket --> same name folder --> files

