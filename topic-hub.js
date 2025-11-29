const topicLinks = document.querySelectorAll('.categories-box a');
const infoPanel = document.getElementById('topic-info-panel');
const titleEl = document.getElementById('topic-title');
const descEl = document.getElementById('topic-description');
const videoEl = document.getElementById('topic-video');
const linksEl = document.getElementById('topic-links');
const closeBtn = document.getElementById('close-topic-box');

// Sample data for each topic
const topicData = {
    "Anxiety & Stress": {
        description: "Anxiety disorders are mental health conditions characterized by excessive, persistent worry and fear about everyday situations, which can include physical symptoms like a racing heart and panic attacks. They are caused by a combination of genetic, environmental, and biological factors, and can significantly impair daily functioning. Treatment is effective and typically involves psychotherapy, medication, or a combination of both.",
        video: "https://youtu.be/vtUdHOx494E?si=i7ML5ig0ViQgT5oA",
        links: [
            { title: "Stress is Bad for Your Health", url: "AnxietyVideo.html"},
            { title: "Handling Anxiety Disorders", url: "AnxietyArticle.html"}, 
            { title: "The Concept of Stress", url: "StressArticle.html"}
        ]  
    },
    
    "Depression & Mood": {
        description: "Depression is a mood disorder characterized by persistent sadness, a loss of interest, and a range of other symptoms that interfere with daily life, including changes in sleep and appetite, fatigue, and difficulty concentrating. Depression is caused by a complex interplay of biological, genetic, and environmental factors like stressful life events and trauma. Mood disorders, which include depression, can also be linked to other neurological or chronic health conditions. Effective treatments often combine therapy and medication, and early intervention is crucial for recovery. ",
        video: "https://detroitpbs.pbslearningmedia.org/resource/what-is-depression-video/mind-frame/",
        links: [
            { title: "Depression: Let's Talk", url: "DepressionArticle.html"},
            { title: "Depressive and Bipolar Disorders: Crash Course Psychology #30", url: "DepressionVideo.html"}
        ]
    },
    "Sleep & Energy": {
        description: "Sleep is essential for energy because it provides physical restoration, cognitive function, and energy conservation. During sleep, the body repairs tissue, synthesizes protein, and releases hormones, while the brain clears out waste, strengthens memories, and consolidates learning. Adequate sleep increases energy and alertness, while sleep deprivation leads to higher energy expenditure and impaired mental and physical performance. ",
        video: "https://www.ted.com/talks/matt_walker_how_sleep_affects_your_emotions?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare",
        links: [
            { title: "What Staying Up All Night Does to Your Brain", url: "SleepVideo.html"},
            { title: "The Undervalued Power of Sleep", url: "SleepArticle.html"}
        ]
    },
    "Relationship Health": {
        description: "In a healthy relationship, both partners feel supported, can maintain their independence, and work as a team to navigate conflicts through compromise and empathy. These relationships are characterized by fairness, honesty, and emotional support, and they allow both individuals to grow personally and feel safe, valued, and understood. ",
        video: "https://youtu.be/YmVpwXH4jhA?si=SKowi1K7pZX89e0q",
        links: [
            { title: "Defining Boundaries", url: "RelationshipArticle.html"},
        ]
    },
    "Understanding Disorders": {
        description: "Mental disorders are related to emotional, psychological, and social well-being, while behavioral disorders involve a pattern of actions and habits that negatively impact health, such as addiction or eating disorders. Behavioral health is a broader term that includes mental health, with mental health being a component of behavioral health. Mental disorders are often involuntary, like schizophrenia or anxiety, while behavioral disorders are characterized by choices and habits. ",
        video: "https://youtu.be/wuhJ-GkRRQc?si=nkqhpF33kVkIutSS",
        links: [
            { title: "Mental Health Through the Hollywood Lens", url: "CelebrityTestimonials.html"},
            { title: "Emotion, Stress, and Health: Crash Course Psychology #26", url: "MentalHealthVideo.html"}
        ]
    }
};

// Show topic info
topicLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const topic = link.getAttribute('data-topic');
        const data = topicData[topic];

        if (!data) return;

        titleEl.textContent = topic;
        descEl.textContent = data.description;
        videoEl.src = data.video;

                // Populate links
            linksEl.innerHTML = "";
            data.links.forEach(linkObj => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${linkObj.url}" class="text-accent-blue hover:underline">${linkObj.title}</a>`;
                linksEl.appendChild(li);
            });


        // Show info box
        infoPanel.classList.remove('hidden');
        infoPanel.scrollIntoView({ behavior: 'smooth' });
    });
});

// Close button
closeBtn.addEventListener('click', () => {
    infoPanel.classList.add('hidden');
    videoEl.src = ""; // Stop video playback
});

// topic-hub.js

// Example data for each topic
const topicsData = {
    "Anxiety & Stress": {
        title: "Understanding Anxiety & Stress",
        content: `
            <p>Stress can be positive (eustress) or negative (distress). Positive stress motivates us, while negative stress can overwhelm and affect health. In the past year, 74% of people felt so stressed they were unable to cope. Chronic stress releases hormones like cortisol and adrenaline, which affect mood, sleep, and overall health.</p>
            <h2>Mitigating Stress</h2>
            <p>Healthy lifestyle choices—like good sleep, proper nutrition, exercise, and time management—can help reduce stress. Adults sleeping fewer than 6 hours are 30% more likely to experience high stress than those getting 7-9 hours. Exercise can reduce stress by up to 40%.</p>
        `,
        video: "https://www.youtube.com/embed/VIDEO_ID", // replace with actual
        links: [
            { title: "How to Manage Anxiety", url: "blogs/anxiety.html" },
            { title: "Sleep Better and Reduce Stress", url: "blogs/sleep.html" }
        ]
    },
    "Depression & Mood": {
        title: "Understanding Depression & Mood",
        content: "<p>Depression affects millions worldwide. Symptoms include persistent sadness, lack of interest, and low energy. Early intervention, therapy, and lifestyle adjustments are key.</p>",
        video: "https://www.youtube.com/embed/VIDEO_ID",
        links: [
            { title: "Coping with Depression", url: "blogs/depression.html" },
            { title: "Mood Management Techniques", url: "blogs/mood.html" }
        ]
    }
    // Add more topics as needed
};

// Grab the container for topic info
const topicInfoPanel = document.getElementById('topic-info-panel');

// Function to render topic box
function renderTopic(topicName) {
    const data = topicsData[topicName];
    if (!data) return;

    // Create content box
    topicInfoPanel.innerHTML = `
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-color)]">${data.title}</h2>
            <div class="prose max-w-full mb-6 text-[var(--text-color)]">
                ${data.content}
            </div>
            ${data.video ? `<div class="mb-6">
                <iframe class="w-full h-64 md:h-96 rounded-lg shadow" src="${data.video}" frameborder="0" allowfullscreen></iframe>
            </div>` : ""}
            <div>
                <h3 class="text-xl font-semibold mb-2">Related Articles</h3>
                <ul class="list-disc list-inside space-y-1">
                    ${data.links.map(link => `<li><a href="${link.url}" class="text-accent-blue hover:underline">${link.title}</a></li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// Attach event listeners to topic links
document.querySelectorAll('.categories-box a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const topic = link.dataset.topic;
        renderTopic(topic);
        // Scroll to the info panel smoothly
        topicInfoPanel.scrollIntoView({ behavior: 'smooth' });
    });
});
