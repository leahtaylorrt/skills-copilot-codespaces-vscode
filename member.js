function skillsMember(skills) {
  return skills.map(skill => {
    return {
      name: skill.name,
      description: skill.description
    }
  })
}