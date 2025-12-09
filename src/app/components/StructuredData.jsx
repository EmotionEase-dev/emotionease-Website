export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "EmotionEase",
    "description": "Online Mental Health Counseling Services",
    "url": "https://emotionease.in",
    "@id": "https://emotionease.in",
    "telephone": "+91-XXXXXXXXXX", // Add your phone
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "medicalSpecialty": [
      "Mental Health",
      "Counseling",
      "Therapy",
      "Psychology"
    ],
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Stress Management Therapy"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Couples Therapy"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Burnout Therapy"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}