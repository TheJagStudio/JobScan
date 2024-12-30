// Prompt generators for different sections
export const generatePrompts = {
  searchability: (resumeText, jobDescription) => `
    Analyze this resume for ATS compatibility and provide a JSON response:
    Resume: ${resumeText}
    Job Description: ${jobDescription}

    Return the analysis in this exact JSON format:
    {
      "score": 85, // ATS compatibility score (0-100)
      "keywordMatch": 75, // Keyword match percentage
      "sections": {
        "contact": {
          "found": ["email", "phone", "address"],
          "missing": ["linkedin"]
        },
        "education": { "present": true },
        "experience": { "present": true },
        "skills": { "present": true }
      },
      "improvements": [
        "Add LinkedIn profile URL",
        "Include more industry keywords"
      ]
    }
  `,

  hardSkills: (resumeText, jobDescription) => `
    Analyze technical skills match and provide JSON response:
    Resume: ${resumeText}
    Job Description: ${jobDescription}

    Return analysis in this exact JSON format:
    {
      "matched": [
        {
          "skill": "JavaScript",
          "frequency": 3,
          "context": "5 years experience"
        }
      ],
      "missing": [
        {
          "skill": "Python",
          "priority": "high",
          "requirement": "Required for data analysis tasks"
        }
      ],
      "recommendations": [
        "Add Python to skills section",
        "Highlight JavaScript frameworks used"
      ]
    }
  `,

  softSkills: (resumeText, jobDescription) => `
    Analyze soft skills and provide JSON response:
    Resume: ${resumeText}
    Job Description: ${jobDescription}

    Return analysis in this exact JSON format:
    {
      "identified": [
        {
          "skill": "Leadership",
          "evidence": "Led team of 5 developers",
          "strength": "strong"
        }
      ],
      "missing": [
        {
          "skill": "Conflict Resolution",
          "importance": "high",
          "suggestion": "Add examples of handling team conflicts"
        }
      ],
      "improvements": [
        "Quantify leadership achievements",
        "Add specific examples of communication skills"
      ]
    }
  `,

  recruiterTips: (resumeText, jobDescription) => `
    Provide recruiter's perspective in JSON format:
    Resume: ${resumeText}
    Job Description: ${jobDescription}

    Return analysis in this exact JSON format:
    {
      "firstImpression": {
        "score": 8,
        "strengths": ["Clear progression", "Quantified results"],
        "weaknesses": ["Too verbose", "Inconsistent formatting"]
      },
      "recommendations": [
        {
          "area": "Impact",
          "suggestion": "Add more quantifiable achievements",
          "priority": "high"
        }
      ],
      "redFlags": [
        {
          "issue": "Employment gaps",
          "severity": "medium",
          "solution": "Address gaps in cover letter"
        }
      ]
    }
  `,

  formatting: (resumeText) => `
    Analyze resume formatting and provide JSON response:
    Resume: ${resumeText}

    Return analysis in this exact JSON format:
    {
      "structure": {
        "score": 85,
        "issues": ["Inconsistent spacing", "Mixed font styles"]
      },
      "atsCompatibility": {
        "score": 90,
        "issues": ["Complex tables", "Header formatting"]
      },
      "improvements": [
        {
          "area": "Fonts",
          "current": "Mixed fonts",
          "recommendation": "Use single font family"
        }
      ],
      "sections": {
        "ordering": ["contact", "summary", "experience", "education"],
        "missingRequired": ["skills", "certifications"]
      }
    }
  `
};
