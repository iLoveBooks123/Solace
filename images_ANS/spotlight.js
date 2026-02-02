const spotlightData = {
    0: {
      title: "Seasonal Affective Disorder",
      description:
        "Seasonal Affective Disorder affects mood, energy, and motivation during darker months. Understanding how seasonal changes impact mental health can help individuals develop healthier coping strategies."
    },
    1: {
      title: "Self-Compassion & Mental Wellness",
      description:
        "Self-compassion supports emotional resilience and reduces stress. This month emphasizes healthier self-talk and emotional awareness."
    },
    2: {
      title: "Anxiety Awareness",
      description:
        "Anxiety disorders involve persistent worry and physical symptoms that can interfere with daily life. Early understanding and management are key to well-being."
    },
    3: {
      title: "Stress Management",
      description:
        "Chronic stress impacts both mental and physical health. Recognizing stressors and developing coping strategies helps protect long-term wellness."
    },
    4: {
      title: "Mental Health Awareness Month",
      description:
        "This month highlights the importance of education, stigma reduction, and open conversations surrounding mental health."
    },
    5: {
      title: "Youth Mental Health",
      description:
        "Youth mental health focuses on early intervention, emotional support, and access to resources for young people."
    },
    6: {
      title: "Burnout & Emotional Fatigue",
      description:
        "Burnout can drain motivation and focus. Learning to rest and recover is essential for emotional balance."
    },
    7: {
      title: "Back-to-School Stress",
      description:
        "Academic transitions can increase stress and anxiety. This spotlight focuses on managing expectations and pressure."
    },
    8: {
      title: "Suicide Prevention Awareness",
      description:
        "This month emphasizes crisis support, early intervention, and the power of community connection."
    },
    9: {
      title: "Depression Awareness",
      description:
        "Depression affects mood, energy, and daily functioning. Awareness and support can lead to effective treatment."
    },
    10: {
      title: "Grief & Emotional Processing",
      description:
        "Grief takes many forms and timelines. Understanding loss allows space for healing."
    },
    11: {
      title: "Reflection & Emotional Wellness",
      description:
        "Reflection and mindfulness support emotional clarity and self-care as the year ends."
    }
  };
  
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();
    const currentMonth = now.getMonth();
  
    const monthEl = document.getElementById("spotlight-month");
    const titleEl = document.getElementById("spotlight-title");
    const descEl = document.getElementById("spotlight-description");
  
    if (!monthEl || !titleEl || !descEl) return;
  
    monthEl.textContent = `Mental Health Spotlight • ${monthNames[currentMonth]}`;
    titleEl.textContent = spotlightData[currentMonth].title;
    descEl.textContent = spotlightData[currentMonth].description;
  });
  