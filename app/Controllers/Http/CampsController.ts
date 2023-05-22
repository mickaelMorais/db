import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Camp from 'App/Models/Camp'

export default class CampsController {
    public async store({request, response}: HttpContextContract){

        const body = request.body()

        const camp = await Camp.create(body)

        response.status(201)

        return{
            msg: "campeonato criado",
            data: camp,
        }
    }
}
