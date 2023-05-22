import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Section from 'App/Models/Section'

export default class SectionsController {
    public async store({request, response}: HttpContextContract){

        const body = request.body()

        const section = await Section.create(body)

        response.status(201)

        return{
            msg: "section criado",
            data: section,
        }
    }
}
