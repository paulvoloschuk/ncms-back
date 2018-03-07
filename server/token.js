import jwt from 'jsonwebtoken'
import keys from './keys'
import {auth as config} from './config'

export const createToken = userData => jwt.sign(userData, keys.private, config.extra)
