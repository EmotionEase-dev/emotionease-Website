export default function sitemap() {
  const baseUrl = 'https://emotionease.in'
  
  const routes = [
    { path: '', priority: 1.0, changeFreq: 'weekly' },
    { path: '/about', priority: 0.9, changeFreq: 'monthly' },
    { path: '/programs', priority: 0.9, changeFreq: 'monthly' },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' },
    { path: '/blog', priority: 0.8, changeFreq: 'weekly' },
    
    // Service pages
    { path: '/work-stress-management-therapy', priority: 0.8, changeFreq: 'monthly' },
    { path: '/parent-coaching', priority: 0.8, changeFreq: 'monthly' },
    { path: '/premarital-counseling', priority: 0.8, changeFreq: 'monthly' },
    { path: '/burnout-therapy', priority: 0.8, changeFreq: 'monthly' },
    { path: '/stress-depression-anxiety-management-online', priority: 0.8, changeFreq: 'monthly' },
    { path: '/couple-therapy', priority: 0.8, changeFreq: 'monthly' },
    { path: '/corporate-wellness', priority: 0.8, changeFreq: 'monthly' },
    
    // Blog posts
    { path: '/solving-mental-health-with-unlimited-therapy-sessions', priority: 0.7, changeFreq: 'monthly' },
    { path: '/step-by-step-guide-to-heal-emotional-wounds', priority: 0.7, changeFreq: 'monthly' },
    { path: '/Empowering-IT-Leaders-and-CEOs-for-Sustainable-Success-and-Wellbeing', priority: 0.7, changeFreq: 'monthly' },
    { path: '/The-Revolutionary-Truth-About-Wealth', priority: 0.7, changeFreq: 'monthly' },
    { path: '/Understanding-the-Boredom-Wound', priority: 0.7, changeFreq: 'monthly' },
    { path: '/Democratizing-Emotional-Wellness', priority: 0.7, changeFreq: 'monthly' },
    
    // Privacy
    { path: '/PrivacyPolicy', priority: 0.5, changeFreq: 'yearly' },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }))
}
