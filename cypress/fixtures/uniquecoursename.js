// cypress/fixtures/uniqueCourseNameGenerator.js

class UniqueCourseNameGenerator {
    constructor() {
        this.adjectives = [
            'Advanced', 'Creative', 'Dynamic', 'Effective', 'Innovative',
            'Practical', 'Professional', 'Strategic', 'Comprehensive', 'Essential',
            'Fundamental', 'Expert', 'Applied', 'Modern', 'Smart',
            'Cutting-edge', 'Robust', 'Interactive', 'Intensive', 'Beginner',
            'Intermediate', 'Complete', 'Focused'
        ];

        this.nouns = [
            'Programming', 'Development', 'Design', 'Marketing', 'Management',
            'Analytics', 'Writing', 'Leadership', 'Finance', 'Technology',
            'Engineering', 'Data', 'Strategy', 'Research', 'Innovation',
            'Communication', 'Education', 'Entrepreneurship', 'Ethics', 'Operations',
            'Customer', 'Sales', 'Cybersecurity', 'Product', 'Consulting'
        ];

        this.counter = 0; // Initialize the counter
    }

    generateUniqueCourseName() {
        const randomAdjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
        const randomNoun = this.nouns[Math.floor(Math.random() * this.nouns.length)];
        
        // Increment the counter and use it as part of the unique identifier
        this.counter += 1;
        const uniqueIdentifier = this.counter.toString()

        return `${randomAdjective} ${randomNoun} ${uniqueIdentifier}`;
    }
}

export default UniqueCourseNameGenerator;
