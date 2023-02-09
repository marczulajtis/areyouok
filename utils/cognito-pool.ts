import { CLIENT_ID, USER_POOL_ID } from '../env'
export const awsconfig = {
    Auth: {
        userPoolId: USER_POOL_ID,
        userPoolWebClientId: CLIENT_ID,
        region: 'eu-west-1',
    },
}
