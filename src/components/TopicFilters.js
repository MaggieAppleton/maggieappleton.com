import isArray from 'lodash/isArray'
import uniq from 'lodash/uniq'
import get from 'lodash/get'

export const getTopicsFromNotes = (noteNodes) => 
  noteNodes.reduce((topics, {node: note}) => {
    const newGrowth = get(note, 'childMarkdownRemark.frontmatter.growthStage', 'Seedling')
    let newTopics = get(note, 'childMarkdownRemark.frontmatter.topics', [])
    if(!newTopics || !isArray(newTopics)){
      newTopics = []
    }
    return {
      growthFilters: uniq([...topics.growthFilters, newGrowth]),
      topicFilters: uniq([...topics.topicFilters, ...newTopics])
    }
  }, {growthFilters: [], topicFilters: []})
