// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Hobby from "App/Models/Hobby";

export default class HobbiesController {
  public async index() {
    const myHobbies = await Hobby.all();
    return myHobbies;
  }
}
