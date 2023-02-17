import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Env from "App/Models/Env";

export default class EnvsController {
  public async index() {
    const myEnvs = await Env.all();
    return myEnvs;
  }
  public async single({request, response}: HttpContextContract) {
    const {id} = request.params();
    const myEnv = await Env.find(id);
    if(myEnv) {
      return myEnv;
    } else {
      return response.status(404).json({error: "Sjaarel"});
    }
  }
}
