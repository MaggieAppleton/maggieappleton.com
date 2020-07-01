import React from 'react'

const ALL_TOPICS = 'all'

const topicOrder = {
 // topic1: 1,
 // topic2: 2
}

const TopicFilters = ({ notes }) {
    const topics = notes.reduce((currentTopic, nextNote) => {
        const newTopic = get(nextNote, 'node.frontmatter.topics')
    })

    return (
        <div>
            
        </div>
    )
}

export default TopicFilters
