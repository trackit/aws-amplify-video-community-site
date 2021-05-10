import { API, graphqlOperation } from 'aws-amplify'
import { createSection } from '../../graphql/mutations'

export const createNewSection = async (name: string) => {
    return API.graphql(
        graphqlOperation(createSection, {
            input: {
                label: name,
            },
        })
    )
}
