import contentful from 'contentful'

const spaceId = 'ptosbtrqcovp'
const apiKey = '4fac9a3fe89f4766244add23d58a6bc33ef018caa00ed266460195e659d13219'
const contentType = 'portfolio'


const client = contentful.createClient({
  space: spaceId,
  accessToken: apiKey,
  value: 'fields'
})


export default class ProjectApi {
  static getAllProjects() {
    return client.getEntries({
      content_type: contentType
    }).then(projects => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], projects.items))
      })
    })
  }
}
