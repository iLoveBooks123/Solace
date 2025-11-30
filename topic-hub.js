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
        description: "Anxiety disorders are more than just feeling nervous or stressed — they’re persistent, intense feelings of worry or fear that can affect daily life. People with anxiety might experience a racing heart, sweaty palms, trouble concentrating, or even panic attacks. These feelings can show up in everyday situations like school, work, or social settings, making normal routines challenging. Several factors contribute to anxiety. Genetics can play a role, meaning it sometimes runs in families. Brain chemistry also matters — imbalances in neurotransmitters like serotonin or dopamine can make it harder to regulate emotions. Life experiences, such as trauma, stressful events, or ongoing pressure, are also major contributors. Personality traits, like being highly sensitive or perfectionistic, can make someone more prone to anxiety. The good news is that anxiety is treatable. Psychotherapy, especially cognitive-behavioral therapy (CBT), helps people recognize and reframe anxious thoughts. Medications like SSRIs or SNRIs can help manage the chemical side of anxiety. Lifestyle changes, such as regular exercise, mindfulness, deep-breathing practices, and maintaining a healthy sleep schedule, are also important. With proper support, coping strategies, and sometimes professional treatment, people with anxiety can manage their symptoms and live productive, fulfilling lives. Recognizing it early and seeking help makes a big difference",
        video: "https://embed.ted.com/talks/jen_gunter_what_s_normal_anxiety_and_what_s_an_anxiety_disorder", 
        links: [
            { title: "Stress is Bad for Your Health", url: "AnxietyVideo.html" },
            { title: "Handling Anxiety Disorders", url: "AnxietyArticle.html" },
            { title: "The Concept of Stress", url: "StressArticle.html" }
        ]
    },
    "Depression & Mood": {
        description: "Depression is more than feeling sad for a day or two; it’s a persistent state of low mood, lack of energy, and disinterest in activities that were once enjoyable. People with depression may struggle with sleep, appetite changes, fatigue, difficulty concentrating, or feelings of worthlessness. It can affect school, work, and relationships, making everyday life feel overwhelming. Depression has many contributing factors. Genetics can make someone more vulnerable, while brain chemistry — especially imbalances in serotonin, dopamine, or norepinephrine — can affect mood regulation. Life events such as trauma, loss, or chronic stress also play a role. Chronic illnesses, hormonal changes, and certain medications can influence mood as well. Treatment for depression often combines therapy and medication. Cognitive-behavioral therapy (CBT), interpersonal therapy, and other counseling approaches help people identify negative thought patterns and build coping skills. Medications like SSRIs or SNRIs can support mood stabilization. Lifestyle changes, including regular exercise, balanced nutrition, social connection, and consistent sleep, are essential for recovery. Early recognition and intervention are key to preventing long-term challenges.",
        // If PBS LearningMedia page doesn’t embed, you may need to find an embed link or host your own video
        video: "https://embed.ted.com/talks/helen_m_farrell_what_is_depression",  
        links: [
            { title: "Depression: Let's Talk", url: "DepressionArticle.html" },
            { title: "Depressive and Bipolar Disorders: Crash Course Psychology #30", url: "DepressionVideo.html" }
        ]
    },
    "Obsessive-Compulsive Disorder (OCD)": {
        description: "OCD is a mental health condition characterized by recurring, unwanted thoughts (obsessions) and repetitive behaviors or mental rituals (compulsions) performed to relieve the anxiety caused by these thoughts. Common obsessions include fears of contamination, harming others, or concerns about order and symmetry, while common compulsions include excessive cleaning, checking, counting, or repeating actions. The causes of OCD are complex and involve genetic, neurological, and environmental factors. Brain regions responsible for decision-making, error detection, and emotional regulation may function differently in people with OCD. Stressful life events or trauma can also trigger or worsen symptoms. Treatment typically involves cognitive-behavioral therapy (CBT), particularly exposure and response prevention (ERP), which helps individuals gradually face feared situations without performing compulsive behaviors. Medications, especially selective serotonin reuptake inhibitors (SSRIs), can also help manage symptoms. Support from family, psychoeducation, and coping strategies are essential for maintaining daily functioning and improving quality of life. With proper treatment, many individuals with OCD can significantly reduce symptoms and lead fulfilling lives.",
        video: "https://embed.ted.com/talks/dr_natascha_m_santos_debunking_the_myths_of_ocd", 
        links: [
            { title: "Everyone has a bit of it: OCD", url: "OCDArticle.html" },
            { title: "OCD Poster", url: "OCDPoster.html" }
        ]
    },
    "Bipolar Disorder": {
        description: "Bipolar disorder is a mood disorder marked by extreme fluctuations in mood, energy, and activity levels. Individuals experience periods of mania or hypomania — characterized by elevated mood, high energy, impulsive behavior, and decreased need for sleep — alternating with episodes of depression, marked by persistent sadness, low energy, and disinterest in daily activities. These mood swings can severely impact relationships, school, work, and overall functioning. The causes of bipolar disorder are multifaceted, including genetic predisposition, brain structure and function differences, neurotransmitter imbalances, and environmental stressors. Life events, sleep disruptions, and substance use can trigger or exacerbate episodes. Treatment generally involves a combination of medication and therapy. Mood stabilizers and antipsychotic medications help regulate mood swings, while psychotherapy — including CBT, psychoeducation, and family therapy — helps individuals manage triggers, develop coping strategies, and maintain routines. Lifestyle management, such as regular sleep schedules, stress reduction, and social support, is also crucial. With early diagnosis and consistent treatment, people with bipolar disorder can manage their symptoms effectively and maintain a high quality of life.",
        video: "https://embed.ted.com/talks/helen_m_farrell_what_is_bipolar_disorder", 
        links: [
            { title: "Bipolar Disorder Poster", url: "BipolarPoster.html" },
            { title: "Two Sides", url: "BipolarArticle.html" }
        ]
    },
    "Sleep & Energy": {
        description: "Sleep isn’t just rest — it’s a vital biological process that restores both body and mind. Good sleep helps the brain process memories, regulate emotions, and maintain cognitive performance. It also allows the body to repair tissue, release growth hormones, and balance energy metabolism. Without enough sleep, people may feel irritable, forgetful, unmotivated, or even physically unwell. Chronic sleep deprivation can contribute to anxiety, depression, and weakened immune function. Many factors can affect sleep, including stress, irregular schedules, diet, caffeine or alcohol consumption, and underlying medical or mental health conditions. Environmental factors like noise, light, or temperature also play a role. Improving sleep often requires both behavioral and environmental changes. Following a consistent sleep schedule, creating a calming bedtime routine, and limiting screen time before bed are effective strategies. Addressing stress through relaxation techniques or mindfulness can also improve sleep quality. In some cases, medical consultation may be necessary for sleep disorders like insomnia, sleep apnea, or restless leg syndrome. Prioritizing sleep is one of the most important things someone can do to maintain mental and physical health.",
        links: [
            { title: "What Staying Up All Night Does to Your Brain", url: "SleepVideo.html" },
            { title: "The Undervalued Power of Sleep", url: "SleepArticle.html" }
        ]
    },
    "Relationship Health": {
        description: "Healthy relationships are fundamental to mental well-being. In supportive relationships, both partners feel valued, safe, and understood. They balance independence with togetherness, communicate openly, and navigate conflicts with empathy and compromise. Emotional support, honesty, and trust are key pillars of a strong relationship. Relationship struggles can arise from communication problems, unrealistic expectations, unresolved past trauma, or differences in values and boundaries. Social and cultural factors, as well as mental health challenges, can also influence relationships. Fostering healthy relationships involves self-awareness, empathy, and active communication. Setting boundaries, practicing conflict resolution skills, and seeking counseling when needed can strengthen relationships. Relationships can be romantic, familial, or platonic — and maintaining healthy connections in all areas of life is essential for overall emotional health.",
        video: "https://embed.ted.com/talks/iseult_gillespie_how_some_friendships_last_and_others_don_t",
        links: [
            { title: "Defining Boundaries", url: "RelationshipArticle.html" }
        ]
    },
    "Understanding Disorders": {
        description: "Mental disorders are related to emotional, psychological, and social well-being, while behavioral disorders involve a pattern of actions and habits that negatively impact health, such as addiction or eating disorders. Behavioral health is a broader term that includes mental health, with mental health being a component of behavioral health. Mental disorders are often involuntary, like schizophrenia or anxiety, while behavioral disorders are characterized by choices and habits.",
        video: "https://embed.ted.com/talks/thomas_insel_toward_a_new_understanding_of_mental_illness",
        links: [
            { title: "Mental Health Through the Hollywood Lens", url: "CelebrityTestimonials.html" },
            { title: "Emotion, Stress, and Health: Crash Course Psychology #26", url: "MentalHealthVideo.html" }
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
        descEl.innerHTML = data.description;
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

window.addEventListener('DOMContentLoaded', () => {
    const welcomePanel = document.getElementById('welcome-panel');

    // Show welcome box on page load
    welcomePanel.classList.remove('hidden');

    // Hide welcome panel when any topic is clicked
    topicLinks.forEach(link => {
        link.addEventListener('click', () => {
            welcomePanel.classList.add('hidden');
        });
    });
});
